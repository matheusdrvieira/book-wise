import { styled } from "@stitches/react";

export const CategoriesContainer = styled("div", {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "$4",

    "#box": {
        width: "58rem",

        display: "flex",
        alignItems: "center",

        overflow: "hidden",
    },

    "#category": {
        border: "1px solid $purple100",
        borderRadius: "62.4375rem",

        padding: "$1 $4",
        whiteSpace: "nowrap",

        cursor: "pointer",
        overflow: "hidden",
    }
})