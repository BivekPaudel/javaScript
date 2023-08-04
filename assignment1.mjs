// 1. {make a arrow function  that takes input as [1,3,4,5] 
// it must return [3,9,8,15] here odd number is multiplied by 3 and even number is multiplied by 2}

// let prac=(input)=>{
//     let output=input.map((value,i)=>{
//         if(value%2===0){
//                    return value*2
            
//         }
//              else{
//              return value*3
//                }
//     })
//     return output
// }
// let  _prac=prac([1,3,4,5])
// console.log(_prac)


// 2. {Make an array of numbers that are doubles of the first array eg input [1,2,3,4] output must be [2,4,6,8]}

// let input=(arr)=>{
//     let output=arr.map((value,i)=>{
//         return value*2
//     })
//     return output
// }
// let _output=input([1,2,3,4])
// console.log(_output)




    // 3. { make a arrow function  that takes input as [1,2,3,4] it must return [2,0,6,0] 
//here odd index is multiplied by 0 and even index is multiplied by 2}
 
// let input=(arr)=>{
//     let output=arr.map((value,i)=>{
//         if(i%2===0){
//             return value*2
//         }
//         else{
//             return value*0
//         }
//     })
//     return output

// }
// let _output=input([1,2,3,4])
// console.log(_output)





// 4.{make a arrow function that takes a input and return its upperCase version}

// let input=(_input)=>{
//     return _input.toUpperCase()
// }
// console.log(input('bivek'))



// 5.{make a arrow function that takes a input and return its lowerCase version}

// let input=(_input)=>{
//     return _input.toLowerCase()
// }
// console.log(input('BIVEK poudEL'))

// 6. {arrow function that takes a input and return another string which is a trim version (remove both start and end space)}

// let input=(output)=>{
//     return output.trim()
// }
// console.log(input('    bivek    '))

// 7. make a arrow function that takes a input true if the string starts with Bearear else return false

// let input=(str)=>{
//     return str.startsWith('Be')
// }
// console.log(input('Bearer'))


// 8.make a arrow function that takse a sentence  and return another sentence where all nitan is converted to ram

// let arrow=['n','i','t','a','n']
// arrow.shift()
// arrow.shift()
// arrow.shift()
// arrow.shift()
// arrow.shift()
// console.log(arrow)
// arrow.unshift('r')
// arrow.unshift('a')
// arrow.unshift('m')
// console.log(arrow)



// 9. make a arrow function that takes input and return true if it Contain admin or superAdmin

// let input = ()=>{
//     let output='admin'
//     if(output=== admin){
//         return true
//     }
//     else{
//         return false
//     }

// }
// console.log(input())


// 10. make a arrow function that takes input as "    niTAn   " and return   "nitan"

// let input=(str)=>{
//     return str.trim().toLowerCase()

// }
// console.log(input('  niTan '))



// 11. make a arrow function that takes a sentence and return total number of letter in that sencence (using string.length)

// let input=(str)=>{
//     return str.length
// }
// console.log(input('bivek  '))

// 12. make a arrow function that takes input as word "my name is nitan" and it must conver the input to camelCase like "My Name Is Nitan"

let firstLetterCapital=(str)=>{
    let arr=str.split('')
    let output=arr.map((value,i)=>{
        if(i===0){
            return value.toUpperCase()
        }
        else{
            return value
        }
    })
    return output.join('')
}


let _input=['my','name','is','nitan'] //['My','Name','Is','Nitan']
let start=_input.map((value,i)=>{
// value='my'
let _value=firstLetterCapital(value)// 'My'
return _value
})
console.log(_value)