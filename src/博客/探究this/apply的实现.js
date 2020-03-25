/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-07 14:52:47
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-07 14:54:08
 */

let obj = {
    name: 'even',
    getName: function () {
    	console.log(this.name)		// 'even'
    }
}

let obj2 = {
    name : 'even2'
}

obj2.getName = obj.getName

obj2.getName()
delete obj2.getName