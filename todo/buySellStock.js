/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
};

console.log('should be 5: ',maxProfit([7,1,5,3,6,4])); // 5
console.log('should be 0', maxProfit([7,6,4,3,1])); // 0