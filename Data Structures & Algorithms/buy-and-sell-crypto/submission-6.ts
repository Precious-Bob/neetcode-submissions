class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let buyL = 0, sellR  = 1;
        let maxPrice = 0;

        // sell > buy = profit
        // buy > sell = loss

        while (sellR < prices.length){
            if (prices[sellR] > prices[buyL]){
                let profit = prices[sellR] - prices[buyL]
                // maxPrice = Math.max(maxPrice, profit)
                if (profit > maxPrice) maxPrice = profit
            }else {
                buyL = sellR
            }
            sellR++
        }
        return maxPrice

    }
}
