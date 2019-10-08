import { expect } from 'chai';
import Kava from '../src/Kava';

// Create instance
const kava = new Kava();

describe('Test', () => {
  it('should succeed', () => {
    // Check two primitive types
    const result = kava.isEqual(1, 1);
    expect(result).is.true; // eslint-disable-line
  });
  it('should throw exception', (done) => {
    try {
      // isEqual method throw an exception
      kava.isEqual(2, 'e');
      done('wrong');
    } catch (error) {
      expect(error).instanceOf(Error);
      done();
    }
  });
});
