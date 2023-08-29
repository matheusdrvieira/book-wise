import { styled } from "@stitches/react";

export const ButtonContainer = styled("div", {
    div: {
        width: "23.25rem",

        display: "flex",
        alignItems: "center",

        gap: "$5",
        padding: "$5 $6",
        marginBottom: "$4",

        borderRadius: "$md",
        background: "$gray600",

        "&:hover": {
            background: "$gradient-vertical",
            color: "#0E1116"
        }
    },

    "div:last-child": {
        marginBottom: "0px"
    },

})

export const Button = styled("button", {
    border: "none",

    fontSize: "$lg",
    fontWeight: "$bold",
    lineHeight: "$base",

    color: "$gray200",
    background: "transparent",
})