//This is the code to pull the city information.
var cityObject = new XMLHttpRequest();
cityObject.open('GET','https://byui-cit230.github.io/weather/data/towndata.json');
cityObject.responseType = "json";
cityObject.send();

cityObject.onload = function() {
    var cityInfo = cityObject.response;
    console.log(cityInfo);
 
//Franklin City Information**
document.getElementById('franklincity').innerHTML = cityInfo.towns[0].name;  
document.getElementById('motto').innerHTML = cityInfo.towns[0].motto;
document.getElementById('currentpop').innerHTML = cityInfo.towns[0].currentPopulation;
document.getElementById('yearfound').innerHTML = cityInfo.towns[0].yearFounded;
document.getElementById('anrain').innerHTML = cityInfo.towns[0].averageRainfall;
  
//Greenville City Information**
document.getElementById('springfield2').innerHTML = cityInfo.towns[3].name;  
document.getElementById('motto2').innerHTML = cityInfo.towns[3].motto;
document.getElementById('currentpop2').innerHTML = cityInfo.towns[3].currentPopulation;
document.getElementById('yearfound2').innerHTML = cityInfo.towns[3].yearFounded;
document.getElementById('anrain2').innerHTML = cityInfo.towns[3].averageRainfall;
    
//Springfield City Information
document.getElementById('greenville').innerHTML = cityInfo.towns[1].name;  
document.getElementById('motto1').innerHTML = cityInfo.towns[1].motto;
document.getElementById('currentpop1').innerHTML = cityInfo.towns[1].currentPopulation;
document.getElementById('yearfound1').innerHTML = cityInfo.towns[1].yearFounded;
document.getElementById('anrain1').innerHTML = cityInfo.towns[1].averageRainfall;
    

}

