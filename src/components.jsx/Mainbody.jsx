 import shoes from "./images/shoes.jpg"
 import watch from "./images/watch.jpg"
 import earphone from "./images/earphone.jpg"
 import { useContext} from "react"
 import ProductContext from "./Context/ProductContext"

function Mainbody() {

  const {Products} = useContext(ProductContext)
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-[945px] mt-28">
          {Products.map(Product =>(
            <div key={Product.id} className=" bg-white rounded-md w-62 h-96">
              <div className="w-full h-52">
              <img className="w-full h-full "src={Product.thumbnail}alt="shoes for all"/>
              </div>
              <div className="text-centre my-2">
                <p className="text-slate">{Product.category}</p>
                <strong className="font-bold">{Product.tittle}</strong>
                <p className="font-bold text-lg italic ">${Product.price}</p>
                <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
              </div>
            </div>
           ))}
      </div>
   
       {/* <div className="p-2  bg-white rounded-md">
            <img className="w-full object-cover"src={shoes}alt="shoes for all"/>
            <div className="text-centre my-2">
               <p className="text-slate">unisex shoes</p>
               <strong className="font-bold">shoes</strong>
               <p className="font-bold text-lg italic ">$12.50</p>
               <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
               </div>
       </div> */}


       {/* <div className="p-2   bg-white rounded-md">
       <img className=" w-full object-cover"src={shoes}alt="shoes for all"/>
        <div className="text-centre my-2">
             <p className="text-slate">unisex shoes</p>
             <strong className="font-bold">shoes</strong>
             <p className="font-bold text-lg italic ">$12.50</p>
              <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
        </div>
       </div>

       <div className="p-2   bg-white rounded-md">
           <img className=" w-full object-cover"src={watch}alt="watch for all"/>
         <div className="text-centre my-2">
           <p className="text-slate">men's watch</p>
           <strong className="font-bold">watch</strong>
            <p className="font-bold text-lg italic ">$15.30</p>
            <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
        </div>
      </div>
      
       
       <div className="p-2   bg-white rounded-md">
           <img className=" w-full object-cover"src={earphone}alt="earphone for all"/>
         <div className="text-centre my-2">
              <p className="text-slate">handsfree</p>
              <strong className="font-bold">earphone</strong>
              <p className="font-bold text-lg italic ">$12.50</p>
              <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
          </div>
       </div>

       <div className="p-2  bg-white rounded-md">
           <img className=" w-full object-cover"src={watch}alt="watch for all"/>
         <div className="text-centre my-2">
           <p className="text-slate">men's watch</p>
           <strong className="font-bold">watch</strong>
            <p className="font-bold text-lg italic">$15.30</p>
            <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
        </div>
      </div>

      <div className="p-2  bg-white rounded-md">
           <img className="w-full object-cover"src={earphone}alt="earphone for all"/>
         <div className="text-centre my-2">
              <p className="text-slate">handsfree</p>
              <strong className="font-bold">earphone</strong>
              <p className="font-bold text-lg italic ">$12.50</p>
              <button className="hover:bg-slate-700 hover:scale-110 transition-all bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2">Add to Cart</button>
          </div>
       </div>
      

      

 
</div>  */}

    </>
  )
}

export default Mainbody
