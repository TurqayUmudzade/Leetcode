var numJewelsInStones = function (jewels, stones) {
  let map = {};
  let num = 0;
  [...stones].forEach((stone) => {
    if (map[stone]) map[stone] += 1;
    else map[stone] = 1;
  });

  [...jewels].forEach((jew) => {
    if (map[jew]) num += map[jew];
  });
  return num;
};

numJewelsInStones("aA", "aAAbbb");
