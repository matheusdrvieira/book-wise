import { styled } from "@stitches/react";

export const ContainerHome = styled("div", {
    height: "100vh",

    display: "grid",
    gridTemplateColumns: "14.5rem 1fr",
    gridTemplateRows: "1fr",
    gridColumnGap: "6rem",

    padding: "$4 5rem $4 $4",
})

export const Header = styled("header", {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    h2: {
        fontSize: "$2xl",
        fontWeight: "$bold",
        lineHeight: "$short",
    }
})

export const Box = styled("div", {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "9.12rem 1fr",
})

export const Main = styled("main", {
    display: "grid",
    gridTemplateColumns: "1fr 20rem",
    gridTemplateRows: "1fr",
    gridColumnGap: "4rem",
})

export const Section = styled("section", {
    display: "flex",
    flexDirection: "column",
    gap: "$4",

    ".cardWrapper": {
        display: "flex",
        flexDirection: "column",
        gap: "$4",
        marginBottom: "$10",
    },

    p: {
        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$short",
        color: "$gray100",
    },


    b: {
        display: "flex",
        alignItems: "center",

        fontSize: "$sm",
        fontWeight: "$regular",
        lineHeight: "$bold",

        cursor: "pointer",
        color: "$purple100"
    },

    ".info": {
        display: "flex",
        justifyContent: "space-between",
    }
})