var moveZeroes = function (nums) {
    let j = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            j++
        }
    }
};

var moveZeroes = function (arr) {

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {

        }


    }
};