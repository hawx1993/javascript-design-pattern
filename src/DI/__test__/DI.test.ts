import DI from '../DI';

const WANTED_INJECT_DEPS = {
  dep1: function() {
    return 'dep1';
  },
  dep2: function() {
    return 'dep2';
  },
  dep3: function() {
    return 'dep3';
  },
};
describe('DI', () => {
  it('should return  dep1->dep2->dep3 while get deps', () => {
    const di = new DI(WANTED_INJECT_DEPS);
    const injectedStr = di.inject((dep1, dep2, dep3) => {
      return [dep1(), dep2(), dep3()].join('->');
    });
    expect(injectedStr()).toBe('dep1->dep2->dep3');
  });
});
