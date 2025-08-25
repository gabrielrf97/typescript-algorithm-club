export function expectEqual(actual: any, expected: any, message?: string) {
    if (actual !== expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}