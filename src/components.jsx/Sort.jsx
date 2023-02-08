
import{FaArrowUp,FaArrowDown} from 'react-icons/fa'
function Sort() {
  return (
    <>
     <div className='flex justify-between ml-12' >
           <div>
           <span className='font-bold'>Photography/</span>
           <span className='text-gray-400'>Premium</span>
          </div>
               <div className='mr-20'>
                 {/* <FaArrowUp/>
                 <FaArrowDown/> */}
                <span className='text-gray-400 '>sort by</span>
                <span>price</span>
                </div>
         </div> 
    </>
  )
}

export default Sort
