window.onload= function(){

	createBeachGoers(beachGoers);
	var i = 0;
	(function rotateSpotlight() {
		i++;
		spotlightBeachGoer(beachGoers[i % beachGoers.length]);
		setTimeout(rotateSpotlight, 9000);
	})();

}

var Shea={
	image: "/images/shea.jpeg",
	name:"Shea",
	role: "Dev",
	likes:"Bouldering, Vietnamese Coffee, Sallie and Lauren, Goat-herding",
	pairOn:"Clojure, Dev Ops, Functional Programing"
};

var Lauren={
	image: "/images/lauren.jpeg",
	name:"Lauren",
	role: "Dev",
	likes:"dancing, biking to the docks, boats",
	pairOn:"Front end dev, IoT, P3 projects, Dev Ops"
};

var Sallie={
	image: "/images/sallie.png",
	name:"Sallie",
	role: "Dev",
	likes:"Swimming, Guitar, The Ocean, Water Polo",
	pairOn:"This app, Hardware, Mathematics"
};



var beachGoers=[Shea, Lauren, Sallie, Lauren, Shea, Sallie];

var createBeachGoers= function(beachGoers){
	
	beachGoers.forEach(function(beachGoer){
		$("#beach-area").append(
 			"<div class=\"beach-goer\">"+
          		"<div class=\"crop\">"+
           			"<img src="+beachGoer.image+" alt=\""+beachGoer.name+"\"/>"+
          		"</div>"+
          		"<div class=\"mini-profile\">"
          			+beachGoer.name+"<br>"
          			+beachGoer.role+
          		"</div> "+
      		"</div>"
         );
		}
	);
};

var spotlightBeachGoer= function(beachGoer){
		$("#feature-box h3").text("Meet " + beachGoer.name);
		$("#feature-box img").attr("src",beachGoer.image);
		$("#feature-box img").attr("alt",beachGoer.name);
		$("#featured-description .beachGoerLikes").text(beachGoer.likes);
		$("#featured-description .beachGoerPairOn").text(beachGoer.pairOn);
};

