let arr;
let storage;

module.exports = function check(str, bracketsConfig) {
  arr = [];
  storage = [];
  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
    '|': '|',
    '1': '2',
    '3': '4',
    '5': '6',
    '7': '7',
    '8': '8',
  };

  arr = str.split('');

  for (let item of arr) {
     for (let key in pairs) {
        if (item === key && item === pairs[key]) {
           if (storage.length === 0) {
              storage.push(item);
              break;
           } else {
              if (key !== storage[storage.length - 1]) {
                 storage.push(item);
                 break;
              } else if (key === storage[storage.length - 1]) {
                 storage.pop();
                 break;
              } else {
                 return false;
              }
           }
        } else if (item === key && item !== pairs[key]) {
           storage.push(item);
           break;
        } else if (item === pairs[key]) {
           if (storage.length !== 0) {
              if (key === storage[storage.length - 1]) {
                 storage.pop();
                 break;
              } else {
                 return false;
              } 
           } else {
              return false;
           };
        };
     };
  };
  return storage.length === 0 ? true : false;
}
