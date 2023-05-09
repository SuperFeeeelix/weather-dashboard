var apiKey = '3d85aa9354abe822af062e8c8dcded33'
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=7e34e043867e2cfc262eed5f387eb48e'
var searchBtn = document.querySelector('#search-btn')

function atlanta() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', atlanta)

function denver() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', denver)

function seattle() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=seattle&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', seattle)

function sanFrancisco() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=san+francisco&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', sanFrancisco)

function orlando() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', orlando)

function newYork() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=new+york&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', newYork)

function chicago() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=chicago&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', chicago)

function austin() {
    console.log('test')
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=austin&appid=7e34e043867e2cfc262eed5f387eb48e&units=imperial')
        .then(function(response){
            console.log(response)
            return response.json()
        })
        .then(function(data){
            console.log(data)
        });
        
}
searchBtn.addEventListener('click', austin)








