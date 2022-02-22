import Prismic from "@prismicio/client";

export const Client = (req = null) =>
  Prismic.client(`https://prismic-pp.prismic.io/api/v2`, {
    accessToken: process.env.PRISMIC_TOKEN,
  });

export async function QueryPageSlices(uid: string) {
  let slices: any;
  try {
    // @ts-ignore
    const page: any = await Client().getByUID("page", uid);
    if (page?.data?.slices) {
      slices = page?.data?.slices;
    }
  } catch (error) {
    slices = null;
  }
  return slices;
}
