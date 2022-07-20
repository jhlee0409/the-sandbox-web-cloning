import {
  AlignCenter,
  flexColumBox,
  JustifyCenter,
} from "./../../styles/style.css";
import { globalStyle, style } from "@vanilla-extract/css";
import { flexBox } from "../../styles/style.css";
import { vars } from "../../styles/vars.css";
export const balanceContainer = style([
  flexColumBox,
  JustifyCenter,
  {
    borderLeft: "1px solid hsla(0,0%,100%,.2)",
    height: "100%",
    padding: "0 20px",
  },
]);

export const balance = style([flexBox, { gap: 20 }]);

export const balanceTitle = style({
  opacity: 0.4,
  fontSize: 10,
  paddingBottom: 5,
});

export const yellowText = style({
  color: vars.color.yellow,
});

globalStyle(`${balance} > div`, {
  display: "flex",
  alignItems: "center",
  gap: 5,
});
globalStyle(`${balance} p`, {
  fontSize: 14,
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "bold",
});
globalStyle(`${balance} span`, {
  width: "16px !important",
  height: "16px !important",
});
