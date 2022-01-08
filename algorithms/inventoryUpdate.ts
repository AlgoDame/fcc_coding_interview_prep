export {};

let curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

let newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

let result = [
    [88, "Bowling Ball"],
    [2, "Dirty Sock"],
    [3, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [5, "Microphone"],
    [7, "Toothpaste"]
];

let ans = newInv.map((item) => {
    let productName = item[1];
    curInv.find((element) => {
        let newProduct = element[1];
        newProduct;
        element[1] == productName;
        return element;
    });
});

ans;
