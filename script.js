const countdown = document.querySelectorAll('.count-div h3')

let futureTime = new Date(2022,11,13,00,0)

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

    const days = Math.floor(t/oneDay)
    const hours = Math.floor((t%oneDay)/oneHour)
    const min = Math.floor((t%oneHour)/oneMin)
    const sec = Math.floor((t%oneMin)/1000)

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
}
let interval = setInterval(calculateTime, 1000)
calculateTime()

let date = document.getElementById('date')

date.innerHTML = new Date().getFullYear()

