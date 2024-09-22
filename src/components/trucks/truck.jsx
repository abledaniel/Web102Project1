import React from "react";
import './trucks.css'
import top from '../../assets/images/top.png'
const Truck = () => {
    return (
        <div className="Truck">
                    <a>
          <img src={top} className="logo_top" alt="React logo"/>
        </a>
            <body>
                <h1>FOOD TRUCK FAVORITES</h1>
            </body>
        </div>

    )
    
}
export default Truck;