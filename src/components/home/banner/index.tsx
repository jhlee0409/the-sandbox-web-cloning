import Image from "next/image";
import logo from "@/assets/icon/TheSandboxLogo.svg";
// @ts-ignore
import video from "@/assets/video/banner_video.webm";
import {
  bannerContainer,
  buttonBox,
  introduceBox,
  makeAvatarButton,
  purchaseLandButton,
  introduceWrapper,
} from "@/components/home/banner/index.css";
const Banner = () => {
  return (
    <div className={bannerContainer}>
      <div>{/*<video src={video} />*/}</div>
      <div className={introduceWrapper}>
        <div className={introduceBox}>
          <Image src={logo} alt={"logo"} />
          <p>메타버스에 오신 것을 환영합니다!</p>
          <p>미래를 플레이하고, 창작하고, 소유하세요</p>
          <div className={buttonBox}>
            <button className={makeAvatarButton}>아바타 만들기</button>
            <button className={purchaseLandButton}>LAND 구매</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
