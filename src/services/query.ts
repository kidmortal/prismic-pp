import { Client } from "./prismic";

async function fetchDocs(page = 1, routes = []): Promise<any> {
  const response: any = await Client().query("", {
    pageSize: 100,
    lang: "*",
    page,
  });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  const allRoutesSet: any = new Set(allRoutes);
  return [...allRoutesSet];
}

export const queryRepeatableDocuments = async (filter: any) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter((doc: any) => doc.type === "page").slice(0, 5);
};
