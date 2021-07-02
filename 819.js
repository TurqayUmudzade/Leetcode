const mostCommonWord = (paragraph, banned) => {
    const bannedSet = new Set(banned);
    const words = paragraph.toLowerCase().split(/\W+/);
    const map = {};
    let answer = { count: 0, word: '' }

    for (const w of words) {
        if (!bannedSet.has(w)) {
            if (map[w] == null) map[w] = 0;
            map[w]++;

            if (map[w] > answer.count) {
                answer.count = map[w]
                answer.word = w
            }
        }
    }

    return answer.word;
};