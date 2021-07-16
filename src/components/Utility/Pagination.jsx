import React, { useState } from 'react'

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1); 
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    }

    return (
        <div className="dataContainer">
            {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
            ))}
        </div>
    )
}

export default Pagination
