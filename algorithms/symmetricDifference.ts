//A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

function symDiff(arr1: number[], arr2: number[]) {
    let diff1 = arr1.filter((item) => !arr2.includes(item));
    let diff2 = arr2.filter((item) => !arr1.includes(item));
    let symdiff = diff1.concat(diff2);
    return symdiff;
}

symDiff([1, 2, 3], [2, 3, 4]);
