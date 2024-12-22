import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllcounrty } from './features/counter/counterSlice'
import Listitem from './Listitem';

function Counrty() {

    const dispathc = useDispatch();
    const {users} = useSelector(store => store.user)
    console.log(users)

    useEffect(()=>{
        dispathc(getAllcounrty())
    },[])
  return (
    <div>
{
  users && users.map((item)=>(
    <Listitem key={item.id} item= {item}/>
  ))
}
    </div>
  )
}

export default Counrty
