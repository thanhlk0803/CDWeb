import React from 'react';

export  default function DetaiPage(){
   
    return(
        <>
        <section className='flim'>
        <div className='row'>
            <div>
            <img src={course.hinhanh} className="card-img-top" alt="..." />
            </div>
            <div>
            <h5 className="card-title">{course.tenphim}</h5>
            </div>
        </div>

        </section>
        
        </>
    )
}