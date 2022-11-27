import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/flim.css';
import {Datepicker, Dropdown, DateTimepicker} from 'bear-react-dropdown';



export default function BookTickets(){
    
    return (
        <>
        <section className="container">
            <div >
                <div className="row">
                    <div className="card">
                    <h3>Mua Vé Nhanh</h3>
                        <div className="col-xl-3 col-lg-4 col-md6 col-sm-12 flim-item">
                        <label className="card-body">theo phim</label>
                        <label className="card-body">theo ngày</label>
                        <label className="card-body">theo rạp</label>
                        </div>
                    </div>
                    
                    
                </div>
                <div>
        </div>
            </div>
        </section>
        </>
    )
}