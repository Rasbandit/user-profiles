angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {

    login: function( user ) {
      return $http({
        method: 'POST',
        url: '/api/login',
        data: user
      }).then(function(response) {
        return response
      })
    },

    getFriends: function() {
      console.log('service');
      return $http({
        method: 'GET',
        url: '/api/profiles'
      }).then(function(response) {
        return response
      })
    }
  }
});
