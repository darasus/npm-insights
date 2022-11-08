import React, { useState } from 'react'
import { useCombobox } from 'downshift'
import { trpc } from '../../utils/trpc'
import { Card } from '../../components/Card'
import { useRouter } from 'next/router'
import { useDebounce } from 'hooks'
import { SearchInput } from 'ui'
import clsx from 'clsx'

interface Props {
  showKbd?: boolean
  isTransparent?: boolean
  focusOnMount?: boolean
}

export function PackageSearchInput({
  showKbd = false,
  isTransparent = false,
  focusOnMount,
}: Props) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const debouncedQ = useDebounce(q, 250)
  const searchResults = trpc.npm.searchPackage.useQuery(
    { q: debouncedQ },
    { enabled: Boolean(q), keepPreviousData: true }
  )
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    inputValue,
  } = useCombobox<{ name: string; description: string; version: string }>({
    items: searchResults.data || [],
    itemToString: (option) => (option ? option.name : ''),
    onInputValueChange: async ({ inputValue }) => {
      if (inputValue) {
        setQ(inputValue)
      } else {
        setQ('')
      }
    },
    onSelectedItemChange(changes) {
      if (changes.selectedItem) {
        router.push(`/package/${changes.selectedItem.name}`)
      }
    },
    onHighlightedIndexChange(changes) {
      router.prefetch(`/package/${changes.selectedItem?.name}`)
    },
  })

  const showSuggestions =
    isOpen && searchResults.data && searchResults.data.length > 0

  return (
    <div className="flex flex-col items-center relative z-50">
      <div className="flex flex-col items-center w-full relative z-50">
        <div className="flex items-baseline w-full">
          <SearchInput
            {...getInputProps({
              'aria-controls': 'search-input-controls-1',
              'aria-labelledby': 'search-input-labelledby-1',
              onKeyDown: (e) => {
                if (e.key === 'Enter' && highlightedIndex === -1) {
                  router.push(`/package/${inputValue}`, undefined, {
                    shallow: true,
                  })
                }
              },
            })}
            placeholder="Search npm package..."
            isLoading={searchResults.isFetching}
            showKbd={showKbd}
            focusOnMount={focusOnMount}
          />
        </div>
        <Card
          hasBorder={!!showSuggestions}
          className="absolute left-0 right-0 top-14"
        >
          <div
            {...getMenuProps({
              id: `search-list-controls-1`,
              'aria-labelledby': 'search-list-labelledby-1',
            })}
            className={clsx(
              'py-2 flex-1 overflow-y-auto max-h-48 z-50',
              showSuggestions ? undefined : 'hidden',
              isTransparent ? 'bg-transparent' : 'bg-background-1000'
            )}
          >
            {searchResults.data?.map((item, index: number) => (
              <div
                {...getItemProps({
                  item,
                  index,
                  id: `search-input-controls-1-${index}`,
                })}
                key={index}
                className={clsx(
                  index === highlightedIndex ? 'bg-brand-1000' : undefined,
                  'px-4 py-2 cursor-pointer'
                )}
                onMouseEnter={() => {
                  router.prefetch(`/package/${item.name}`)
                }}
              >
                <span
                  className={clsx(
                    index === highlightedIndex
                      ? 'text-background-1000'
                      : undefined,
                    'font-black'
                  )}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
