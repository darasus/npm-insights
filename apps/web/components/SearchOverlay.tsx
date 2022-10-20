import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  usePrevious,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'

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
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg="background.1000">
        <PackageSearchInput />
      </ModalContent>
    </Modal>
  )
}
