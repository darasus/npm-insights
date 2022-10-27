import { inferProcedureOutput } from '@trpc/server'
import { AppRouter } from '../server/routers/_app'
import { Card } from './Card'

type Pkg = inferProcedureOutput<AppRouter['npm']['getInfo']>

export function PackageInfo({ pkg, url }: { pkg: Pkg; url: string }) {
  return (
    <Card className="bg-brand-1000 w-full p-4">
      <div>
        <a
          className="text-4xl font-black text-background-1000 underline"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          {`${pkg?.name}@${pkg?.latestVersion}`}
        </a>
      </div>
      <div
        className="h-10 text-background-1000 my-2"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-45deg, transparent, transparent 8px, currentcolor 8px, currentcolor 10px)',
        }}
      />
      <div>
        <span className="text-background-1000 font-medium text-lg leading">
          {pkg?.description}
        </span>
      </div>
    </Card>
  )
}
