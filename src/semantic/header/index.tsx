import BalanceContainer from "./balanceComponent";
import {
  hederLayout,
  rightSectionContainer,
  balanceContainer,
  userContainer,
} from "./index.css";

const Header = () => {
  return (
    <div className={hederLayout}>
      <div>ths SANDBOX</div>
      <div className={rightSectionContainer}>
        <div>localization</div>
        <BalanceContainer />
        <div className={userContainer}>
          <div>프로필</div>
          <div>장바구니</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
