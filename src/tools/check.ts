function excludeSame(dataValue: number[], enter: number): object {
    let flag = false;
    const toSet = new Set(dataValue);
    let result: number[] = [];

    if (toSet.has(enter)) {
        flag = false;
    } else {
        toSet.add(enter);
    }

    result = Array.from(toSet) as number[];

    return { result, flag };
}

export { excludeSame };
