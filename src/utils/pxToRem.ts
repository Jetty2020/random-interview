import { ROOT_FONT_SIZE } from '../constants';

export const pxToRem = (...nums: number[]) => {
  return nums.map((num) => (num ? `${num / ROOT_FONT_SIZE}rem` : 0)).join(' ');
};
