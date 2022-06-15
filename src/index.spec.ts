import { describe, it, expect } from 'vitest';

import { SudokuBoard } from './types';
import {
  isNumberInRow, isNumberInColumn, isNumberInBox, isValidPlacement,
} from './index';

describe('sudoku solver', () => {
  const myBoard: SudokuBoard = [
    [7, 0, 2, 0, 5, 0, 6, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0],
    [1, 0, 0, 0, 0, 9, 5, 0, 0],
    [8, 0, 0, 0, 0, 0, 0, 9, 0],
    [0, 4, 3, 0, 0, 0, 7, 5, 0],
    [0, 9, 0, 0, 0, 0, 0, 0, 8],
    [0, 0, 9, 7, 0, 0, 0, 0, 5],
    [0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 4, 0, 2, 0, 3],
  ];

  describe('isNumberInRow', () => {
    it('should return true if the number is in the row', () => {
      expect(isNumberInRow(myBoard, 5, 0)).toBe(true);
    });

    it('should return false if the number is not in the row', () => {
      expect(isNumberInRow(myBoard, 1, 0)).toBe(false);
    });
  });

  describe('isNumberInColumn', () => {
    it('should return true if the number is in the column', () => {
      expect(isNumberInColumn(myBoard, 8, 0)).toBe(true);
    });

    it('should return false if the number is not in the column', () => {
      expect(isNumberInColumn(myBoard, 5, 0)).toBe(false);
    });
  });

  describe('isNumberInBox', () => {
    it('should return true if the number is in the box', () => {
      expect(isNumberInBox(myBoard, 7, 0, 0)).toBe(true);
    });

    it('should return true if the number is in the box', () => {
      expect(isNumberInBox(myBoard, 5, 0, 4)).toBe(true);
    });

    it('should return true if the number is not in the box', () => {
      expect(isNumberInBox(myBoard, 3, 8, 8)).toBe(true);
    });

    it('should return false if the number is not in the box', () => {
      expect(isNumberInBox(myBoard, 3, 0, 0)).toBe(false);
    });
  });

  describe('isValidPlacement', () => {
    it('should return true if the number can be placed', () => {
      expect(isValidPlacement(myBoard, 3, 0, 1)).toBe(true);
    });

    it('should return false if the number cannot be placed', () => {
      expect(isValidPlacement(myBoard, 7, 0, 1)).toBe(false);
    });
  });
});
