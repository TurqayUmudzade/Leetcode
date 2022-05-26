function test() {
    right = Counter(s)
    left = defaultdict(int)
    ans = 0

    for i, c in enumerate(s[: -1]):
        right[c] -= 1
    left[c] += 1

    left_bra_diff = abs(left['['] - left[']'])
    left_par_diff = abs(left['('] - left[')'])
    left_diff = left_bra_diff + left_par_diff

    right_bra_diff = abs(right['['] - right[']'])
    right_par_diff = abs(right['('] - right[')'])
    right_diff = right_bra_diff + right_par_diff

    if (left_diff <= left['?'] and(left['?'] - left_diff) % 2 == 0) and(right_diff <= right['?'] and(right['?'] - right_diff) % 2 == 0):
        # print i
    ans += 1

}