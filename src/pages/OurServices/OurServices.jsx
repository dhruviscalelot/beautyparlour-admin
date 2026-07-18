import React, { useEffect } from 'react'
import {setPageName} from "../../Store/Action/Auth/Auth_Action";
import { useDispatch } from 'react-redux';


const OurServices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageName("Our Services"))
  },[]);


  return (
   <>
   </>
  )
}

export default OurServices