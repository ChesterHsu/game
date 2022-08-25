import {
    randomNumber,
    nonRepetitiveNumber,
    checkRandomQuantity,
} from '../tools/randomNumber';

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
