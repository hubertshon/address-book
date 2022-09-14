import { Contact } from "./contact"

export interface ContactResponse {
    info: {
        page: number,
        results: number,
        seed: string,
        version: string
    },
    results: Contact[]
}
