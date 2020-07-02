const startButton = document.querySelector("#start")
const durationInput = document.querySelector("#duration")
const pauseButton = document.querySelector("#pause")

const circle = document.querySelector('circle')
const perimeter = 2 * circle.getAttribute('r') * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)

let duration

let mytimer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete() {
        console.log("Timer Completed")
    }
})