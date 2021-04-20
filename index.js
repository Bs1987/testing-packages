// Dit is de plek waar onze functies komen te staan
function add(num1, num2) {
    return num1 + num2;
}


function findByName(names, user) {
    // 1. Itereer over de array heen met een for-loop
    // 2. Vergelijk iedere entry met de user die we moeten vinden
    // 3. Als de name overeen komen moet het hele object teruggegeven worden
    console.log(names)
    for (let i = 0; i < names.length; i++) {
        const currentUser = names[i];
        // console.log(currentUser.name);
        if (currentUser.name === user) {
            return currentUser;

        }
    }

    return null;
}


module.exports = {
    add: add,
    findByName: findByName,
}