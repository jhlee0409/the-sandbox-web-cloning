import { flexBox } from "@/styles/style.css";
import { style } from "@vanilla-extract/css";

export const category = style({
  color: "#3bbff0",
  fontSize: 12,
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  letterSpacing: 1.2,
});

export const title = style({
  color: "white",
  fontSize: 17,
  lineHeight: "24px",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 600,
  margin: "8px 0 16px",
});

export const date = style({
  fontSize: 14,
  fontFamily: "Roboto, sans-serif",
  color: "white",
  opacity: 0.5,
});

export const imageBox = style({
  aspectRatio: "16 / 9",
  backgroundColor: "white",
  borderRadius: 10,
  marginBottom: "5%",
});

export const horizontalLine = style({
  width: "100%",
  height: 1,
  backgroundColor: "white",
  opacity: 0.3,
  margin: "16px 0",
});

export const socialBox = style([
  flexBox,
  {
    color: "white",
    gap: 15,
    opacity: 0.3,
  },
]);
