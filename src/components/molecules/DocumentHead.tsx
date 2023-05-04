import { FC } from "react";
import Head from "next/head";

interface Props {
  title: string;
  description: string;
  baseUrl: string;
  favicon: string;
  siteName: string;
  image: string;
  path?: string;
}

const DocumentHead: FC<Props> = ({
  title,
  description,
  baseUrl,
  favicon,
  siteName,
  image,
  path,
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={favicon} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${baseUrl}${path}`} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default DocumentHead;
