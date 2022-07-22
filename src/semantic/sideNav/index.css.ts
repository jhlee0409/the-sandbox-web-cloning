import { AlignCenter, flexColumBox, JustifyCenter } from "@/styles/style.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const sideNavLayout = style([
  flexColumBox,
  {
    height: "100vh",
    backgroundColor: "#14181d",
    width: 100,
    padding: "10px 5px",
  },
]);

export const selectedNav = style({
  backgroundColor: "#373f4a",
  borderRadius: 10,
  opacity: "1 !important",
});

export const nav = style([
  flexColumBox,
  AlignCenter,
  JustifyCenter,
  {
    fontFamily: "Montserrat, sans-serif",
    color: "white",
    cursor: "pointer",
    width: 80,
    height: 80,
    opacity: 0.4,
  },
]);

globalStyle(`${sideNavLayout} a`, {});
