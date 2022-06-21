import React from 'react'

function CarouselCard({card, detailsData}) {
  return (
    <div key={card.id} className='w-3/5 flex-shrink-0'>
      <div className='bg-[#FAFAFA] rounded-md px-5 py-2'>
        <div className='border-2 border-[#A2A2A2] w-full bg-[#FBFBFB] px-5 py-4 rounded-lg'>
          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h2 className='text-md text-[#A2A2A2]'>{card.subTitle}</h2>
              <h2 className='text-xl'>{card.title}</h2>
            </div>
            <div className='w-1/2 flex justify-end items-center'>
              <div className='border-l-2 border-[#A2A2A2] h-14'></div>
              <div className='pl-7'>
                <h2 className='text-md text-[#A2A2A2]'>{card.rightName}</h2>
                <div className='h-6 w-32 border border-[#A2A2A2]'></div>
              </div>
            </div>
          </div>
          <div>
            {detailsData.map((detail, index) => {
              return (
                <div key={index}>
                  <div className='flex items-center py-2'>
                    <div className='w-4/5 flex items-center'>
                      <div className='border-2 border-gray-200 h-6 w-6 mr-2'></div>
                      <h2 className='font-bold pr-2 text-lg'>{detail.name}</h2>
                      <h2 className=' text-md'>{detail.fullDetails}</h2>
                      <h2 className='font-bold px-2 text-lg'>{detail.price}</h2>
                    </div>
                    <div className='w-1/5 flex justify-end'>
                      <svg
                        className='w-4 h-4 fill-current text-[#A2A2A2]'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 320 512'
                      >
                        <path d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z' />
                      </svg>
                    </div>
                  </div>
                  <hr className='border border-gray-200' />
                </div>
              )
            })}
          </div>
          <div className='flex justify-between items-center py-3'>
            <div>
              <h2 className='border-b border-[#A2A2A2] font-bold text-lg'>
                {card.rightUnderlineName}
              </h2>
            </div>
            <div>
              <button className='bg-[#A2A2A2] text-white px-5 py-2 text-md'>
                {card.buttonName}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard
