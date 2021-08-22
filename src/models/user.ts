export interface PublicUser {
    id: String
    fullName: String
}

export interface User extends PublicUser  {
    email?: String
    password?: String
    createdAt: String
    active: Boolean
    v: Number
}
