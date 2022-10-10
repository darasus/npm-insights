import Head from "next/head";
import React from "react";
import { useCanonicalUrl } from "hooks";
import { getBaseUrl } from "utils";

interface Props {
  title: string;
  description: string;
  imageSrc?: string;
  slug?: string;
}

export const Meta: React.FC<Props> = ({
  title,
  description,
  imageSrc,
  slug,
}) => {
  const baseUrl = getBaseUrl();
  const canonicalUrl = useCanonicalUrl({ slug });
  const actualTitle = `${title} | The AI Paper`;
  const imgSrc = imageSrc
    ? `${baseUrl}${imageSrc}`
    : `${baseUrl}/thumbnail.png`;
  const url = `${baseUrl}/p/${slug}`;

  return (
    <Head>
      <title>{actualTitle}</title>
      <meta name="title" content={actualTitle} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={slug ? url : `${baseUrl}/`} />
      <meta property="og:title" content={actualTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgSrc} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={slug ? url : `${baseUrl}/`} />
      <meta property="twitter:title" content={actualTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imgSrc} />

      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};
