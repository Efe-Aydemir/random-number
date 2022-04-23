let button = document.querySelector('#enterbtn')
let input = document.querySelector('#numberİnput')
let result1 = document.querySelector('#result')
let result2 = document.querySelector('#result2')
let main = document.querySelector('#main')
let newmain = document.querySelector('#newmain')


input.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
}

let hak = 5

button.addEventListener('click', () => {
   
    if (hak == 0) {
        main.remove()
        newmain.innerHTML = "<h1 class='alert alert-danger d-flex align-items-center justify-content-center mt-5'>your right is over</h1><br><button class='btn btn-warning btn-lg' id='reset' onclick='window.location=`index.html`'>Reset Game</button>"
    }

    let rasnumber = Math.floor(Math.random() * 100)
        if (rasnumber == input.value) {
            result1.classList.remove('text-danger')
            result1.classList.add('text-success')
            result1.innerHTML = 'True'
            result2.innerHTML = `${rasnumber}`
            input.value = ""
            confetti({
                particleCount: 500,
                spread: 180
            });
            setTimeout(() => {
                confetti.reset()
            }, 2000);
        } else {
            result1.classList.add('text-danger')
            result1.innerHTML = 'false'
            result2.innerHTML = `${rasnumber}`
            input.value = ""
            hak--
        }

})

