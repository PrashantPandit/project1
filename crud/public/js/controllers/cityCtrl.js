angular.module('cityCtrl', []).controller('cityController', function($scope, $http) {

    $scope.tagline = 'select your city here!';



    var refresh = function() {
        $http.get('/city/getCity').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.citiList = response;
            $scope.citi = "";
        });
    };

    refresh();


           // $http.defaults.headers.post["Content-Type"] = "application/json"

               $scope.addCity = function(citi) {
                 $http.post('/city/addCity/', citi).success(function(response){
                     console.log(response);
                     console.log("City added Successfully....");
                     refresh();
                 });

            // var serviceName = 'movi'
            // $http.post('/movie/addMovie', movieObj).success(function(response) {
            //     console.log(response);
            //     console.log("CREATE IS SUCCESSFUL");
            //     refresh();
            // });




    };

    $scope.removeCity = function(citi) {
        //console.log(id);
        $http.delete('/city/deleteCity/' + city._id).success(function(response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editCity = function(citi) {
        $http.get('/city/getCity/' + city._id).success(function(response) {
            $scope.citi = response[0];
        });
    };

    $scope.updateCity = function() {
        console.log("REACHED UPDATE");
        console.log($scope.citi._id);
        $http.put('/city/updateCity/' + $scope.citi._id, $scope.citi).success(function(response) {
            console.log(response);
            refresh();
        })
    }

});
