import { styled } from "@stitches/react";

export const MainMenu = styled("div", {
    width: "14.5rem",
    height: "100vh",

    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "space-between",

    padding: "$10",
    borderRadius: "$md",

    background: `linear-gradient(44deg, rgb(10, 49, 60), rgb(24, 28, 42) 70.71%)`,

    ".infoMenu": {
        img: {
            marginBottom: "4rem",
            cursor: "pointer",
        },
    },
})

export const BaseButton = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "$3",

    fontSize: "$md",
    fontWeight: "$bold",

    color: "$gray200",

    span: {
        overflow: "hidden",
        textOverflow: "ellipsis",

        display: "-webkit-box",
        WebkitBoxOrient: "vertical",

        WebkitLineClamp: "1",
    },

    button: {
        cursor: "pointer",
        border: "none",
        background: "transparent",
    },

    img: {
        width: "2rem",
        height: "2rem",
        borderRadius: "$full"
    },
})

export const ButtonMenu = styled("button", {
    display: "flex",
    alignItems: "center",
    gap: "$3",

    border: "none",
    cursor: "pointer",
    marginBottom: "$4",

    fontSize: "$md",
    fontWeight: "$bold",
    lineHeight: "0",

    color: "$gray400",
    background: "transparent",

    position: "relative",

    "&:hover": {
        color: "$gray100",
    },

    variants: {
        active: {
            true: {
                "&::before": {
                    content: '',

                    width: "0.25rem",
                    height: "1.5rem",

                    position: "absolute",
                    top: "50%",
                    left: "-10px",

                    transform: "translateY(-50%)",
                    transition: " opacity 0.3s ease",

                    opacity: "1",
                    borderRadius: "$full",

                    background: "$gradient-vertical",
                },
                color: "$gray100"
            },
        },
    },
})