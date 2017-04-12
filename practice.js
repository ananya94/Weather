//CHICAGO
function chicago(){ 
    var data;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=chicago,il&APPID=a4c69ffeadc3fbb6bb3c0a2f007f3a71",function(data){
    weather = data;
    $("#container").append("<br/>"+"Chicago:");
    display(weather);
    min = Math.round((weather.main.temp_min)* 9 /5  - 459.67);
    max = Math.round((weather.main.temp_max)*9 / 5 - 459.67);
    display1(min)
   
        }
    );    
};

// Manhattan
function manhattan(){ 
    var data;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=manhattan,ny&APPID=a4c69ffeadc3fbb6bb3c0a2f007f3a71",function(data){
    weather = data;
    $("#container").append("<br/>"+"Manhattan:");
    display(weather);
    min = Math.round((weather.main.temp_min)* 9 /5  - 459.67);
    max = Math.round((weather.main.temp_max)*9 / 5 - 459.67);
    display1(min)
        }
    );    
};

//Los Angeles
function la(){ 
    var data;
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=%20los%20angeles&APPID=a4c69ffeadc3fbb6bb3c0a2f007f3a71",function(data){
    weather = data;
    $("#container").append("<br/>"+"Los Angeles:");
    display(weather);
    min = Math.round((weather.main.temp_min)* 9 /5  - 459.67);
    max = Math.round((weather.main.temp_max)*9 / 5 - 459.67);
    display1(min)
        }
    );    
};

function display(arr){
    $("#container").append("<br/> Mainly:  " + arr.weather[0].main+"<br/>" + "Description: " + arr.weather[0].description);
    
};
function display1(){
    $("#container").append("<br/> High temp : "+ max +"F &nbsp &nbsp"+ "Low temp : " + min + "F <br/>")
};
function convert(temp){
    f = (Math.round(temp*9/5 - 459.67));
    display1(f);
}