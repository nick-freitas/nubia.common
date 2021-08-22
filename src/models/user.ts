export interface PublicUser {
    id: string
    fullName: string
}

export interface User extends PublicUser  {
    email?: string
    password?: string
    createdAt: string
    active: boolean
    version: number
}
