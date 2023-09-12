import { styled } from "@stitches/react";

export const ContainerExplorer = styled("div", {
    height: "100vh",
    position: "relative",

    display: "grid",
    gridTemplateColumns: "14rem auto",

    gap: "$8",
    padding: "$4",
})

export const Main = styled("main", {
    padding: "3.5rem 6rem",

    section: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",

        gap: "$5",
        marginTop: "3.25rem"
    }
})

export const Header = styled("header", {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "$10",

    div: {
        display: "flex",
        alignItems: "center",
        gap: "$3",

        h1: {
            fontSize: "$2xl",
            fontweight: "$bold",
            lineHeight: "$short",
        }
    }
})