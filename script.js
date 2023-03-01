const countdown = document.querySelectorAll('.count-div h3')
let deadline = document.querySelector('.countdown')

let futureTime = new Date("March 13, 2023 12:00:00")

//let day = futureTime.getDay()
//let hour = futureTime.getHours()
//let min = futureTime.getMinutes()
//let sec = futureTime.getSeconds()

const futureDate = futureTime.getTime()
//console.log(futureDate);

function calculateTime(){
    const currentDate = new Date().getTime()
    //console.log(t);
    let t = futureDate - currentDate

    const oneDay = 24*60*60*1000
    const oneHour = 60*60*1000
    const oneMin = 60*1000


    let days = Math.floor(t/oneDay)
    let hours = Math.floor((t%oneDay)/oneHour)
    let min = Math.floor((t%oneHour)/oneMin)
    let sec = Math.floor((t%oneMin)/1000)
    values = [days,hours,min,sec]

    function format(item)
    {if(item < 10){
        return `0${item}`
    }
    return item
    }
    countdown.forEach(function(item,index){
        item.innerHTML = format(values[index])
    })

    if(t < 0){
        clearInterval(interval)
        deadline.innerHTML = `<h1>Exams in progress</h1>`
    }
}
let interval = setInterval(calculateTime, 1000)
calculateTime()

let date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()


//web loader

const webLoader = document.querySelector('.web-loader')

window.addEventListener('load', ()=>{
    webLoader.classList.add('hidden-web-loader')
})

