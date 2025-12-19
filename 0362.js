class HitCounter {

    constructor() {
        this.hits = []
    }

    hit(timestamp) {
        this.hits.push(timestamp)
    };

    getHits(timestamp, range = 300) {
        return this.hits.filter(x => x > timestamp - range).length
    };

}   