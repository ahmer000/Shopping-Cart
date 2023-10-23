import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductData from "./ProductData";
import Cartlist from "./components/Cartlist";
function App (){
   const [Product, setProduct]  =useState([
        {
          id: 1,
          title: "Samsung Galaxy S7",
          price: 45500.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398399/samasung-galaxy-a51-8gb-8uh_tndbgv.jpg",
          quantity: 1,
        },
        {
          id: 2,
          title: "Moto G5 Plus",
          price: 53600.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398477/MotoGPowerDual_2021_Reformatted_1_330x_wp8gve.png",
          quantity: 1,
        },
        {
          id: 3,
          title: "Xiaomi Redmi Note 2",
          price: 66500.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398543/D7A7DA95-AEF8-228B-A2D2-A3FEBF237C33_y9p6wq.png",
          quantity: 1,
        },
        {
          id: 4,
          title: "Nokia G20",
          price: 34400.0,
          img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398698/nokia3_resize_md_qdw7bv.jpg",
          quantity: 1,
        },
        {
          id: 5,
          title: "Apple i phone",
          price: 44000.0,
          img: "https://www.91-img.com/gallery_images_uploads/3/d/3df5ca6a9b470f715b085991144a5b76e70da975.JPG?tr=h-550,w-0,c-at_max",
          quantity: 1,
        },
      ]);

      const [Cart, setCart]=useState([]);
        const [showCart, setShowCart]=useState(false);
    console.log(Cart);
      const Addtocart=(data)=>{
     console.log(data);
     setCart([...Cart , {...data, quantity : 1}])
      }
     const handleshow=(value)=>{
    setShowCart(value);
     }
    return(
    
        <>
        <Navbar count={Cart.length} handleshow={handleshow}/>
        {
          showCart ?
<Cartlist Cart={Cart} />:
< ProductData Product={Product} Addtocart={Addtocart}/>
        }
              
      
              </>
    )
};
export default App;