import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  padding: 0,
  margin: 0,
});
globalStyle("body", {
  maxHeight: "100vh",
  height: "100%",
  overflow: "hidden",
});
globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("*", {
  padding: 0,
  margin: 0,
});
