export function ViewLike() {
  
}

ViewLike.prototype.renderLikesCount = function(likesAmount) {
  var likesCounter = document.getElementsByClassName('likes-counter')[0];
  likesCounter.textContent = likesAmount;
}