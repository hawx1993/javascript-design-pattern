/*
 * @Author: trigkit4 (trigkit@163.com)
 * @Date: 2019-04-03 16:06:10
 * Copyright © trigkit4. All rights reserved.
 */
const DI = function(dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function(func) {
  let deps = /^[^(]+\(([^)]+)/.exec(func.toString()) || [];

  //  build params bind array
  deps = deps
    ? deps[1].split(/\s?,\s?/).map(
        function(dep) {
          return this.dependency[dep];
        }.bind(this)
      )
    : [];

  return function() {
    return func.apply(this, deps);
  };
};
export default DI;
