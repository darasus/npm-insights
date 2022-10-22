import { Box, Collapse } from '@chakra-ui/react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Card } from '../../components/Card'
import { Markdown } from '../../components/Markdown'
import { usePkgId } from '../../hooks/usePkgId'
import { useRepositoryReadme } from '../../hooks/useRepositoryReadme'

interface Props {
  source: MDXRemoteSerializeResult
}

export function Readme({ source }: Props) {
  const pkdId = usePkgId()
  const repositoryReadme = useRepositoryReadme(pkdId)

  if (repositoryReadme.isLoading) {
    return null
  }

  if (!repositoryReadme.data) return null

  return (
    <Card p={4}>
      <Collapse startingHeight={200}>
        <Markdown {...source} />
      </Collapse>
    </Card>
  )
}
