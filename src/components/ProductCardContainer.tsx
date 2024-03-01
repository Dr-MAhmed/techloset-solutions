import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ProductCardContainerType = {
  dimensionsCode?: string;
  carColorLabel?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propOverflow?: CSSProperties["overflow"];
};

const ProductCardContainer: FunctionComponent<ProductCardContainerType> = ({
  dimensionsCode,
  carColorLabel,
  propTop,
  propWidth,
  propHeight,
  propOverflow,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const sd1IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      overflow: propOverflow,
    };
  }, [propWidth, propHeight, propOverflow]);

  return (
    <div
      className="absolute top-[432px] left-[61px] flex flex-row items-center justify-center gap-[0px_73px] text-left text-3xl-7 text-darkslategray-700 font-poppins"
      style={frameDiv5Style}
    >
      <div className="flex flex-row items-center justify-center gap-[0px_21px] text-xl-7">
        <img
          className="w-[136px] relative rounded-xl h-[119px] object-cover"
          alt=""
          src={dimensionsCode}
          style={sd1IconStyle}
        />
        <div className="flex flex-col items-start justify-center gap-[11px_0px]">
          <div className="relative font-semibold text-a">Play game</div>
          <div className="relative">{carColorLabel}</div>
          <div className="relative">Size: 30</div>
        </div>
      </div>
      <div className="relative font-medium">$ 11,70</div>
      <div className="flex flex-row items-center justify-center text-lg-2 text-darkslategray-200">
        <div className="w-[35px] bg-whitesmoke-200 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">-</div>
          </div>
        </div>
        <div className="w-[63px] bg-whitesmoke-200 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">1</div>
          </div>
        </div>
        <div className="w-[35px] bg-whitesmoke-200 box-border h-8 flex flex-row items-center justify-center border-[1px] border-solid border-silver-300">
          <div className="flex flex-row items-center justify-center">
            <div className="relative font-medium">+</div>
          </div>
        </div>
      </div>
      <div className="relative font-medium">$ 11,70</div>
      <img
        className="w-6 relative h-6"
        alt=""
        src="/vuesaxlinearclosecircle.svg"
      />
    </div>
  );
};

export default ProductCardContainer;
