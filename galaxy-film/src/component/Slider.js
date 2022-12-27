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
    return (
        <div >

            <Carousel>
                <Carousel.Item>
                    <img
                     src={'https://cdn.galaxycine.vn/media/2022/11/25/khaitruongnhatrang-digital-2048x682_1669346464818.jpg'}
                     className={'d-block w-100'}
                    />
                         <div style={{   
                    position: 'absolute',
                    display: 'flex',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 100,
                    justifyContent: 'end',
                    alignItems: 'start',
                    paddingRight: 150,
                    paddingTop: 50,
                }}>
                    <BookTickets style={styles.btn} />
                </div>
                  
                </Carousel.Item>
               
       
            </Carousel>
           

        </div>
    );
};
const styles = {
    btn: {
        top: 500,
        right: 10,
        padding: 6,
    }
};
export default MyComponent;