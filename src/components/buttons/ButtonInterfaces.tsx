/* Button interfaces  */

export interface ButtonInterface {
    onclick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    label: string,
    color: string
}