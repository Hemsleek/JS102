//selectors//
const counterEl = document.getElementsByClassName('first-text')
const lowerButtonEl = document.getElementById('lower')
const addButtonEl = document.getElementById('add')


//functions
function lowerCount() {
    const counterElValue = parseInt(counterEl[0].innerText, 10)
    if (counterElValue === 0) {
        return
    }
    const newCounterElValue = counterElValue - 1

    counterEl[0].textContent = newCounterElValue


}
function addCount() {
    const counterElValue = parseInt(counterEl[0].innerText, 10)
    const newCounterElValue = counterElValue + 1
    counterEl[0].textContent = newCounterElValue

}

//triggers & event-listerner

lowerButtonEl.addEventListener('click', lowerCount)
addButtonEl.addEventListener('click', addCount)