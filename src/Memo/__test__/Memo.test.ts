import { memoize } from '../Memo';

describe('Memo', () => {
  it('should return same value  while key not changed', () => {
    let i = 0;
    const counter = () => ++i;
    const memoized = memoize(counter);
    expect(memoized('foo')).toBe(1);
    expect(memoized('foo')).toBe(1);
    expect(memoized('bar')).toBe(2);
    expect(memoized('bar')).toBe(2);
  });
  it('should return different value while not cached', () => {
    let i = 0;
    const counter = () => ++i;
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
  });
});
