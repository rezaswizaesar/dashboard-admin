// import { useNavigate } from "react-router-dom";
import Routelist from "../../routes/RouteList";
import handleAccessSidebar from "./handleAccessSidebar";

const handleAccessRole = (typeUser: string, pathname: string)=>{
  // const navigate = useNavigate()
   const filteredData = handleAccessSidebar(Routelist,typeUser);
   const filterAccess =  filteredData.filter(item => {
      // Check if the current item's path is exactly "/master/pos-management"
      if (item.path === pathname) {
         return true;
      }
      // Check if the current item has children and any of them has the path "/master/pos-management"
      if (item.children && item.children.some((child:any) => child.path === pathname)) {
         return true;
      }
      // If neither condition is met, exclude the item from the filtered data
      return false;
   });
  
  return filterAccess
}
export default handleAccessRole