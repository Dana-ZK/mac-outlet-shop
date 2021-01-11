const renderCard = item => {
    const card = document.createElement('div');
    card.className = 'card'
    const button = document.createElement('button');
    button.innerText = 'Добавить в корзину';
    button.onclick = function() {
        console.log(item)
    }

    card.innerHTML = `
        <img src="./phone_store/img/${item.imgUrl}" alt="">
        <h1>${item.name}</h1>
        <p>Color: ${item.color}</p>
        <strong> Цена: ${item.price} usd </strong>
        `;
    card.appendChild(button)
    return card;
}

const renderCards = data => {
    document.querySelector('.container').innerHTML = '';
    data.forEach(item => {
        const card = renderCard(item);
        document.querySelector('.container').appendChild(card)
    })
}

renderCards(items)
