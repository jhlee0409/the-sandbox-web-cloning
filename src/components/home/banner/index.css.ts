import { globalStyle, style } from "@vanilla-extract/css";

export const bannerContainer = style({
  padding: "0 30px",
  backgroundColor: "gray",
  display: "flex",
  alignItems: "center",
  height: "490px",
});

export const introduceWrapper = style({
  maxWidth: 1148,
  width: "100%",
  margin: "0 auto",
});

export const introduceBox = style({
  maxWidth: 525,
  padding: "30px 40px",
  borderRadius: 30,
  backgroundColor: "rgba(22,25,30,.9)",
});

globalStyle(`${introduceBox} *`, {
  width: `100% !important`,
});

globalStyle(`${introduceBox} > p`, {
  color: "white",
  padding: "5px 0",
});

export const buttonBox = style({ display: "flex", gap: 20, marginTop: 10 });

globalStyle(`${buttonBox} button`, {
  padding: "10px 0",
  borderRadius: 20,
  fontSize: "16px",
  cursor: "pointer",
});

export const makeAvatarButton = style({
  color: "white",
  backgroundColor: "#0084ff",
  border: "none",
  transition: "all 150ms ease",
  ":hover": { backgroundColor: "#05f" },
});

export const purchaseLandButton = style({
  color: "rgb(0, 132, 255)",
  backgroundColor: "rgba(0,0,0,.2)",
  border: "1px solid rgb(0, 132, 255)",
  transition: "all 150ms ease",
  ":hover": { backgroundColor: "#05f", color: "white" },
});
