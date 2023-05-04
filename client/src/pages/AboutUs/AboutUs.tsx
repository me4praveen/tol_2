import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchUserDetails } from '../../store/slices/userSlice'

function AboutUs() {
  const dispatch = useDispatch<AppDispatch>()
  const loggedInUser = useSelector( (state: RootState) => state.user.loggedInUser)

  useEffect(() => {
    console.log("here")
    dispatch(fetchUserDetails({username:"shashi", password: "tol1992"}));
  }, [])
  
  return (
    <div>
       {loggedInUser && loggedInUser.username}
    </div>
  )
}

export default AboutUs
