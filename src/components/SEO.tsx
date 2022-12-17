import Head from "next/head";

const TITLE = "SnapCode";
const DESCRIPTION =
  "SnapCode is a beautifully designed application that helps you generate beautiful and customizable images of your code snippets. This is built for the developer by the developer. If you want to share your code with anyone or on any social media this is the application you need.";
const URL = "https://www.snapcode.cf";

const SEO = () => {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="snapcode, codeimg, image, code, developer, developer tool, image generator, code snippets, snippets, code to image, converter, image converter, convert code to images, code to img, code image, snapshot, code snapshot, codeblock"
        />

        {/* GOOGLE */}
        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESCRIPTION} />
        <meta itemProp="image" content={`${URL}/google-card.png`} />
        {/* END GOOGLE */}

        {/* ROBOTS */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="yandexbot" content="index, follow" />
        <meta name="baiduspider" content="index, follow" />
        <meta name="sosospider" content="index, follow" />
        <meta name="slurp" content="index, follow" />
        <meta name="ia_archiver" content="index, follow" />
        <meta name="nutch" content="index, follow" />
        <meta name="spider" content="index, follow" />
        <meta name="crawler" content="index, follow" />
        <meta name="robot" content="index, follow" />
        <meta name="bot" content="index, follow" />
        <meta name="crawling" content="index, follow" />
        <meta name="crawl" content="index, follow" />
        <meta name="crawlable" content="index, follow" />
        <meta name="crawlability" content="index, follow" />
        <meta name="crawlability_rank" content="index, follow" />
        {/* END ROBOTS */}
      </Head>
    </>
  );
};

export default SEO;
