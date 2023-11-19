const countValue = document.getElementById('count');

const increment = () =>
// function increment()
{
    // Get The Value From UI 
    let value = parseInt(countValue.innerText);

    // Update Value 
    value++;

    // set the Value onto UI 
    countValue.innerText = value;
}

const decrement = () =>
// function decrement()
{
    // Get The Value From UI 
    let value = parseInt(countValue.innerText);

    // Update Value 
    value--;

    // set the Value onto UI 
    countValue.innerText = value;
}

