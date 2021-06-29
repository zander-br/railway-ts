import { Either } from '@/shared/either';

describe('Either', () => {
  it('should return isleft equal to true for a left value', () => {
    const result = Either.left({ kind: 'error' });

    expect(result.isLeft()).toBeTruthy();
    expect(result.isRight()).toBeFalsy();
  });
});
