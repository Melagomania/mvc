export function Model(data) {
  this.data = data;
} 

Model.prototype.incrementShownImageIndex = function() {
  if(this.shownImageIndex < this.data.length - 1) {
    this.shownImageIndex++;
  } else {
    this.shownImageIndex = 0;
  }
}

Model.prototype.decrementShownImageIndex = function() {
  if(this.shownImageIndex > 0) {
    this.shownImageIndex--;
  } else {
    this.shownImageIndex = this.data.length - 1;
  }
}

Model.prototype.incrementLikesCount = function() {
  this.data[this.shownImageIndex].likes++;
}

Model.prototype.getSortedData = function() {
  var result = this.data.slice();
  result.sort(function(a, b) {
    return a.likes - b.likes
  });
  return result;
}