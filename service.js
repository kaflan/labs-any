module.exports = function($xonom) {
  $xonom.service('parse', function() {
    var cheerio = require('cheerio');
    var request = require('request');
    return {
      getCars: function(data, callback) {
        var url = 'https://www.avis.com/car-rental/reservation/initialize-reservation.ac?' +
          'LANGUAGE=en&ARCIATA=0105991L&STEP_CODE=3&RENTAL_ONEWAY=&PICKUP_LOCATION_CODE=KD6&RETURN_LOCATION_CODE=' +
          '&PICKUP_DAY=4&PICKUP_MONTH=1&PICKUP_HOUR=9&PICKUP_MINUTE=00&PICKUP_YEAR=2016&' +
          'PICKUP_AM_PM=AM&RETURN_DAY=5&RETURN_MONTH=1&RETURN_HOUR=9&RETURN_MINUTE=00&RETURN_AM_PM=AM&RETURN_YEAR=2016&' +
          'pickupKeywordValue=&pickupSuggestionValue=&pickupCityFlag=false&pickupSelectedValue=&resForm.pickUpDate' +
          '=02%2F04%2F2016&resForm.dropOffDate=02%2F05%2F2016&resForm.dropOffLocation=Wide+Waters+Common+Center+-+KD6&AGE=25' +
          '&AWD_NUMBER=&resForm.couponCode=#';
        request(url, function(err, resp) {
          var $ = cheerio.load(resp.body);
          var images = $('.carView .carImg');
          var imagesArr = [];
          var moneyArr = [];
          var brandNameArr = [];
          var detailsArr = [];
          images.each(function(i, elem) {
            imagesArr.push($(elem).html());
            // console.log(elem.children)
          });
          var money = $('.priceTotal_select h2');
          money.each(function(index, elem) {
            moneyArr.push($(elem).text());
          });
          var details = $('.featureList');
          details.each(function(index, elem) {
            detailsArr.push(elem.children);
          });
          var brandName = $('.col2_select');
          brandName.each(function(index, elem) {
            brandNameArr.push($(elem).html());
          });
          var Car = function(images, money, brand, discription) {
            this.images = images;
            this.money = money;
            this.brand = brand;
            this.discription = discription;
          };
          //   console.log('sas', images);
          //  console.log(imagesArr.length, brandNameArr.length);
          var cars = []
          for (var i = 0; i < imagesArr.length; i++) {
            console.log(i);
            var car = new Car(imagesArr[i], moneyArr[i], brandNameArr[i], detailsArr[i]);
            cars.push(car);
          }
          callback(cars);
        });
      }
    };

  });
};
