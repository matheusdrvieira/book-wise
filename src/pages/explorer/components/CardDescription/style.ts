import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
    width: "35.25rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    padding: "$8",

    borderRadius: "$md",
    border: "2px solid $gray700",

    cursor: "pointer",
    background: "$gray700"
})

export const Header = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: "$4",
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