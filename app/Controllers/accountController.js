//function AccountController($scope,$rootScope,$location) {
//    $scope.users = [{ userid: 1, username: 'satya', password: 'satya', email: 'satya@gmail.com', mobile: '12345' }];

//    $rootScope.loginStatus = false;
//    $scope.loginUser = {};
//    $scope.selectedUser = {};
//    $scope.resetUser = {};

//    $scope.isAddOrEdit = false;


//    function init() {
//        if (sessionStorage.username != "" && sessionStorage.username != undefined) {
//            $rootScope.loginStatus = true;
//            $rootScope.loggedUsername = sessionStorage.username;

//        } else {
//            $rootScope.loginStatus = false;
//        }
//    }

//    init();

   



//    $scope.addUser= function () {
//        var newid=$scope.users.length+1;
//        $scope.selectedUser.userid=newid;
//        $scope.users.push($scope.selectedUser);

//        $scope.selectedUser = null;

//        $location.path('/Login');
//    }

//    getUserByName = function () {
//        for (i = 0; i < $scope.users.length; i++) {
//            if ($scope.users[i].username == sessionStorage.username) {
//                $scope.selectedUser = $scope.users[i];
//                return $scope.users[i];
//                break;
//            }
//        }
//        return null;
//    }
//    $scope.getUserById=function(id){
//        for (i = 0; i < $scope.users.length; i++) {
//            if ($scope.users[i].userid == userid) {
//                return $scope.users[i];
//                break;
//            }
//        }
//        return null;
//    }
 
//    $scope.loginUser= function () {
     
//        for (i = 0; i < $scope.users.length; i++) {
//            if ($scope.users[i].username == $scope.loginUser.username && $scope.users[i].password == $scope.loginUser.password) {
//                $rootScope.loginStatus = true;
//                break;
//            }
//        }
//        if ($rootScope.loginStatus) {
//            $rootScope.loggedUsername = $scope.loginUser.username;
//            sessionStorage.username = $scope.loginUser.username;
//            $location.path('/UserInfo');
//        }
//        else {
//            alert("invalid");
//        }
//    }

   


//    $scope.updateUser= function () {
//        for (i = 0; i < $scope.users.length; i++) {
//            if ($scope.users[i].userid == $scope.selectedUser.userid) {
//                $scope.users[i] = $scope.selectedUser;
//                break;
//            }
//        }
//        $location.path('/UserInfo');

//    },
//    $scope.resetPassword= function () {
//       $scope.selectedUser = $scope.getUserByName(sessionStorage.username);
//        $scope.selectedUser.password = $scope.resetUser.password;        
//        $scope.updateUser();

//    }
//    $scope.logOut = function () {
//        sessionStorage.username = ""
//        $scope.selectedUser = null;
//        $rootScope.loginStatus = false;
//        $scope.loginUser = null;
//        $location.path('/Login');
//    }

//    getUserByName();

//}

//webAdminApp.controller('AccountController', AccountController);







function AccountController($scope, $rootScope, $location,$http,accountService) {
    $scope.users =[];

    $rootScope.loginStatus = false;
    $scope.loginUser = {};
    $scope.selectedUser = {};
    $scope.resetUser = {};

    $scope.isAddOrEdit = false;


    function init() {
       
        $http.get('http://localhost:57878/api/users').success(function (data) {
            $scope.users = data;
        }).error(function (data) { });

         $scope.users = accountService.getUsers();

        if (sessionStorage.username != "" && sessionStorage.username != undefined) {
            $rootScope.loginStatus = true;
            $rootScope.loggedUsername = sessionStorage.username;

        } else {
            $rootScope.loginStatus = false;
        }
    }

    init();





    $scope.addUser = function () {
        accountService.addUser($scope.selectedUser);
        $scope.selectedUser = null;
        $location.path('/Login');
    }

    getUserByName = function () {
        $scope.selectedUser = accountService.getUserByName(sessionStorage.username);
    }
   

    $scope.loginUser = function () {

        if (accountService.validateUser($scope.loginUser.username, $scope.loginUser.password)) {
            $rootScope.loginStatus=true;
            $rootScope.loggedUsername = $scope.loginUser.username;
            sessionStorage.username = $scope.loginUser.username;

            $location.path('/UserInfo');
        }
        else{
            $rootScope.loginStatus=false;
            alert("Invalid Login");
        }
       
    }


    $scope.updateUser = function () {
        accountService.updateUser($scope.selectedUser);
        $location.path('/UserInfo');

    },
    $scope.resetPassword = function () {
        accountService.resetPassword(sessionStorage.username, $scope.resetUser.newPassword);
        $location.path('/UserInfo');

    }
    $scope.logOut = function () {
        sessionStorage.username = ""
        $scope.selectedUser = null;
        $rootScope.loginStatus = false;
        $scope.loginUser = null;
        $location.path('/Login');
    }

    getUserByName();

}

webAdminApp.controller('AccountController', AccountController);