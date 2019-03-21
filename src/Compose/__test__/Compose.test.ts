import { compose } from '../Compose';

describe('compose', () => {
  it('can be seeded with multiple arguments', () => {
    const square = (x: number) => x * x;
    const add = (x: number, y: number) => x + y;
    expect(
      compose(
        square,
        add
      )(1, 2)
    ).toBe(9);
  });
  it('should return the first given argument if given no functions', () => {
    expect(compose()(1, 2)).toBe(1);
    expect(compose()(3)).toBe(3);
    expect(compose()()).toBe(undefined);
  });
  it('returns the first function if given only one', () => {
    const fn = () => {};

    expect(compose(fn)).toBe(fn);
  });
});
