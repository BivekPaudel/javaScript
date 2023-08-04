// method of the array

// map

// let ar1 =[1,2,3,4]
// let arr2 = ar1.map((value, i)=>{
//     return value *2;
// })
// console.log(arr2)

//2. filter method {either true or false  if return}


// let array=[1,2,3,4]
//output=[2,3]
// let _output=array.filter((value,i)=>{
//     if(value===2){
//         return true
//     }
//     else if(value===3){
//         return true
//     }
//     else{
//         return false
//     }
    
// })
// console.log(_output)

// QUESTION

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

// filtering the positive number

// let input=[-1,-2,-3,-4,-5,6,5,4,3,2,1]
// let output=input.filter((value,i)=>{
//     if(value>0){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)

// filtering string
// let input=(hello)=>{
//     let output=hello.filter((value,i)=>{
//         if(typeof (value)==="string"){
//             return true
//         }
//         else{
//             return false
//         }
    
//     })
//     return output

// }
// let _output=input([1,2,3,'a','b','c',4])
// console.log(_output)

//3. find(if return false it will search for another element, if return true it will terminate the loop(output of find will be one of the element or)

// let input=[1,2,3,4,5,'ram','shyam']
// let output=input.find((value,i)=>{
//     if(value==='shyam'){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)





// 4. every{the output of every is either true or false. the output of every is true if all element is true else false}
// let input=[1,2,3,4]
// let output=input.every((value,i)=>{
//     if(value===1||value===2||value===3){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)


// Question

// let input=[18,19,20]
// let output=input.every((value,i)=>{
//     if(value>=18){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)

// using arrow function

// let input=(arr)=>{
//     let output=arr.every((value,i)=>{
//         if(value>=18){
//             return true
//         }
//         else{
//             return false
//         }
//     })
//     return output
// }
// let _output=input([55,44,33])
// console.log(_output)



//5. some{the output of some is either  true or false. some will return true if one of the element return true else false}


// let input=[1,2,3,4]
// let output=input.some((value,i)=>{
//     if(value===1||value===2||value===3){
//         return true
//     }
//     else{
//         return false
//     }
// })
// console.log(output)

// using arrow function

// Question

// let input=(arr)=>{
//     let output=arr.some((value,i)=>{
//         if(value>=18){
//             return true
//         }
//         else{
//             return false
//         }
//     })
//     return output
// }
// let _output=input([1,2,3,4,5,6,7,33])
// console.log(_output)


// 6. includes(it return either true or false)

// let array=['a','b','c',1]
// let _output=array.includes('a')
// console.log(_output)

// 7. length(it returns the  number of element in an array )

// let array=['a','b','c',1]
// let _output=array.length
// console.log(_output)

// let ar1=[1,2]

// if(ar1.length===0){
//     console.log("the array is empty")
// }
// else{
//     console.log("the array is not empty")
// }


//using arrow function
// let isArrayEmpty=(arr)=>{
    
//          if(isArrayEmpty.length===0){
//             return true
// }
//  else{
//      return false
//  }
// }
// let _output=isArrayEmpty([1,2,3,4])
// console.log(_output)


// 8. reverse

// using arrow function
//  let reverse=(Array)=>{
//   return Array.reverse()
//  }
//  console.log(reverse([1,2,3,4,5]))

// let arr=[1,2,3]
// let arr1=arr.reverse()
// console.log(arr1)

// Question

//  let input="abcd"
//  let splits=input.split('') //['a','b','c','d']
//  console.log(splits.reverse())
//  let join=splits.join('')
//  console.log(join)

// using function
// let input=(str)=>{
//   return str.split('').reverse().join('')
// }
// let reversedString=input('abcd')
// console.log(reversedString)


// 9. sort
// ascending sort

// using arrow function

//  let input=(arr)=>{
//   return arr.sort()
//  }
//  console.log(input(['d','c','b','a']))

// let array=['c','a']
// let arr=array.sort()
// console.log(arr)



// descending sort

// using arrow function

// let input=(arr)=>{
//   return arr.sort().reverse()
// }
// console.log(input(['a','c','d','b']))

// let array=['c','a']
// let arr=array.sort()
// let des=arr.reverse()
// console.log(des)

// Note: in java script number sort doesn't work properly


// let ar1=[9,10,11]
// console.log(ar1.sort())


// foreach loop

// let arr=['a',1,2,3]
// arr.forEach((value,i)=>{
// console.log(value)
// })

let arr=['nitan','ram','hari']
let ar1=arr.forEach((value,i)=>{
  console.log(`my name is ${value}`)
})

