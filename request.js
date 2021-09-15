const request = require('request');
const api=require("./request")
_EXTERNAL_URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//Getting Data from External API by using request method
const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

//exporting reqired method 
module.exports.callApi = callExternalApiUsingRequest;