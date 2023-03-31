class Card extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })
        this.name = this.getAttribute('name')
        this.url = this.getAttribute('url')
        this.description = this.getAttribute('description')
        this.category = this.getAttribute('category')
        this.collection = this.getAttribute('collection')
        this.colors = this.getAttribute('color')
        this.price = this.getAttribute('price')

    }
    static get observedAttributes() {
        return ['name', 'url', 'description', 'category', 'collection', 'colors', 'price']
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "/src/components/card/style.css">
        <article>
            <figure>
                <img src="${this.url}">
            </figure>
                <div>
                    <h1 id ="title"> ${this.name} </h1>
                    <p class = "paragraph-text"> ${this.description} </p>
                    <div id="content-chars"> 
                        <h4> Color: ${this.colors}</h4>
                        <h3> ${this.price}$</h3>
                    </div>
                </div>
                <div id="footer-card">
                    <div id="footer-card-left"> 
                        <h2> ${this.category}</h2>
                    </div>
                    <div id="footer-card-right"> 
                        <h2>${this.collection}</h2>
                    </div>
                </div>
        </article>
        `
        console.log(this.url)
    }
    connectedCallback() {
        this.render()
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log(`attr ${propName} changed`)
        this[propName] = newValue
        this.render
    }
}

customElements.define('nike-card', Card)
export default Card