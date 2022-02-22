import SliceZone from "next-slicezone";
import * as Slices from "../../slices";
import { QueryPageSlices } from "../services/prismic";
import { queryRepeatableDocuments } from "../services/query";

// @ts-ignore
const resolver = ({ sliceName }) => Slices[sliceName];

const Page = (props: any) => {
  return (
    <div>
      <SliceZone slices={props.slices} resolver={resolver} />
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const slices = await QueryPageSlices(params.uid);
  return {
    props: {
      slices,
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
