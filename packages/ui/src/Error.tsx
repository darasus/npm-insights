import React from 'react'
import { Logo } from './Logo'

interface Props {
  statusCode?: number
  message?: string
}

export function Error({ statusCode, message }: Props) {
  return (
    <div className="flex min-h-full flex-col pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Your Company</span>
            <Logo />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-base font-semibold text-brand-600">
              {statusCode}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-brand-1000 sm:text-5xl">
              {message}
            </h1>
            <p className="mt-2 text-brand-1000">
              {`We can't promise things will always work 🫣`}
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-brand-1000 underline"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
