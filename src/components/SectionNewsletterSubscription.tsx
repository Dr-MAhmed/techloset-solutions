import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type SectionNewsletterSubscriptionType = {
  uniqueIdentifier?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const SectionNewsletterSubscription: FunctionComponent<
  SectionNewsletterSubscriptionType
> = ({ uniqueIdentifier, propTop }) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[4332px] left-[0px] bg-aliceblue-100 w-[1440px] h-[511px] flex flex-col items-center justify-center gap-[41px_0px] text-left text-10xl-4 text-steelblue-500 font-poppins"
      style={frameDiv3Style}
    >
      <div className="w-[1320px] rounded-xl bg-white h-[139px] flex flex-row items-center justify-center gap-[0px_137px]">
        <b className="relative">Subscribe newsletter</b>
        <div className="flex flex-row items-center justify-center gap-[0px_88px] text-sm text-white">
          <div className="w-[388px] rounded-xl bg-b h-[63px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border relative gap-[0px_10px]">
            <div className="relative font-semibold z-[0]">Email address</div>
            <img
              className="w-6 absolute !m-[0] top-[20px] left-[343px] h-6 z-[1]"
              alt=""
              src={uniqueIdentifier}
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-[0px_20px] text-dimgray-100">
            <img
              className="w-[45px] relative h-[45px]"
              alt=""
              src="/vuesaxlinearheadphone.svg"
            />
            <div className="relative font-semibold">
              <p className="m-0">Call us 24/7 :</p>
              <p className="m-0">(+62) 0123 567 789</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_80px] text-base-4">
        <div className="flex flex-col items-start justify-center gap-[36px_0px]">
          <div className="flex flex-col items-start justify-center gap-[41px_0px]">
            <img
              className="w-[140px] relative h-[39px] object-cover"
              alt=""
              src="/logo1-1@2x.png"
            />
            <div className="relative">
              <p className="m-0">64 st james boulevard</p>
              <p className="m-0">hoswick , ze2 7zj</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[23px_0px]">
            <div className="w-[251px] relative box-border h-px border-t-[1px] border-solid border-darkgray-600" />
            <div className="flex flex-row items-center justify-center gap-[0px_37px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/vuesaxlineargoogle.svg"
              />
              <img
                className="w-6 relative h-6"
                alt=""
                src="/vuesaxlinearfacebook.svg"
              />
              <img
                className="w-6 relative h-6"
                alt=""
                src="/vuesaxlinearwhatsapp.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_227px] text-lgi-4">
          <div className="flex flex-col items-start justify-center gap-[13px_0px]">
            <div className="relative font-semibold">Find product</div>
            <div className="flex flex-col items-start justify-center gap-[15px_0px]">
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Brownze arnold</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Chronograph blue</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Smart phones</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Automatic watch</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Hair straighteners</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[13px_0px]">
            <div className="relative font-semibold">Get help</div>
            <div className="flex flex-col items-start justify-center gap-[15px_0px]">
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">About us</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Contact us</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Return policy</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Privacy policy</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Payment policy</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[13px_0px]">
            <div className="relative font-semibold">About us</div>
            <div className="flex flex-col items-start justify-center gap-[15px_0px]">
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">News</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Service</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Our policy</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Custmer care</div>
              </div>
              <div className="flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="w-2.5 relative rounded-[50%] bg-gainsboro-200 h-2.5" />
                <div className="relative">Faq’s</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNewsletterSubscription;
