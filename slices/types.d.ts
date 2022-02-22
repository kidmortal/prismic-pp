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

declare type SmallTextboxSlice = {
  slice: {
    primary: {
      boxColor: string;
      text: string;
      title: string;
    };
    items: Button[];
  };
};

type Button = {
  buttonText: PrismicText;
  buttonColor: PrismicColor;
  buttonLink: PrismicLink;
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
