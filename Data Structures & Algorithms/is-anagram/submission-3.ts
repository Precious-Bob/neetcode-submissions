class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        let countS = {};
        let countT = {};

        for (let i = 0; i < s.length; i++) {
            let charS = s[i];
            let charT = t[i];

            countS[charS] = (countS[charS] || 0) + 1;
            countT[charT] = (countT[charT] || 0) + 1;
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) return false;
        }
        return true;
    }
}
