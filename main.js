// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');

const tock = new Audio('sounds/tock.mp3');//
const hiHat = new Audio('sounds/hi-hat.mp3')//
const kickDrum = new Audio('sounds/kick-drum.mp3')//
const snareDrum = new Audio('sounds/snare-drum.mp3')//
const bombDrop = new Audio('sounds/mixkit-bomb-drop-impact-2804.wav')
const echo = new Audio('sounds/mixkit-instrument-echo-swell-2673.wav')
const bassPulse = new Audio('sounds/mixkit-instrument-echo-swell-2673.wav')
const retroAlarm = new Audio('sounds/mixkit-retro-game-emergency-alarm-1000.wav')


const kickCheck = document.querySelector('#kick-drum')
const snareCheck = document.querySelector('#snare-drum')
const hiHatCheck = document.querySelector('#hi-hat')
const metronomeCheck = document.querySelector('#metronome')


const kickTiming = document.querySelector('#kick-drum')

// This function is called every 600ms
let count = 0//
let counter = 0//
metronomeClick = false//

function update() {
    count++//
    counter = (counter % 4) + 1

    if (hiHatCheck.checked && counter === 4) {
        hiHat.play()
    }
    if (kickCheck.checked) {
        kickDrum.play()
    }
    if (snareCheck.checked) {
        snareDrum.play()
    }
    if(bombDrop.checked){
        bombDrop.play();
    }
    if(echo.checked){
        echo.play();
    }
    if(bassPulse.checked){
        bassPulse.play();
    }
    if(retroAlarm.checked){
        retroAlarm.play();
    }
    if (metronomeCheck.checked) {
        if (counter === 4) {
            tock.play()
        } else {
            tick.play();
        }
    }

const metCounter =document.querySelector('#metCounter')
metCounter.addEventListener('click',()=>{
    count++
    if(count > 4){
        count=0
    }
})


    if (kickCheck.checked && Number(kickTiming.value) === counter) {
        kickDrum.play();
    }

    document.body.addEventListener('click', () => {
        const countElement = document.getElementById('metCounter')
        countElement.innerText = 'Count: ' + count

        if (metronomeClick = false) {
            setInterval(update, 600)
            metronomeClick = true
        }
    })

}


//    const currentCount = Number(document.querySelector('#metCount').value);//
//    console.log(currentCount)//



// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
// Every time the `update()` function is called, we need to update the value of this metronome count element. We can do this by determing what the current count is based on the global count variable we defined previously.
