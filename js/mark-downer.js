var downer = angular.module("downer", ["ngRoute"]);

downer.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl: "my-documents.html",
        controller: "MyDocumentsController"
    });

    $routeProvider.when("/edit/:docId", {
        templateUrl: "edit-document.html",
        controller: "EditDocumentController"
    });

    $routeProvider.when("/delete/:docId", {
        templateUrl: "my-documents.html",
        controller: "MyDocumentsController"
    });
});

downer.controller("MyDocumentsController", function($scope, $routeParams){
    console.log("MyDocumentsController accessed.", $scope, $routeParams);

    
});

downer.controller("EditDocumentController", function($scope, $routeParams){
    console.log("EditDocumentController accessed.", $scope, $routeParams);
});
