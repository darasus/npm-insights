import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { token } from '../../token'

export const config = {
  runtime: 'experimental-edge',
}

const fontNormal = fetch(
  new URL('../../assets/fonts/inter/desktop/Inter-Regular.otf', import.meta.url)
).then((res) => res.arrayBuffer())
const fontBold = fetch(
  new URL('../../assets/fonts/inter/desktop/Inter-Black.otf', import.meta.url)
).then((res) => res.arrayBuffer())
const ultraFont = fetch(
  new URL('../../assets/fonts/ultra/Ultra-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const pkgId = searchParams.get('pkgId')
  const description = searchParams.get('description')

  const [fontNormalData, fontBoldData, ultraFontData] = await Promise.all([
    fontNormal,
    fontBold,
    ultraFont,
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
        <div tw="flex mb-8">
          <span
            style={{
              fontFamily: 'Ultra',
              fontSize: 80,
              color: token.color.brand,
            }}
          >
            js.watch
          </span>
        </div>
        <div
          tw="flex flex-col px-10 py-8 mx-8"
          style={{
            backgroundColor: token.color.brand,
          }}
        >
          {pkgId && (
            <span
              style={{
                fontSize: 60,
                fontFamily: 'Bold',
                marginBottom: 4,
              }}
            >{`${pkgId}`}</span>
          )}
          {description && (
            <span
              style={{
                fontSize: 40,
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
        {
          name: 'Ultra',
          data: ultraFontData,
          weight: 400,
        },
      ],
    }
  )
}
