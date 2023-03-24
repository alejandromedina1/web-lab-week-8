class card extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({
            mode: 'open'
        })

    }
    static get observedAttributes() {
        return []
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel = "stylesheet" href = "/src/components/card/style.css"
        `
    }
    connectedCallback() {
        this.render()
    }
}