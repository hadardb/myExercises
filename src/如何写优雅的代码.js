/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-27 09:29:39
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-27 13:51:54
 */

//  单一职责原则
// 一个程序只做好一件事
// 如果功能过于复杂就拆分开，每个部分保持独立

// 开放/封闭原则
// 对扩展开放，对修改封闭
// 增加需求时，扩展新代码，而非修改已有代码

// 1.题目：编写一个函数，它接受一个由10个整数组成的数组（0到9之间的数组），
// 该函数以形似(123) 456-7890的电话号码的形式返回这些数字的字符串。

 let returns =  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
console.log(returns)
/**
 * @name: 
 * @param {arr} arr
 * @param {String}  type   转换后的形式
 * @return {String}  "(xxx) xxx-xxxx"
 */
function createPhoneNumber(arr, type) {
   var type = type || "(xxx) xxx-xxxx"
   let i = 0
   return type.replace(/x/g,()=> arr[i++])
}


// 给定一个数组，找到出现奇数次的数字
   // 将始终只有一个整数出现奇数次

let number = findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]); // => returns -1
console.log(number)
/**
 * @name: 
 * @param {arr}  arr
 * @return {String}  符合条件的值
 */
function findOdd(arr){
   let showNumber = arr.reduce((all,item,index)=>{
      if(!all[item]){
         all[item] = 1
      }else{
         all[item]++
      }
      return all
   },{})
   console.log(showNumber)
   return arr.filter(function(item){
      return showNumber[item] % 2 == 1
   }).toString()
}

