const request = require('request');


//Senegal vs Netherlands is fixture id # 855734

let options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/odds',
  qs: {fixture: '855734'},
  headers: {
    'X-RapidAPI-Key': 'ca6ea5e70amsh8dbbd2117d28b39p11b29fjsn59c0cc6f5756',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

  const obj = JSON.parse(body);
  const newObj = obj.response[0].bookmakers[0].bets[0]
  console.log(newObj);
});

options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/odds',
  qs: {fixture: '855734'},
  headers: {
    'X-RapidAPI-Key': 'ca6ea5e70amsh8dbbd2117d28b39p11b29fjsn59c0cc6f5756',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    useQueryString: true
  }
};

