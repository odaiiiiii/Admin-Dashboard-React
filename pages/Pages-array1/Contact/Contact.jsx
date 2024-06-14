import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./DataContact";
import Header from "../../../Components/Header";




 const Contact =()=> {

  const columns = [
    { field: 'id', headerName:"Id" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Name', headerName:"Name" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Email', headerName:"Email" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Age', headerName:"Age"  ,align:"center",headerAlign:"center"},
    { field: 'Phone', headerName:"Phone" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'Address', headerName:"Address" ,flex:1 ,align:"center",headerAlign:"center"}, 
    { field: 'City', headerName:"City" ,flex:1 ,align:"center",headerAlign:"center"},
    { field: 'ZipCode', headerName:"ZipCode" ,flex:1 ,align:"center",headerAlign:"center", }]
   
  return (
    <div style={{ height: 700,}}>
      <Header title={"Contact"} subtitle={"Welcome to this Page"}/>
    <DataGrid  rows={rows} 
// @ts-ignore
    columns={columns}
            slots={{ toolbar: GridToolbar  }} 

    />
  </div>
  
  )
}
export default Contact
