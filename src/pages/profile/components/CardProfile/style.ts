import { styled } from "@stitches/react";

export const CardContainer = styled("main", {
    marginTop: "$8",

    span: {
        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$base",
        color: "$gray300"
    }
})

export const Main = styled("main", {
    minWidth: "38rem",
    display: "flex",
    flexDirection: "column",

    gap: "$5",
    padding: "$6",

    marginTop: "$2",
    marginBottom: "$6",

    borderRadius: "$md",
    background: "$gray700",

    cursor: "pointer",
    border: "2px solid $gray700",

    p: {
        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$base",

        color: "$gray100",
    },

    "&:hover": {
        border: "2px solid $gray500",
        background: "$gray600",
    }
})

export const Section = styled("section", {
    display: "flex",
    gap: "$5",

    img: {
        width: "6.125rem",
        height: "8.375rem",
    },
})

export const Box = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "3.5rem",

    ".info": {
        display: "flex",
        flexDirection: "column",

        strong: {
            fontSize: "$lg",
            fontWeight: "$bold",
            lineHeight: "$short",
            color: "$gray100"
        },

        span: {
            display: "block",
            marginBottom: "$3",

            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray400",
        },
    },
})