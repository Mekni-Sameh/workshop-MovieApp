import React from 'react'

function Rate({rate}) {
    const RateArr=[1,2,3,4,5]
    return (
        <div className="rate">
            {RateArr.map((el,key)=>el <= rate ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>)}
        </div>
    )
}

export default Rate
