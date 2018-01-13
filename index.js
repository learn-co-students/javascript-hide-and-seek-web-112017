function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function deepestChild() {
  return deepestChildHelper(document.querySelector("div#grand-node"))
}

function increaseRankBy(n) {
  let elementsRanked = document.querySelectorAll(".ranked-list li")
  for (let i = 0; i<Object.keys(elementsRanked).length; i++) {
    elementsRanked[i].innerHTML = (parseInt(elementsRanked[i].innerHTML)) + n
  }
}

function deepestChildHelper(node) {
  if (node.children.length < 1) {
    return node
  } else {
    for (let i = 0; i < node.children.length; i++) {
      return deepestChildHelper(node.children[i])
    }
  }
}
