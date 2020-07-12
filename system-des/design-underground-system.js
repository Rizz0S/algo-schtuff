/*
Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)

A customer with id card equal to id, gets in the station stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the station stationName at time t.

3. getAverageTime(string startStation, string endStation) 

Returns the average time to travel between the startStation and the endStation.
The average time is computed from all the previous traveling from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are consistent. That is, if a customer gets in at time t1 at 
some station, then it gets out at time t2 with t2 > t1. All events happen in chronological order.
*/

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * UndergroundSystem* obj = new UndergroundSystem();
 * obj->checkIn(id,stationName,t);
 * obj->checkOut(id,stationName,t);
 * double param_3 = obj->getAverageTime(startStation,endStation);
 */


 // station map:
 // {
 // 	endStation: {
 // 		startStation: {
 //				totalTime: totalTime,
 //				totalTrips: totalTrips
 // 	}
 // }

class UndergroundSystem {
  
    constructor() {
		this.stationMap = {};
		this.customerMap = {};
    }
    
    checkIn(id, stationName, t) {
    	// record start time
        this.customerMap[id] = {
        	checkIn: t,
        	startStation: startStation
        }

        // init station in map if it doesn't exist
        if (!this.stationMap[stationName]) {
        	this.stationMap[stationName] = {};
        }
    }
    
    checkOut(id, stationName, t) {
    	// grab values relevant to the previous trip
        let checkInTime = this.customerMap[id].checkIn;
        let startStation = this.customerMap[id].startStation;
        // calc time on train
        let timeOnTrain = (t - checkInTime);

        // add new vals
        this.stationMap[stationName].totalTrips++;
        this.stationMap[stationName].startStation.totalTime += timeOnTrain;
    }
    
    getAverageTime(startStation, endStation) {
        let firstAvg = this.stationMap.endStation.startStation.totalTime / this.stationMap[endStation][startStation]totalTrips;
        let secondAvg = this.stationMap.startStation.endStation.totalTime / this.stationMap[startStation][endStation]totalTrips;

        return ( (firstAvg + secondAvg) / 2);
    }
};

