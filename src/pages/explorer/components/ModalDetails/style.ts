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
    height: "100vh",
    width: "41.25rem",
    position: "fixed",

    top: "0",
    right: "0",

    overflow: "auto",
    padding: "3rem",

    background: "$gray800",
    boxShadow: "-4px 0px 30px 0px rgba(0, 0, 0, 0.50)",

    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.2s forwards`,

    '&::-webkit-scrollbar': {
        width: '0.375rem',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$gray600',
        borderRadius: '62.4375rem',
    },
})

export const Section = styled("section", {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",

    gap: "$4",
    marginBottom: "3.5rem",

    ".infoAssessment": {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        p: {
            fontSize: "$sm",
            fontweight: "$regular",
            lineHeight: "$base",
        },

        button: {
            fontSize: "$md",
            fontweight: "$bold",
            lineHeight: "$base",

            border: "none",
            cursor: "pointer",

            color: "$purple100",
            background: "transparent",
        }
    }
})

export const ButtonClose = styled(Dialog.Close, {
    border: "none",
    background: "transparent",
    lineHeight: "0"
})