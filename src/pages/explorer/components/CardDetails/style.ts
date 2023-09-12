import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
    width: "35.25rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    gap: "$10",
    padding: "$8",

    borderRadius: "$md",
    border: "2px solid $gray700",

    cursor: "pointer",
    background: "$gray700"
})


export const Main = styled("main", {
    display: "flex",
    alignItems: "center",
    gap: "$10",
    height: "15.125rem",

    img: {
        width: "10.72819rem",
        height: "15.125rem",
    },
})

export const Section = styled("section", {
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",

    ".infoBook": {
        strong: {
            fontSize: "$md",
            fontWeight: "$bold",
            lineHeight: "$short",
            color: "$gray100"
        },

        span: {
            display: "block",
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray400"
        }
    },

    ".assessment": {
        span: {
            fontSize: "$md",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray400",
        }
    },
})

export const Footer = styled("footer", {
    width: "100%",
    display: "flex",

    gap: "4rem",
    padding: "$6 0rem",
    borderTop: "1px solid $gray600",

    ".boxFooter": {
        display: "flex",
        alignItems: "center",
        gap: "$4",

        strong: {
            fontSize: "$md",
            fontWeight: "$bold",
            lineHeight: "$base",
            color: "$gray200"
        },

        p: {
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray300"
        }
    }
})