"use strict";
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        // 每次循环减少最后i个已排序元素的比较
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // 使用解构赋值交换元素
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // 如果本轮没有交换，提前结束排序
        if (!swapped)
            break;
    }
    return arr;
}
// 测试
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("排序前:", nums); // 排序前: [64, 34, 25, 12, 22, 11, 90]
const sortedNums = bubbleSort([...nums]); // 使用扩展运算符保持原数组不变
console.log("排序后:", sortedNums); // 排序后: [11, 12, 22, 25, 34, 64, 90]
