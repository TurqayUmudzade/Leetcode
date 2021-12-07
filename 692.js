import {
    MinPriorityQueue
} from '@datastructures-js/priority-queue';

var topKFrequent = function (words, k) {

    let map = new Map()
    for (const word of words) {
        if (!map.has(word)) map.set(word, 1)
        else map.set(word, map.get(word) + 1)
    }

    let heap = new MinPriorityQueue();

    for (const [key, val] of map.entries()) {
        heap.enqueue(key, val)
        if (heap.size() > k) heap.dequeue()
    }

    let ans = []
    for (const element of heap.toArray()) {
        ans.push(element.element)
    }

    return ans.sort()
};

const topKFrequent = (words, k) => {
    const wordCount = words.reduce((acc, word) => {
        acc[word] = acc[word] + 1 || 1;
        return acc;
    }, {});

    const orderedWords = Object
        .keys(wordCount)
        .sort((a, b) => {
            const count1 = wordCount[a];
            const count2 = wordCount[b];

            if (count1 === count2) {
                return a > b ? 1 : -1;
            } else {
                return count2 - count1;
            }
        });

    return orderedWords.slice(0, k);
};