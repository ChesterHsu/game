import { padNumberEnd } from './padNumber';

const nonRepetitiveNumberResult = new Set();

// 產生隨機數字 quantity: 需產隨機幾位數數的數量
function randomNumber(quantity: number): number {
    const result = Number(
        Math.floor(Math.random() * padNumberEnd(10, quantity + 1, 0)),
    );
    if (!checkRandomQuantity(quantity, result)) {
        randomNumber(quantity);
    }
    return result;
}

// 判斷是否有符合幾位數數量
function checkRandomQuantity(quantity: number, res: number): boolean {
    if (res.toString().length === quantity) {
        return true;
    } else {
        return false;
    }
}

// 產生隨機且不重複數字的數組
function nonRepetitiveNumber(quantity: number): number[] {
    const num = randomNumber(1);

    if (quantity > nonRepetitiveNumberResult.size) {
        if (!nonRepetitiveNumberResult.has(nonRepetitiveNumberResult)) {
            nonRepetitiveNumberResult.add(num);
        }
        nonRepetitiveNumber(quantity);
    }

    return Array.from(nonRepetitiveNumberResult) as number[];
}

export { randomNumber, nonRepetitiveNumber, checkRandomQuantity };
