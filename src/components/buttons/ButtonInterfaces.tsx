import { CSSProperties } from "react";

/* All button interfaces  */
export interface ButtonProps {
    onclick: () => void,
    label: string,
    color: string
}