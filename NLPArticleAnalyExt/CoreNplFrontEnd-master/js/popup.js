//Pure JS code with jQuery implementation

var url = null;

document.addEventListener('DOMContentLoaded', function() {
  var Button = document.getElementById('checkArticle');
  Button.addEventListener('click', function() {
        var params = "url=" + url + "&";
        for (var i = 1; i < 7; i++) {
        	var companyName = document.getElementById('company' + i).value;
        	if (companyName) {
        		params += ("company=" + companyName + "&");
        	}
        }

        // alert("http://localhost:8080/analyze?" + params);
        fetch("http://localhost:8080/analyze?" + params, {
          method: 'GET',
          headers: {
            "Accept": "application/json",
          }
        })
        	.then((response) => response.json())
          .then(function(data) {
            var obj = JSON.stringify(data);
            if((obj[11]+obj[12]+obj[13]+obj[14]) == "true")
            {
              alert("The company data is present in this article");
            }
            else
            {
              alert("The company data is not present in the article");
            }
            // alert(obj[11]+obj[12]+obj[13]+obj[14]+obj[15]);
          })
        	.catch(error => alert("Error: " + error));
    });
  }, false);

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  url = tabs[0].url;
});

