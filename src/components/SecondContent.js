import React from 'react'
import CarouselCard from './CarouselCard'

const cardDatas = [
  {
    id: 1,
    title: 'Manre Dolora Sit Am',
    subTitle: 'Ipsum Dolor Sit',
    rightName: 'Lorem',
    rightUnderlineName: 'Dolor Sit Amet Lor',
    buttonName: 'Ver Catalogo',
    pos: 1,
    active: true,
  },
  {
    id: 2,
    title: 'tester 123',
    subTitle: 'Ipsum Dolor Sit',
    rightName: 'Lorem',
    rightUnderlineName: 'Dolor Sit Amet Lor',
    buttonName: 'Ver Catalogo',
    pos: 2,
    active: true,
  },
  {
    id: 3,
    title: 'tester 12345',
    subTitle: 'Ipsum Dolor Sit',
    rightName: 'Lorem',
    rightUnderlineName: 'Dolor Sit Amet Lor',
    buttonName: 'Ver Catalogo',
    pos: 3,
    active: false,
  },
  {
    id: 4,
    title: 'tester 123456677',
    subTitle: 'Ipsum Dolor Sit',
    rightName: 'Lorem',
    rightUnderlineName: 'Dolor Sit Amet Lor',
    buttonName: 'Ver Catalogo',
    pos: 4,
    active: false,
  },
  {
    id: 5,
    title: 'Qewertwerrweqw',
    subTitle: 'Ipsum Dolor Sit',
    rightName: 'Lorem',
    rightUnderlineName: 'Dolor Sit Amet Lor',
    buttonName: 'Ver Catalogo',
    pos: 5,
    active: false,
  },
]

const detailsData = [
  {
    name: 'Jose P.',
    fullDetails: 'hizo un comentario sobre el producto',
    price: '1029',
  },
  {
    name: 'Jose P.',
    fullDetails: 'hizo un comentario sobre el producto',
    price: '356',
  },
  {
    name: 'Jose P.',
    fullDetails: 'hizo un comentario sobre el producto',
    price: '1029',
  },
  {
    name: 'Jose P.',
    fullDetails: 'hizo un comentario sobre el producto',
    price: '8546',
  },
  {
    name: 'Jose P.',
    fullDetails: 'hizo un comentario sobre el producto',
    price: '4548',
  },
]

function SecondContent() {
  const [cardIndex, setCardIndex] = React.useState(cardDatas)

  const handleLeftClick = (isLeft) => {
    const prevState = [...cardIndex]
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].id

    // reset
    prevState.find((f) => f.active === false).active = true

    // update
    prevState.find((f) => f.id === nextCardIdx).active = false

    // maximize pos
    prevState.find((f) => f.id === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos
        })
      ) + 1

    // update state
    setCardIndex(prevState)
  }

  const handleRightClick = () => {
    const prevState = [...cardIndex]
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active === true)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).id
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos
        })
      ) - 1
    // reset
    prevState.find((f) => f.active === false).active = true
    // update
    prevState.find((f) => f.id === nextCardIdx).active = false

    // update state
    setCardIndex(prevState)
  }

  return (
    <div className='mx-10 my-6'>
      <div className='bg-[#F9FAFA] rounded-md px-5 py-2 flex justify-between items-center'>
        <div className='w-1/2'>
          <h2 className='text-2xl'>Lorem Ipsum Dolor sit Amet</h2>
        </div>
        <div className='w-1/2 flex justify-end'>
          <button onClick={() => handleLeftClick()} className='mr-3'>
            <svg
              className='w-6 h-6 fill-current text-[#A2A2A2]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path d='M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z' />
            </svg>
          </button>
          <button onClick={() => handleRightClick()} className='mr-3'>
            <svg
              className='w-6 h-6 fill-current text-[#A2A2A2]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z' />
            </svg>
          </button>
        </div>
      </div>

      <div className='flex flex-row overflow-hidden'>
        {cardIndex
          .filter((f) => f.active === true)
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
          .map((card) => {
            return (
              <CarouselCard
                card={card}
                detailsData={detailsData}
              />
            )
          })}
      </div>
      
    </div>
  )
}

export default SecondContent
