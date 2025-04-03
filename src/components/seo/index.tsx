import Head from "next/head";

const Seo = ({
  pageTitle,
  pageDesc,
}: {
  pageTitle: String;
  pageDesc: String;
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle ? pageTitle : "Labirent Fethiye"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={
            pageDesc ? pageDesc.toString() : "Grande Digital page content yok"
          }
        />
      </Head>
    </>
  );
};

export default Seo;
