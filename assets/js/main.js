// UI
let frm = document.querySelector('#frm');
let product = document.querySelector('#product');
let price = document.querySelector('#price');
let qty = document.querySelector('#qty');
let productList = document.querySelector('#showProducts');
let flashmsg = document.querySelector('.flashmsg');
// Event Listiner
// Add Product
frm.addEventListener('submit', addProduct);
// Remove Single Products
productList.addEventListener('click', removeProduct);

// addProduct Function
function addProduct(e){
    // form validation
    if(product.value === "" || price.value === "" || qty.value === ""){
        flashmsg.innerText = "Please Fill the all required fild";
        flashmsg.style.color = "#ff0000";
    }
    else{
        flashmsg.innerText = "";
        flashmsg.style.color = "#000";
        // create tr tag
        let tr  = document.createElement('tr');
        tr.innerHTML = `<td>${product.value}</td><td>${price.value}</td><td>${qty.value}</td><td><a href="#">X</a></td>`;
        // append child
        productList.appendChild(tr);
       
    }
    product.value = '';
    price.value = '';
    qty.value = '';
    e.preventDefault();
}

// remove Single Products
function removeProduct(e){
    console.log(e.target.parentElement.parentElement.remove());
}