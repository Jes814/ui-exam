import React from 'react'
import FirstContent from './components/FirstContent'
import Header from './components/Header'
import SecondContent from './components/SecondContent'
import ThirdContent from './components/ThirdContent'

function App() {
  return (
    <div className='bg-[#F6F7F7] h-screen'>
      {/* Header */}
      <Header />

      {/* First Content */}
      <FirstContent />

      {/* Second Content */}
      <SecondContent />

      {/* Third Content */}
      <ThirdContent />
    </div>
  )
}

export default App
