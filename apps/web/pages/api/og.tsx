import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { Logo } from '../../components/Logo'
import { token } from '../../token'

export const config = {
  runtime: 'experimental-edge',
}

const fontNormal = fetch(
  new URL('../../assets/fonts/desktop/Inter-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer())
const fontBold = fetch(
  new URL('../../assets/fonts/desktop/Inter-Black.otf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const pkgId = searchParams.get('pkgId')
  const description = searchParams.get('description')

  const [fontNormalData, fontBoldData] = await Promise.all([
    fontNormal,
    fontBold,
  ])

  return new ImageResponse(
    (
      <div
        tw="flex w-full h-full flex-col justify-center items-center"
        style={{
          background: token.color.background,
          color: token.color.background,
        }}
      >
        <div tw="flex mb-2">
          <Logo scale={3} />
        </div>
        <div
          tw="flex flex-col px-8 py-4 mx-8"
          style={{
            backgroundColor: token.color.brand,
          }}
        >
          {pkgId && (
            <span
              style={{
                fontSize: 80,
                fontFamily: 'Bold',
              }}
            >{`${pkgId}`}</span>
          )}
          {description && (
            <span
              style={{
                fontSize: 60,
                fontFamily: 'Regular',
              }}
            >{`${description}`}</span>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Regular',
          data: fontNormalData,
          weight: 500,
        },
        {
          name: 'Bold',
          data: fontBoldData,
          weight: 900,
        },
      ],
    }
  )
}
