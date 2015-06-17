import TurtleDispatcher from '../dispatcher/TurtleDispatcher.js'
import {LOGIN_USER, LOGOUT_USER} from '../constants/login_constants';
import RouterContainer from '../services/router_container.js';
import eat from 'eat';

export default {
  loginUser: function(eat) {
    var savedEat = localStorage.getItem('eat');

    if(savedEat !== eat) {
      var nextPath = RouterContainer.get().getCurrentQuery.nextpath || '/dashboard';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('eat', eat);
    }

    TurtleDispatcher.dispatch({
      actionType: LOGIN_USER,
      eat: eat
    });
  },

  logoutUser: function(eat) {
    RouterContainer.get().transitionTo('/#/log_in');
    localStorage.removeItem('eat');
    TurtleDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}