import React, {useState, useEffect} from "react";
import './trucks.css'
import top from '../../assets/images/top.png'
import { placeList } from "../../assets/placeList";
const Truck = () => {
    const [places, setProducts] = useState([]);
    useEffect(() => {
        setProducts(placeList)
    })
    return (
        <div className="Truck">
                    <a>
          <img src={top} className="logo_top" alt="React logo"/>
        </a>
            <body>
                <h1>FOOD TRUCK FAVORITES</h1>

                {places.map((item) => (
                    <li key ={item.id}>
                        <img src={item.image} className="place_img"/>
                    <h2>{item.name}</h2>
                    <p>{item.foodtype}</p>
                    <button>View Menu</button>
                </li>
                ))}
            </body>
        </div>

    )
    
}
export default Truck;