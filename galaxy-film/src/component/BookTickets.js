import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/flim.css';


export default function BookTickets(){
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
                <button type="submit" className="btn btn-success" style={styles.btn}>Mua vé</button>
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