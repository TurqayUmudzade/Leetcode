class Leaderboard {
    constructor() {
        this.map = new Map()
    }

    addScore(playerId, score) {
        if (this.map.has(playerId)) score += this.map.get(playerId)
        this.map.set(playerId, score)
    }

    top(k) {
      
    }

    reset(playerId) {
    }
}