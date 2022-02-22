import { Client } from "../services/prismic";

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
  const routesSet: any = new Set(allRoutes);
  return [...routesSet];
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 **/
export const queryRepeatableDocuments = async (filter: any) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};
