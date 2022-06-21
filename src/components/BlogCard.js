import React from 'react'

function CarouselCard({blog}) {
  return (
    <div key={blog.id} className='w-2/5 flex-shrink-0'>
      <div className='bg-[#FAFAFA] rounded-md px-5 py-2'>
        <div className='w-full bg-[#FBFBFB] rounded-lg'>
          <div className='flex justify-between border-2 border-[#F9F9F9]'>
            <div className='w-1/5'>
              <div className='w-full h-full border border-[#A2A2A2]'></div>
            </div>
            <div className='w-4/5 p-5'>
              <h2 className='py-2'>{blog.title}</h2>
              <h2 className='pb-2'>{blog.subTitle}</h2>
              <hr className='py-2' />
              <div className='flex'>
                <div className='rounded-full h-6 w-6 bg-[#A2A2A2]'></div>
                <h2 className='pl-2 text-[#A2A2A2]'>{blog.name} | {blog.date} | {blog.time}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
