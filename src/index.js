import "./components/card/card.js"

async function getContent() {

    const content = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }
    const API = await fetch('https://641f59d9f228f1a83eb525fb.mockapi.io/nikeData/catalog', content)
    const data = await API.json()
    return data
}
const itemList = await getContent()

const cardList = document.getElementById('card-list')

function refreshList() {
    cardList.innerHTML = ''

    for (const item of itemList) {
        const element = document.createElement('nike-card')
        updateItem(element, 'name', item.name)
        updateItem(element, 'description', item.description)
        updateItem(element, 'category', item.category)
        updateItem(element, 'collection', item.collection)
        updateItem(element, 'price', item.price)
        updateItem(element, 'colors', item.color)
        updateItem(element, 'url', item.url)
        cardList.append(element)
    }
}

refreshList()

function updateItem(item, key, value) {
    item[key] = value
    item.setAttribute(key, value)
}


console.log(itemList)

