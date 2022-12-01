const request = require('request')
const readline = require('readline');


//Senegal vs Netherlands is fixture id # 855734
//league id 39 for premier league

function oddsToPercent(odds) {
  if (odds < 0) {
    return (odds*-1) / (odds*-1 + 100)
  }
  else {
    return 100 / (odds + 100)
  }
}

let teams = []

process.argv.forEach(function (val, index, array) {
  if (index > 1) {
    teams.push(val)
  }
});

console.log(teams)
process.exit(0)

let options = {
  method: 'GET',
  url: 'https://api.the-odds-api.com/v4/sports/soccer_epl/odds',
  qs: {
    apiKey: '91c553bdf4ea2ce831d77831c7cb55a5',
    regions: 'us', 
    oddsFormat: 'american'
  },
  headers: {
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) {
    console.log(error)
  };
  const obj = JSON.parse(body)
  console.log(obj[0].bookmakers[3].markets[0].outcomes)
});

/*

request(options, function (error, response, body) {
	if (error) {
    console.log(error)
  };
  const obj = JSON.parse(body)
  console.log(obj[4].bookmakers[10].markets[1])
  let updated = obj[4].bookmakers[10].markets[1].outcomes
  updated.forEach(elem => {
    elem.price = oddsToPercent(elem.price)
  })
  console.log(updated)
  //obj[0].bookmakers[6].markets[1].outcomes.forEach(elem => console.log(elem.price))
});

*/
