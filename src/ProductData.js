import "./App.css"
function ProductData({Product, Addtocart}){
  return(
  <div className="flex">
    {
      Product.map((ProductItem, ProductIndex)=>{
return(
  <div  size='2' style={{width: '30%'}}>
   <div className="product">
   
    <img src={ProductItem.img} width={'100%'}/>
    <div>
      <div className="center">
    <p >{ProductItem.title}</p>
    
        <h5 >RS.{ProductItem.price}/-</h5>
    <button
    onClick={()=> Addtocart(ProductItem)}
    >Add To Cart</button>
    </div>
    </div>
   </div>
  </div>
)
      })
    }
  </div>

  )
}
export default ProductData;