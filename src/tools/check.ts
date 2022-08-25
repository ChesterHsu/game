function excludeSame(dataValue: number[], enter: number): object {
    let flag = false;
    const toSet = new Set(excludeFirstPlace(dataValue));
    let result: number[] = [];

    if (toSet.has(enter)) {
        flag = false;
    } else {
        toSet.add(enter);
    }

    result = Array.from(toSet) as number[];

    return { result, flag };
}

function excludeFirstPlace(firstPlace: number[]): number[] {
    return firstPlace.filter((fp: number, index: number) => {
        if (index === 0 && fp !== 0) {
            return fp;
        }
    });
}

export { excludeSame, excludeFirstPlace };
