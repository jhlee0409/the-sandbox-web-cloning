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
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
});

globalStyle("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
});
