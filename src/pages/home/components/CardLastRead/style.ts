import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
    minWidth: "38rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    padding: "$6",

    borderRadius: "$md",
    background: "$gray700",

    cursor: "pointer",
    border: "2px solid $gray700",

    "&:hover": {
        border: "2px solid $gray500",
        background: "$gray600",
    },
})

export const Main = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$5",

    img: {
        width: "6.75rem",
        height: "9.5rem",
    },
})

export const Box = styled("div", {
    display: "flex",
    alignItems: "flex-start",

    div: {
        strong: {
            fontSize: "$4",
            fontWeight: "$bold",
            lineHeight: "$short",

            color: "$gray100"
        },

        ".date": {
            display: "block",
            marginBottom: "$3",

            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",

            color: "$gray400",
        },

        ".author": {
            display: "block",
            marginBottom: "$6",

            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",

            color: "$gray400"
        },

        p: {
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",

            overflow: "hidden",
            textOverflow: "ellipsis",

            display: "-webkit-box",
            WebkitBoxOrient: "vertical",

            WebkitLineClamp: "2",

            color: "$gray300",
        }
    }
})