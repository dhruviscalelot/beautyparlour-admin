import React, { useState, useEffect } from 'react'
import { setPageName } from "../../Store/Action/Auth/Auth_Action";
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import CustomTable from "../../components/CustomTable";


const OurServices = () => {
  const dispatch = useDispatch();


  const columns = [
    {
      key: "icon", label: "Icon", renderCell: (key, row) => (
        <img src={import.meta.env.VITE_API_URL + row?.icon} alt="icon" className='w-[50px] h-[50px] object-cover rounded-lg' />
      )
    },
    { key: "title", label: "Title", renderCell: (key, row) => row?.title || "-" },
    { key: "desc", label: "Description", renderCell: (key, row) => <div className="max-w-xs truncate">{row?.desc?.replace(/<[^>]*>?/gm, '') || "-"}</div> },
    {
      key: "action", label: "Action", renderCell: (key, row) => <div className="flex items-center space-x-2.5">
        <span className="icon-edit font-bold text-[18px] lg:text-[20px] xl:text-[24px] text-g1 cursor-pointer" onClick={() => navigate(`./edit/${row._id}`, { state: { serviceData: row } })}></span>
        <span className="icon-trash text-[18px] lg:text-[20px] xl:text-[24px] text-red cursor-pointer" onClick={() => DeleteOpenDialog(row)}></span>
      </div>
    }
  ]




  useEffect(() => {
    dispatch(setPageName("Our Services"))
  }, []);




  return (
    <>
      <div className="bg-white rounded-xl lg:rounded-2xl main_shadow p-3 lg:p-4 xl:p-5 space-y-4 lg:space-y-6 xl:space-y-8">

        <div className="flex items-center justify-between">
          <h6 className="text-20 font-semibold text-primary">Our Services</h6>
          <Link to="./create" className='btn_primary w-auto '>
            <span className='icon-add text-[20px] xl:text-[24px]'></span>
            <span>Add New Service</span>
          </Link>
        </div>
        <div className='flex flex-wrap items-center -mx-1.5 lg:-mx-2 2xl:-mx-3'>
          <div className='w-full xs:w-1/2 md:w-1/3 2xl:w-[358px] p-1.5 lg:p-2 2xl:p-3'>
            <div className="input w-full max-w-full flex items-center">
              <span className='icon-search text-g7 block text-[18px] xl:text-[20px] cursor-pointer'></span>
              <input type="text" placeholder='Search' className='w-full outline-none bg-transparent text-d3 pl-2.5 text-g1'  />
            </div>
          </div>
        </div>
        <CustomTable columns={columns} 
        // data={servicesData?.payload?.Data || []} isPagination={false} loading={servicesData?.loading} 
        />
      </div>
    </>
  )
}

export default OurServices