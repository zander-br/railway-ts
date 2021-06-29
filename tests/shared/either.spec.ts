import { Either } from '@/shared/either';

describe('Either', () => {
  it('should return isleft equal to true for a left value', () => {
    const result = Either.left({ kind: 'error' });
    expect(result.isLeft()).toBeTruthy();
    expect(result.isRight()).toBeFalsy();
  });

  it('should return isRight equal to true for a right value', () => {
    const result = Either.right(5);
    expect(result.isRight()).toBeTruthy();
    expect(result.isLeft()).toBeFalsy();
  });

  it('should return expected left for a left value', () => {
    const result = Either.left({ kind: 'error1' });
    result.fold(
      error => expect(error.kind).toEqual('error1'),
      () => fail('should be error'),
    );
  });

  it('should return expected right for a right value', () => {
    const result = Either.right(5);
    result.fold(
      error => fail(error),
      value => expect(value).toEqual(5),
    );
  });

  it('should getOrElse return default value for left', () => {
    const result = Either.left({ kind: 'error1' });

    expect(result.getOrElse(0)).toEqual(0);
  });
});
