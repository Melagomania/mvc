import {Model} from './model';
import {ViewLike} from './view-like';
import {ViewTop} from './view-top';
import {ViewTop} from './view-photo';


export function Controller(model, viewPhoto, viewLike, viewTop) {
  var _this = this;
  _this.model = model;
  _this.viewLike = viewLike;
  _this.viewPhoto = viewPhoto;
  _this.viewTop = viewTop;

  _this.buttons = document.getElementById('buttons-wrapper');
  
  _this.init = function() {
    _this.buttons.addEventListener('click', _this.handleButtonClick);

    _this.model.shownImageIndex = 0;
    _this.viewPhoto.appendFirstImageToDOM(_this.model.data[_this.model.shownImageIndex]);
    _this.viewLike.renderLikesCount(_this.model.data[_this.model.shownImageIndex].likes);
  }

  _this.handleButtonClick = function(e) {
    var targetId = e.target.id;

    switch(targetId) {
      case 'like':
        _this.handleLikeClick();
        break;
      case 'prev':
        _this.handlePrevClick();
        break;
      case 'next':
        _this.handleNextClick();
        break;
    }
  }
  
  _this.handleLikeClick = function() {
    _this.model.incrementLikesCount();
    _this.viewLike.renderLikesCount(_this.model.data[_this.model.shownImageIndex].likes);   
    _this.viewTop.renderImagesTop(model.getSortedData()); 
  }
  _this.handlePrevClick = function() {
    _this.model.decrementShownImageIndex();
    _this.viewPhoto.changeImage(_this.model.data[_this.model.shownImageIndex]);
    _this.viewLike.renderLikesCount(_this.model.data[_this.model.shownImageIndex].likes);    
  }
  _this.handleNextClick = function() {
    _this.model.incrementShownImageIndex();
    _this.viewPhoto.changeImage(_this.model.data[_this.model.shownImageIndex]);
    _this.viewLike.renderLikesCount(_this.model.data[_this.model.shownImageIndex].likes);    
  }  
}