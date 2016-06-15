angular.module('PhotographyStore').controller('PhotosController', PhotosController);

function PhotosController(){

  var descriptions = [
    {name: 'Machu Picchu', location: 'Machu Picchu, Cuzco, Peru', image: './images/machu-picchu.png'}
  ];

  this.products = descriptions;

};
