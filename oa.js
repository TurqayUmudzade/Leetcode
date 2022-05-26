


// import {
//     MinPriorityQueue
// } from '@datastructures-js/priority-queue';

// function getItems(entries) {
//     let heap = new MinPriorityQueue()
//     let i = 0;
//     let out = []
//     for (const arr of entries) {
//         let [action, item, price] = arr
//         if (action === 'INSERT') {
//             heap.enqueue(item, price)
//         } else {
//             out.push(heap.toArray()[i].element)
//             i++
//         }

//     }
//     return out
// }
// console.log(getItems(entries));


function fillMissingBrackets(s) {
    let n = s.length, res = 0;
    if (n % 2 != 0)
        return res;
    for (let i = 2; i < n; i += 2) {
        let s1 = s.slice(0, i);
        let s2 = s.slice(i, n);
        if (isBalanced(s1) && isBalanced(s2)) {
            res++;
        }
    }
    return res;
}

function isBalanced(s) {
    let cnt1 = 0, cnt2 = 0, cnt3 = 0;
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c == '[' || c == ']') {
            cnt1 += (c == ']') ? -1 : 1;
        } else if (c == '(' || c == ')') {
            cnt2 += (c == ')') ? -1 : 1;
        } else {
            cnt3++;
        }
    }
    let sum = Math.abs(cnt1) + Math.abs(cnt2);
    if (sum == 0) {
        return cnt3 % 2 == 0;
    } else {
        return cnt3 == sum;
    }
}

let s = '(?]['
console.log(fillMissingBrackets(s));