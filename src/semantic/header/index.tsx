import Image from "next/image";
import BalanceContainer from "./balanceComponent";
import {
  hederLayout,
  rightSectionContainer,
  userContainer,
  userCircle,
} from "./index.css";
import logo from "@/assets/icon/TheSandboxLogo.svg";
import cart from "@/assets/icon/shopping-cart.svg";
const Header = () => {
  return (
    <header className={hederLayout}>
      <div>
        <Image src={logo} alt="the sandbox logo" />
      </div>
      <div className={rightSectionContainer}>
        <div>한국어</div>
        <BalanceContainer />
        <div className={userContainer}>
          <div className={userCircle}></div>
          <Image src={cart} alt="cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
