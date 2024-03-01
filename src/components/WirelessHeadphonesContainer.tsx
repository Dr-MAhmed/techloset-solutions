import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type WirelessHeadphonesContainerType = {
  productDescription?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const WirelessHeadphonesContainer: FunctionComponent<
  WirelessHeadphonesContainerType
> = ({ productDescription, propBackgroundImage }) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center text-left text-mid-1 text-a font-poppins border-[1px] border-solid border-silver-600">
      <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
        <div
          className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-293@3x.png')] bg-cover bg-no-repeat bg-[top]"
          style={frameDivStyle}
        >
          <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
            <img
              className="w-[14.4px] relative h-[14.4px]"
              alt=""
              src="/vuesaxlinearheart.svg"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
          <div className="relative font-medium">{productDescription}</div>
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
    </div>
  );
};

export default WirelessHeadphonesContainer;
