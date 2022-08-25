function padNumberStart(num: number, quantity: number, padVal: number): number {
    const result = num.toString().padStart(quantity, padVal.toString());
    return Number(result);
}

function padNumberEnd(num: number, quantity: number, padVal: number): number {
    const result = num.toString().padEnd(quantity, padVal.toString());
    return Number(result);
}

export { padNumberStart, padNumberEnd };
