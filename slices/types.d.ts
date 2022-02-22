import { Elements } from "prismic-reactjs";

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

type PrismicImage = {
  alt: string;
  url: string;
  dimensions: {
    width: number;
    height: number;
  };
};

type PrismicLink = {
  url: string;
};

type PrismicColor = string;

type PrismicText = string;

type PrismicRichText = { type: Elements; text: string; spans: any[] }[];
