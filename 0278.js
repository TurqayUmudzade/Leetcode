var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left=1
        let right=n
        let ans=n
        while(left<=right){
            let mid=(left+right)/2 | 0
            if(isBadVersion(mid)){
                ans=mid
                right=mid-1
            }else {
                left=mid+1
            }
        }
        return ans
    };
};