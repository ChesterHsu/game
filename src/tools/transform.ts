// 數字轉為陣列
function numberToArray(num: number): number[] {
    const numFunc = (num) => Number(num);
    return Array.from(String(num), numFunc);
}

export { numberToArray };
