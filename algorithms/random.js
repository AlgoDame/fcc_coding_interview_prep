let arr1 = [
    [88, "Bowling Ball"],
    [2, "Dirty Sock"],
    [3, "Hair Pin"],
    [5, "Microphone"],
    [3, "Half-Eaten Apple"],
    [7, "Toothpaste"]
];

arr1.sort(function (currItem, nextItem) {
    //Ternary function to avoid using if else
    console.log(currItem)
    console.log(nextItem)
    // return currItem[1] > nextItem[1] ? 1 : -1;
});

var votes = [
	{ title: 'Apple', votes: 1 },
	{ title: 'Milk', votes: 2 },
	{ title: 'Carrot', votes: 3 },
	{ title: 'Banana', votes: 2 }
];

votes.sort(function (vote1, vote2) {
	console.log(vote1);
	console.log(vote2);
});

var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){console.log("comparing " + a + ", " + b);return a - b}) //Array now becomes [7, 8, 25, 41]