import { User } from "firebase/auth"
import server_calls from "../api/server"
import { useState, useEffect } from "react"

interface AdviceProps {
    userNow: User
  }

export type Advice = {
    advice: string,
    id: string,
    user_ID: string
}

export type userID = {
    userNow: User
}

export const useGetData = (user_ID:string) => {
    const [ rowData, setData ] = useState<Advice[]>([])
    
    function handleDataFetch() {
         server_calls.getSingleAdvice(user_ID,(likedAdvices)=>setData(likedAdvices) )
    };

    useEffect( ()=> {
        handleDataFetch();
    },[])

    return { rowData, getData:handleDataFetch}
}