import { style } from "@vanilla-extract/css";
import { AlignCenter, flexBox } from "../../styles/style.css";
import { vars } from "../../styles/vars.css";

export const hederLayout = style({
  position: "sticky",
  top: 0,
  padding: "0 20px",
  height: vars.navHeight,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#14181D",
  borderBottom: "1px solid hsla(0,0%,100%,.2)",
  color: "white",
});

export const rightSectionContainer = style({
  display: "flex",
  gap: 10,
  height: "100%",
  alignItems: "center",
});

export const userContainer = style([
  flexBox,
  AlignCenter,
  {
    borderLeft: "1px solid hsla(0,0%,100%,.2)",
    height: "100%",
    padding: "0 20px",
  },
]);

export const userCircle = style({
  width: 37.5,
  height: 37.5,
  marginRight: 30,
  borderRadius: "50%",
  backgroundColor: "gray",
  border: "2px solid #00b0ff",
  boxShadow: "0 3px 3px rgb(0 0 0 / 20%)",
  position: "relative",
  ":before": {
    content: "NEW",
    fontSize: 13,
    fontWeight: 800,
    padding: "1px 3px",
    fontFamily: "Montserrat, sans-serif",
    lineHeight: "14px",
    textAlign: "center",
    position: "absolute",
    right: "-80%",
    top: "-10%",
    backgroundColor: "#00b0ff",
    borderRadius: 4,
  },
});
