import React from "react";
import Lottie from "lottie-react";
import lottiejson from "./feature-json.json";
const LottieImg = () => {
  return <Lottie animationData={lottiejson} loop={true} />;
};

export default LottieImg;
