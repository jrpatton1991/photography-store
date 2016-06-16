angular.module('PhotographyStore').controller('PhotosController', PhotosController);

function PhotosController($http){

  // var descriptions = [
  //   {name: 'Machu Picchu', location: 'Machu Picchu, Cuzco, Peru', image: './images/machu-picchu.png'}
  //   ];

  var self = this;

    $http({
      method: 'GET',
      url: '/photos',
    }).then(function successCallback(response){
      console.log('success', response.data);
      self.photos = response.data;
    },
    function errorCallback(response){
      console.log(response)
    });


  return this;

};
