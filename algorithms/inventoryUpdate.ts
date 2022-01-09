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

function updateInventory(currentInv, deliveryInv) {
    //update already existing product number with new products
    currentInv.forEach((element) => {
        deliveryInv.forEach((item) => {
            if (element[1] === item[1]) {
                element[0] += item[0];
            }
        });
    });

    // extract products names from each inventory

    let oldProducts = [];
    let newProducts = [];

    currentInv.forEach((item) => {
        oldProducts.push(item[1]);
    });

    deliveryInv.forEach((item) => {
        newProducts.push(item[1]);
    });

    // update currentInv with brand new products

    newProducts.forEach((product) => {
        if (oldProducts.indexOf(product) === -1) {
            let index = newProducts.indexOf(product);
            currentInv.push(deliveryInv[index]);
        }
    });

    //sort inner arrays in alphabetical order
    currentInv.sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
    });
}

// another approach
function inventoryUpdate(current, shipment) {
    shipment.forEach((shipmentProdcut, shipmentIndex) => {
        current.forEach((oldProduct, oldIndex) => {
            if (shipmentProdcut[1] === oldProduct[1]) {
                oldProduct[0] += shipmentProdcut[0];
                shipment.splice(shipmentIndex, 1);
            }
        });
    });

    let combinedInv = current.concat(shipment);
    combinedInv.sort((a, b) => {
        return a[1] > b[1] ? 1 : -1;
    });
}

updateInventory(curInv, newInv);
