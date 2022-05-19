import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogin } from '../actions/authActions'
const Auth = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const handleClick = () => {
   dispatch(toggleLogin())
  }
  return (
    <div>
        <button onClick={handleClick} className="btn btn-info">{auth.isLoggedIn ? 'logout' : 'login'}</button>
    </div>
  )
}

export default Auth