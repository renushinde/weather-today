
$(document).ready(function(){

//let's get user's current position and log it to console. 

   var latitude;
   var longitude;

   $.getJSON("https://ipapi.co/json", function(position){
      latitude=position.latitude;
      longitude= position.longitude;

   console.log(latitude);
   console.log(longitude);

   // Now let's pass this lat and long in weather api.

    $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+latitude+'&lon='+longitude, function(data){
        console.log(data);
        var name = (data.name);
        var weather = (data.weather[0].main);
        var ctemp = (Math.round(data.main.temp * 10) / 10  + " °C");
        console.log(ctemp);
        

   $("#name").html(name);
   $("#weather").html(weather);
   $("#temp").html(ctemp);

      $("#temp").on("click", function(){

        var tempString = document.getElementById("temp").innerHTML;
        var tempUnit = tempString.charAt(tempString.length - 1);
        
        var converthtml = "";
        
        // if #temp html last letter is C, convert to F
        if (tempUnit == "C") {
          var fahrenheit = data.main.temp * 9/5 + 32;
          $("#temp").html(Math.round(fahrenheit) + " °F");
          
          // Change convert button color to magenta
          $("#temp").css("color", "magenta");
        }
        // if #temp html last letter is F, convert to C
        else if (tempUnit == "F") {
          $("#temp").html(Math.round(data.main.temp * 10) / 10  + " °C");
   //	alert("you clicked");
}

    });
if(data.weather[0].main.includes('Clouds') == true){
     $('body').css('background-image','url(https://images.unsplash.com/photo-1414269665217-a57681e266b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=6fd9f051bea811268593340698b6a822)');
    }
     else if(data.weather[0].main.includes('clear')==true){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1502623547075-299b5ba76c53?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e322673d7c122d4f6184371422509bdb&auto=format&fit=crop&w=500&q=60)');
     }
       else if(data.weather[0].main.includes('Thunderstorm')==true){
         $('body').css('background-image','url(https://images.unsplash.com/photo-1428592953211-077101b2021b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=9dee70ba78c49619bc7f5c8a91778f2b)');
     }
      else if(data.weather[0].main.includes('Rain')==true){
        $('body').css('background-image','url(https://images.unsplash.com/photo-1422020297037-97bd356cc312?crop=entropy&fit=crop&fm=jpg&h=1250&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=2400)');
      } 

// This is for the sweater part
 if (data.main.temp_min <= 40){
					$("h2").html("You'd be crazy if you don't put on a sweater.");
				} else if (ctemp <= 10){
					$("h2").html("Bring two sweaters.");
				} else if (ctemp <= 20){
					$("h2").html("It's officially sweater weather.");
				} else if (ctemp<= 30){
					$("h2").html("Pick the nice black one you love so much.");
				} else if (temp <= 40){
					$("h2").html("Do it for fashion.");
				} else if (ctemp <= 65){
					$("h2").html("You won't need it...but you can still wear it.");
				} else if (ctemp <= 80){
					$("h2").html("It's not recommended, but bring it because you love it.");
				} else if (ctemp <= 90){
					$("h2").html("If you do, promise me you'll wear deodorant.");
				} else {
					$("h2").html("Only if you hate yourself");
				}

  });

 });

});
