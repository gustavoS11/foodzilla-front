async function listProducts() {
    const products = await fetch("http://localhost:3000/product")
    const productsJson = await products.json()
    const div = document.querySelector("#div-products")
    productsJson.forEach(element => {
        const price = element.preco
        const preco = price.toString().replace(".", ",")
        div.insertAdjacentHTML("beforeend",`
        <ul> 
            <li><img class="img-li" src="${element.url}" alt="${element.nome}"></li>
            <li>
                <div>
                    <h2>${element.nome}</h2>
                    <h3>R$${preco}</h3>
                </div>
                <div>
                    <input class="input-submit" name="input-li" type="submit" value="Comprar">
                </div>
            </li>
        </ul>`
        )
    });
}
listProducts()