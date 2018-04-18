export function ViewLike() {
  this.printLikes = function(photo) {
    var likesCounter = document.getElementsByClassName('likes-counter')[0];
    likesCounter.textContent = photo.likes;
  }
}