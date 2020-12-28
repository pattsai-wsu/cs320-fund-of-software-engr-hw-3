//NAME: Patrick Tsai
//Student ID: 011709316
//Class: CS320 Fundamentals of Software Design - MW 10:30 am
//Assignment: Homework 3 - Underscore Functional Programming
//DUE: 10/12/2020 by Midnight
//upload to github at end of semester

function totalDegrees(data) {
    var awards = _.pluck(data, 'AWARDS');
    var sum = _.reduce(awards, function(memo, num){ return memo + num; }, 0);
    return (sum);
}
console.log(totalDegrees(wsudgrs));

function percentagePhd(data) {
    var numDocs = _.filter(data, function(numDegrees){
        return numDegrees.Level === "Doctoral";
    });
    var docAwards = _.pluck(numDocs, 'AWARDS');
    var docSum = _.reduce(docAwards, function(memo, num){ return memo + num; }, 0);
    //console.log(docSum);
    return (docSum/totalDegrees(wsudgrs));
}
console.log(percentagePhd(wsudgrs));

function totalDegreesByYear(data, year) {
    var degByYear = _.filter(data, function(byYear){
        return byYear.FISCAL_YEAR === year;
    });
    var numDegs = _.pluck(degByYear, 'AWARDS');
    var numDegByYear = _.reduce(numDegs, function(memo, num){ return memo + num; }, 0);
    return (numDegByYear);
}
console.log(totalDegreesByYear(wsudgrs, 2009));

function listCampuses(data) {
    var camp = _.pluck(data, 'CAMPUS');
    camp = _.uniq(camp);
    return (camp);
}
console.log(listCampuses(wsudgrs));

function listCampusDegrees(data) {
    var byCamp = _.groupBy(data,'CAMPUS');
    var numAward = _.mapObject(byCamp, function(camp,key){return _.reduce(camp, function(memo, value){return memo + value.AWARDS; },0);});
    return (numAward);
}
console.log(listCampusDegrees(wsudgrs));

function listDegreesYear(data) {
    var grpByYear = _.groupBy(data,'FISCAL_YEAR');
    var numByYear = _.mapObject(grpByYear, function(yr,key){return _.reduce(yr,function(memo,value){return memo + value.AWARDS},0);});
    var sortedListHighToLow = _.sortBy(numByYear).reverse();
    var topOfList = _.first(sortedListHighToLow);
    return (topOfList);
}
console.log(listDegreesYear(wsudgrs));