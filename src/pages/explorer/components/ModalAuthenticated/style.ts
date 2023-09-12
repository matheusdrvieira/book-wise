import { keyframes, styled } from "@stitches/react";
import * as Dialog from "@radix-ui/react-dialog"

export const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 0.5 },
    '100%': { opacity: 1 },
});

export const Overlay = styled(Dialog.Overlay, {
    width: "100vw",
    height: "100vh",

    position: "fixed",
    inset: "0",

    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.2s forwards`,
    background: "rgba(0, 0, 0, 0.90)",
})

export const Content = styled(Dialog.Content, {
    width: "32rem",
    height: "21rem",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "fixed",

    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    borderRadius: "0.75rem",
    padding: "$4",

    background: "$gray800",
    boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.50)",

    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.2s forwards`,

    header: {
        marginTop: "$4",
        marginBottom: "$10",

        h1: {
            fontSize: "$md",
            fontWeight: "$bold",
            lineHeight: "$short",
        }
    },

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
            color: "$gray800"
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

export const ButtonClose = styled(Dialog.Close, {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",

    border: "none",
    lineHeight: "0",
    background: "transparent",
})