import { styled } from "@stitches/react";

export const InputContainer = styled("form", {
    minWidth: "27.0625rem",
    display: "flex",
    alignItems: "center",
    background: "transparent",
    border: "1px solid #303F73",
    borderRadius: "$sm",
    paddingRight: "$5",

    input: {
        width: "100%",
        borderRadius: "$sm",
        padding: "$3 $5",
        background: "transparent",
        border: "none",
        outline: "none",
        color: "$gray100",

        "&::placeholder": {
            color: "$gray400"
        }
    },

    button: {
        display: "flex",
        alignItems: "center",
        border: "none",
        background: "transparent",
        cursor: "pointer",

        svg: {
            lineHeight: "0"
        }
    }
})