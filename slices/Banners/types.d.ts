declare type BannersSlice = {
  slice: {
    primary: {
      title: string;
    };
    items: Banner[];
  };
};

type Banner = {
  bannerImage: {
    alt: string;
    url: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
  bannerLink: {
    url: string;
  };
};
