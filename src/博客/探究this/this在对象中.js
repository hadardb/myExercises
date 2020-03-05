/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-05 09:16:40
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-05 09:24:54
 */

let obj = {
    name: 'even',
    getName: function () {
        console.log(this.name)
    }
}

obj.getName()

var name = 'window'
let obj2 = {
    name: 'par',
    son: {
        name: 'even',
        // 箭头函数下呢
        getName: () => {
            console.log(this)           // {}   
            console.log(this.name)      // undefined
        }
    }
}
obj2.son.getName()