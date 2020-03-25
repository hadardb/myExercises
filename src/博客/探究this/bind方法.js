/*
 * @name: 文件
 * @Author: Haojin Sun
 * @Date: 2020-03-07 15:08:26
 * @LastEditors: Haojin Sun
 * @LastEditTime: 2020-03-07 16:25:33
 */
Function.prototype.bind2 = function () {
    var slice = Array.prototype.slice
    var thatFunc = this
    var thatArg = arguments[0]
    var args = slice.call(arguments, 1);
    return function () {
        var funcArgs = args.concat(slice.call(arguments))
        console.log(funcArgs)
        return thatFunc.apply(thatArg, funcArgs);
    }
}
let obj = {
    name: 'even',
    getName: function () {
        console.log(this.name)
    }
}
let obj2 = {
    name: 'even2'
}
let getName = obj.getName.bind2(obj2,1)
getName = getName.bind2(obj,2)
getName = getName.bind2(obj,3)
getName()
// obj.getName()

// 实现原理

// Does not work with `new funcA.bind(thisArg, args)`
if (!Function.prototype.bind) (function () {
    var slice = Array.prototype.slice;
    Function.prototype.bind = function () {
        var thatFunc = this, thatArg = arguments[0];
        var args = slice.call(arguments, 1);
        if (typeof thatFunc !== 'function') {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - ' +
                'what is trying to be bound is not callable');
        }
        return function () {
            var funcArgs = args.concat(slice.call(arguments))
            return thatFunc.apply(thatArg, funcArgs);
        };
    };
})();

