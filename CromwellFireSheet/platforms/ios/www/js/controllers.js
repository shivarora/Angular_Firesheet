var endPoint = 'http://price-sync.com:3001/v1/';
//endPoint = 'http://localhost:3000/v1/';
var username = 'Admin';
var password = '62079c94-ef3e-11e5-9ce9-5e5517507c66';
var productId = "";
var popupOpen = false;

angular.module('app.controllers', [])

.controller('loginCtrl', function($scope, $http, $ionicPopup, $state) {
  console.log("this is the start");
   try {
        // Read NDEF formatted NFC Tags
        nfc.addNdefListener(
            function (nfcEvent) {
                 var tag = nfcEvent.tag,
                     ndefMessage = tag.ndefMessage;
                //
                // // dump the raw json of the message
                // // note: real code will need to decode
                // // the payload from each record
                // // assuming the first record in the message has
                // // a payload that can be converted to a string.
              console.log("hello here");
              console.log(nfc.bytesToString(ndefMessage[0].payload));
                 alert(nfc.bytesToString(ndefMessage[0].payload));

              //alert(JSON.stringify(nfcEvent.tag));

            },
            function () { // success callback
              console.log("here in the success");
               // alert("Waiting for NDEF tag");
            },
            function (error) { // error callback
              console.log("here in the error");
              //  alert("Error adding NDEF listener " + JSON.stringify(error));
            }
        );
    } catch (ex) {
     console.log("here in the catch" );

       console.log(ex.message);
       // alert(ex.message);
    }


  $scope.register = function () {
    $state.go('register');
  }

  $('.nav-bar').hide();
  $('.back-button').hide();
  $('.btn-add').hide();

  if(window.localStorage.getItem("user")) {
    $state.go('dashboard');
  }

  $scope.user = {
    email : '',
    password : ''
  };

  $scope.doLogin = function () {

    var data = {
      'email': $scope.user.email.toLowerCase(),
      'password': $scope.user.password
    }

    $http({
      headers: {
        'username': username,
        'Password': password
      },
      method: 'POST',
      url: endPoint + 'users/login',
      data: JSON.stringify(data)

    }).then(function successCallback(response) {


      if (response.data.success === 1) {
        window.localStorage.setItem("user", JSON.stringify(response.data.data));
        $state.go('dashboard')
      } else {

        $('.js-btn-register').html('REGISTER');

        var alertPopup = $ionicPopup.alert({
          title: 'Error!',
          template: response.data.message
        });

      }

    }, function errorCallback(response) {


      $('.js-btn-register').html('REGISTER')

      var alertPopup = $ionicPopup.alert({
        title: 'Error!',
        template: response.data.message
      });
    });
  }
})
