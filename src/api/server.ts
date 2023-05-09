import axios from "axios";
import { Advice } from "../model/Advice";

export const server_calls={

    getAdvice:(onSuccess:(advice:string)=>void)=> {
        axios.get('https://api.adviceslip.com/advice').then((res) => {
            onSuccess(res.data.slip.advice)});
    },


    getSingleAdvice:(user_ID:string, onSuccess:(advice:Advice[])=>void)=> {
        axios.get(`https://fantasy-whimsical-stingray.glitch.me/api/advice/${user_ID}`).then((res) =>{
            onSuccess(res.data)
        });
    },

    create:(advice:string, user_ID:string)=>{ 
        axios.post('https://fantasy-whimsical-stingray.glitch.me/api/advice',{advice:advice, user_ID:user_ID}).then()
    },


    deleteAdvice:(id:string) => {
        axios.delete(`https://fantasy-whimsical-stingray.glitch.me/api/advice/${id}`)
        console.log(id)
   }

}

export default server_calls