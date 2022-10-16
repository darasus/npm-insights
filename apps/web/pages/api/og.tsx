import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { token } from "../../token";

export const config = {
  runtime: "experimental-edge",
};

const fontNormal = fetch(
  new URL(
    "../../assets/Source_Sans_Pro/SourceSansPro-Regular.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());
const fontBold = fetch(
  new URL(
    "../../assets/Source_Sans_Pro/SourceSansPro-Light.ttf",
    import.meta.url
  )
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const pkgId = searchParams.get("pkgId");
  const [fontNormalData, fontBoldData] = await Promise.all([
    fontNormal,
    fontBold,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: token.color.background,
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: token.color.background,
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: token.color.brand,
            flexDirection: "column",
            padding: "10px 40px 50px",
          }}
        >
          <span
            style={{ fontWeight: 400, fontSize: 100, marginBottom: 10 }}
          >{`NPM Package Size`}</span>
          {pkgId && (
            <span
              style={{
                fontWeight: 100,
                fontSize: 80,
                lineHeight: 0.5,
              }}
            >{`${pkgId}`}</span>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Source Sans Pro",
          data: fontNormalData,
          weight: 100,
        },
      ],
    }
  );
}
