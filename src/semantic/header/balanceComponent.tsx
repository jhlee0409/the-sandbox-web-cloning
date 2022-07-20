import { balance } from "./index.css";

const BalanceComponent = () => {
  return (
    <div className="">
      <div>메인넷 네트워크</div>
      <div className={balance}>
        <div>이더리움</div>
        <div>샌드박스</div>
      </div>
    </div>
  );
};

export default BalanceComponent;
