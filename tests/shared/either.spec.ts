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
});
