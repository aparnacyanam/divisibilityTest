/**
 * Created by Aparna on 6/18/2015.
 */
angular.module("testApp",[])
.controller("testController",function($scope){
        $scope.input='';
        $scope.output='';
        $scope.submit = function() {
            if($scope.input==null || $scope.input=="undefined"  || $scope.input===""){
                $scope.ouput= '';
            }

            else if($scope.input%28==0){

                $scope.output="IBM Bluemix";
            }
            else if($scope.input%4==0){
                $scope.output="IBM";
            }
            else if($scope.input%7==0){
                $scope.output="BlueMix";
            }
            else{
                console.log("input in last");
                $scope.output='';
            }
            console.log($scope.input);
        };






    });