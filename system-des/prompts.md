## System Design Question Prompts


>Implement a system to track runners in a marathon with leaderboard.

You have a million people running a marathon. The progress of the race is tracked via a series of check-points, A through Z. Describe 2 functions: first returns a list of 10 leaders in the race, second is called each time a person crosses a checkpoint and maintain data-structure for proper functioning of the first function.


>Design a parking lot with n spaces & tickets.

Design a system that monitors a parking lot with n spaces. If there is an available spot, a customer's car is parked and a ticket is given to the customer. To retrieve the location of their car when they come back, the customer turns in their ticket and the parking spot is made available again.

>Design a system to display real time stock data and prices

The system should analyze prices from 10 exchanges tracking 100000 stocksthat can service requests for the prices of a given stock at each exchange in sorted order.

> Design a data structure to retrieve top trending keywords.

Given 2 parameters as input:
Parameter 1: String Username
Parameter 2: Array of String containing the keywords tweeted by the user.

Function declaration: `function tweet(username, keywords[]){};`

__Example 1:__
```javascript
tweet("User1",["love","dog"])
tweet("User2",["cat"])
tweet("User3",["walk","cat"])
tweet("User2",["dog"])
tweet("User3",["like","dog"])

top trending keyword : Dog
```

__Follow up question:__ Given the timestamp of each tweet, design the data structure such that it is able to return the top trending keyword between a range of timestamps. Range can be of any granularity: Months, Days, hours, minutes, etc.