export interface userType{
    email : string
    password :string
    isLoggedIn : boolean
}

export interface IParamAddUser{
    email: string
    password:string
}

export interface IFetchAllUsers {
    id: number
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
}
export type IFetchAllUsersType = IFetchAllUsers[] | null
// er" "users"
// users :: :: :: :: ::  [
//   User {
//     id: 1,
//     created_at: 2023-03-08T19:14:31.837Z,
//     updated_at: 2023-03-08T19:14:31.837Z,
//     email: 'monikatiwari@gmail.com',
//     password: '12345'
//   },
//   User {
//     id: 2,
//     created_at: 2023-03-12T12:48:56.202Z,
//     updated_at: 2023-03-12T12:48:56.202Z,
//     email: 'monika@gmail.com',
//     password: '12345'
//   },
//   User {
//     id: 3,
//     created_at: 2023-03-13T17:38:33.319Z,
//     updated_at: 2023-03-13T17:38:33.319Z,
//     email: 'monikatiwari1@gmail.com',
//     password: '12345'
//   }
// ]
