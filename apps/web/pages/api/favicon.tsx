import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { Logo } from '../../components/Logo'
import { token } from '../../token'

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
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
        <Logo scale={1} />
      </div>
    ),
    {
      width: 50,
      height: 50,
    }
  )
}
