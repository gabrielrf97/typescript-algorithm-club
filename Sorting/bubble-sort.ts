/*
* Performance characteristics:
* Time: O(n^2)
* Space: O(1)
* Unstable
*/

function bubbleSort(arr: number[]) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
}

