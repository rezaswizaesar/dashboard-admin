import { ReactNode, createContext, useState } from "react"
import { User, UserContextInterface } from "./types"


const defaultState = {
  user: {
    authentication: false,
    location: "",
    email: "",
    jwToken: "",
    locationArea: "",
    approver: "",
    type: ""
  },
  setUser: (user: User) => { user }
} as UserContextInterface

export const AuthContext = createContext(defaultState)

type UserProvideProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProvideProps) {
  const [user, setUser] = useState<User>({
    authentication: false,
    location: "",
    email: "",
    jwToken: "",
    locationArea: "",
    approver: "",
    type: "",
  })
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}