import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { token } from '../../token'

export const config = {
  runtime: 'experimental-edge',
}

const ultraFont = fetch(
  new URL('../../assets/fonts/ultra/Ultra-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const [ultraFontData] = await Promise.all([ultraFont])

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: token.color.background,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: token.color.background,
        }}
      >
        <span
          style={{
            fontFamily: 'Ultra',
            fontSize: 18,
            color: token.color.brand,
          }}
        >
          js.w
        </span>
      </div>
    ),
    {
      width: 50,
      height: 50,
      fonts: [
        {
          name: 'Ultra',
          data: ultraFontData,
          weight: 400,
        },
      ],
    }
  )
}
