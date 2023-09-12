import { styled } from "@stitches/react";

export const InfoContainer = styled("div", {
    minWidth: "19.5rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",

    borderLeft: "1px solid $gray700",

    ".imgProfile": {
        width: "4.5rem",
        height: "4.5rem",
        borderRadius: "$full",
        marginBottom: "$4",
    },

    ".date": {
        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$base",

        marginBottom: "$10",
        color: "$gray400"
    },
})

export const InfoWrapper = styled("div", {
    display: "flex",
    alignItems: "center",

    gap: "$4",
    marginTop: "$10",

    p: {
        fontSize: "$md",
        fontWeight: "$bold",
        lineHeight: "$short",
        color: "$gray200"
    },

    span: {
        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$base",
        color: "$gray300"
    }
})