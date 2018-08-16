
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}

function increaseRankBy(n){
  const rankedList = document.querySelectorAll("ul.ranked-list li");
  for(let i = 0; i < rankedList.length; i++){
    rankedList[i] = parseInt(rankedList[i]) + n;
  }
  return rankedList;
}