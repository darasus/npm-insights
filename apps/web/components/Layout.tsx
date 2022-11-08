import { Link } from 'ui'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'
import { DevelopedBy } from './DevelopedBy'
import { Logo } from 'ui'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="max-w-xl m-auto p-4">
      <div className="flex items-center justify-center mb-4">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="mb-4">
        <PackageSearchInput showKbd />
      </div>
      <div>{children}</div>
      <DevelopedBy />
    </div>
  )
}
