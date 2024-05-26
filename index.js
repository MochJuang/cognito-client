var AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const username = "rivaldinursaham@gmail.com"
const password = "Sales123"

var authenticationData = {
    Username : username,
    Password : password,
};
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

// prod
var poolData = { 
    UserPoolId : 'ap-southeast-1_YXHA8PRqZ',
    ClientId : '59d5cgfurt5a94vlbcrm53782'
};

// staging
// var poolData = { 
//     UserPoolId : 'ap-southeast-1_3sRj7BIS2',
//     ClientId : '34v1qao4t65ir60qgr834vpdhb'
// };

// dev
// var poolData = { 
//     UserPoolId : 'ap-southeast-1_iWVkiL2Iy',
//     ClientId : '46ck5j4965opkc5v6idbcc1ucq'
// };

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
    Username : username,
    Pool : userPool
};
AmazonCognitoIdentity.Adm
var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log('successs')
        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        var idToken = result.idToken.jwtToken;
    },

    onFailure: function(err) {
        console.log(err)
    },

});