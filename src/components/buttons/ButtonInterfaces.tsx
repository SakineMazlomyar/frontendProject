/* Button interfaces  */

export interface ButtonInterface {
    onclick: () => { type:string },
    label: string,
    color?: string
}