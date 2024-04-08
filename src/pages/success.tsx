"use client";

import Link from "next/link";
import React, { useState } from "react";
import Lottie from "lottie-react";
import Sparkles from "../../public/sparkles.json";

const Success = () => {
  const style = {
    position: "absolute",
    top: 0,
    left: 0,
  };

  const [hideLottie, setHideLottie] = useState(false);

  const handleAnimationComplete = () => {
    setHideLottie(true);
  };

  return (
    <div className="">
      <div className="container flex items-center justify-center py-20 ">
        <Lottie
          className={`${
            hideLottie ? "hidden" : "block"
          } absolute xs:top-0 -top-24 left-0 w-full h-screen`}
          animationData={Sparkles}
          loop={false}
          onComplete={handleAnimationComplete}
        />
        <div className="max-w-[655px] h-fit bg-[#2E2E2E] lg:p-[40px] p-8 rounded-lg ">
          <h1 className="lg:text-[28px] text-xl font-medium mb-6 text-center">
            Thank you!
          </h1>
          <p className="lg:text-xl mb-6 text-center">
            Your form submission has been received
          </p>
          <div>
            <Link href={`/`}>
              <button
                className={`bg-primaryLight border-primaryLight  w-full lg:h-[60px] h-[42px] border  rounded-lg lg:text-lg font-medium `}
              >
                Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
