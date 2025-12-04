
function useDashboardmetric(data) {
    function avgsal(data){
  if(!data?.length) return 0
  const total = data?.reduce((sum,val)=>sum + val.salary,0)
  return total
}
function maxsal(data){
 const max = data?.reduce((maxval,val)=>val.salary>maxval.salary?val:maxval)
 return max?.salary
}
  return [avgsal,maxsal]
}

export default useDashboardmetric
