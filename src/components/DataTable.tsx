import { DataGrid, GridColDef } from '@mui/x-data-grid'
import server_calls from '../api/server'
import { useGetData } from '../model/Advice'
import { useState } from 'react'
import Modal from './Modal'

interface DataTableProps {
  user_ID: string
}

const columns: GridColDef[] =[
  {field: 'advice', headerName: 'Liked Advice', flex:1}
]

function DataTable(props:DataTableProps) {
  const { rowData, getData } = useGetData(props.user_ID);
  const [ selectionModel, setSelectionModel ] = useState<string[]>([]);
  const [ open, setOpen ] = useState(false);

const deleteData = async () => {
  server_calls.deleteAdvice(selectionModel[0]);
  await getData();
  setTimeout( ()=> { window.location.reload()}, 1000)
}

const handleOpen = () => {
  setOpen(true)
}

const handleClose = () => {
  setOpen(false)
}

console.log(selectionModel)
  return (
    <>
      <Modal 
        user_ID={props.user_ID}
        id={selectionModel[0]}
        open={open}
        onClose={handleClose}
        />
    <div className='flex flex-row mt-20'>
      <div className="flex flex-col ml-10 pl-3">
        <button onClick={deleteData} className='my-3 bg-orange-100 hover:bg-slate-100 p-2 w-20 rounded-sm'>Delete</button>
        <button 
        onClick={handleOpen} 
        disabled={selectionModel.length > 1 || selectionModel.length === 0}
        className='my-3 bg-orange-100 hover:bg-slate-100 p-2 w-20 rounded-sm'>Update</button>
      </div>
          <div className= { "container mx-auto px-4" }>
            <DataGrid rows={rowData} columns={columns} 
            checkboxSelection={true}
            onRowSelectionModelChange={ (item:any)=> {
              setSelectionModel(item)
            }} />
          </div>
    </div>
    </>
  )
  };

export default DataTable
