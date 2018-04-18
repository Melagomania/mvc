export function ViewTop() {
  this.topList = document.getElementById('top-list');
}

ViewTop.prototype.renderImagesTop = function(data) {
  this.clearImagesTop();
  var el;
  for(let i of data) {
    el = document.createElement('li');
    el.textContent = i.name + ' ' + i.likes + ' likes';
    this.topList.appendChild(el);
  }
}

ViewTop.prototype.clearImagesTop = function(data) {
  while(this.topList.firstChild) {
    this.topList.removeChild(this.topList.firstChild);
  }
}