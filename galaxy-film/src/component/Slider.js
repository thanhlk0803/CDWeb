/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookTickets from "../component/BookTickets";
import {Carousel} from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { GetListFilm } from '../config';

function MyComponent ()  {
    const [ListSlider, setList] = useState([]);
  useEffect(() => {
    GetListFilm()
      .then((data) => {
        setList(data);
      
      })
      .catch((err) => console.log("error =>", err));
  }, []);
console.log(ListSlider);
    return (
        <div >
            <Carousel fade>
                
                <Carousel.Item>
                    <img
                     src={'https://cdn.galaxycine.vn/media/2022/11/25/khaitruongnhatrang-digital-2048x682_1669346464818.jpg'}
                     className={'d-block w-100'}
                    />
                    
                  
                </Carousel.Item>
                {ListSlider.map((course, index) => {
                <Carousel.Item  key={index} accessKey={index}>
                    <img
                    src={course.hinhanh}
                    className={'d-block w-100'}
                    />
                   
                </Carousel.Item>
            })}
                
            </Carousel>
            <BookTickets/>

        </div>
    );
};

export default MyComponent;