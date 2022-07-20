import Image from "next/image";
import {
  balance,
  balanceContainer,
  balanceTitle,
  yellowText,
} from "./balance.css";
import ethIcon from "../../../public/assets/icon/eth.webp";
import sandIcon from "../../../public/assets/icon/sand-icon.svg";
const BalanceComponent = () => {
  return (
    <div className={balanceContainer}>
      <p className={balanceTitle}>메인넷 네트워크</p>
      <div className={balance}>
        <div>
          <Image src={ethIcon} alt="eth" />
          <p>0.00 ETH</p>
        </div>
        <div>
          <Image src={sandIcon} alt="sand" />
          <p className={yellowText}>0 SAND</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceComponent;
