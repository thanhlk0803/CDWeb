import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/flim.css';
<<<<<<< HEAD
import { Link } from "react-router-dom";


export default function BookTickets(){
    const url ="/book-ticket"
=======
import { Link, useParams } from 'react-router-dom';


export default function BookTickets(){
  const url ="/book-ticket"
>>>>>>> main
    return (
        <>
        <div className="container" style={styles.class} >
                <div className="" >
                <div className="Column">
                <h2 style={styles.a}>Mua Vé Nhanh</h2>
                <div className="form-group">
                    <select className="form-select" placeholder="Country" >
                        <option>Chọn rạp</option>
                    </select>
                </div>
                <div className="form-group">    
                    <select className="form-select" placeholder="State" >
                        <option>chọn phim</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-select" placeholder="City">
                        <option>chọn ngày</option>
                    </select>
                </div>
                <div className="form-group">
                    <select className="form-select" placeholder="City">
                        <option>chọn suất</option>
                    </select>
                </div>
<<<<<<< HEAD
                <Link to={url} className="add btn btn-danger text-white text-uppercase" style={{margin:3}}>Đặt vé</Link>
=======
                <Link  type="submit" className="btn btn-success" to={url+"/1"}  style={styles.btn}>Mua vé</Link>
               
>>>>>>> main
                </div>
                </div>
            </div>
            
        
        </>
    )
}
const styles = {
    a:{
     color: 'black',
     
    },
     class: {
         opacity: 0.7,
         margin: 0,
         display: 'inline-block',
         width: 300,
     },
    
     lbl: {
         marginTop: 5,
         marginBottom: 5,
         
     },  
     btn: {
         width:100,
         marginRight:10
     }
   
 };