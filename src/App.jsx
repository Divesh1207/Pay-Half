import { useState } from 'react'
import Freind from './Freind/Freind'
import Price from './Price/Price'
import Select from './Select/Select'

import { cardData } from './Constants/Data';

//Every Thing is about State and Functions

function App() {
  const [show, isShow] = useState(false)
  const [friends, setFriends] = useState(cardData);
  const [selectFreind, setSelectFreind] = useState(null);
  // Initialize with some data



  const addFriend = (newFriend) => {
    setFriends([...friends, newFriend]);
  };
  const handleShow = () => {
    isShow((show) => !show)
  }
  const handleSelect = (freind) => {
    setSelectFreind(freind)
  }
  return (
    <>


      <div className='flex justify-center gap-8 mt-4'>
        <Freind Data={friends} handleShow={handleShow} onSelection={handleSelect} />
        <Price selectFreind={selectFreind}


        />
      </div>
      {show && <Select addFriend={addFriend} />}
    </>
  )
}

export default App
