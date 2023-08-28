const symbolList=[',','.','、']
export function filterSymbol(list){
    list.forEach((item,index)=>{
     if(symbolList.includes(item)){
         list[index]=' '
     }
   })
}