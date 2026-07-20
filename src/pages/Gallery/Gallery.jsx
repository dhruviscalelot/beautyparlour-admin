import React, { useEffect } from 'react'
import { setPageName } from "../../Store/Action/Auth/Auth_Action";
import { useDispatch } from 'react-redux';

const Gallery = () => {
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(setPageName("Gallery"));
    }, [dispatch])

    return (
        <>
        </>
    )
}

export default Gallery