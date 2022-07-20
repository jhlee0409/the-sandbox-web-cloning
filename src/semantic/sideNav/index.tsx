import Link from "next/link";
import { SideNavLayout } from "./index.css";

const navList = [
  { title: "홈", href: "/", icon: "" },
  { title: "플레이", href: "/season/contests", icon: "" },
  { title: "마켓", href: "/shop", icon: "" },
  { title: "만들기", href: "/create/game-maker", icon: "" },
  {
    title: "맵",
    href: "/map/?liteMap&currentX=2760&currentY=3766&zoom=0.5",
    icon: "/about",
  },
  { title: "소개", href: "", icon: "" },
];
const SideNav = () => {
  return (
    <div className={SideNavLayout}>
      {navList.map((item, i) => {
        return (
          <Link key={item.title + i} href={item.href}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default SideNav;
