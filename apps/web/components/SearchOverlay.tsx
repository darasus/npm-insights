import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'
import { useDisclosure } from '../hooks/useDisclosure'
import { usePrevious } from '../hooks/usePrevious'
import { Logo } from './Logo'

export function SearchOverlay() {
  const router = useRouter()
  const previousPath = usePrevious(router.asPath)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.metaKey && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          onOpen()
        }
      }
    },
    [isOpen, onClose, onOpen]
  )

  useEffect(() => {
    if (isOpen && previousPath && router.asPath !== previousPath) {
      onClose()
    }
  }, [router.asPath, onClose, previousPath, isOpen])

  useEffect(() => {
    window.addEventListener('keydown', handleEvent)
    return () => window.removeEventListener('keydown', handleEvent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black blur-sm bg-opacity-50 transition-opacity backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg px-4 pt-5 pb-4 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="w-full m-auto p-4">
                  <div className="flex items-center justify-center mb-4">
                    <Link href="/">
                      <Logo />
                    </Link>
                  </div>
                </div>
                <PackageSearchInput showKbd={false} isTransparent />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
