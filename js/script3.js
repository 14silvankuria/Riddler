// site preloader --
$(window).on("load",function(){
	$('#preloader').fadeOut('slow');
});

var myTimer = (function(document){
	var time;
	function start() {
		time = setInterval(myClock, 1000 );
		var T = 300;

		function myCLock {
			document.getElementById("time").innerHTML = --T;
			if (T===0 ){
				clearInterval(time);
				alert("Your Times Up");
			}
		}
	}
	function return(){
		clearInterval(myTimer)
	}
})(document);

$(document).ready(function(){
  $("#range1.riddles1").submit(function(event){
		var range1 = [Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9];

		$("#answer1").show();


    event.preventDefault();
	});
});
