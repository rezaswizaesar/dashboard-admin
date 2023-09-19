import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../../Store/Context/Context';

const RequiredAuth = ({ children }: any) => {
  const { state } = useContext(AppContext);

  if (!state.authenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default RequiredAuth