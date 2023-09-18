import { ReactNode, createContext, useState } from "react"
import { User, UserContextInterface } from "./Types"
import { useLocalStorage } from "../../Hooks/useLocalStorage"

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

export const AppContext = createContext(defaultState)

type UserProvideProps = {
  children: ReactNode
}

export default function UserProvider({ children }: UserProvideProps) {
  const { getItem } = useLocalStorage();
  // console.log("Data => ", getItem("token"))
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
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  )
}