import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Invoice";
import Header from "../../../Components/Header";


 const Invoice =()=> {

  const columns = [
    { field: 'id', headerName:"Id" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Name', headerName:"Name" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Email', headerName:"Email" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Age', headerName:"Age"  ,align:"center",headerAlign:"center"},
    { field: 'Phone', headerName:"Phone" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Address', headerName:"Address" ,flex:1 ,align:"center",headerAlign:"center"}, 
    { field: 'Cost', headerName:"Cost" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Date', headerName:"Date" ,flex:1 ,align:"center",headerAlign:"center", }]
   
  return (
    <div style={{ height: 700,}}>

      <Header title={"Invoice"} subtitle={"Welcome to this Page"}/>
       
    <DataGrid  rows={rows} columns={columns}
            
    checkboxSelection
    />
  </div>
  
  )
}
export default Invoice
