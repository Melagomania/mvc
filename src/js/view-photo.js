export function ViewPhoto() {
  this.imageWrapper = document.getElementsByClassName('image-wrapper')[0];
} 

ViewPhoto.prototype.appendFirstImageToDOM = function(image){
  var img = document.createElement('img');
  img.setAttribute('src', image.path + image.src);
  img.id = 'img';
  this.imageWrapper.appendChild(img);
} 

ViewPhoto.prototype.changeImage = function(photo){
  var img = document.getElementById('img');
  img.setAttribute('src', photo.path + photo.src);
}