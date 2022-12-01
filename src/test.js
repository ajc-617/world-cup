const request = require('request');


//Senegal vs Netherlands is fixture id # 855734
//league id 39 for premier league

let options = {
  method: 'GET',
  url: 'https://api.the-odds-api.com/v4/sports',
  qs: {apiKey: '91c553bdf4ea2ce831d77831c7cb55a5'},
  headers: {
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) {
    console.log(error)
  };
  const obj = JSON.parse(body)
  console.log(obj)
});
