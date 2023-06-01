import Input from './Input'

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'


interface AdviceFormProps {
    id?: string,
    user_ID:string,
}

const AdviceInventoryForm = (props: AdviceFormProps) => {
    const { register, handleSubmit } = useForm({});
    const onSubmit = (data: any, event: any) => {
        console.log(data)
        if (props.id){
            server_calls.updateAdvice(data.advice, props.id, props.user_ID, ()=> {window.location.reload()})
            event.target.reset()
        }
    }
    return (

        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="advice">Advice</label>
                    <Input {...register('advice')} name="advice" placeholder="Advice"/>
                </div>
                <div className="flex p-1">
                    <button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdviceInventoryForm