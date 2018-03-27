// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendList = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get("/api/survey", function(req, res) {
    res.json(answerData);
  });

  // Add new friend entry
  app.post("/api/friends", function(req, res) {
    // Captures new survey data
    var userSurvey = req.body;
    var userResponses = userSurvey.scores;

    // Variables to hold best match
    var friendName = "";
    var friendImage = "";
    var totalDifference = 10000;

    // loop through all friends
    for (var i = 0; i < friendList.length; i++) {
      // find the difference of each question
      var diff = 0;
      for (var j = 0; j < userResponses.length; j++) {
        diff += Math.abs(friendList[i].scores[j] - userResponses[j]);
      }

      // If lowest difference, record the friend match
      if (diff < totalDifference) {
        totalDifference = diff;
        friendName = friendList[i].name;
        friendImage = friendList[i].photo;
      }
    }

    // Add new user
    friendList.push(userSurvey);

    // Send appropriate response
    res.json({ status: "OK", friendName: friendName, friendImage: friendImage });
  });
};
