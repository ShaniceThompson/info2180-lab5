window.onload = function() {
    let Country_butn = document.getElementById("country_lookup");
    let Citi_butn = document.getElementById("city_lookup");
    let Globally = document.getElementById("country");
    let result = document.getElementById("result");

    Country_butn.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let Global_data = Globally.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" + Global_data + "&context=none" );
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    });

    Citi_butn.addEventListener('click',function(){
        var httpRequest = new XMLHttpRequest();
        let Global_data = Globally.value;
        httpRequest.open('GET',"http://localhost/info2180-lab5/world.php?country=" +  Global_data + "&context=cities");
        httpRequest.send();
        httpRequest.onreadystatechange = function(){
            let response = httpRequest.responseText;
            result.innerHTML = response;
        }
    })
}