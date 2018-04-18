import {Model} from './model';
import {ViewLike} from './view-like';
import {ViewTop} from './view-top';
import {ViewTop} from './view-photo';


export function Controller(model, viewPhoto, viewLike, viewTop) {
  var self = this;
  self.viewLike = viewLike;
  self.model = model;
  self.viewTop = viewTop;
  self.viewPhoto = viewPhoto;
  
  self.elements = {
    buttons: document.getElementsByClassName('button'),
    likesCounter: document.getElementsByClassName('likes-counter')[0],
    imageWrapper: document.getElementsByClassName('image-wrapper')[0]
  }

  self.init = function() {
    for(let i = 0; i < self.elements.buttons.length; i++) {
      self.elements.buttons[i].addEventListener('click', self.handleButtonClick);
    }
    
    self.model.shownImage = 0;
    self.viewPhoto.showPhoto(self.model.data[self.model.shownImage]);
    self.viewLike.printLikes(self.model.data[self.model.shownImage]);
  }

  self.handleButtonClick = function(e) {
    var targetId = e.target.id;
    switch(targetId) {
      case 'like':
      self.handleLikeClick();
      break;
      case 'prev':
      self.handlePrevClick();
      break;      
      case 'next':
      self.handleNextClick();
      break;      
    }
  }

  self.handleLikeClick = function() {
    console.log('like');
  }
  self.handlePrevClick = function() {
    console.log('prev');
  }
  self.handleNextClick = function() {
    console.log('next');
  }  
}