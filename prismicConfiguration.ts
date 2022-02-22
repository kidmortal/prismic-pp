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
