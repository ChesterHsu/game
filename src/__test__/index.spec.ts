import {
    randomNumber,
    nonRepetitiveNumber,
    checkRandomQuantity,
} from '../tools/randomNumber';

import {
    compareWithNumberArray,
    compareWith1A2B,
    excludeIndex,
} from '../tools/comparison';

import { excludeSame } from '../tools/check';

test('檢查數字單位是否等於輸入數量', () => {
    const crq = checkRandomQuantity(3, 123);
    expect(crq).toBe(true);
});

test('檢查數字單位是否不等於輸入數量', () => {
    const crq = checkRandomQuantity(2, 123);
    expect(crq).toBe(false);
});

test('檢查隨機產生數字是否等於輸入數量', () => {
    const rn = randomNumber(2);
    expect(rn.toString().length).toBe(2);
});

test('檢查隨機產生數字是否等於輸入數量 && 其中數字沒有重複', () => {
    const rn = nonRepetitiveNumber(10);
    expect(rn.length === 10).toBe(true);
});

test('查找主陣列是否相同位置跟副陣列值相同', () => {
    const cwna = compareWithNumberArray([1, 2, 3, 4], [4, 2, 3, 1]);
    expect(cwna.toString()).toBe('1,2');
});

test('排除richArray的參數', () => {
    const e = excludeIndex([1, 2, 3, 4], [0, 1]);
    expect(e.toString()).toBe('3,4');
});

test('1A2B檢核', () => {
    const cw1a2b = compareWith1A2B([1, 2, 3, 4], [1, 3, 6, 4]);
    console.log(cw1a2b);
});

test('過濾掉重複值,並回傳是否已重複,若無重複則新增進陣列', () => {
    const es = excludeSame([1, 2, 3, 4], 5);
    console.log(es);
});
