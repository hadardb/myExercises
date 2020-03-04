/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-04 15:01:49
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-04 15:04:53
 */
var myObject = (function(){
    var __name = 'seven'
    return {
        getName: function(){
            return __name
        }
    }
})()
console.log(myObject)
