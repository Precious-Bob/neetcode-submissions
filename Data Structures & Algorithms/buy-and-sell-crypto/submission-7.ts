class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyL = 0, sellR = 0;
        let maxProfit = 0
        
        while (sellR < prices.length){
            if (prices[buyL] < prices[sellR]){
                let profit = prices[sellR] - prices[buyL]
                maxProfit = Math.max(maxProfit, profit )
            }else{
                buyL = sellR
            }
            sellR++
        }
        return maxProfit
    }
}
