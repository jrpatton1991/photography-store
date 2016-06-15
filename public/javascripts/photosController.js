angular.module('PhotographyStore').controller('PhotosController', PhotosController);

function PhotosController(){

  var descriptions = [
    {name: 'Machu Picchu', location: 'Machu Picchu, Cuzco, Peru'},
    {name: 'Boat on a Tree', location: 'Dunsborough, WA, Australia'}
  ];
  
  this.products = descriptions;

};
