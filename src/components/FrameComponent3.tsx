import { FunctionComponent } from "react";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className="absolute top-[943px] left-[758px] flex flex-col items-start justify-center gap-[31px_0px] text-left text-lg-2 text-gray-500 font-poppins">
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px]">
        <div className="relative font-medium">Sku:</div>
        <div className="flex flex-row items-center justify-center text-darkslategray-200">
          <div className="relative font-medium">01133-9-9</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px]">
        <div className="relative font-medium">Category:</div>
        <div className="flex flex-row items-center justify-center gap-[0px_13.59px] text-sm-2 text-darkslategray-200">
          <div className="relative">20% off,</div>
          <div className="relative">49% off</div>
          <div className="relative">Alex remote</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px]">
        <div className="relative font-medium">Share:</div>
        <div className="flex flex-row items-center justify-center gap-[0px_37px]">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlineargoogle.svg"
          />
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlinearfacebook.svg"
          />
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlinearwhatsapp.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
