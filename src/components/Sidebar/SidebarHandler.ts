import React from "react"
import { useLocation } from "react-router-dom"
import Routelist from "../../../routes/RouteList"

const SidebarHandler = ()=>{
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
    const sidebarMenu = Routelist.filter(value => value.label !== "").map((item) => {
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
      const x = location.pathname;

      const filteredData = NavList().filter((item) => {
          if (item.children && item.children.length > 0) {
              return item.children.some((child: any) => child.key === x);
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