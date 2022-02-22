import SliceZone from "next-slicezone";
import { useRouter } from "next/router";
import Script from "next/script";
import * as Slices from "../../slices";
import { Loader } from "../components/loader";
import { Client } from "../services/prismic";
import { queryRepeatableDocuments } from "../services/query";
import { useUpdatePreviewRef } from "../utils/useUpdatePreviewRef";
import Custom404 from "./404";

// @ts-ignore
const resolver = ({ sliceName }) => Slices[sliceName];

const Page = ({ doc, previewRef }: any) => {
  useUpdatePreviewRef(previewRef, doc?.id);
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  if (!doc.id) {
    return <Custom404 />;
  }
  if (doc) {
    return (
      <div>
        <Script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=prismic-pp"
        />
        <SliceZone slices={doc.data.slices} resolver={resolver} />
      </div>
    );
  }

  return <div></div>;
};

export async function getStaticProps({ params, previewData }: any) {
  const previewRef = previewData ? previewData.ref : null;
  const refOption: any = previewRef ? { ref: previewRef } : null;
  const doc = (await Client().getByUID("page", params.uid, refOption)) || {};
  return {
    props: {
      previewRef,
      doc,
    },
  };
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments(
    (doc: any) => doc.type === "page"
  );
  return {
    paths: documents.map((doc: any) => `/${doc.uid}`),
    fallback: true,
  };
}

export default Page;
