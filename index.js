function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div#nested div div div.target')
}

function deepestChild(){
  let node = document.getElementById('grand-node')

  while (node){
    let nextNode = node.children[0]
    if (nextNode){
      node = nextNode
    } else {
      return node
    }
  }

  return node
}

function increaseRankBy(n){
  let rankedLists = document.querySelectorAll('.ranked-list')

  for (let rankedListChildren of rankedLists){
    let temp = rankedListChildren.children
    for (let child of temp) {
      child.innerHTML = parseInt(child.innerHTML) + n
    }
  }
}
