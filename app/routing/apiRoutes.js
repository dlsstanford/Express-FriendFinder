// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var answerData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
    res.json(answerData);
  });



  app.post("/api/survey", function(req, res) {
  
 if (questionsAnswered) {

 } else {
     alert("You have not answered all the questions");
 }
  });


    console.log(answerData);

};