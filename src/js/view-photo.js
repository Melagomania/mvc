export function ViewPhoto() {
  this.imageWrapper = document.getElementsByClassName('image-wrapper')[0];

  this.showPhoto = function(photo){
    var img = document.createElement('img');
    img.setAttribute('src', photo.path + photo.src);
    this.imageWrapper.appendChild(img);
  }
} 