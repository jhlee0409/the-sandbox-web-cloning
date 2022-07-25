import {
  flexBox,
  AlignCenter,
  SpaceBetweenRow,
  flexColumBox,
} from "./../../../styles/style.css";
import { vars } from "@/styles/vars.css";
import { style } from "@vanilla-extract/css";

export const Container = style({
  backgroundColor: "#0C1014",
  padding: "0 240px",
});

export const title = style({
  color: vars.color.lightBlue,
  fontWeight: "normal",
  fontSize: 24,
  //   fontFamily: "Montserrat Bold,sans-serif",
});

export const subTitle = style({
  fontSize: 45,
  color: "white",
});

export const subTitleBox = style([flexBox, AlignCenter, SpaceBetweenRow, {}]);

export const communityBox = style([
  flexColumBox,
  {
    padding: "4rem 0 6rem 0",
    gap: 32,
  },
]);

export const postBox = style({
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 32,
});

export const moreButton = style({
  color: "#0084ff",
  fontSize: 16,
  fontFamily: "Montserrat Bold, sans-serif",
});
