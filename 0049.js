/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//yo
var groupAnagrams = function(strs) {
    const anagrams = strs.map(str =>
        str.split("").sort().join("")
    )

    const map = new Map()
    //btw you can merge 2 loops
    for(let i = 0; i < anagrams.length ; i++){
        const anagram = anagrams[i]
        if(!map.has(anagram)) map.set(anagram,[])
        map.get(anagram).push(strs[i])
    }


    return [...map.values()]
};
