var request = require('request');
const apikey = process.env.ZIPCODE_API_KEY ||"jY1PrQzmGUk1PWSumSdMK6OAHgmMi6Vkb3FkrKXvRcdEUEbxXGNeIEhx4Afy4AWp";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';
var distance = {
find: function(req, res, next) {
request (zipCodeURL + apikey
+'/distance.json/' + req.params.zipcode1 + '/'
+ req.params.zipcode2 + '/mile',
function (error, response, body) {
if ( !error && response. statusCode == 200) {
response = JSON.parse(body);
res.send(response);
} else {
//console.log(response.statusCode);
res.send({distance: -1});
}
});
}
};
module.exports = distance;