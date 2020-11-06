function warnTheSheep(queue) {
    // your code here
    let sheepIndex = queue.length - queue.indexOf('wolf') -1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
     return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");


