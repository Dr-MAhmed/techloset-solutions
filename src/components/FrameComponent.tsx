import { FunctionComponent } from "react";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="absolute top-[1390px] left-[59px] flex flex-col items-start justify-center gap-[12px_0px] text-left text-[16.1px] text-gray-600 font-poppins">
      <div className="flex flex-row items-center justify-center gap-[0px_189px] text-darkslategray-600">
        <div className="relative">0 selected</div>
        <div className="relative text-base-1 text-dimgray-300">Reset</div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">M</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">S</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">X</div>
          <div className="relative">5</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_10px]">
        <div className="w-[30px] relative h-[30px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue w-[30px] h-[30px]" />
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_55px]">
          <div className="w-52 relative inline-block shrink-0">XX</div>
          <div className="relative">5</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
