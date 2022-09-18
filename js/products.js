const products = [
    { id: '001', Date: '05/10/2020', Products_no: '01', name: 'Mint', image: 'products/image_(1).jpg', price: 1100 },
    { id: '002', Date: '05/10/2020', Products_no: '02', name: 'Gooseberry', image: 'products/image_(6).jpg', price: 1600 },
    { id: '003', Date: '08/10/2020', Products_no: '03', name: 'Cauliflower(green)', image: 'products/image_(3).jpg', price: 2800 },
    { id: '004', Date: '05/10/2020', Products_no: '04', name: 'Cucumber', image: 'products/image_(4).jpg', price: 1800 },
    { id: '005', Date: '02/10/2020', Products_no: '05', name: 'Cauliflower(white)', image: 'products/image_(5).jpg', price: 2600 },
    { id: '006', Date: '11/10/2020', Products_no: '06', name: 'Cilantro', image: 'products/image_(2).jpg', price: 900 },
    { id: '007', Date: '10/10/2020', Products_no: '07', name: 'Onion', image: 'products/image_(7).jpg', price: 3300 },
    { id: '008', Date: '08/10/2020', Products_no: '08', name: 'Package', image: 'products/image_(8).jpg', price: 4500 },
    { id: '009', Date: '07/10/2020', Products_no: '09', name: 'Carrot', image: 'products/image_(9).jpg', price: 1700 },
];

const displayProducts = (data) => {
    data.forEach(product => {
        console.log(product.Date)
        const container = document.getElementById('cardContainer');
        const cardDiv = document.createElement('div')
        cardDiv.classList = 'px-5';
        cardDiv.classList = 'mb-5';
        cardDiv.innerHTML = `
    <div class="w-96 card bg-gradient-to-b from-slate-800 to-lime-900 shadow-xl">
        <div class="card-body">
            <h2 class="text-3xl text-lime-600">${product.name}</h2>
                <P>Shipping Date : ${product.Date}</P>
                <p>Product No : ${product.Products_no}</p>
            <h4 class="text-xl ">Price :<span class="text-lime-500"> ${product.price}</span></h4>
        </div>
        <div class="card-actions flex place-content-end my-2 mx-2">
            <button class="btn bg-gray-800"> <span class="text-stone-100">Add to Cart</span></button>
        </div>
        <figure><img src="${product.image}" alt="Shoes" /></figure>
    </div>
    `
        container.appendChild(cardDiv);
    });
}
displayProducts(products)