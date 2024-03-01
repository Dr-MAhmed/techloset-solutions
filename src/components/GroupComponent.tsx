import { FunctionComponent } from "react";

const GroupComponent: FunctionComponent = () => {
  return (
    <div className="absolute top-[calc(50%_-_587.5px)] left-[0px] w-[375px] h-[417px] text-left text-mini-1 text-white font-poppins">
      <img
        className="absolute top-[calc(50%_-_208.5px)] left-[0px] w-[375px] h-[417px] object-cover"
        alt=""
        src="/pexelsnaotriponez129208-1@2x.png"
      />
      <div className="absolute top-[calc(50%_-_208.5px)] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)] w-[375px] h-[417px]" />
      <div className="absolute top-[77px] left-[126.8px] rounded-xl bg-b w-[118.7px] h-[45px] flex flex-row items-center justify-center">
        <div className="relative font-medium">{`New laptop `}</div>
      </div>
      <div className="absolute top-[295px] left-[126.8px] rounded-xl bg-b w-[118.7px] h-[45px] flex flex-row items-center justify-center">
        <div className="relative font-medium">Shop now</div>
      </div>
      <div className="absolute top-[134px] left-[22px] w-[327px] flex flex-col items-center justify-center gap-[12px_0px] text-center text-22xl text-steelblue-100">
        <b className="w-[257px] relative leading-[55px] inline-block">
          Sale up to 50% off
        </b>
        <div className="relative text-lg font-medium text-white text-left">
          12 inch hd display
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
