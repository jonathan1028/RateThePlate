Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('restaurants'), 
      Meteor.subscribe('plates'),
      Meteor.subscribe('reviews'),
      Meteor.subscribe('comments')
      ]; 
  }
});

Router.route('/', {name: 'restaurantsList'});

Router.route('/restaurants/:_id', {
  name: 'restaurantPage',
  data: function() { return Restaurants.findOne(this.params._id); }
});

Router.route('/submit', {name: 'restaurantSubmit'});

Router.route('/restaurants/:_id/addPlate', {
  name: 'plateSubmit', 
  data: function() { return Restaurants.findOne(this.params._id); }
});

Router.route('/restaurants/:_id/edit', {
name: 'restaurantEdit',
data: function() { return Restaurants.findOne(this.params._id); }
});

Router.route('/plates/:_id/edit', {
name: 'plateEdit',
data: function() { return Plates.findOne(this.params._id); }
});


Router.route('/plates/:_id', {
  name: 'platePage',
  data: function() { return Plates.findOne(this.params._id); }
});

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