import { globalStyle, style } from "@vanilla-extract/css";
import { AlignCenter, flexBox } from "@/styles/style.css";
import { vars } from "@/styles/vars.css";

export const headerLayout = style({
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
    paddingLeft: "10px",
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

export const searchContainer = style({
  width: "33%",
  maxWidth: "360px",
});

export const noneStyle = style({
  display: "none",
});

export const searchBox = style({
  display: "flex",
  alignItems: "center",
  width: "70%",
  height: "33px",
  borderRadius: 5,
  border: "1px solid hsla(0,0%,100%,.10196)",
  backgroundColor: "hsla(0,0%,100%,.05098)",
  transition: "all .3s ease",
  padding: "0 10px",
});

export const searchInput = style({
  backgroundColor: "transparent",
  outline: "none",
  border: "none",
  margin: "0 20px 0 10px",
  color: "white",
  "::placeholder": {
    opacity: 0.7,
    transition: "opacity 150ms ease",
  },
  selectors: {
    "&:focus::placeholder": { opacity: 1 },
  },
});
globalStyle(`${searchBox} > span`, {
  width: "15px !important",
});

globalStyle(`${searchBox} img`, {
  filter: "invert(1)",
});
