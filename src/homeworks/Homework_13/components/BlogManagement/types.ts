import { type Dispatch, type SetStateAction } from "react"

export interface BlogContextTypes {
   message: string[] | undefined | string,
     setMessage: Dispatch<SetStateAction<string[] | undefined>>;
   
}