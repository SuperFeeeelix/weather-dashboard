var apiKey = '3d85aa9354abe822af062e8c8dcded33'
var url = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3d85aa9354abe822af062e8c8dcded33'
var searchBtn = document.querySelector('#search-btn')
var atlantaBtn = document.querySelector('#atlanta-btn')
var denverBtn = document.querySelector('#denver-btn')
var seattleBtn = document.querySelector('#seattle-btn')
var sanfranBtn = document.querySelector('#sanfrancisco-btn')
var orlandoBtn = document.querySelector('#orlando-btn')
var newyorkBtn = document.querySelector('#newyork-btn')
var chicagoBtn = document.querySelector('#chicago-btn')
var austinBtn = document.querySelector('#austin-btn')
var submitBtn = document.querySelector('#submit')


function anywhere() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=3d85aa9354abe822af062e8c8dcded33')
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(data){
        console.log(data)
    });
}
submitBtn.addEventListener('click', anywhere)

function atlanta() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
atlantaBtn.addEventListener('click', atlanta,)

function denver() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
denverBtn.addEventListener('click', denver)

function seattle() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
seattleBtn.addEventListener('click', seattle)

function sanFrancisco() {
   
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=san+francisco&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
sanfranBtn.addEventListener('click', sanFrancisco)

function orlando() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
orlandoBtn.addEventListener('click', orlando)

function newYork() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=new+york&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
newyorkBtn.addEventListener('click', newYork)

function chicago() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
chicagoBtn.addEventListener('click', chicago)

function austin() {
    
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}

localStorage.setItem('Atlanta', JSON.stringify(atlanta))
localStorage.getItem('atlanta')
JSON.parse(localStorage.getItem('atlanta'));
localStorage.setItem('denver', JSON.stringify(denver))
localStorage.getItem('denver')
localStorage.setItem('seattle', JSON.stringify(seattle))
localStorage.getItem('seattle')
localStorage.setItem('San Francisco', JSON.stringify(sanFrancisco))
localStorage.getItem('San Francisco')
localStorage.setItem('Orlando', JSON.stringify(orlando))
localStorage.getItem('Orlando')
localStorage.setItem('Chicago', JSON.stringify(chicago))
localStorage.getItem('chicago')
localStorage.setItem('Austin', JSON.stringify(austin))
localStorage.getItem('Austin')
localStorage.setItem('New York', JSON.stringify(newYork))
localStorage.getItem('New York')






