/*A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

*/

// Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]

// Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

// Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]

// Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]

function invalidTransactions (data) {
	let invalid = [];
	let recentTransactionMap = new Map();

	data.sort((transactionA, transactionB) => {
		let [nameA, timeA, amountA, cityA] = transactionA.split(',');
		let [nameB, timeB, amountB, cityB] = transactionB.split(',');
		return amountB - amountA;
	});

	for (let i = 0; data.length; i++) {
		let [name, time, amount, city] = data[i].split(',');
		let lastTransactionTuple = recentTransactionMap.has(name) ? recentTransactionMap.get(name) : [city, null]
		let [lastCity, lastTime] = lastTransactionTuple;

		// record most recent transaction
		if (lastTime === null || lastTime < time) {
			recentTransactionMap.set(name, [city, amount]);
		}

		if (parseInt(amount) > 1000) {
			invalid.push(data[i]);
		} else {
			if (city !== lastCity && lastTime !== null && (time - lastTime <= 60)) {
				invalid.push(data[i]);
			}
		}
	}

	return invalid;
}


