/*
// Given a binary string S, the task is to find the longest subsequence with that has equal number of 0s and 1s and all the 0s are present before all the 1s.
// "nput: S = “0011001111”
// Output: 8
// Explanation: By removing the 3rd and 4th characters, the string becomes 00001111.
// This is the longest possible subsequence following the given conditions.

// Input: S = “11001”
// Output: 2
// Explanation: The longest possible subsequence satisfying the conditions is “01”

// Input: S = “111100”
// Output: 0
// Explanation: There is no such subsequence that satisfies the conditions.
 */

function maxSubSequence(str) {
    let n = str.length;

    //make prefix sum of 0s
    //postifx sums from

    let pre = new Array(n).fill(0), post = new Array(n).fill(0)

    if(str[0] === '0') pre[0] = 1
    for(let i = 1; i<n;i++){
        if(str[i] === '0'){
            pre[i] =  pre[i -1] +1;
        }
        else{
            pre[i] = pre[i -1]
        }
    }

    if(str[n-1] === '1') post[n-1] = 1

    for(let i = n - 2; i>=0; i--){
        if(str[i] === '1'){
            post[i] =  post[i + 1] +1;
        }
        else{
            post[i] = post[i  + 1]
        }
    }

    let ans = 0;

    for(let i = 0; i< n; i++){
        ans = Math.max(ans, 2 * Math.min(pre[i], post[i]))
    }

    console.log('maxSubSequence',ans);

}

maxSubSequence('0011001111')
maxSubSequence('11001')
maxSubSequence('111100')
