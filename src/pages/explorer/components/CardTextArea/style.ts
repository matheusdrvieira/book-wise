import { styled } from "@stitches/react";

export const CardContainer = styled("div", {
    width: "35.25rem",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    padding: "$6",

    borderRadius: "$md",
    border: "2px solid $gray700",

    cursor: "pointer",
    background: "$gray700"
})

export const UserInfo = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "$4",

    img: {
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "$full"
    },

    ".toAssess": {
        button: {
            background: "transparent",
            border: "none",
        }
    },

    ".info": {
        display: "flex",
        alignItems: "center",
        gap: "$4",

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

export const ContainerTextArea = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",

    textarea: {
        width: "100%",
        height: "10.25rem",

        resize: "none",
        marginTop: "$6",
        marginBottom: "$3",
        padding: "0.875rem $5",

        borderRadius: "$sm",
        borderColor: "$green200",

        color: "$gray200",
        background: "$gray800",

        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$base",

        "&::placeholder": {
            fontSize: "$sm",
            fontWeight: "$regular",
            lineHeight: "$base",
            color: "$gray400",
        },

        "&:focus": {
            outline: "$green200"
        }
    },

    div: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "$1",
    }
})

export const Button = styled("button", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    gap: "$6",
    padding: "0.5rem",

    borderRadius: "$sm",
    border: "none",
    background: "$gray600",
})