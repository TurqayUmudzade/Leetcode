var ladderLength = function (beginWord, endWord, wordList) {
    const set = new Set(wordList)
    let queue = [beginWord];
    let steps = 1;

    while (queue.length) {
        const next = [];
        console.log(queue);
        // loop over each word in the queue
        for (let word of queue) {
            if (word === endWord) return steps;

            // loop over each char of the word 
            for (let i = 0; i < word.length; i++) {

                // and replace the char with letters from [a - z]
                for (let j = 0; j < 26; j++) {
                    const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

                    // if the new word exist in the word list add it to the queue
                    if (set.has(newWord)) {
                        next.push(newWord);
                        set.delete(newWord);
                    }
                }
            }
        }
        queue = next
        steps++;
    }
    return 0;
};