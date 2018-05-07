const {
  observable,
  autorun
} = require('mobx');

const obj = observable({a: 1});

autorun(() => console.log(obj.a));

obj.a++;

