import { FunctionComponent } from "react";

const JBLBarContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[2303px] left-[51px] rounded-xl box-border w-[803px] h-[505px] flex flex-row items-center justify-center gap-[0px_62px] text-left text-2xl-1 text-a font-poppins border-[1px] border-solid border-silver-600">
      <img
        className="w-[345px] relative h-[380px] object-cover z-[0]"
        alt=""
        src="/11-1@2x.png"
      />
      <div className="flex flex-col items-start justify-center gap-[37px_0px] z-[1]">
        <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
          <div className="relative font-semibold">JBL bar 2.1 deep bass</div>
          <div className="relative text-mid-1 font-semibold text-darkslategray-100">
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
        <div className="flex flex-row items-center justify-center gap-[0px_10px] text-3xl-1 text-b">
          <div className="w-[77px] rounded-481xl bg-aliceblue-100 h-[78px] flex flex-col items-center justify-center">
            <b className="relative">57</b>
          </div>
          <div className="w-[77px] rounded-481xl bg-aliceblue-100 h-[78px] flex flex-col items-center justify-center">
            <b className="relative">11</b>
          </div>
          <div className="w-[77px] rounded-481xl bg-aliceblue-100 h-[78px] flex flex-col items-center justify-center">
            <b className="relative">33</b>
          </div>
          <div className="w-[77px] rounded-481xl bg-aliceblue-100 h-[78px] flex flex-col items-center justify-center">
            <b className="relative">59</b>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[0px_20.65px] text-[15.7px] text-gray-400">
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
              src="/vuesaxlineareye.svg"
            />
          </div>
        </div>
      </div>
      <div className="!m-[0] absolute top-[450px] left-[381.3px] flex flex-row items-center justify-center gap-[0px_9.5px] z-[2]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
    </div>
  );
};

export default JBLBarContainer;
