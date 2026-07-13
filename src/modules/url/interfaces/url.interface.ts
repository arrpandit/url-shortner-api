export interface Url {
    id: string,
    original_url : string,
    short_code : string,
    clicks : number,
    expires_at : Date | null,
    created_at : Date
    updated_at : Date
}