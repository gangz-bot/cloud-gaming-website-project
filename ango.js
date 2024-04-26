
    var app = angular.module('myApp', []);
    app.controller('myController', function ($scope) {
      $scope.showText = false;

      $scope.blogs = [
    {
      title: 'Shooter Action Video',
      image: './img/blog-1.jpg', 
      description: 'We will explore the latest trends in video game development and discuss how they are shaping the future of the industry. From virtual reality to artificial intelligence, we will cover the most exciting and innovative developments in the world of gaming.',
      showDescription: false
    },

    {
      title: 'The Walking Dead',
      image: './img/blog-2.jpg', 
      description: 'we will take a closer look at the most popular multiplayer games of the moment and discuss what makes them so appealing to players. From fast-paced shooters to strategic battle royales, we will cover a wide range of genres and games that are sure to keep you entertained for hours.',
      showDescription: false
    },
    
    {
      title: 'Defense Of The Ancients',
      image: './img/blog-3.jpg', 
      description: 'we will delve into the world of esports and explore the growing phenomenon of professional video game competitions. From the history of esports to the current state of the industry, we will cover everything you need to know about this exciting and rapidly-growing field.',
      showDescription: false
    }
  ];
    });
