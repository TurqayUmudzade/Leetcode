class FreqStack {
    constructor() {
        this.freqMap = new Map();
        this.freqStackMap = new Map();
        this.maxFreq = 0;
    }

    push(val) {
        let count = 0, stack = [];
        if (this.freqMap.has(val)) count = this.freqMap.get(val);

        count += 1;
        this.freqMap.set(val, count);

        if (this.freqStackMap.has(count)) stack = this.freqStackMap.get(count);

        stack.push(val);
        this.freqStackMap.set(count, stack);

        if (this.maxFreq < count) this.maxFreq = count;

    }
    pop() {
        const popVal = this.freqStackMap.get(this.maxFreq).pop();
        this.freqMap.set(popVal, this.maxFreq - 1);

        if (!this.freqStackMap.get(this.maxFreq).length)
            this.maxFreq = this.maxFreq - 1;

        return popVal;
    }
}