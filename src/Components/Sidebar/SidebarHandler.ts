import Routelist from "../../routes/RouteList"

const SidebarHandler = ()=>{
  const NavList = ()=>{
    let sidebarMenu = Routelist.filter(value => value.label !== "").map((item, key) => {
      return {
        label: item.label,
        key: key,
        icon: item.icon,
        children: item.children.length > 0 ? item.children.map((child: any, i: number)=>{
          return {
            label: child.label,
            key: i,
            icon: child.icon,
          }
        }) : null
      }
    })
    return sidebarMenu
  }
  return { NavList }
}
export default SidebarHandler