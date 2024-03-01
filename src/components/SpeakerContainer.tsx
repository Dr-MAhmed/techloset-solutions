import { FunctionComponent } from "react";

const SpeakerContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[690px] left-[109px] flex flex-row items-center justify-center gap-[0px_39px] text-left text-4xl-4 text-steelblue-500 font-poppins">
      <div className="w-[381.6px] rounded-xl box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] z-[0] border-[1px] border-solid border-darkgray-500">
        <img
          className="w-[154px] relative h-[94px] object-cover"
          alt=""
          src="/2-1@2x.png"
        />
        <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
          <div className="relative font-semibold">Speaker</div>
          <div className="relative text-lg-8 font-medium text-steelblue-400">
            (6 items)
          </div>
        </div>
      </div>
      <div className="w-[381.6px] rounded-xl box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] z-[1] text-2xl-4 border-[1px] border-solid border-darkgray-500">
        <img
          className="w-[122.2px] relative h-[118px] object-cover"
          alt=""
          src="/5-1@2x.png"
        />
        <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
          <div className="relative font-semibold">{`Desktop & laptop`}</div>
          <div className="relative text-lg-8 font-medium text-steelblue-400">
            (6 items)
          </div>
        </div>
      </div>
      <div className="w-[381.6px] rounded-xl box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] z-[2] text-3xl-4 border-[1px] border-solid border-darkgray-500">
        <img
          className="w-[110.2px] relative h-[118.7px] object-cover"
          alt=""
          src="/8-1@2x.png"
        />
        <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
          <div className="relative font-semibold">DSLR camera</div>
          <div className="relative text-lg-8 font-medium text-steelblue-400">
            (6 items)
          </div>
        </div>
      </div>
      <img
        className="w-[37px] !m-[0] absolute top-[62px] left-[1204px] rounded-481xl h-[37px] object-contain z-[3]"
        alt=""
        src="/frame-20@2x.png"
      />
    </div>
  );
};

export default SpeakerContainer;
