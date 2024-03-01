import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LatestNewsContainerType = {
  dimensionsCode?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const LatestNewsContainer: FunctionComponent<LatestNewsContainerType> = ({
  dimensionsCode,
  propLeft,
  propWidth,
  propHeight,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const blog1540x490CropCenter1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className="absolute top-[3803px] left-[60px] rounded-xl box-border w-[650px] h-[369px] flex flex-row items-center justify-center gap-[0px_34px] text-left text-xl-4 text-steelblue-500 font-poppins border-[1px] border-solid border-silver-100"
      style={frameDiv2Style}
    >
      <img
        className="w-[318px] relative rounded-xl h-72 object-cover"
        alt=""
        src={dimensionsCode}
        style={blog1540x490CropCenter1IconStyle}
      />
      <div className="flex flex-col items-start justify-center gap-[9px_0px]">
        <div className="w-[147px] rounded-xl box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-lightgray">
          <div className="relative font-medium">22,oct,2021</div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[43px_0px] text-3xl-4">
          <div className="flex flex-col items-start justify-center gap-[19px_0px]">
            <div className="relative font-semibold">
              <p className="m-0">{`Who avoids a `}</p>
              <p className="m-0">pain that produces?</p>
            </div>
            <div className="w-[265px] relative text-sm-2 text-a inline-block h-[100px] shrink-0">
              Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
              faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem
              sed scelerisque.
            </div>
          </div>
          <div className="relative text-sm-2 text-a">By spacing tech</div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsContainer;
