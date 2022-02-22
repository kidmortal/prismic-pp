export const repoName = "prismic-pp";
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;
export const accessToken = "";
export const linkResolver = (doc: any) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }
  return "/";
};

export const routeResolver = {
  routes: [
    {
      type: "page",
      path: "/:uid",
    },
  ],
};
