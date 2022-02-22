declare module "next-slicezone";

declare type SearchFrameSlice = {
  slice: {
    primary: {
      defaultSearch: "ELQUARTO" | "PASSAGEM" | "SEGURO";
      elquartoTitle: string;
      passagemTitle: string;
      seguroTitle: string;
    };
  };
};

declare type ImageTextBoxSlice = {
  slice: {
    items: TextBox[];
  };
};

type TextBox = {
  image: PrismicImage;
  content: PrismicRichText;
  title: PrismicText;
};

declare type BannersSlice = {
  slice: {
    primary: {
      title: string;
    };
    items: Banner[];
  };
};

type Banner = {
  bannerImage: PrismicImage;
  bannerLink: PrismicLink;
};

declare type TextBannersSlice = {
  slice: {
    items: TextBanner[];
  };
};

type TextBanner = {
  title: PrismicText;
  image: PrismicImage;
  link: PrismicLink;
};

declare type PrismicImage = {
  alt: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
};

declare type PrismicLink = {
  url: string;
};

declare type PrismicColor = string;

declare type PrismicText = string;

declare type PrismicRichText = { type: any; text: string; spans: any[] }[];

declare global {
  interface Window {
    dataLayer: string[];
  }
}
