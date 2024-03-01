import { FunctionComponent } from "react";

const ShopSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[244px] left-[0px] w-[1440px] h-[394px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-white shadow-[19px_4px_16px_rgba(0,_0,_0,_0.09)] w-[1440px] h-[394px]" />
      <img
        className="absolute top-[38px] left-[932px] w-[331px] h-[356px] object-cover"
        alt=""
        src="/8-1@2x.png"
      />
      <div className="absolute top-[216px] left-[174px] flex flex-row items-center justify-center gap-[0px_21px]">
        <div className="w-36 rounded-xl bg-b h-[61px] flex flex-row items-center justify-center">
          <div className="relative font-semibold">Shop now</div>
        </div>
        <div className="w-36 rounded-xl box-border h-[61px] flex flex-row items-center justify-center text-steelblue-300 border-[1px] border-solid border-steelblue-200">
          <div className="relative font-semibold">View more</div>
        </div>
      </div>
      <div className="absolute top-[227px] left-[1174px] rounded-[674.16px] bg-b w-[120px] h-[114.6px] flex flex-row items-center justify-center text-2xl-6">
        <div className="relative font-semibold">
          <p className="m-0">only</p>
          <p className="m-0">$89</p>
        </div>
      </div>
      <div className="absolute top-[326px] left-[296px] flex flex-row items-center justify-center gap-[0px_8px]">
        <div className="w-4 relative rounded-[50%] bg-b h-4" />
        <div className="w-4 relative rounded-[50%] box-border h-4 border-[1px] border-solid border-darkgray-200" />
        <div className="w-4 relative rounded-[50%] box-border h-4 border-[1px] border-solid border-darkgray-200" />
      </div>
    </div>
  );
};

export default ShopSection;
