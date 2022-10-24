import {
  Box,
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  usePrevious,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'
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
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent bg="transparent">
        <Box w="full" m="0 auto" p={4}>
          <Center mb={4}>
            <Link href="/">
              <Box position={'relative'}>
                <Logo />
                <Box
                  position={'absolute'}
                  left={'100%'}
                  top={0}
                  bottom={0}
                  display="flex"
                  alignItems="center"
                  ml={1}
                >
                  <Text fontSize="sm" color="brand.1000">
                    Beta
                  </Text>
                </Box>
              </Box>
            </Link>
          </Center>
          <Box>
            <PackageSearchInput showKbd={false} isTransparent />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  )
}
