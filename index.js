// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]




function destructivelyAppendCat(){
    return(cats.push('Ralph'));
}

destructivelyAppendCat;





function destructivelyPrependCat(){
    return(cats.unshift('Bob'));
}

destructivelyPrependCat;




function destructivelyRemoveLastCat(){
    return(cats.pop());
}

destructivelyRemoveLastCat;





function destructivelyRemoveFirstCat(){
    return(cats.shift())
}

destructivelyRemoveFirstCat;



function appendCat(){
    const allcats = [...cats, "Broom",];
return cats, allcats;
}

appendCat;

function prependCat(){
    const allcats = ["Arnold", ...cats]
    return cats, allcats
}

prependCat;


function removeFirstCat(){
return cats.slice(1)
}

removeFirstCat;




function removeLastCat(){
    return cats.slice(0, -1)
}

removeLastCat;