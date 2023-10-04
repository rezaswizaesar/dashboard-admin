const handleAccessSidebar = (data: any[], targetRole: string) => {
  return data
    .filter((item: any) => item.role.includes(targetRole))
    .map((item: any) => ({
      ...item,
      children: item.children.filter((child: any) => child.role.includes(targetRole)),
    }));
}
export default handleAccessSidebar