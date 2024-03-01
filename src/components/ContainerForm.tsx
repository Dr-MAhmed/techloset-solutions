import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ContainerFormType = {
  /** Style props */
  propLeft?: CSSProperties["left"];
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({ propLeft }) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[3416px] left-[32px] rounded-xl bg-white box-border w-[311px] h-[354px] flex flex-col items-center justify-center gap-[26.17px_0px] text-center text-base text-a font-poppins border-[1px] border-solid border-silver-400"
      style={frameDiv6Style}
    >
      <div className="flex flex-col items-center justify-center gap-[12px_0px]">
        <img
          className="w-[100px] relative h-[100px]"
          alt=""
          src="/frame-61.svg"
        />
        <div className="w-[180.4px] relative font-medium inline-block">
          Savannah Nguyen
        </div>
      </div>
      <div className="w-[272px] rounded-lg-7 bg-aliceblue-100 h-[137px] flex flex-row items-center justify-center text-left text-sm-2">
        <div className="w-[232px] relative inline-block shrink-0">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
