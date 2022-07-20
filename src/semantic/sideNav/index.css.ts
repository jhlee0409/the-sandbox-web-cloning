import { globalStyle, style } from "@vanilla-extract/css";

export const SideNavLayout = style({
  height: "100vh",
  backgroundColor: "#14181d",
  width: 100,
  padding: "10px 5px",
});

globalStyle(`${SideNavLayout} a`, {});
