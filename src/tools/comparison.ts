// 比對數組陣列index是否一樣
function compareWithNumberArray(
    compareWith: number[],
    compared: number[],
): number[] {
    const result: number[] = [];
    compareWith.forEach((item: number, index: number) => {
        if (item === compared[index]) {
            result.push(index);
        }
    });
    return result;
}

// 計算1A2B數量並返還物件
function compareWith1A2B(compareWith: number[], compared: number[]): object {
    const a = compareWithNumberArray(compareWith, compared).length;
    let b = 0;
    const filter = excludeIndex(
        compared,
        compareWithNumberArray(compareWith, compared),
    );
    filter.forEach((item) => {
        if (compareWith.indexOf(item) !== -1) {
            b++;
        }
    });
    return { a, b };
}

// 排除richArray的資料 richArray為index陣列
function excludeIndex(lordArray: number[], richArray: number[]): number[] {
    return lordArray.filter((item: number, index: number) => {
        if (richArray.indexOf(index) === -1) {
            return item;
        }
    });
}

export { compareWithNumberArray, compareWith1A2B, excludeIndex };
