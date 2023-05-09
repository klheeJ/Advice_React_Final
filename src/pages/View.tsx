import  server_calls from "../api/server"
import { useState } from 'react'
import { User } from "firebase/auth"


interface ViewProps {
  userNow: User
}


function View (props:ViewProps){

  const [advice, setAdvice] = useState("") 

  const showAdvice = () =>{
    console.log(advice)
  };

  return (
    <>
    <div className="flex flex-col gap-20 justify-center font-abc">
      <div className="flex flex-row justify-center items-center gap-20 mt-20">
          <button className="text-3xl hover:font-semibold text-indigo-500"onClick={ ()=>server_calls.getAdvice((newAdvice)=>setAdvice(newAdvice)) }>Click to Get Advice</button>
        <div className="italic tracking-wide">{advice}</div>
      </div>
      <div className="flex items-center gap-12 justify-center">
          <button className="text-lg hover:font-semibold" onClick={ ()=>server_calls.create(advice, props.userNow.uid)}>Save Advice To Your File</button>
          <button className="text-lg hover:font-semibold" onClick={ ()=>server_calls.getSingleAdvice(props.userNow.uid, (likedAdvices)=>console.log(likedAdvices))}>Add Saved Advice To Your List</button>
      </div>
    </div>
    </>
  )
}

export default View
