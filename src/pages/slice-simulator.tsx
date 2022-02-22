import { SliceSimulator } from "@prismicio/slice-simulator-react";
import SliceZone from "next-slicezone";

import state from "../../.slicemachine/libraries-state.json";

import * as Slices from "../../slices";
// @ts-ignore
const resolver = ({ sliceName }) => Slices[sliceName];

const SliceSimulatorPage = () => (
  // Prismic doesnt work well with typescript...

  <SliceSimulator
    background="#eceff1"
    // @ts-ignore
    sliceZone={(props) => <SliceZone {...props} resolver={resolver} />}
    // @ts-ignore
    state={state}
  />
);

export default SliceSimulatorPage;
