let info={
    name:'bivek',
    age:22,
    isMarried:false,
    list:['apple','banana','mango'],
    product:{price:2200, color:"red"},
    sum:(a,b)=>{
        return a+b
    }

}
console.log(info.name)
console.log(info.isMarried)
console.log(info.list)
console.log(info.sum(1,2))
console.log(info.product)