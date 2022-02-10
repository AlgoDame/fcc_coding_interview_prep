// var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']
// <!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
// Q: Sort the array as per the rules of card game using generic method.
// Choose language of your choice.
// Sample output is attached.

function cardsSort(cardsArr){
    const cardsObj = {
        Jack: 11,
        Queen: 12,
        King:13
    }

    return cardsArr.sort((a, b) =>{
        
        a = typeof a === "number" ? a : cardsObj[a]
        b = typeof b === "number" ? b : cardsObj[b]

        return a-b
    })
}

let result = cardsSort(["Jack", 8, 2, 6, "King", 5, 3, "Queen", "Queen"])
result