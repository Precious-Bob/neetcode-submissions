class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let l = 0 // buy
        let r = 1 // sell
        let maxPrice = 0

        while (r < prices.length ){
            if (prices[l] < prices[r]){
                let profit = prices[r] - prices[l]
                maxPrice = Math.max(maxPrice, profit)
            }else{
                l = r
            }
            r++;
        }
            return maxPrice;        
    }
}
