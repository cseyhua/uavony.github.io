function asyncFn() {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.2) {
      resolve("success");
    } else {
      reject("faild");
    }
  });
}

async function runWithRetry(fn, times, timeOut) {
  for (let i = 1; i <= times; i++) {
    try {
      // eslint-disable-next-line
      let result = await Promise.race([fn, timeoutFn(timeOut)]);
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  throw new Error(" all tries failed");
}

function modifyPerson(person) {
  person.a = 3;
  person = { a: 2, b: 2 };
  return person;
}

let person = { a: 2, b: 3 };
modifyPerson(person);
console.log(person);
