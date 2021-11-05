// #move-glasses - transform: translate
// .item--svg-clip-path-svg image - transform: translate
// #group-glasses-01 - x, y
// #group-glasses-02 - x, y

let click = 0
let initX = 0
let initY = 0

const mouse = {x:0, y:0};

const moveGlasses = document.getElementById('move-glasses');
moveGlasses.addEventListener('mousedown', _moveGlasses);
window.addEventListener("mouseup", _dragFinish)
moveGlasses.addEventListener("touchstart", _moveGlasses)
window.addEventListener("touchend", _dragFinish)

const clipPath = document.querySelector('.item--svg-clip-path-svg image')
const glassLeft = document.getElementById('group-glasses-01')
const glassRight = document.getElementById('group-glasses-02')

const demoDiv = document.querySelector('.demo')

function _moveGlasses(e) {
  e.preventDefault()
  click = 1

  window.addEventListener('mousemove', _dragGlasses)
  window.addEventListener('touchmove', _dragGlasses)
}

function _dragGlasses(e) {
  if(click === 0) return false
  e = (e.changedTouches) ? e.changedTouches[0] : e;

  if(click === 1) {
    initX = e.clientX
    initY = e.pageY
  }

  mouse.x = e.pageX - initX
  mouse.y = e.pageY - initY

  console.log('mouse.x', initX)
  console.log('mouse.y', initY)

  moveGlasses.setAttribute('transform', `translate(${mouse.x}, ${mouse.y})`)
  glassLeft.setAttribute('transform', `translate(${mouse.x}, ${mouse.y})`)
  glassRight.setAttribute('transform', `translate(${mouse.x}, ${mouse.y})`)

  click++

}

function _dragFinish() {
  click = 0
}