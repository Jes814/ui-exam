import React from 'react'
import { Transition, Menu } from '@headlessui/react'

const barDatas = [
  {
    name: 'Inicio',
  },
  {
    name: 'Opcion 2',
  },
  {
    name: 'Opcion 3',
  },
  {
    name: 'Opcion 4',
  },
  {
    name: 'Opcion 5',
  },
  {
    name: 'Opcion 6',
  },
  {
    name: 'Opcion 7',
  },
  {
    name: 'Opcion 8',
  },
  {
    name: 'Opcion 9',
  },
  {
    name: 'Opcion 10',
  },
]
const dropdownDatas = [
  {
    img: '',
    name: 'Opcion 01',
  },
  {
    img: '',
    name: 'Opcion 02',
  },
]

function Header() {
  const [barsImage, setBarsImage] = React.useState(
    <svg
      className='w-5 h-5 fill-current text-white'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
    </svg>
  )
  const [openBars, setOpenBars] = React.useState(false)
  const [openDropDown, setOpenDropDown] = React.useState(false)
  const handleBarsDropdownClick = () => {
    setOpenBars(!openBars)
  }

  const handleBars = () => {
    setBarsImage(
      <svg
        className='w-5 h-5 fill-current text-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
      >
        <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
      </svg>
    )
  }

  const handleBarsStaggered = () => {
    setBarsImage(
      <svg
        className='w-5 h-5 fill-current text-white'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
      </svg>
    )
  }

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown)
  }

  return (
    <div className='bg-[#F9F9F9] flex justify-between'>
      <div className='w-1/2'>
        <div
          className='w-1/4 bg-white rounded-r-full shadow-md relative'
          onMouseEnter={() => handleBars()}
          onMouseLeave={() => handleBarsStaggered()}
        >
          <button
            onClick={() => handleBarsDropdownClick()}
            className='border border-[#A2A2A2] h-10 w-10 bg-[#A2A2A2] flex justify-center items-center'
          >
            {barsImage}
          </button>
        </div>
      </div>
      <Transition appear={true} show={openBars}>
        <Transition.Child
          className='bg-[#F9F9F9] fixed left-0 top-10 p-5 z-20 w-48 transition ease-in-out duration-700'
          enter='-translate-y-3 ease-in-out duration-700'
          enterFrom='-translate-y-3 duration-700'
          enterTo='translate-y-3 duration-700'
          leave='-translate-y-3 ease-out duration-700'
          leaveFrom='-translate-y-3 duration-700 opacity-100'
          leaveTo='-translate-y-3 opacity-0'
        >
          {barDatas.map((data, index) => {
            return (
              <div key={index}>
                <h2 className='p-1'>{data.name}</h2>
                <hr />
              </div>
            )
          })}
        </Transition.Child>
      </Transition>
      <div className='flex items-center justify-end w-1/2'>
        <div className='flex justify-end w-1/4 mr-5'>
          <div className='bg-[#A2A2A2] h-6 w-6 rounded-full mr-3'></div>
          <h3 className='mr-3'>Pedro P. </h3>
          <button onClick={() => handleDropDown()} className='mr-3 relative'>
            <svg
              className='w-3 h-3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path d='M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z' />
            </svg>
          </button>
        </div>
        <Transition appear={true} show={openDropDown}>
          <Transition.Child
            className='bg-[#F9F9F9] fixed mr-7 rounded-lg right-0 top-8 p-5 z-20 w-48 transition ease-in-out duration-700'
            enter='-translate-y-3 ease-in-out duration-700'
            enterFrom='-translate-y-3 duration-700'
            enterTo='translate-y-3 duration-700'
            leave='-translate-y-3 ease-out duration-700'
            leaveFrom='-translate-y-3 duration-700 opacity-100'
            leaveTo='-translate-y-3 opacity-0'
          >
            <div>
              {dropdownDatas.map((data, index) => {
                return (
                  <div className='flex items-center' key={index}>
                    <div
                      className='w-5 h-5 border border-[#A2A2A2]'
                      alt='user'
                    />
                    <h2 className='p-1'>{data.name}</h2>
                  </div>
                )
              })}
              <hr className='my-2' />
              <div className='flex items-center'>
                <div className='w-5 h-5 border border-[#A2A2A2]' alt='user' />
                <h2 className='p-1'>Salir</h2>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      </div>
    </div>
  )
}

export default Header
