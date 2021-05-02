import React from "react";
import Lottie from "react-lottie-player";

import Bank from "./lf30_editor_zcrdyerz.json";
import Online from "./lf30_editor_gin2iajo.json";
import Contact from "./37147-contact-us.json";

export default function Lottie({ bank, online, contact }) {
  return (
    <Lottie
      loop
      animationData={bank ? Bank : online ? Online : contact ? Contact : ""}
      play
    />
  );
}
