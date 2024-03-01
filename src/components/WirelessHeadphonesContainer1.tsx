import { FunctionComponent } from "react";

export type WirelessHeadphonesContainer1Type = {
  camera1?: string;
  vuesaxlineareye?: string;
};

const WirelessHeadphonesContainer1: FunctionComponent<
  WirelessHeadphonesContainer1Type
> = ({ camera1, vuesaxlineareye }) => {
  return (
    <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center relative gap-[37.37px_0px] text-left text-mid-1 text-a font-poppins border-[1px] border-solid border-silver-600">
      <img
        className="w-[187.9px] relative h-[173.1px] object-cover z-[0]"
        alt=""
        src={camera1}
      />
      <div className="hidden flex-col items-start justify-center z-[1]">
        <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
          <div className="relative font-medium">Wireless headphones</div>
          <div className="relative font-semibold text-darkslategray-100">
            $11,70
          </div>
          <div className="flex flex-row items-center justify-center gap-[0px_10.82px]">
            <img
              className="w-[14.7px] relative h-[14.6px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[14.7px] relative h-[14.6px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[14.7px] relative h-[14.6px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[14.7px] relative h-[14.6px]"
              alt=""
              src="/vector.svg"
            />
            <img
              className="w-[14.7px] relative h-[14.6px]"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_20.65px] z-[2] text-[15.7px] text-gray-400">
        <div className="w-[204.6px] rounded-[19.67px] bg-skyblue h-[60px] flex flex-row items-center justify-start py-0 pr-0 pl-[25.57197380065918px] box-border relative gap-[0px_4.92px]">
          <div className="relative font-semibold z-[0]">Add to cart</div>
          <div className="w-[30.5px] !m-[0] absolute top-[14.8px] left-[154.4px] rounded-[491.77px] bg-b h-[30.5px] flex flex-row items-center justify-center z-[1]">
            <img
              className="w-[17.2px] relative h-[17.2px]"
              alt=""
              src="/vuesaxlinearshoppingcart.svg"
            />
          </div>
        </div>
        <div className="w-[70.8px] rounded-[19.67px] bg-skyblue h-[60px] flex flex-row items-center justify-start py-0 pr-0 pl-[25.57197380065918px] box-border">
          <img
            className="w-[23.6px] relative h-[23.6px]"
            alt=""
            src={vuesaxlineareye}
          />
        </div>
      </div>
      <div className="w-[27.5px] !m-[0] absolute top-[35.4px] left-[255.7px] rounded-103xl-4 bg-lightblue h-[27.5px] flex flex-row items-center justify-center z-[3]">
        <img
          className="w-[14.4px] relative h-[14.4px]"
          alt=""
          src="/vuesaxlinearheart.svg"
        />
      </div>
    </div>
  );
};

export default WirelessHeadphonesContainer1;
