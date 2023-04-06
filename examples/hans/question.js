// ===========================代码测试调用===============================
// TODO: 测试代码区域

// testObjectCreate();
// testInstanceof();
// testNew();
// testHPromise();

// ===========================功能函数编写===============================

// TODO: 手写Object.create：
/*
 * 通过指定新对象原型创建对象
 */
function _obejectCreate(proto) {
  function ObjFun() {}
  ObjFun.prototype = proto;
  return new ObjFun();
}

function testObjectCreate() {
  let arr = new Array(5);
  let obj = _obejectCreate(arr);
  console.log(Object.create(arr));
  console.log(obj);
}

// TODO: 手写instanceof方法：
/*
 * 通过判断给定对象原型链上是否有给定类型的构造函数原型，只能对引用类型做出正确的判断
 */
// HACK: 此函数还不能不能处理基本数据类型的正确判断
function _instanceof(obj, type) {
  if (Object.prototype.toString.call(type) === '[object Function]') {
    try {
      let proto = Object.getPrototypeOf(obj);
      while (proto !== type.prototype) {
        if (!proto) return false;
        proto = Object.getPrototypeOf(proto);
      }
      return true;
    } catch (err) {
      return false;
    }
  } else {
    throw Error('type: 必须是对象类型');
  }
}

function testInstanceof() {
  let objs = [1, true, '1', null, undefined, new Array(1), new Object()];
  let types = [Array, Object, Function, Map, Date, Set];

  for (let obj of objs) {
    console.log(types.map((v) => _instanceof(obj, v)));
  }
}

// TODO: 手写new操作符
/*
在使用new时发生了什么：
1、首先创建一个空的对象
2、设置原型，将对象的原型设置为函数的prototype对象
3、让函数的this指向这个新建对象，执行构造函数（为新对象添加属性）
4、判断函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象
*/

function _new() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  if (typeof constructor !== 'function') {
    throw Error('argument1: type error');
  }
  newObject = Object.create(constructor.prototype);
  let result = constructor.apply(newObject, arguments);
  let flag =
    result && (typeof result === 'object' || typeof result === 'function');
  return flag ? result : newObject;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function testNew() {
  console.log(_new(Person, 'nick', 23));
  console.log(Person('nick', 23));
}

// TODO: 手写Promise
// eslint-disable-line
function HPromise(fn) {
  var _this = this;
  this.state = 'PENDING';
  this.value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];
  function resolve(value) {
    if (value instanceof HPromise) {
      return value.then(resolve, reject);
    }
    setTimeout(() => {
      if (_this.state === 'PENDING') {
        _this.state = 'RESOLVED';
        _this.value = value;
        _this.resolvedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  function reject(value) {
    setTimeout(() => {
      if (_this.state === 'PENDING') {
        _this.state = 'REJECTED';
        _this.value = value;
        _this.rejectedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

HPromise.prototype.then = function (onResolved, onRejected) {
  onResolved =
    typeof onResolved === 'function'
      ? onResolved
      : function (value) {
          return value;
        };
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function (error) {
          throw error;
        };
  switch (this.state) {
    case 'PENDING':
      this.resolvedCallbacks.push(onResolved);
      this.rejectedCallbacks.push(onRejected);
      break;
    case 'REJECTED':
      onRejected(this.value);
      break;
    case 'RESOLVED':
      onResolved(this.value);
  }
};

function testHPromise() {
  new HPromise((resolve) => {
    console.log('定义一个5s计时器');
    setTimeout(() => {
      resolve('计时时间到');
    }, 0);
    console.log('Promise主体执行结束');
  })
    .then((value) => {
      console.log('成功调用异步函数,执行结果:', value);
    })
    .then((value) => {
      console.log(value);
    });
}
