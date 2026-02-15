import Head from "next/head";

function SeoHead({ item, siteName }) {
  if (!item) return null;

  const title = item.h1 || item.title || "";
  const description =
    item.metaDescription || item.postExcerpt || item.excerpt || "";
  const image = item.image || "";

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
    </Head>
  );
}

export default SeoHead;
