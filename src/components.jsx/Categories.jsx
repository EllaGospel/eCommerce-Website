
function categories() {
  return (
    <>
    <div className="ml-12">
         
    <div className=' font-bold mt-24 mr-48 '>category</div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="people" className='ml-2'>People</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="premum" className='ml-2'>Premium</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="pet" className='ml-2'>Pet</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="food" className='ml-2'>Food</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="lankmarks" className='ml-2'>Landmarks</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="cities" className='ml-2'>Cities</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="nature" className='ml-2'>Nature</label>
    </div>

    <hr className='w-[45%]'/>
    <div className=' font-bold'>Price range</div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="Lower than $20" className='ml-2'>Lower than $20</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="$20-%100" className='ml-2'>$20-%100</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="$100-$200" className='ml-2'> $100-$200</label>
    </div>
    <div className='ml-3'>
    <input type="checkbox" className='cursor-pointer' />
    <label htmlFor="more than &200" className='ml-2'>More than $200</label>
    </div>
  
 </div>
    </>
  )
}

export default categories

