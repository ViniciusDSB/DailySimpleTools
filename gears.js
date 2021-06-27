setInterval(function mostrarData(){

    let data = new Date()

    var horas = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    if(data.getHours() < 10){ horas = '0' + data.getHours()}
    if(data.getMinutes() < 10){ minutos = '0' + data.getMinutes()}
    if(data.getSeconds() < 10){ segundos = '0' + data.getSeconds()}

    document.getElementById('clock').innerHTML = `${horas}:${minutos}:${segundos}`
},1000)

/*Mostrarou esconder paginas*/
function setting(onOff){
    let settingsDiv = document.getElementById('settingsDiv')

    if(onOff == 1){
        settingsDiv.style.left = "0"
    }else{
        settingsDiv.style.left = "-100%"
    }
}

function about(onOff){
    let aboutDiv = document.getElementById('aboutDiv')

    if(onOff == 1){
        aboutDiv.style.left = "0"
    }else{
        aboutDiv.style.left = "-100%"
    }
}