//PRE

class Leaderboard {
    constructor() {
        this.map = new Map()
    }

    addScore(playerId, score) {
        if (this.map.has(playerId)) score += this.map.get(playerId)
        this.map.set(playerId, score)
    }

    top(k) {
        let c = 0
        let arr = [...this.map.values()].sort((a, b) => b - a)
        for (let i = 0; i < k; i++)
            c += arr[i];
        return c
    }

    reset(playerId) {
        this.map.set(playerId, 0)
    }
}

