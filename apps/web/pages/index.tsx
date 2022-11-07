import { Link, Meta } from 'ui'
import { DevelopedBy } from '../components/DevelopedBy'
import { Logo } from '../components/Logo'
import { PackageSearchInput } from '../features/PackageSearchInput/PackageSearchInput'

export default function Web() {
  return (
    <>
      <Meta
        description="Find out the size of any NPM package"
        imageSrc="/api/og"
      />
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="flex w-full max-w-lg flex-col items-center">
          <div className="mb-4">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="mb-4 px-4 w-full">
            <PackageSearchInput />
          </div>
          <span className="font-black">Find the size of any NPM package</span>
          <DevelopedBy />
        </div>
      </div>
    </>
  )
}
