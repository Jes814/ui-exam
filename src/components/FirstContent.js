import React from 'react'

function FirstContent() {
  return (
    <div className='mx-10 my-6'>
      <div className='grid grid-cols-4 gap-4'>
        <div className='bg-[#FAFAFA] rounded-md flex justify-between items-center p-2'>
          <div className='w-10 h-10 border border-[#A2A2A2] w-2/5'></div>
          <div className='w-3/5 flex justify-center'>
            <button className='bg-[#A2A2A2] mx-5 text-white py-1 w-full'>
              Lorem Ipsum
            </button>
          </div>
        </div>
        <div className='bg-[#FAFAFA] rounded-md flex justify-between items-center p-2'>
          <div className='w-3/5 flex items-center'>
            <div className='w-12 h-12 border border-[#A2A2A2] w-1/2'></div>
            <div className='w-1/2 ml-1'>
                <h2>Lorem Ipsum Dolor sit</h2>
            </div>
          </div>
          <div className='w-2/5 flex justify-center'>
            <button className='bg-[#A2A2A2] mx-5 text-white py-1 w-full'>
              Lorem Ipsum
            </button>
          </div>
        </div>
        <div className='bg-[#FAFAFA] rounded-md flex justify-between items-center p-2'>
          <div className='w-3/5 flex items-center'>
            <div className='w-12 h-12 border border-[#A2A2A2] w-1/2'></div>
            <div className='w-1/2 ml-1'>
                <h2>Lorem Ipsum Dolor sit</h2>
            </div>
          </div>
          <div className='w-2/5 flex justify-center'>
            <button className='bg-[#A2A2A2] mx-5 text-white py-1 w-full'>
              Lorem Ipsum
            </button>
          </div>
        </div>
        <div className='bg-[#FAFAFA] rounded-md flex justify-between items-center p-2'>
          <div className='w-3/5 flex items-center'>
            <div className='w-12 h-12 border border-[#A2A2A2] w-1/2'></div>
            <div className='w-1/2 ml-1'>
                <h2>Lorem Ipsum Dolor sit</h2>
            </div>
          </div>
          <div className='w-2/5 flex justify-center'>
            <button className='bg-[#A2A2A2] mx-5 text-white py-1 w-full'>
              Lorem Ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstContent
