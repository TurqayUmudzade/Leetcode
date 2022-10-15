function playlist(songs) {

    for (let i = 0; i < songs.length; i++) {
        songs[i] = songs[i] % 60

    }
    let c = 0;
    let remains = Array.from({ length: 60 }, () => 0);
    for (let t of songs) {
        if (t == 0) c += remains[0];
        else c += remains[60 - t];

        remains[t]++;
    }
    return c;
};
