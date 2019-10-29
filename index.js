const express = require('express');
const router = express.Router();

router.get('/weather', function(req, res, next) {
  const request = require("request");
  const options = { method: 'GET',
    url: 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/328328',
    qs: { apikey: 'BBG6aQNOVAIcbZ3jVK2f4RxE4xnC27oC' },
    headers:
        { 'cache-control': 'no-cache',
          Connection: 'keep-alive',
          'Cache-Control': 'no-cache',
          Accept: '*/*'} };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);


    const data = JSON.parse(body);
    console.log(data);

    const day1 = data.DailyForecasts[0].Date;
    const day2 = data.DailyForecasts[1].Date;
    const day3 = data.DailyForecasts[2].Date;
    const day4 = data.DailyForecasts[3].Date;
    const day5 = data.DailyForecasts[4].Date;
    const temp1 = data.DailyForecasts[0].Temperature.Maximum.Value;
    const temp2 = data.DailyForecasts[1].Temperature.Maximum.Value;
    const temp3 = data.DailyForecasts[2].Temperature.Maximum.Value;
    const temp4 = data.DailyForecasts[3].Temperature.Maximum.Value;
    const temp5 = data.DailyForecasts[4].Temperature.Maximum.Value;
    const phrase1 = data.DailyForecasts[0].Day.IconPhrase;
    const phrase2 = data.DailyForecasts[1].Day.IconPhrase;
    const phrase3 = data.DailyForecasts[2].Day.IconPhrase;
    const phrase4 = data.DailyForecasts[3].Day.IconPhrase;
    const phrase5 = data.DailyForecasts[4].Day.IconPhrase;
    res.render('index', {day1, temp1, phrase1, day2, temp2, phrase2, day3, temp3, phrase3, day4, temp4, phrase4, day5, temp5, phrase5});

  })});


module.exports = router;
