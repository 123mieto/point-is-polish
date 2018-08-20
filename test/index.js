import assert from 'assert'
import isInPoland from "../src/index";

describe('index', () => {
  describe('#isInPoland()', () => {
    it('should return true when point is in Poland', () => {
      assert.equal(isInPoland(20, 50), true);
    });
    it('should return false when point is out of Poland', () => {
      assert.equal(isInPoland(9, 0), false);
    });
    it('should return true when point is at boundary of Poland', () => {
      assert.equal(isInPoland(14.273692254000139, 53.70062897300008), true);
    });
    it('should return false when point is not a number', () => {
      assert.equal(isInPoland('lat', 'lng'), false);
    });
  });
});
