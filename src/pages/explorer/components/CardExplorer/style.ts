import { styled } from "@stitches/react";

export const CardContainer = styled("button", {
    width: "20rem",
    height: "11.5rem",

    display: "flex",
    alignItems: "center",

    position: "relative",

    gap: "$5",
    padding: "$4",

    borderRadius: "$md",
    border: "2px solid $gray700",

    cursor: "pointer",
    background: "$gray700",

    img: {
        width: "6.75rem",
        height: "9.5rem",
    },

    "&:hover": {
        border: "2px solid $gray500",
        background: "$gray600",
    }
})

export const Checked = styled("div", {
    variants: {
        active: {
            true: {
                position: "absolute",

                padding: "$1 $3",
                top: "0",
                right: "0",

                background: "$green300",
                color: "$green100",

                border: "none",
                borderRadius: "0rem 0.5rem 0rem 0rem ",

                fontSize: "$xs",
                fontWeight: "700",
                lineHeight: "130%",
            },
            false: {
                display: "none"
            }
        },
    },
})

export const Main = styled("div", {
    width: "9.4rem",
    height: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",

    ".infoBook": {
        textAlign: "start",

        strong: {
            fontSize: "$md",
            fontWeight: "$bold",
            lineHeight: "$short",

            overflow: "hidden",
            textOverflow: "ellipsis",

            display: "-webkit-box",
            WebkitBoxOrient: "vertical",

            WebkitLineClamp: "2",

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
})