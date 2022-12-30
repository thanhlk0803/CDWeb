/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
export default function ModalLogin() {

  return (
    <div className="row">
        <div className="col">
            <input type="text" class="from-control" placeholder="First name" aria-label="First name"></input>
        </div>
        <div className="col">
        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input>
        </div>
    </div>
    
  );
}

