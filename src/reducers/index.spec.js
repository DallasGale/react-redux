import counter from './index';

describe('reducers', () => {

  describe('counter', () => {

    it('should provide initial state', () => {
      expect(counter(undefined, {})).toBe(0)
    });

    it('should handle INCREMENT action', () => {
      expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    });

    it('should handle DECREMENT action', () => {
      expect(counter(10, { type: 'DECREMENT' })).toBe(9)
    });

    it('should handle INCREMENT_IF_ODD action', () => {
      expect(counter(9, { type: 'INCREMENT_IF_ODD' })).toBe(10)
    });

    it('should handle INCREMENT_IF_ODD action', () => {
      expect(counter(10, { type: 'INCREMENT_IF_ODD' })).toBe(10)
    });

  });

});