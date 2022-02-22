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
  buttonText: string;
  buttonColor: string;
  buttonLink: string;
};
