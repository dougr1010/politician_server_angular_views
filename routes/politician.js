/**
 * Created by dougritzinger on 10/13/15.
 */

var express = require('express');
var router = express.Router;

router.get('/about',function(request, response){
    console.log('hit politician/about endpoint');
    response.send('about: greed, puffery');
});


router.get('/jobs', function(request, response){
    console.log('hit politician/jobs endpoint');
    response.send('jobs: reality show host');
});

router.get('/rank', function(request,reaponse){
    console.log('hit politician/rank endpoint');
    response.send('rank: top republican...but for entertainment only');
});


module.exports = router;