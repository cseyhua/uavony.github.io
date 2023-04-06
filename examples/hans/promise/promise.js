console.log('手写Promise实现');

function UPromise(func) {
  // 定义三个常量表示Promise状态
  this.state = 'pendding';
  this.value = null;
  this.resolvedCallbacks = [];
  this.rejectedCallbacks = [];

  const _this = this;
  // resolve函数的功能：当正确响应时应该调用，并且设置state,value，通知回调函数执行
  function resolve(value) {
    // 设置状态
    _this.state = 'resolved';
    _this.value = value;
    setTimeout(() => {
      _this.resolvedCallbacks.forEach((callback) => callback(value));
    }, 0);
  }
  function reject(value) {
    _this.state = 'rejected';
    _this.value = value;
    setTimeout(() => {
      _this.rejectedCallbacks.forEach((callback) => callback(value));
    }, 0);
  }
  try {
    // 执行异步程序
    func(resolve, reject);
  } catch (err) {
    // 函数执行失败
    reject(err);
  }
}

// UPromise.prototype.then = function (onFulfilled, onReject) {
//   // 保存前一个promise的this
//   const self = this;
//   return new UPromise((resolve, reject) => {
//     // 封装前一个promise成功时执行的函数
//     let fulfilled = () => {
//       try {
//         const result = onFulfilled(self.value); // 承前
//         return result instanceof UPromise
//           ? result.then(resolve, reject)
//           : resolve(result); //启后
//       } catch (err) {
//         reject(err);
//       }
//     };
//     // 封装前一个promise失败时执行的函数
//     let rejected = () => {
//       try {
//         const result = onReject(self.reason);
//         return result instanceof UPromise
//           ? result.then(resolve, reject)
//           : reject(result);
//       } catch (err) {
//         reject(err);
//       }
//     };
//     switch (self.state) {
//       case 'pendding':
//         self.resolvedCallbacks.push(fulfilled);
//         self.rejectedCallbacks.push(rejected);
//         break;
//       case 'resolved':
//         fulfilled();
//         break;
//       case 'rejected':
//         rejected();
//         break;
//     }
//   });
// };
// 异步回调函数挂载
UPromise.prototype.then = function (onResolved, onRejected) {
  let _this = this;
  let res = null;

  return new UPromise((resolve, reject) => {
    let onResolve = () => {
      res = onResolved?.(_this.value) ?? _this.value;
      res instanceof UPromise ? res.then(resolve, reject) : resolve(res);
    };

    let onReject = () => {
      if (onRejected) {
        res = onRejected(_this.value);
        res instanceof UPromise ? res.then(resolve, reject) : resolve(res);
      } else {
        reject(_this.value);
      }
    };
    try {
      switch (_this.state) {
        case 'resolved':
          onResolve();
          break;
        case 'rejected':
          onReject();
          break;
        case 'pendding':
          _this.resolvedCallbacks.push(onResolve);
          _this.rejectedCallbacks.push(onReject);
      }
    } catch (err) {
      reject(err);
    }
  });
};

(function test() {
  new UPromise((resolve) => {
    console.log('start');
    setTimeout(() => {
      resolve(1);
    }, 0);
    console.log('end');
  })
    .then((v) => {
      return new UPromise((undefined, reject) => {
        reject(v + 10);
      });
    })
    .then(
      (v) => {
        console.log('2:', v);
      },
      (v) => {
        console.log('3:', v);
      }
    );
  // .then((v) => {
  //   console.log(v);
  // });
})();
