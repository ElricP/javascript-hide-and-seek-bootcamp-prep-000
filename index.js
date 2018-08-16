
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll("ul.ranked-list li");
  for(let i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n;
  }
  return rankedList;
}

function deepestChild(){
  var index = "#grand-node";
  var current = document.querySelector(index);
  while(document.querySelector(index+" div") !== undefined){
    index +=" div";
  }
  current = document.querySelector(index);
  return current;
}