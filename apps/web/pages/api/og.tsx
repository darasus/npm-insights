import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

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
    "../../assets/Source_Sans_Pro/SourceSansPro-Bold.ttf",
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
          background: "#fafafa",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#0a0a0a",
          border: "10px solid #6d28d9",
        }}
      >
        <span style={{ fontWeight: 400, fontSize: 80 }}>{`NPM 📦 Size`}</span>
        {pkgId && (
          <span
            style={{
              fontWeight: 800,
              fontSize: 120,
              lineHeight: 0.5,
              color: "#9e9e9e",
            }}
          >{`${pkgId}`}</span>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
      emoji: "twemoji",
      fonts: [
        {
          name: "Source Sans Pro",
          data: fontNormalData,
          weight: 400,
        },
        {
          name: "Source Sans Pro",
          data: fontBoldData,
          weight: 800,
        },
      ],
    }
  );
}
