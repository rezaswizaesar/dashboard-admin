import React, { useContext } from "react"
import { useLocation } from "react-router-dom"
import { AppContext } from "../../config/Context"
import handleAccessSidebar from "../../Helper/Handler/handleAccessSidebar"
import Routelist from "../../routes/RouteList"

const SidebarHandler = ()=>{
  const {state} = useContext(AppContext)
  const [current, setCurrent] = React.useState("")
  const [openKey, setOpenKey] = React.useState<any>("")
  const location = useLocation();
  const setupOpenkey = (item:any)=>{
      return item.children.map((child: any)=>{
        return {
          label: child.label,
          key: child.path,
          icon: child.icon,
          
        }
      })
  }
  const NavList = ()=>{
    const filteredData = handleAccessSidebar(Routelist, state?.profile?.typeUser);
    const sidebarMenu = filteredData.filter(value => value.label !== "").map((item) => {
      return {
        label: item.label,
        key: item.path,
        icon: item.icon,
        children: item.children.length > 0 ? setupOpenkey(item) : null
      }
    })
    return sidebarMenu
  }
  const handleClickSidebar = (newOpenKeys: any)=>{
    setOpenKey(newOpenKeys)
  }

  // Update openKey when the location changes
  React.useEffect(() => {
      const path_location = location.pathname;
      const filteredData = NavList().filter((item) => {
          if (item.children && item.children.length > 0) {
              return item.children.some((child: any) => child.key === path_location);
          }
          return false;
      });

      setOpenKey(filteredData.length > 0 ? [filteredData[0].key] : []);
  }, []);
  React.useEffect(()=>{
    if(window.location.pathname){
      setCurrent(window.location.pathname)
    }
  }, [window.location.pathname])
  return { NavList,handleClickSidebar, current, openKey }
}
export default SidebarHandler