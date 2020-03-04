/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-04 16:14:54
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-04 16:19:23
 */
function Person(name) { this.name = name; };

Person.prototype.getName = function () { return this.name; };

var objectFactory = function () {
    var obj = new Object(),    // 从 Object.prototype 上克隆一个空的对象         
        Constructor = [].shift.call(arguments);    // 取得外部传入的构造器，此例是 Person

    obj.__proto__ = Constructor.prototype;    // 指向正确的原型    __proto__ 隐式原型   prototype 显式原型
    var ret = Constructor.apply(obj, arguments);    // 借用外部传入的构造器给 obj 设置属性 

    return typeof ret === 'object' ? ret : obj;     // 确保构造器总是会返回一个对象 
};

var a = objectFactory(Person, 'sven');

console.log(a.name);    // 输出：sven 
console.log(a.getName());     // 输出：sven 
console.log(Object.getPrototypeOf(a) === Person.prototype);      // 输出：true 