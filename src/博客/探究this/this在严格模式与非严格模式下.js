/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-07 10:35:30
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-07 11:05:22
 */
"use strict";
var name = 'window2'
function A() {
    this.name = 'a'
    b.apply(this)
    function b() {
        var name = 'b'
        console.log(this.name)
    }
}
let a = {}
A.apply(a)