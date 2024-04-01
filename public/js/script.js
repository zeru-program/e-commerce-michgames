// search index system home page
document.getElementById("searchHome").addEventListener("click", () => {
    console.log("dd");
    window.location.href = "#productHome";
    setTimeout(function () {
        document.getElementById("searchHome").focus();
    }, 500);
});

// countdown flash shale
function countdown() {
    // Tanggal target (misalnya, 31 Desember 2024)
    var targetDate = new Date("April 3, 2024 23:59:59").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = targetDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        days = String(days).padStart(2, "0");
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        document.getElementById("countFS").innerHTML =
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countFS").innerHTML = "Waktu telah habis!";
        }
    }, 1000);
}
//  btn product page
// button declaration
const btnAll = document.getElementById("btnProductAll");
const btnMl = document.getElementById("btnProductML");
const btnFf = document.getElementById("btnProductFf");
// view list declaration
const productAll = document.getElementById("listProduct1");
const productMl = document.getElementById("listProduct2");
const productFf = document.getElementById("listProduct3");

function listAll() {
    productAll.style.left = "0";
    productMl.style.left = "200%";
    productFf.style.left = "200%";

    btnAll.classList.add("nav-p-active");
    btnMl.classList.remove("nav-p-active");
    btnFf.classList.remove("nav-p-active");
}
function listGames() {
    productAll.style.left = "200%";
    productMl.style.left = "0";
    productFf.style.left = "200%";

    btnMl.classList.add("nav-p-active");
    btnAll.classList.remove("nav-p-active");
    btnFf.classList.remove("nav-p-active");
}
function listSosmed() {
    productAll.style.left = "200%";
    productMl.style.left = "200%";
    productFf.style.left = "0";

    btnFf.classList.add("nav-p-active");
    btnAll.classList.remove("nav-p-active");
    btnMl.classList.remove("nav-p-active");
}
// pathname for onload
window.onload = function () {
    if (window.location.pathname === "/pages/home/") {
        countdown();
        welcomeHomeManage();
        productManageHome();
        splashManage();
    } else if (window.location.pathname === "/pages/product/") {
       productManageProduct();
    } else if (window.location.pathname === "/pages/account/") {
        accountManageLS();
    }
};

function splashManage() {
    const divSplash = document.getElementById("splashScreen");
    const localSplash = localStorage.getItem("splashOn");
    if (!localSplash) {
        divSplash.classList.remove("d-none");
        divSplash.classList.add("d-flex");
        localStorage.setItem("splashOn", "splash screen done display");

        setTimeout(function () {
            divSplash.classList.remove("d-flex");
            divSplash.classList.add("d-none");
        }, 4000);
    } else {
        divSplash.classList.remove("d-flex");
        divSplash.classList.add("d-none");
    }
}

// handle checkout product
addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        const buyProducts = document.querySelectorAll(".box-product");
        buyProducts.forEach(product => {
            product.addEventListener("click", function () {
                const productName = this.getAttribute("data-product");
                const productPrice = this.getAttribute("data-price");
                // Redirect to checkout page with product details
                window.location.href = `/pages/checkout/?product=${productName}&price=${productPrice}`;
            });
        });
    }, 1500);
});
// manage to product in home
function productManageHome() {
    fetch("https://sheetdb.io/api/v1/t0zcoym0xlyk9")
        .then(response => response.json())
        .then(data => {
            const productsByCategory = {};

            // Kelompokkan produk berdasarkan kategori
            data.forEach(product => {
                const category = product.category_produk;
                if (!productsByCategory[category]) {
                    productsByCategory[category] = [];
                }
                productsByCategory[category].push(product);
            });

            // flash shale display
            const fsProducts = productsByCategory["flash-shale"];
            const flashBody = document.getElementById("flash-body");
            fsProducts.forEach(product => {
                const productImg = product.img_src;
                const productName = product.produk_name;
                const productDescription = product.description_produk;
                const productCG = product.category_game;
                const price = product.price;
                const estimasi = product.estimasi;
                const labelDisc = product.label_discount;
                const priceDisc = product.price_discount;
                const productDiv = document.createElement("div");
                productDiv.innerHTML = `
                    <div class="d-flex box-product" data-product="${productName} - ${productCG}" data-price="${price}">
                      <div class="discount-label red"> <span>${labelDisc}</span> </div>
                      <div class="img-box-product">
                        <img src="${productImg}" alt="product">
                      </div>
                      <div class="desc-box-product">
                      <label class="" style="color: #4f4f4f; font-size: .7em;">${productCG}</label>
                      <h5 class="title-box-product flash-title">${productName}</h5>
                      <label class="price-product price-flash">Rp. ${price}</label>
                      <label class="price-product-slash">Rp. ${priceDisc}</label>
                      <label class="estimasi-product est-flash" >estimasi : ${estimasi}</label>
                      </div>
                    </div>
      `;
                flashBody.appendChild(productDiv);
            });

            const recProducts = productsByCategory["recommend"];
            const recBody = document.getElementById("recommend-body");
            recProducts.forEach(product => {
                const productImg = product.img_src;
                const productName = product.produk_name;
                const productDescription = product.description_produk;
                const productCG = product.category_game;
                const price = product.price;
                const estimasi = product.estimasi;
                const productDiv = document.createElement("div");
                productDiv.innerHTML = `
                    <div class="d-flex box-product box-product-sm" data-product="${productName} - ${productCG}" data-price="${price}">
                      <div class="img-box-product img-box-product-sm">
                        <img src="${productImg}" alt="product">
                      </div>
                      <div class="desc-box-product">
                      <label class="label-product-sm" style="color: #4f4f4f;">${productCG}</label>
                      <h5 class="title-box-product title-product-sm">${productName}</h5>
                      <label class="price-product price-product-sm">Rp. ${price}</label>
                      <label class="estimasi-product estimasi-product-sm" >estimasi : ${estimasi}</label>
                      </div>
                    </div>
      `;
                recBody.appendChild(productDiv);
            });

            // const discountProducts = productsByCategory['discount'];
            // const discountProductsContainer = document.getElementById('discount-products-container');
            // discountProducts.forEach(product => {
            //   const productName = product.produk_name;
            //   const productDescription = product.description_produk;
            //   const price = product.price;
            //   const productDiv = document.createElement('div');
            //   productDiv.innerHTML = `
            //     <h3>${productName}</h3>
            //     <p>${productDescription}</p>
            //     <p>Harga: ${price}</p>
            //   `;
            //   discountProductsContainer.appendChild(productDiv);
            // });
        });
}
//manage product in page product
function productManageProduct() {
fetch('https://sheetdb.io/api/v1/t0zcoym0xlyk9')
  .then(response => response.json())
  .then(data => {
    const listP1 = document.getElementById("listProduct1");
    const listP2 = document.getElementById("listProduct2");
    const listP3 = document.getElementById("listProduct3");

    // Loop melalui data produk
    data.forEach(product => {
      // Periksa apakah kategori produk adalah "all"
      if (product.category_produk === 'all') {
        // Ambil informasi produk
        const productName = product.produk_name;
        const price = product.price;
        const categame = product.category_game;
        const imgSrc = product.img_src;
        const estimasi = product.estimasi;

        // Buat elemen HTML untuk setiap produk
        const productDiv = document.createElement('div');
        productDiv.classList.add('d-flex', 'box-product', 'box-product-sm');
        productDiv.setAttribute('data-product', productName);
        productDiv.setAttribute('data-price', price);
        productDiv.innerHTML = `
          <div class="img-box-product img-box-product-sm">
            <img src="${imgSrc}" alt="${productName}" />
          </div>
          <div class="desc-box-product">
            <label class="label-product-sm" style="color: #4f4f4f">${categame}</label>
            <h5 class="title-box-product title-product-sm">${productName}</h5>
            <label class="price-product price-product-sm">Rp. ${price}</label>
            <label class="estimasi-product estimasi-product-sm">Estimasi: ${estimasi}</label>
          </div>
        `;
        listP1.appendChild(productDiv);
      }
      if (product.category_produk === 'all' && product.games_or_sosmed === 'GAME') {
        // Ambil informasi produk
        const productName = product.produk_name;
        const price = product.price;
        const categame = product.category_game;
        const imgSrc = product.img_src;
        const estimasi = product.estimasi;

        // Buat elemen HTML untuk setiap produk
        const productDiv = document.createElement('div');
        productDiv.classList.add('d-flex', 'box-product', 'box-product-sm');
        productDiv.setAttribute('data-product', productName);
        productDiv.setAttribute('data-price', price);
        productDiv.innerHTML = `
          <div class="img-box-product img-box-product-sm">
            <img src="${imgSrc}" alt="${productName}" />
          </div>
          <div class="desc-box-product">
            <label class="label-product-sm" style="color: #4f4f4f">${categame}</label>
            <h5 class="title-box-product title-product-sm">${productName}</h5>
            <label class="price-product price-product-sm">Rp. ${price}</label>
            <label class="estimasi-product estimasi-product-sm">Estimasi: ${estimasi}</label>
          </div>
        `;
        listP2.appendChild(productDiv);
      }
      if (product.category_produk === 'all' && product.games_or_sosmed === 'SOSMED') {
        // Ambil informasi produk
        const productName = product.produk_name;
        const price = product.price;
        const categame = product.category_game;
        const imgSrc = product.img_src;
        const estimasi = product.estimasi;

        // Buat elemen HTML untuk setiap produk
        const productDiv = document.createElement('div');
        productDiv.classList.add('d-flex', 'box-product', 'box-product-sm');
        productDiv.setAttribute('data-product', productName);
        productDiv.setAttribute('data-price', price);
        productDiv.innerHTML = `
          <div class="img-box-product img-box-product-sm">
            <img src="${imgSrc}" alt="${productName}" />
          </div>
          <div class="desc-box-product">
            <label class="label-product-sm" style="color: #4f4f4f">${categame}</label>
            <h5 class="title-box-product title-product-sm">${productName}</h5>
            <label class="price-product price-product-sm">Rp. ${price}</label>
            <label class="estimasi-product estimasi-product-sm">Estimasi: ${estimasi}</label>
          </div>
        `;
        listP3.appendChild(productDiv);
      }
      
    });
  });

}

// local st Main Start
const hasLogin = localStorage.getItem("hasLogin");

function welcomeHomeManage() {
    const username = localStorage.getItem("username");
    const usernameDisplay = document.getElementById("welcomeHomeUser");
    if (username) {
        usernameDisplay.textContent = `Welcome, ${username}!`;
    } else {
        usernameDisplay.textContent = "Welcome!";
    }
}
function accountManageLS() {
    const divHasLogin = document.getElementById("accountHasLogin");
    const divNotLogin = document.getElementById("accountNotLogin");
    //value data
    const valueUsername = localStorage.getItem("username");
    const valueEmail = localStorage.getItem("email");
    const valuePassword = localStorage.getItem("password");
    //display text
    const usernameAcc = document.getElementById("usernameAcc");
    const emailAcc = document.getElementById("emailAcc");
    const passwordAcc = document.getElementById("passwordAcc");
    if (hasLogin === "true") {
        divHasLogin.classList.remove("d-none");
        divHasLogin.classList.add("d-flex");
        divNotLogin.classList.add("d-none");

        usernameAcc.textContent = valueUsername;
        emailAcc.textContent = valueEmail;
        passwordAcc.textContent = valuePassword;

        if (valueUsername === "admin") {
            const dpAcc = document.querySelector(".acc-dropdown");
            const dashDiv = document.createElement("div");
            dashDiv.classList.add("accordion-item");
            dashDiv.innerHTML = `
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                      Dashboard Admin
                    </button>
                  </h2>
                  <div id="flush-collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex flex-column">
                      <label>Are you sure you want to go to the admin dashboard page?</label>
                      <button class="btn btn-success rounded-1 p-2 m-1" onclick="window.location.href = '/pages/dashboard/dash/'">Go!</button>
                      </div>
                  </div>
                  `;
            dpAcc.appendChild(dashDiv);
        }
    } else {
        divNotLogin.classList.remove("d-none");
        divNotLogin.classList.add("d-flex");
        divHasLogin.classList.add("d-none");
    }
}
function logoutUser() {
    localStorage.removeItem("hasLogin");
    localStorage.removeItem("name");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setTimeout(function () {
        location.reload();
    }, 2000);
}
// local st Main End

// console.log("User Agent:", navigator.userAgent);
// console.log("Platform:", navigator.platform);
