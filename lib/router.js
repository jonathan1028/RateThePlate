Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('restaurants'); }
});

Router.route('/', {name: 'restaurantsList'});

Router.route('/restaurants/:_id', {
  name: 'restaurantPage',
  data: function() { return Restaurants.findOne(this.params._id); }
});

Router.route('/submit', {name: 'restaurantSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'restaurantSubmit'});
Router.onBeforeAction('dataNotFound', {only: 'restaurantPage'});