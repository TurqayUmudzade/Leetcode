/**
 * 355. Design Twitter
 *
 * Design a simplified version of Twitter with the following operations:
 *
 *   postTweet(userId, tweetId)
 *     Composes a new tweet with id `tweetId` by the user `userId`.
 *
 *   getNewsFeed(userId)
 *     Retrieves the 10 most recent tweet ids in the user's news feed. Each
 *     item in the news feed must be posted by users who the user followed or
 *     by the user herself. Tweets must be ordered from most recent to least
 *     recent.
 *
 *   follow(followerId, followeeId)
 *     The user with id `followerId` starts following the user with id
 *     `followeeId`.
 *
 *   unfollow(followerId, followeeId)
 *     The user with id `followerId` stops following the user with id
 *     `followeeId`.
 *
 * Example:
 *   twitter.postTweet(1, 5)     // user 1 posts tweet 5
 *   twitter.getNewsFeed(1)      // → [5]
 *   twitter.follow(1, 2)
 *   twitter.postTweet(2, 6)
 *   twitter.getNewsFeed(1)      // → [6, 5]
 *   twitter.unfollow(1, 2)
 *   twitter.getNewsFeed(1)      // → [5]
 *
 * Constraints:
 *   1 <= userId, followerId, followeeId <= 500
 *   0 <= tweetId <= 10^4
 *   All tweet ids are unique.
 *   At most 3 * 10^4 calls to postTweet, getNewsFeed, follow, and unfollow.
 */

class MinHeap {
  constructor(cmp = (a,b) => a-b) { this.h=[]; this.cmp=cmp; }
  push(v) { this.h.push(v); let i=this.h.length-1; while(i>0){const p=(i-1)>>1; if(this.cmp(this.h[i],this.h[p])<0){[this.h[i],this.h[p]]=[this.h[p],this.h[i]];i=p;}else break;} }
  pop() { const t=this.h[0],l=this.h.pop(); if(this.h.length){this.h[0]=l;let i=0;while(true){let m=i,a=2*i+1,b=2*i+2; if(a<this.h.length&&this.cmp(this.h[a],this.h[m])<0)m=a; if(b<this.h.length&&this.cmp(this.h[b],this.h[m])<0)m=b; if(m===i)break;[this.h[i],this.h[m]]=[this.h[m],this.h[i]];i=m;}} return t; }
  peek() { return this.h[0]; }
  size() { return this.h.length; }
}

class Twitter {
  constructor() {

  }

  /**
   * @param {number} userId
   * @param {number} tweetId
   * @return {void}
   */
  postTweet(userId, tweetId) {

  }

  /**
   * @param {number} userId
   * @return {number[]}
   */
  getNewsFeed(userId) {

  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  follow(followerId, followeeId) {

  }

  /**
   * @param {number} followerId
   * @param {number} followeeId
   * @return {void}
   */
  unfollow(followerId, followeeId) {

  }
}

// --- Tests ---
const twitter = new Twitter();
twitter.postTweet(1, 5);
console.assert(JSON.stringify(twitter.getNewsFeed(1)) === JSON.stringify([5]), 'Test 1 failed');

twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.assert(JSON.stringify(twitter.getNewsFeed(1)) === JSON.stringify([6, 5]), 'Test 2 failed');

twitter.unfollow(1, 2);
console.assert(JSON.stringify(twitter.getNewsFeed(1)) === JSON.stringify([5]), 'Test 3 failed');

// Feed capped at 10
const t2 = new Twitter();
for (let i = 1; i <= 12; i++) t2.postTweet(1, i);
console.assert(t2.getNewsFeed(1).length === 10, 'Test 4 failed: feed must be capped at 10');

console.log('All tests passed (or assertions above show failures)');
