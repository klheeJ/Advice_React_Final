import DataTable from "../components/DataTable"
import { User} from "firebase/auth"

interface AddProps {
  userNow: User
}

function Add(props:AddProps) {
  if(!props.userNow){
    return null
  }

  return (
    <DataTable user_ID={props.userNow?.uid} />
  )
}


export default Add
