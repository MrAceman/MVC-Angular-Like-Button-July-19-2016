function MainController ($scope){

  $scope.numOfLikes = '';

    $scope.totalLikes = function (numOfLikes){
      let x = (numOfLikes + " likes");
      if (numOfLikes === 1){
        x = (numOfLikes + " like")
      }
      // else {
      //   // (numOfLikes + " likes")
      // }
      return x;
    };
}

MainController.$inject = ['$scope'];
export { MainController };
