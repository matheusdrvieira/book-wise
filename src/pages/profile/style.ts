import { styled } from "@stitches/react";

export const ContainerProfile = styled("div", {
    height: "100vh",

    display: "grid",
    gridTemplateColumns: "14.5rem 1fr",
    gridTemplateRows: "1fr",
    gridColumnGap: "6rem",

    padding: "$4 5rem $4 $4",
})

export const Box = styled("div", {
    width: "100%",
    display: "grid",
    gridTemplateRows: "9.12rem 1fr",
})

export const Main = styled("main", {
    display: "grid",
    gridTemplateColumns: "1fr 19.25rem",
    gridTemplateRows: "1fr",
    gridColumnGap: "4rem",
    justifyItems: "center"
})

export const Header = styled("header", {
    display: "flex",
    alignItems: "center",
    gap: "$3",
    fontWeight: "$bold",

    variants: {
        active: {
            true: {
                h1: {
                    fontSize: "$2xl",
                    lineHeight: "$short",
                }
            },
            false: {
                h2: {
                    fontSize: "$md",
                    lineHeight: "$base",
                },
            }
        }
    }
})