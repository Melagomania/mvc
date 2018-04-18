import {Model} from './model';
import {ViewLike} from './view-like';
import {ViewTop} from './view-top';
import {Controller} from './controller';
import {ViewPhoto} from './view-photo';
var imagesData = require('../data/images.json');

var model = new Model(imagesData);
var viewPhoto = new ViewPhoto();
var viewLike = new ViewLike();
var viewTop = new ViewTop();
var controller = new Controller(model, viewPhoto, viewLike, viewTop);

controller.init();