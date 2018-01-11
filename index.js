function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector("div.target")
}

function increaseRankBy(n) {
  const x = document.querySelectorAll("ul.ranked-list li")
  for (let i = 0; i < x.length; i++) {
  x[i].innerHTML = (parseInt(x[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild() {
  //the parent div labelled grand node
  const x = document.getElementById("grand-node")
  const y = x.getElementsByTagName("div")
  return y[y.length - 1]
}
//look for the ID that is "target", out of all nested id's
