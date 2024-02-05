import React from 'react'

const Pagination = ({pagination,total,setPagination}) => {
    const handlePrev=()=>{
        if (pagination>1) {
         setPagination(pagination-1)
        }
     }
     const handleNext=()=>{
         if (pagination<total) {
             setPagination(pagination+1) 
            }    
     }
  return (
    <div>
        <button onClick={handlePrev}>Prev</button>
        <span>{`${pagination}/ ${total}`}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination