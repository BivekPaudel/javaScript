// filter greaterthan 17

// let input=(greater)=>{
//     let output=greater.filter((value,i)=>{
//         if(value >17){
//             return true
//         }
//         else{
//             return false
//         }
//     })
//     return output
// }
// let _output=input([22,11,23,53,12,13])
// console.log(_output)

// filter the poitive number

// let input=(numbers)=>{
//     let output=numbers.filter((value,i)=>{
//         if(value>0){
//             return true 
           
//         }
//         else{
            
//             return false
//         }
//     })
//     return output
// }
// let _output=input([1,2,3,4,-2,-3,-4,-12,6,7,8,9,-12,-122])
// console.log(_output)

// filtering string
// let input=(string)=>{
//     let output=string.filter((value,i)=>{
//         if(typeof (value)==='string'){
//             return true
//         }
//         else{
//             return false
//         }
//     })
//     return output
// }
// let _output=input([1,2,3,4,5,'a','b','c','d','e',6,7,8,9])
// console.log(_output)


//filter ["nitan", "ram","hari"] = ["nitan", "hari" ]  (fiter those string whose length is greater or equal to 4)
// let input=(string)=>{
//     let output=string.filter((value,i)=>{
//         if(value.length>=4){
//             return true
//         }
//         else{
//            return false
//         }
       
//     })
//     return output
// }
// let _output=input(["nitan","ram","hari","gopi"])
// console.log(_output)



// filter even number
//let input=[1,2,3,4,5,6,8,9,7]
//output=[2,4,6,8]
// let output=input.filter((value,i)=>{
//     if(value%2===0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)

// filter only truthy value

let input=(arr)=>{
    let output=arr.filter((value,i)=>{
        if(value){
            return true
        }
        else{
            return false
        }
    })
    return output
}
let _output=input([1,2,3,'','ram',false,true])
console.log(_output)