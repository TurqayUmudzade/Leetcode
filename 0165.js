let compareVersion = function (version1, version2) {
    let v1Array = version1.split('.');
    let v2Array = version2.split('.');
    let length = Math.max(v1Array.length, v2Array.length);

    for (let i = 0; i < length; i++) {
        let num1 = parseInt(v1Array[i]) || 0;
        let num2 = parseInt(v2Array[i]) || 0;
        console.log(num1, num2);

        if (num1 == num2) {
            continue;
        }

        return num1 > num2 ? 1 : -1;
    }

    return 0;
};

let version1 = "1.0.1",
    version2 = "1"
compareVersion(version1, version2)