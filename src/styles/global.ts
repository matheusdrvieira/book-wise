import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    },

    body: {
        "-webkit-font-smoothing": "antialiased",
        background: "$gray800",
        color: "$gray100"
    },

    "body, input, textarea, button": {
        fontFamily: "$default",
        fontWeight: "$regular"
    },

    ".rating": {
        display: "flex",
        alignItems: "center",
    },
})