import { expectEqual } from "../utils/assert";

type Index = number | null;

function binarySearch(nums: number[], val: number): Index {
    let L = 0;
    let R = nums.length - 1;
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        const Mv = nums[M];
        if (Mv === val) return M;
        if (Mv < val) {
            L = M + 1;
        } else {
            R = M - 1;
        }
    }
    return null;
}

console.log('binarySearch');

expectEqual(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 2), 2);
expectEqual(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 5), 5);
expectEqual(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 7), 7);
expectEqual(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 10), null);
expectEqual(binarySearch([], 10), null);
expectEqual(binarySearch([0], 0), 0);
expectEqual(binarySearch([1], 0), null);
expectEqual(binarySearch([1, 3], 3), 1);