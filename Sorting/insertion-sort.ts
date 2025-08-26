/*
* Performance characteristics. 
* Time: O(nˆ2) for random list. Close to O(n) for small or nearly sorted list. O(n) for sorted list.
* Space: O(1)
* Stable.
*/

function insertionSort(arr: number[]) {
    for (var i = 1; i < arr.length; i++) {
        var el = arr[i];
        var comp = i - 1;

        while (comp >= 0 && el < arr[comp]) {
            arr[comp + 1] = arr[comp];
            comp -= 1;
        }
        arr[comp] = el;
    }
    return arr;
}