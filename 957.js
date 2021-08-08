var prisonAfterNDays = function (cells, N) {
    let nextDay = function (cells) {
        let newPrison = "";
        for (let i = 0; i < cells.length; i++) {
            if (cells[i - 1] == cells[i + 1]) newPrison += '1';
            else newPrison += '0';
        }
        return newPrison;
    }
    let prison = [...cells].join('');
    let history = [];
    while (N--) {
        prison = nextDay(prison);
        let lookUp = history.indexOf(prison); // cycle found, get the cycle position
        if (lookUp != -1) {
            let mod = N % (history.length - lookUp); // check how many extra moves after the cycle
            return history[lookUp + mod].split('');
        }
        history.push(prison);
    }
    return prison.split('');
};