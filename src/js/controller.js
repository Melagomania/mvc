import {Model} from './model';
import {ViewLike} from './view-like';
import {ViewTop} from './view-top';

export function Controller(view, model) {
  this.view = view;
  this.model = model;
}