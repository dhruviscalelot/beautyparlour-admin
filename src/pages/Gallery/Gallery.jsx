import React, { useState, useEffect } from 'react'
import { setPageName } from "../../Store/Action/Auth/Auth_Action";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomTable from "../../components/CustomTable";
import { galleryData } from '../../data/gallery.js';
import { Pencil, Trash2, Search, Plus } from "lucide-react";


const Gallery = () => {
    const dispatch = useDispatch();

    const columns = [
        { key: "registerDate", label: "Date", renderCell: (key, row) => row?.createdAt || "-" },
        {
            key: "image",
            label: "Image",
            renderCell: (key, row) =>
                row?.image ? (
                    <img
                        src={row.image}
                        alt="Gallery"
                        className="h-10 w-10 rounded-lg object-cover"
                    />
                ) : (
                    "-"
                ),
        },
        { key: "type", label: "Type", renderCell: (key, row) => <div className="max-w-xs truncate">{row?.type || "-"}</div> },
        {
            key: "action", label: "Action", renderCell: (key, row) => <div className="flex items-center space-x-3">
                <span className="text-[18px] lg:text-[20px] xl:text-[24px] text-g1 cursor-pointer" ><Pencil size={18} /></span>
                <span className="icon-trash text-[18px] lg:text-[20px] xl:text-[24px] text-red cursor-pointer" ><Trash2 size={18} /></span>
            </div>
        }
    ]

    // Pagination state — 10 items per page
    const [pagination, setPagination] = useState({ page: 1, limit: 10 });

    // Slice static data for current page
    const paginatedData = galleryData.slice(
        (pagination.page - 1) * pagination.limit,
        pagination.page * pagination.limit
    );

    const handlePageChange = (newPage, newLimit) => {
        setPagination({ page: newPage, limit: newLimit });
    };

    useEffect(() => {
        dispatch(setPageName("Gallery"))
    }, []);


    return (
        <>
            <div className="bg-white rounded-xl lg:rounded-2xl main_shadow p-3 lg:p-4 xl:p-5 space-y-4 lg:space-y-6 xl:space-y-8">

                <div className="flex items-center justify-between">
                    <h6 className="text-20 font-semibold text-primary">All Gallery Images</h6>
                    <Link to="./create" className='btn_primary w-auto '><Plus size={20} />
                        <span>Upload Image</span>
                    </Link>
                </div>

                <div className='flex flex-wrap items-center -mx-1.5 lg:-mx-2 2xl:-mx-3'>
                    <div className='w-full xs:w-1/2 md:w-1/3 2xl:w-[358px] p-1.5 lg:p-2 2xl:p-3'>
                        <div className="input w-full max-w-full flex items-center">
                            <span className='text-g7 block text-[18px] xl:text-[20px] cursor-pointer'><Search size={20} /></span>
                            <input type="text" placeholder='Search' className='w-full outline-none bg-transparent text-d3 pl-2.5 text-g1' />
                        </div>
                    </div>
                </div>

                <CustomTable
                    columns={columns}
                    data={paginatedData}
                    isPagination={true}
                    totalRecords={galleryData.length}
                    pagination={pagination}
                    handlePageChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default Gallery