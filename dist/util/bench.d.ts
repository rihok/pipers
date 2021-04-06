export declare function benchmark(func: () => void, iterations?: number): {
    min: number;
    max: number;
    average: number;
    toString(): string;
};
