import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import WirelessHeadphonesContainer1 from "../components/WirelessHeadphonesContainer1";
import GroupComponent from "../components/GroupComponent";
import VuesaxboldboxTickIcon from "../components/VuesaxboldboxTickIcon";
import VuesaxboldcrownIcon from "../components/VuesaxboldcrownIcon";
import VuesaxboldshieldSecurityIcon from "../components/VuesaxboldshieldSecurityIcon";
import ContainerForm from "../components/ContainerForm";
import FrameComponent5 from "../components/FrameComponent5";

const Home1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white h-[6417px] text-left text-base text-steelblue-500 font-poppins">
      <GroupComponent1 />
      <div className="absolute top-[318px] left-[35px] w-[316.2px] h-[311px] text-lg-8 text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[289.2px] h-[311px] object-cover"
          alt=""
          src="/8-1@2x.png"
        />
        <div className="absolute top-[165.1px] left-[211.4px] rounded-[588.94px] bg-b w-[104.8px] h-[100.1px] flex flex-row items-center justify-center">
          <div className="relative font-semibold">
            <p className="m-0">only</p>
            <p className="m-0">$89</p>
          </div>
        </div>
      </div>
      <b className="absolute top-[649px] left-[calc(50%_-_138.5px)] text-[36px] text-center">
        Canon camera
      </b>
      <div className="absolute top-[796px] left-[calc(50%_-_163.5px)] rounded-xl box-border w-[327px] h-[61px] flex flex-row items-center justify-center text-steelblue-300 border-[1px] border-solid border-steelblue-200">
        <div className="relative font-semibold">View more</div>
      </div>
      <div className="absolute top-[719px] left-[calc(50%_-_163.5px)] rounded-xl bg-b w-[327px] h-[61px] flex flex-row items-center justify-center text-white">
        <div className="relative font-semibold">Shop now</div>
      </div>
      <div className="absolute top-[889px] left-[24px] flex flex-row items-center justify-center gap-[0px_16px] text-4xl-4">
        <div className="w-[308px] rounded-xl bg-white box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] border-[1px] border-solid border-darkgray-500">
          <img
            className="w-[93.6px] relative h-[94px] object-cover"
            alt=""
            src="/2-1@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
            <div className="relative font-semibold">Speaker</div>
            <div className="relative text-lg-8 font-medium text-steelblue-400">
              (6 items)
            </div>
          </div>
        </div>
        <div className="w-[381.6px] rounded-xl bg-white box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] text-2xl-4 border-[1px] border-solid border-darkgray-500">
          <img
            className="w-[122.2px] relative h-[118px] object-cover"
            alt=""
            src="/5-1@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
            <div className="relative font-semibold">{`Desktop & laptop`}</div>
            <div className="relative text-lg-8 font-medium text-steelblue-400">
              (6 items)
            </div>
          </div>
        </div>
        <div className="w-[381.6px] rounded-xl bg-white box-border h-[147px] flex flex-row items-center justify-center gap-[0px_43.35px] text-3xl-4 border-[1px] border-solid border-darkgray-500">
          <img
            className="w-[110.2px] relative h-[118.7px] object-cover"
            alt=""
            src="/8-1@2x.png"
          />
          <div className="flex flex-col items-start justify-center gap-[9.42px_0px]">
            <div className="relative font-semibold">DSLR camera</div>
            <div className="relative text-lg-8 font-medium text-steelblue-400">
              (6 items)
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1068px] left-[24px] text-8xl-4 font-semibold">
        Popular products
      </div>
      <div className="absolute top-[1125px] left-[24px] flex flex-row items-center justify-center gap-[0px_13px] text-base-4">
        <div className="w-[139px] rounded-xl bg-white box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-a">
          <div className="relative font-medium">Cameras</div>
        </div>
        <div className="w-[139px] rounded-xl bg-white box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Laptops</div>
        </div>
        <div className="w-[139px] rounded-xl bg-white box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Tablets</div>
        </div>
        <div className="w-[139px] rounded-xl bg-white box-border h-[45px] flex flex-row items-center justify-center border-[1px] border-solid border-silver-700">
          <div className="relative font-medium">Mouse</div>
        </div>
      </div>
      <div className="absolute top-[1202px] left-[32px] w-[311px] flex flex-row flex-wrap items-center justify-center gap-[26.56px] text-mid-1 text-a">
        <WirelessHeadphonesContainer1
          camera1="/camera-1@2x.png"
          vuesaxlineareye="/vuesaxlineareye.svg"
        />
        <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
          <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
            <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2919@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                <img
                  className="w-[14.4px] relative h-[14.4px]"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
              <div className="relative font-medium">Wireless headphones</div>
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
        <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
          <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
            <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2920@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                <img
                  className="w-[14.4px] relative h-[14.4px]"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
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
        <div className="w-[308.8px] rounded-[19.67px] box-border h-[313.7px] flex flex-col items-center justify-center border-[1px] border-solid border-silver-600">
          <div className="flex flex-col items-start justify-center gap-[1.97px_0px]">
            <div className="w-[282.3px] relative h-[168.2px] overflow-hidden shrink-0 bg-[url('/public/frame-2921@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[13.8px] left-[242px] rounded-103xl-4 bg-lightblue w-[27.5px] h-[27.5px] flex flex-row items-center justify-center">
                <img
                  className="w-[14.7px] relative h-[14.7px]"
                  alt=""
                  src="/vuesaxlinearheart.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[15.74px_0px]">
              <div className="relative font-medium">Tablet as a laptop</div>
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
      </div>
      <div className="absolute top-[2572px] left-[calc(50%_-_37.5px)] flex flex-row items-center justify-center gap-[0px_9.5px]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
      <GroupComponent />
      <div className="absolute top-[3038px] left-[0px] bg-aliceblue-100 w-[375px] h-[351px] flex flex-row flex-wrap items-center justify-start py-0 px-[26px] box-border gap-[42px_104px] text-3xl-1 text-a">
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldboxTickIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">Free delivery</div>
            <div className="relative text-lg-1">on order above $50,00</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldcrownIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">{`Best quality `}</div>
            <div className="relative text-lg-1">best quality in low price</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_31px]">
          <VuesaxboldshieldSecurityIcon />
          <div className="flex flex-col items-start justify-center gap-[6px_0px]">
            <div className="relative font-semibold">1 year warranty</div>
            <div className="relative text-lg-1">Avaliable warranty</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[3794px] left-[0px] bg-aliceblue-100 w-[375px] h-[492px] flex flex-row flex-wrap items-center justify-center gap-[48px_55.3px]">
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand8@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand4@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand5@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand6@2x.png"
        />
        <img
          className="w-[206.2px] relative h-[41.2px] object-cover"
          alt=""
          src="/brand7@2x.png"
        />
      </div>
      <div className="absolute top-[4371px] left-[17px] rounded-xl box-border w-[341px] h-[637px] flex flex-row flex-wrap items-center justify-center gap-[34px] text-xl-4 border-[1px] border-solid border-silver-100">
        <img
          className="w-[318px] relative rounded-xl h-72 object-cover"
          alt=""
          src="/blog1-540x490-crop-center-1@2x.png"
        />
        <div className="flex flex-col items-start justify-center gap-[9px_0px]">
          <div className="w-[147px] rounded-xl box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-lightgray">
            <div className="relative font-medium">22,oct,2021</div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px_0px] text-3xl-4">
            <div className="flex flex-col items-start justify-center gap-[19px_0px]">
              <div className="relative font-semibold">
                <p className="m-0">{`Who avoids a `}</p>
                <p className="m-0">pain that produces?</p>
              </div>
              <div className="w-[265px] relative text-sm-2 text-a inline-block h-[100px] shrink-0">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </div>
            </div>
            <div className="relative text-sm-2 text-a">By spacing tech</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[5051px] left-[125px] flex flex-row items-center justify-center gap-[0px_9.5px]">
        <div className="w-[19px] relative rounded-[50%] bg-b h-[19px]" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
        <div className="w-[19px] relative rounded-[50%] box-border h-[19px] border-[1.2px] border-solid border-darkgray-200" />
      </div>
      <div className="absolute top-[5099px] left-[0px] bg-aliceblue-100 w-[375px] h-[1318px] flex flex-row flex-wrap items-center justify-center gap-[41px] text-[24px]">
        <div className="w-[339px] rounded-xl bg-white h-[194px] flex flex-row flex-wrap items-center justify-center gap-[12px_137px]">
          <b className="relative">Subscribe newsletter</b>
          <div className="w-[336px] flex flex-row flex-wrap items-center justify-center gap-[10px_88px] text-sm text-white">
            <div className="w-[291px] rounded-xl bg-b h-[63px] flex flex-row items-center justify-start py-0 pr-0 pl-[25px] box-border relative gap-[0px_10px]">
              <div className="relative font-semibold z-[0]">Email address</div>
              <img
                className="w-6 absolute !m-[0] top-[31.5px] left-[136px] h-6 z-[1]"
                alt=""
                src="/vuesaxlinearsend2.svg"
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
        <div className="w-[276px] flex flex-row flex-wrap items-start justify-start gap-[23px_80px] text-base-4">
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
          <div className="w-[227px] flex flex-row flex-wrap items-center justify-start gap-[24px_227px] text-lgi-4">
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
      <div className="absolute top-[4310px] left-[25px] w-[326px] flex flex-row items-center justify-center gap-[0px_97px] text-6xl-4">
        <div className="relative font-semibold">Latest news</div>
        <div className="relative text-xl-4 font-medium">View all</div>
      </div>
      <ContainerForm />
      <ContainerForm propLeft="375px" />
      <ContainerForm propLeft="718px" />
      <div className="absolute top-[155px] left-[0px] bg-whitesmoke-100 w-[375px] h-[141px] flex flex-row flex-wrap items-center justify-center gap-[8px_97px] text-white">
        <div className="w-[218px] bg-b h-[70px] flex flex-row items-center justify-center gap-[0px_17px]">
          <div className="relative font-medium">Browse categories</div>
          <img
            className="w-6 relative h-6"
            alt=""
            src="/vuesaxlineararrowdown.svg"
          />
        </div>
        <div className="h-[23px] flex flex-row items-center justify-center text-a">
          <b className="relative">30 Days Free Return</b>
        </div>
      </div>
      <FrameComponent5 />
    </div>
  );
};

export default Home1;
