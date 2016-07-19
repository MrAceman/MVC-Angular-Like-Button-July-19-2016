function MainController ($scope){

  $scope.numOfLikes = '';

    $scope.totalLikes = function (numOfLikes){
      if (numOfLikes === 0){
        return (numOfLikes + " likes")
      }
      else if (numOfLikes === 1){
        return (numOfLikes + " like")
      }
      else {
        return (numOfLikes + " likes")
      }
    };
}

MainController.$inject = ['$scope'];
export { MainController };
