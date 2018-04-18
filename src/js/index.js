import {Model} from './model';
import {ViewLike} from './view-like';
import {ViewTop} from './view-top';
import {Controller} from './controller';
import {ViewPhoto} from './view-photo';
var imagesCollection = require('../data/images.json');


var model = new Model(imagesCollection);
var viewPhoto = new ViewPhoto();
var viewLike = new ViewLike();
var controller = new Controller(model, viewPhoto, viewLike);

controller.init();
