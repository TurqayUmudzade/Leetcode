const reverseWords = (s) => s.split(" ").map(str => [...str].reverse().join("")).join(" ");


let s = "Let's take LeetCode contest"

console.log(reverseWords(s));