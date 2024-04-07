import React, { useState } from "react";

const Locations = () => {
  type locationType = {
    address: string;
    email: string;
    phone: string;
  };

  const [dhaka, setDhaka] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });
  const [dubai, setDubai] = useState<locationType>({
    address: "IZFA Properties, Dubai Silicon Oasis, UAE",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });
  const [sanJose, setSanJose] = useState<locationType>({
    address: "House 141, Lane 1, Baridhara DOHS",
    email: "support@blockstak.ai",
    phone: "+880245267882",
  });

  return (
    <div className="bg-[#FEFEFE] text-neutral-700">
      <div className="container mx-auto">
        {/* <div className="dhaka-address-bg text-center md:py-20 py-10">
          <h1 className="md:text-[32px] sm:text-lg text-base font-bold pb-2">
            Dhaka
          </h1>

          <div className="pb-2">
            <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
              {dhaka.address}
            </address>
          </div>

          <div className="pb-2">
            <a
              href={`mailto:${dhaka.email}`}
              className="md:text-xl sm:text-base text-sm md:font-medium"
            >
              {dhaka.email}
            </a>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16">
          <div className="foreign-address-bg md:py-20 py-10 lg:text-start text-center">
            <h1 className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 ">
              Dhaka
            </h1>

            <div className="py-2">
              <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                {sanJose.address}
              </address>
            </div>

            <div className="lg:pb-24 pb-10">
              <a
                href={`mailto:${sanJose.email}`}
                className="md:text-xl sm:text-base text-sm md:font-medium"
              >
                {sanJose.email}
              </a>
            </div>
          </div>

          <div className="foreign-address-bg2 md:py-20 py-10 lg:text-start text-center  ">
            <div className="">
              <h1 className="text-neutral-800 md:text-[32px] sm:text-lg text-base font-bold pb-2 ">
                San Jose
              </h1>

              <div className="py-2">
                <address className="md:text-xl sm:text-base text-sm md:font-medium not-italic">
                  {dubai.address}
                </address>
              </div>

              <div className="lg:pb-24 pb-10">
                <a
                  href={`mailto:${dubai.email}`}
                  className="md:text-xl sm:text-base text-sm md:font-medium"
                >
                  {dubai.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
