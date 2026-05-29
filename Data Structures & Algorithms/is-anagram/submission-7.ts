class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++){
            const charS = s[i];
            const charT = t[i];

            countS[charS] = (countS[charS] || 0) + 1;
            countT[charT] = (countT[charT] || 0) + 1;
        }
        for (const char in countS){
            if (countS[char] !== countT[char]) return false
        }
        return true;
    }
}
