class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

       const charCounts = {}

       for (let char of s) {
            charCounts[char] = (charCounts[char] || 0) + 1;
        }

         for (let char of t) {
            if (!charCounts[char]) return false; // Char doesn't exist or count is already 0
            charCounts[char]--;
        }

        return true;
    }
}
