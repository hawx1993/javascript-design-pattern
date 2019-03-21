/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-03-21 15:06:10
 * Copyright © trigkit4. All rights reserved.
 */
const memoize = function(func) {
  let cache = {};
  return function(key) {
    if (!cache[key])
      cache[key] = func.apply(this, arguments);// this => window
    return cache[key];
  }
}
export { memoize };
