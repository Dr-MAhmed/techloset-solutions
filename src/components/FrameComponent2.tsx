import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-[26px_0px] text-left text-lg-2 text-gray-500 font-poppins">
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px]">
        <div className="relative font-medium">Color :</div>
        <div className="flex flex-row items-center justify-center relative gap-[0px_14.59px]">
          <div className="w-[27px] absolute !m-[0] top-[-4.5px] left-[-5.1px] rounded-[50%] box-border h-[27px] z-[0] border-[1px] border-solid border-darkgray-100" />
          <div className="w-[18px] relative rounded-[50%] bg-yellowgreen-100 h-[18px] z-[1]" />
          <div className="w-[18px] relative rounded-[50%] bg-dimgray-400 h-[18px] z-[2]" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px] text-darkslategray-200">
        <div className="relative font-medium text-gray-500">Size :</div>
        <div className="w-[63px] bg-whitesmoke-300 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-black">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">30</div>
          </div>
        </div>
        <div className="w-[63px] bg-whitesmoke-300 h-8 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">56</div>
          </div>
        </div>
        <div className="w-[63px] bg-whitesmoke-300 h-8 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">42</div>
          </div>
        </div>
        <div className="w-[63px] bg-whitesmoke-300 h-8 flex flex-row items-center justify-center">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">48</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[0px_19.08px]">
        <div className="relative font-medium">Quantity :</div>
        <div className="flex flex-row items-center justify-center text-darkslategray-200">
          <div className="w-[35px] bg-whitesmoke-300 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium">-</div>
            </div>
          </div>
          <div className="w-[63px] bg-whitesmoke-300 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium">1</div>
            </div>
          </div>
          <div className="w-[35px] bg-whitesmoke-300 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
            <div className="flex flex-row items-center justify-center">
              <div className="relative font-medium">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
