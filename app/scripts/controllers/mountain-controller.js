define([
  'application',
	'backbone',
  'views/collection/mountain-collection-view',
  'collections/mountain-collection'
],
function( App, Backbone, MtnCollectionView, MountainCollection ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Mtn Controller");

      //get mountain 
      var mountain = new MountainCollection([]);
      mountain.getMountain( options ); 

      console.log('mountain', mountain)

      //show the MtnView
      App.mountainRegion.show( new MtnCollectionView( { collection : mountain } ) );
		},
	});

});