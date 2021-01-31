const input = document.getElementById('item');
const submitBtn = document.getElementById('submit');

const list = document.getElementById('list');
const generateBtn = document.getElementById('generate');
const generated = document.getElementById('generated');

let itemsArray = [];

submitBtn.addEventListener('click', () => {
    let itemName = input.value;

    if (itemName != '') {
        itemsArray.push(itemName);
        let itemElem = document.createElement('div');
        itemElem.classList.add('list-item');
        itemElem.innerText = itemName; 
        list.appendChild(itemElem);

        input.value = '';
        return;
    } else {
        alert('Please enter an item...');
    }
});

generateBtn.addEventListener('click', () => {
    if(itemsArray != 0) {
        generated.innerText = itemsArray[randomIndex(0,itemsArray.length)];
        return;
    } else {
        alert('No items added... \nPlease add and item');
    }
});


/**
 * Inclusive of min & max
 */
// function randomIndex (min,max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

/**
 * Exclusive
 */

function randomIndex (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}