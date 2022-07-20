import { style } from "@vanilla-extract/css";

export const hederLayout = style({
  padding: "0 20px",
  height: 60,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const rightSectionContainer = style({
  display: "flex",
  gap: 10,
});

export const balanceContainer = style({ display: "flex" });

export const balance = style({ display: "flex" });

export const userContainer = style({ display: "flex" });
