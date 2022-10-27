import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  hasBorder?: boolean
  className?: string
}

export function Card({
  children,
  className,
  hasBorder = true,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={clsx('overflow-hidden border-brand-1000', className, {
        'border-2': hasBorder,
      })}
    >
      {children}
    </div>
  )
}
