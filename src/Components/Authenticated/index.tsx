import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../../Config/Context';


const Authenticated = ({ children }: any) => {
  const { state } = useContext(AppContext);

  if (!state.authenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default Authenticated