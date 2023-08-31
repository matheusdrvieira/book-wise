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

    ".rating": {
        display: "flex",
        alignItems: "center",
    },

    "&:hover": {
        border: "2px solid $gray500",
        background: "$gray600",
    }
})

export const Header = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
})

export const UserInfo = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$4",

    img: {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "$full"
    },

    div: {
        display: "flex",
        alignItems: "start",
        flexDirection: "column",

        strong: {
            fontSize: "$md",
            fontWeight: "$regular",
            lineHeight: "$base",

            color: "$gray100"
        },

        span: {
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",

            color: "$gray400"
        }
    }
})

export const Main = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$5",

    marginTop: "$8",

    img: {
        width: "6.75rem",
        height: "9.5rem",
    },

    div: {
        strong: {
            fontSize: "$4",
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
        },

        p: {
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",

            overflow: "hidden",
            textOverflow: "ellipsis",

            display: "-webkit-box",
            WebkitBoxOrient: "vertical",

            WebkitLineClamp: "4",

            color: "$gray300",

        },
    }
})