import React from 'react'

const Pagination = ({ PaginationHandle, prevUrl, nextUrl }) => {
    return (
        <div className="text-center">
            {prevUrl && <button className='btn btn-primary rounded m-1' onClick={() => {
                PaginationHandle("prev")

            }}>Previous</button>}

            {nextUrl && <button className='btn btn-primary rounded m-1' onClick={() => {
                PaginationHandle("next")
            }}>Next</button>}

        </div>)
}

export default Pagination