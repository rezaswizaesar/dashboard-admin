import { Dispatch, SetStateAction } from "react"

export interface User {
  authentication: boolean
  location: string
  email: string
  jwToken: string
  locationArea: string
  approver: string
  type: string
}

export interface UserContextInterface {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
}