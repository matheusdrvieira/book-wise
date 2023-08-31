import { styled } from "@stitches/react";

export const ContainerSignIn = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "$4",

    padding: "$4",

    img: {
        width: "37.375rem",
        height: "55.5rem",
        objectFit: "cover",
    }
})

export const Login = styled("div", {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    h1: {
        fontSize: "$2xl",
        fontWeight: "$bold",
        lineHeight: "$short",

        color: "$gray100"
    },

    p: {
        marginTop: "$1",
        marginBottom: "$10",

        fontSize: "1rem",
        fontweight: "$regular",
        lineHeight: "$base",

        color: "$gray200"
    }
})