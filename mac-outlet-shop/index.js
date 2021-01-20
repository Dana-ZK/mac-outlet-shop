const renderCard = item => {
    const card = document.createElement('div');
    card.className = 'card'
    const button = document.createElement('button');
    button.innerText = 'Добавить в корзину';
    button.className = 'button'
    button.classList.toggle('active')
    button.onclick = function() {
        console.log(item)
    }
    const stock = document.createElement('div');
    stock.className = 'stock'

    card.innerHTML = `
        <img src="./phone_store/img/${item.imgUrl}" alt="">
        <h1>${item.name}</h1>
        <strong> Цена: ${item.price} usd </strong>
        `;
    card.appendChild(button);

    stock.innerHTML =`
        <p>Наличие: ${item.orderInfo['inStock']}</p>
        <p>Наличие: ${item.orderInfo['reviews']}</p>
        `
    card.appendChild(stock);
    return (card);
}

const renderCards = data => {
    document.querySelector('.container').innerHTML = '';
    data.forEach(item => {
        const card = renderCard(item);
        document.querySelector('.container').appendChild(card)
    })
}

renderCards(items)


const searchItems = () => {
    const value = document.getElementById('search').value;
    const result = items.filter(item => {
        return item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    renderCards(result)
}
document.getElementById('search').oninput = searchItems;









// SORTING PRICE
const itemSorting = document.querySelector('#Sorting-type');

const priceSorting = function () {
    if (itemSorting.value === 'to-high') {
        const arr = items.slice().sort((a, b) => a.price - b.price)
        return renderCards(arr)
    }
    if (itemSorting.value === 'to-low') {
        const arr = items.slice().sort((a, b) => b.price - a.price)
        return renderCards(arr)
    }
    return renderCards(items)
}

itemSorting.onchange = priceSorting