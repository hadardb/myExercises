/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-05 12:40:15
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-05 12:42:44
 */
window.name ='window'
 function a(){
     var name = 'a'
     b()
     function b(){
         var name = 'b'
         console.log(this.name)
     }
 }

 a()