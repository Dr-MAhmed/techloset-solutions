import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type GamePlayContainerType = {
  frame29?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const GamePlayContainer: FunctionComponent<GamePlayContainerType> = ({
  frame29,
  propTop,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[2303px] left-[886px] rounded-[19.67px] box-border w-[493px] h-[241px] flex flex-col items-center justify-center text-left text-mid-1 text-a font-poppins border-[1px] border-solid border-silver-600"
      style={frameDiv1Style}
    >
      <div className="flex flex-row items-center justify-start gap-[0px_50px]">
        <img
          className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={frame29}
        />
        <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
          <div className="relative font-medium">Play game</div>
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

export default GamePlayContainer;
