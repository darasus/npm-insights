import NextLink, { LinkProps } from 'next/link'
import React from 'react'
import clsx from 'clsx'

type Props = React.PropsWithChildren<LinkProps> & { hoverStyles?: boolean }

export function Link({ children, hoverStyles = true, ...props }: Props) {
  return (
    <NextLink {...props}>
      <a className={clsx({ 'hover:underline': hoverStyles })}>{children}</a>
    </NextLink>
  )
}
