var portfolioApp = angular.module('portfolioApp',[])

portfolioApp.controller('GalleryListCtrl', function($scope, $http) {
$http.get('galleries.json').then(function (response) {
        $scope.galleries = response.data.galleries;
		$scope.sortList = response.data.sortList;
        $scope.orderProp=$scope.sortList[1];
    });

}); 