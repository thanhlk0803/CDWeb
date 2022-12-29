/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookTickets from "../component/BookTickets";
<<<<<<< HEAD
import { Carousel } from "react-bootstrap";
import '../css/flim.css';
const MyComponent = () => {
    return (
        <div >
            <Carousel fade>
                <Carousel.Item>

                    <img
                        src={'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg'}
                        className={'d-block w-100'}
                    />


                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={'https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
                        className={'d-block w-100'}
                    />


                </Carousel.Item>
                <Carousel.Item>

                    <img
                        src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='}
                        className={'d-block w-100'} />

                </Carousel.Item>

                <div style={{   
=======
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
>>>>>>> main
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
<<<<<<< HEAD


            </Carousel>
=======
                  
                </Carousel.Item>
               
       
            </Carousel>
           
>>>>>>> main

        </div>
    );

};
<<<<<<< HEAD

export default MyComponent;

const styles = {
    btn: {
        top: 50,
        right: 10,
        padding: 6,
    }
};
=======
const styles = {
    btn: {
        top: 500,
        right: 10,
        padding: 6,
    }
};
 export default MyComponent;
>>>>>>> main
