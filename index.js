function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

    for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = parseInt((lis[i]).innerHTML) + n
      }
}

function deepestChild() {
let divList = document.getElementById('grand-node')
  let nextDiv = divList.children[0]

  while (nextDiv) {
    divList = nextDiv
    nextDiv = divList.children[0]
  }

  return divList
}
