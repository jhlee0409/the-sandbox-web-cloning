import Image from "next/image";
import BalanceContainer from "./balanceComponent";
import {
  headerLayout,
  noneStyle,
  rightSectionContainer,
  searchBox,
  searchContainer,
  searchInput,
  userCircle,
  userContainer,
} from "./index.css";
import logo from "@/assets/icon/TheSandboxLogo.svg";
import cart from "@/assets/icon/shopping-cart.svg";
import search from "@/assets//icon/search.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header = () => {
  const [isShowSearch, setIsShowSearch] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.search("shop") !== -1) {
      setIsShowSearch(true);
    } else {
      setIsShowSearch(false);
    }
  }, [router]);
  return (
    <header className={headerLayout}>
      <div>
        <Image src={logo} alt="the sandbox logo" />
      </div>
      <div className={isShowSearch ? searchContainer : noneStyle}>
        <div className={searchBox}>
          <Image src={search} alt="search icon" />
          <input placeholder="검색" className={searchInput} />
        </div>
      </div>
      <div className={rightSectionContainer}>
        <div className={userContainer}>한국어</div>
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
