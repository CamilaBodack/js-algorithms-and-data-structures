function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  for(let collectionPosition=0; collectionPosition < collection.length; collectionPosition++){
    if(collection[collectionPosition].first === source.first || collection[collectionPosition].last === source.last){
      arr.push(collection[collectionPosition])
    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
