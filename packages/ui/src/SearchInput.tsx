import React, { useEffect } from 'react'
import { Spinner } from './Spinner'

const Kbd = ({ children }: React.PropsWithChildren) => {
  return (
    <kbd className="px-1.5 py-0.5 text-brand-1000 text-xs font-semibold border border-brand-1000 rounded-lg border-b-2">
      {children}
    </kbd>
  )
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
  showKbd?: boolean
  focusOnMount?: boolean
}

export const SearchInput = React.forwardRef<HTMLDivElement>(
  function SearchInput(
    { isLoading, focusOnMount, showKbd = true, ...props }: Props,
    ref
  ) {
    const input = React.useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (focusOnMount) {
        input.current?.focus()
      }
    }, [focusOnMount])

    return (
      <div ref={ref} className="relative mt-1 rounded-md shadow-sm w-full">
        <input
          {...props}
          ref={input}
          type="text"
          name="account-number"
          id="account-number"
          className="block w-full border-2 p-2 border-brand-1000 bg-transparent pr-10 focus:border-brand-1000 focus:ring-brand-600 focus:ring-4 sm:text-sm outline-none placeholder:text-brand-800"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <div className="flex h-full items-center">
            {isLoading ? (
              <Spinner />
            ) : (
              showKbd && (
                <div className="items-center text-gray-500 dark:text-gray-400 mr-3 hidden md:flex">
                  <Kbd>⌘</Kbd>
                  <div className="text-brand-1000 mx-1">+</div>
                  <Kbd>k</Kbd>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
)
