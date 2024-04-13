
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

// // handle checkout product
// addEventListener("DOMContentLoaded", () => {
//     setTimeout(function () {
//         const buyProducts = document.querySelectorAll(".box-product");
//         buyProducts.forEach(product => {
//             product.addEventListener("click", function () {
//                 const productName = this.getAttribute("data-product");
//                 const productPrice = this.getAttribute("data-price");
//                 const productImg = this.getAttribute("data-img");
//                 const productEst = this.getAttribute("data-est");
//                 const productGame = this.getAttribute("data-game");
//                 // Redirect to checkout page with product details
//                 window.location.href = `/pages/checkout/?product=${productName}&price=${productPrice}&cg="${productGame}"&pimg=${productImg}&est=${productEst}`;
//             });
//         });
//     }, 1300);
// });
// manage to product in home
function productManageHome() {
    fetch("https://sheetdb.io/api/v1/8fiiuqabyhl5m")
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
            /*const fsProducts = productsByCategory["flash-shale"];
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
                    <div class="d-flex box-product" data-product="${productName}" data-game="${productCG}" data-price="${price}" data-img="${productImg}" data-est="${estimasi}">
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
            });*/

            /*const recProducts = productsByCategory["recommend"];
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
                    <div class="d-flex box-product box-product-sm" data-product="${productName}" data-game="${productCG}" data-price="${price}" data-img="${productImg}" data-est="${estimasi}">
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
            }); */

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
fetch('https://sheetdb.io/api/v1/8fiiuqabyhl5m')
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
        productDiv.setAttribute('data-game', categame);
        productDiv.setAttribute('data-img', imgSrc);
        productDiv.setAttribute('data-est', estimasi);
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
        productDiv.setAttribute('data-game', categame);
        productDiv.setAttribute('data-img', imgSrc);
        productDiv.setAttribute('data-est', estimasi);
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
        productDiv.setAttribute('data-game', categame);
        productDiv.setAttribute('data-img', imgSrc);
        productDiv.setAttribute('data-est', estimasi);
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


// checkout system

const checkoutLS = localStorage.getItem('hasLogin');

document.addEventListener("DOMContentLoaded", function() {
  //  const checkoutLS = localStorage.getItem('checkout');
    if (checkoutLS) {
        const urlParams = new URLSearchParams(window.location.search);
        const productShow = urlParams.get('showlist');
        
// do get read the datas and print it
fetch('https://script.google.com/macros/s/AKfycbzPDM7G1rRHN7B9tp8ZfiTKUYRUveJiw69ERWCq03ixdhwlETnRdeQmYwjhQTDbpV5jsA/exec')
  .then(res => res.json())
  .then(data => {
   console.log(data)
      const specialBody = document.getElementById('special-body');
      const diamondBody = document.getElementById('diamond-body');
      const payBody = document.getElementById('payBody');
      const productLoad = document.querySelectorAll(".product-load");
      const productLoadPay = document.querySelectorAll(".product-load-pay");
      const labelProduct1 = document.getElementById('label-product1');
      const labelProduct2 = document.getElementById('label-product2');
       data.content.slice(1).forEach(row => {
        const divProduct = document.createElement('div');
        divProduct.innerHTML = `
          <div class="p-2 d-flex justify-content-center text-light rounded-2 product-checkout" style="background:rgba(118, 176, 236, 0.25);" data-nama-game="${row[1]}" data-nama-item="" data-harga-item="${row[4]}" data-estimasi-ch="${row[5]}" >
                      <div class="d-flex flex-column w-75">
                       <label class="fw-bold title-product-checkout text-light" style="">
                         ${row[1]}
                       </label>
                        <label class="" style="color:#a6a6a6;font-size:.7em;">Rp ${row[4]}</label>
                      </div>
                      <div class="w-25 d-flex justify-content-center align-items-center">
                        <i class="bi bi-bag" style="color:#319de2;"></i>
                      </div>
                    </div>
        `;
        const divProduct1 = document.createElement('div');
        divProduct1.innerHTML = `
          <div class="p-2 d-flex justify-content-center text-light rounded-2 product-checkout" style="background:rgba(118, 176, 236, 0.25);" data-nama-game="${row[1]}" data-nama-item="" data-harga-item="${row[4]}" data-estimasi-ch="${row[5]}" >
                      <div class="d-flex flex-column w-75">
                       <label class="fw-bold title-product-checkout text-light" style="">
                         ${row[1]}
                       </label>
                        <label class="" style="color:#a6a6a6;font-size:.7em;">Rp ${row[4]}</label>
                      </div>
                      <div class="w-25 d-flex justify-content-center align-items-center">
                        <i class="bi bi-gem" style="color:#319de2;"></i>
                      </div>
                    </div>
        `;
        const payDiv = document.createElement('div');
        payDiv.innerHTML = `
              <div class="d-flex method-pay align-items-center gap-3 rounded-2 py-3 px-2 w-100 text-light" style="background:rgba(118, 176, 236, 0.25);" id="payment" data-pajak="500" data-pay="qris">
                <div class="d-flex flex-column"> 
                <label class="text-light">Qris (All payment + 500) (via WhatsApp)</label>
                <div>
                <svg width="30" height="20" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M19.5744 39.4434C30.3851 39.4434 39.1489 30.7129 39.1489 19.9434C39.1489 9.17381 30.3851 0.443359 19.5744 0.443359C8.76378 0.443359 0 9.17381 0 19.9434C0 30.7129 8.76378 39.4434 19.5744 39.4434Z" fill="#01AED6"/>
                  <path d="M30.4648 18.2003C30.2313 17.3172 29.7268 16.5287 29.0218 15.945C28.3167 15.3613 27.4463 15.0115 26.5321 14.9444H13.3104C13.1814 14.9654 13.0493 14.9583 12.9234 14.9234C12.7974 14.8886 12.6806 14.8269 12.5809 14.7425C12.4813 14.6582 12.4013 14.5533 12.3464 14.4351C12.2915 14.3169 12.263 14.1883 12.263 14.058C12.263 13.9278 12.2915 13.7991 12.3464 13.6809C12.4013 13.5627 12.4813 13.4578 12.5809 13.3735C12.6806 13.2892 12.7974 13.2274 12.9234 13.1926C13.0493 13.1577 13.1814 13.1506 13.3104 13.1717H26.1525C26.1525 13.1717 26.105 9.77393 21.7927 9.77393H14.8705C11.9046 9.77393 8.75492 11.3339 8.57104 15.1571C8.37215 18.3489 8.37215 21.5499 8.57104 24.7417C8.75492 26.9635 9.37181 29.5103 14.2536 29.9357C19.1353 30.3612 24.539 30.1248 26.4372 29.6994C27.5328 29.4394 28.5156 28.8356 29.2408 27.9771C29.9659 27.1185 30.395 26.0506 30.4648 24.9307C30.6546 22.2657 30.9393 20.0912 30.4648 18.2003ZM27.0066 22.3839V23.5657C27.0066 23.7789 26.9216 23.9833 26.7703 24.134C26.619 24.2847 26.4139 24.3694 26.1999 24.3694C25.986 24.3694 25.7808 24.2847 25.6295 24.134C25.4782 23.9833 25.3932 23.7789 25.3932 23.5657V22.3839C25.1989 22.2194 25.06 21.9995 24.9952 21.7539C24.9304 21.5082 24.9428 21.2487 25.0307 21.0103C25.1187 20.7719 25.278 20.5661 25.487 20.4208C25.6961 20.2754 25.9449 20.1975 26.1999 20.1975C26.4549 20.1975 26.7037 20.2754 26.9128 20.4208C27.1218 20.5661 27.2811 20.7719 27.3691 21.0103C27.457 21.2487 27.4694 21.5082 27.4046 21.7539C27.3398 21.9995 27.2009 22.2194 27.0066 22.3839Z" fill="white"/>
                  <path d="M63.694 12.1196C60.2121 12.1196 57.3887 14.7255 57.3887 17.946C57.3887 21.1664 60.2121 23.7724 63.694 23.7724C67.1759 23.7724 69.9934 21.1605 69.9934 17.946C69.9934 14.7314 67.1759 12.1196 63.694 12.1196ZM63.694 20.9833C62.8505 21.0136 62.0292 20.7099 61.41 20.1384C60.7908 19.5669 60.424 18.7744 60.3901 17.9342C60.4603 17.1094 60.8388 16.341 61.4507 15.7809C62.0625 15.2209 62.8631 14.9102 63.694 14.9102C64.5249 14.9102 65.3255 15.2209 65.9374 15.7809C66.5492 16.341 66.9277 17.1094 66.9979 17.9342C66.9834 18.3515 66.8863 18.7618 66.7123 19.1417C66.5383 19.5216 66.2907 19.8635 65.9838 20.1478C65.6768 20.4322 65.3166 20.6534 64.9236 20.7988C64.5307 20.9442 64.1129 21.0109 63.694 20.9951V20.9833Z" fill="#080403"/>
                  <path d="M78.1917 12.1196C76.9062 12.1205 75.6616 12.57 74.6743 13.3901V12.421H71.5127V27.7846H74.6743V22.2596C75.6595 23.084 76.905 23.536 78.1917 23.536C79.7114 23.536 81.1689 22.9346 82.2434 21.8641C83.318 20.7936 83.9217 19.3417 83.9217 17.8278C83.9217 16.3139 83.318 14.862 82.2434 13.7915C81.1689 12.721 79.7114 12.1196 78.1917 12.1196ZM77.5986 20.9833C76.96 20.9786 76.3386 20.7773 75.8193 20.4071C75.3 20.0368 74.9084 19.5157 74.698 18.9151V16.7405C74.9086 16.1406 75.3005 15.6202 75.8199 15.251C76.3392 14.8817 76.9605 14.6817 77.5986 14.6783C78.4371 14.6783 79.2412 15.0101 79.8341 15.6007C80.427 16.1914 80.7601 16.9925 80.7601 17.8278C80.7601 18.6631 80.427 19.4642 79.8341 20.0549C79.2412 20.6455 78.4371 20.9774 77.5986 20.9774V20.9833Z" fill="#080403"/>
                  <path d="M105.821 12.1196L102.226 19.3701L98.6314 12.1196H95.458L100.636 22.5728L98.062 27.7669H101.241L102.226 25.7755L103.816 22.5728L109 12.1196H105.821Z" fill="#080403"/>
                  <path d="M55.882 23.8848V12.2144H53.0822V13.2898C52.226 12.6887 51.2204 12.3335 50.1752 12.2629C49.1301 12.1923 48.0856 12.409 47.1557 12.8895C46.2258 13.37 45.4463 14.0957 44.9022 14.9874C44.3581 15.8791 44.0703 16.9026 44.0703 17.9462C44.0703 18.9897 44.3581 20.0132 44.9022 20.9049C45.4463 21.7967 46.2258 22.5224 47.1557 23.0028C48.0856 23.4833 49.1301 23.7001 50.1752 23.6295C51.2204 23.5589 52.226 23.2037 53.0822 22.6025V23.4239C53.0822 24.8834 51.6468 26.0594 49.8732 26.0594C49.2479 26.0904 48.6271 25.9393 48.0867 25.6245C47.5463 25.3097 47.1097 24.8447 46.8303 24.2866L44.4873 26.1598C45.0816 27.0149 45.8817 27.708 46.8143 28.1756C47.7469 28.6432 48.7822 28.8705 49.8258 28.8366C53.0585 28.8366 55.6922 26.7389 55.8286 24.1094V23.8789L55.882 23.8848ZM50.0749 21.1666C49.4861 21.1673 48.9082 21.0081 48.4035 20.7061C47.8987 20.4041 47.4861 19.9707 47.2101 19.4526C46.9341 18.9344 46.8052 18.3511 46.8371 17.7654C46.869 17.1797 47.0606 16.6137 47.3912 16.1284C47.7219 15.6431 48.1791 15.2567 48.7137 15.0109C49.2484 14.7651 49.8401 14.6691 50.4254 14.7333C51.0107 14.7975 51.5673 15.0194 52.0354 15.3752C52.5036 15.731 52.8655 16.2072 53.0822 16.7525V19.1162C52.846 19.7196 52.4327 20.238 51.8962 20.6038C51.3597 20.9696 50.725 21.1657 50.0749 21.1666Z" fill="#080403"/>
                  <path d="M89.888 12.1196C85.9376 12.1196 84.6682 14.6546 84.1699 15.6651L86.8214 16.2914C86.8214 16.2914 87.1061 14.3769 89.9533 14.3769C92.8005 14.3769 92.4149 16.2914 89.7635 16.6401C87.112 16.9887 84.1699 17.6269 84.1699 20.1028C84.1699 22.2478 86.0325 23.471 88.6246 23.471C91.2167 23.471 92.1302 21.9583 92.1302 21.9583V23.471H94.9062V16.1496C94.9062 14.4537 93.8385 12.1196 89.888 12.1196ZM88.7492 21.1605C86.2519 21.1605 86.5722 19.2342 87.9899 19.0805C89.7694 18.8796 91.3413 18.6019 92.1954 17.7864C92.1954 19.6774 91.2464 21.1605 88.7492 21.1605Z" fill="#080403"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="109" height="39" fill="white" transform="translate(0 0.443359)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  <svg width="30" height="20" viewBox="0 0 79 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M66.168 0.443359C59.0828 0.443359 53.3359 6.23427 53.3359 13.3646C53.3359 20.4949 59.0828 26.2858 66.168 26.2858C73.2532 26.2858 79.0001 20.4949 79.0001 13.3646C79.0001 6.23427 73.2532 0.443359 66.168 0.443359ZM66.168 22.1494C61.7595 22.1494 58.1775 18.21 58.1775 13.404C58.1775 8.59791 61.7595 4.65851 66.168 4.65851C70.5766 4.65851 74.1586 8.59791 74.1586 13.404C74.1586 18.21 70.5766 22.1494 66.168 22.1494Z" fill="#8263d3"/>
                  <path d="M12.8321 0.443359C5.74689 0.443359 0 6.23427 0 13.3646C0 20.4949 5.74689 26.2858 12.8321 26.2858C19.9173 26.2858 25.6642 20.4949 25.6642 13.3646C25.6642 6.23427 19.9173 0.443359 12.8321 0.443359ZM12.8321 22.1494C8.42352 22.1494 4.84155 18.21 4.84155 13.404C4.84155 8.59791 8.42352 4.65851 12.8321 4.65851C17.2407 4.65851 20.8226 8.59791 20.8226 13.404C20.8226 18.21 17.2407 22.1494 12.8321 22.1494Z" fill="#8263d3"/>
                  <path d="M43.6133 5.36765H46.1718L40.4643 19.3919L34.4812 5.36765H36.8036V1.19189H26.6875V5.36765H29.2854L37.1185 23.8828C37.7876 25.4192 39.2834 26.4434 40.976 26.4434H42.0388L50.974 5.36765L51.7219 3.59493V1.19189H43.6133V5.36765Z" fill="#8263d3"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="79" height="26" fill="white" transform="translate(0 0.443359)"/>
                  </clipPath>
                  </defs>
                  </svg>
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40" height="30" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 422 139" xmlns:xlink="http://www.w3.org/1999/xlink">
                 <defs>
                  <style type="text/css">
                   <![CDATA[
                    .fil0 {fill:#F0592B}
                   ]]>
                  </style>
                 </defs>
                 <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"/>
                  <g id="_1972074928272">
                   <path class="fil0" d="M189 87c-4,-4 -9,-6 -14,-8 0,0 -1,0 -2,0 0,0 -1,0 -1,0 0,-1 -1,-1 -1,-1 0,0 0,0 -1,0 0,0 0,0 0,0 -2,-1 -4,-3 -6,-4 -2,-2 -2,-3 -2,-5 0,-3 1,-6 2,-7 2,-2 5,-3 7,-3 5,-1 11,1 15,3 4,3 7,-3 4,-6 -6,-4 -14,-5 -21,-4 -4,0 -8,2 -10,5 -3,3 -5,8 -5,12 0,11 12,15 20,18 3,1 3,1 5,2 2,1 4,2 6,4 0,0 0,0 1,1 0,0 0,0 0,0 0,0 0,1 1,1 0,1 0,1 1,3 0,0 0,0 0,0 0,1 0,1 0,1 0,1 0,2 0,2 -1,2 -1,3 -2,4 -2,4 -8,5 -12,5 -7,0 -12,-3 -18,-7 -1,-1 -4,0 -4,2 -2,1 -1,3 1,5 6,4 14,8 22,7 7,0 15,-3 18,-10 4,-7 2,-15 -4,-20z"/>
                   <path class="fil0" d="M230 79c-7,-4 -16,-3 -22,2 0,0 0,0 0,0l0 -21 0 -5c0,-5 -7,-5 -7,0l0 54 0 5c0,5 7,5 7,0l0 -19c0,0 0,0 0,0 0,-1 0,-1 0,-1 0,-1 0,-1 0,-1l0 0c1,-1 1,-1 1,-1 0,-1 1,-2 2,-3 0,0 0,0 0,0 0,0 0,-1 0,-1 0,0 0,0 1,0 0,-1 0,-1 0,-1 1,0 1,-1 1,-1 3,-2 6,-2 9,-2 2,0 3,1 4,1 1,1 2,1 3,3 -1,-1 0,0 0,1 0,0 1,1 1,1 0,0 0,1 0,2 0,0 0,0 0,0l0 1 0 16 0 5c0,5 8,5 8,0l0 -12c0,-4 0,-8 -1,-12 0,-4 -3,-8 -7,-11z"/>
                   <path class="fil0" d="M271 78c-9,-3 -18,1 -24,8 -5,8 -3,18 2,25 7,7 17,8 25,5 7,-3 12,-11 12,-19 0,0 0,0 0,0 -1,-9 -7,-16 -15,-19zm-6 32c-7,1 -13,-5 -14,-13 0,-7 7,-13 14,-13 7,0 13,6 14,13 -1,8 -7,13 -14,13z"/>
                   <path class="fil0" d="M319 78c-7,-2 -14,0 -20,5l0 -2c0,-5 -7,-5 -7,0l0 52 0 2c0,5 7,5 7,0l0 -23c6,6 16,7 24,4 7,-3 11,-11 11,-19 0,0 0,0 0,0 0,-9 -6,-16 -15,-19zm-6 32c-7,1 -13,-5 -13,-13 0,-7 6,-13 13,-13 8,0 14,6 14,13 0,8 -6,13 -14,13z"/>
                   <path class="fil0" d="M360 77c-7,0 -13,3 -16,9 -2,3 -3,6 -3,9 0,1 0,1 0,1 -1,6 1,12 5,16 6,8 20,7 29,2 4,-2 0,-8 -4,-6 -4,2 -7,3 -11,3 -1,0 -2,-1 -3,-1 -1,0 -1,0 -2,0 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 -1,0 -2,-1 -3,-2 0,0 -1,-1 -1,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,-1 0,0 0,0 0,0 0,-1 0,-2 -1,-2 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 0,0l26 0c2,0 4,-2 4,-4 0,-3 -1,-6 -2,-9 -3,-7 -10,-10 -16,-10zm-11 14c0,0 0,0 0,0 1,-1 1,-2 2,-3 0,0 0,0 0,0 0,0 0,0 0,0 1,-1 1,-1 2,-2 0,1 1,0 1,0 0,0 0,-1 1,-1 -1,0 0,0 0,0 2,0 3,-1 4,-1 3,0 5,1 8,2 0,0 0,0 0,0 0,0 0,1 0,1 1,0 1,1 1,1 0,0 1,1 1,1 0,0 0,1 1,1 0,0 0,1 0,1 0,0 0,1 0,1 0,0 0,0 0,1l-21 0c0,-1 0,-1 0,-1 0,0 0,-1 0,-1z"/>
                   <path class="fil0" d="M420 87c-3,-7 -9,-10 -16,-10 -7,0 -13,3 -16,9 -2,3 -3,6 -3,9 0,1 0,1 0,1 -1,6 1,12 5,16 6,8 21,7 29,2 4,-2 0,-8 -4,-6 -3,2 -7,3 -11,3 -1,0 -2,-1 -3,-1 -1,0 -1,0 -2,0 0,0 0,0 0,0 0,0 0,-1 0,-1 -2,0 -3,-1 -4,-2 0,0 0,-1 -1,-1 0,0 0,-1 0,-1 0,0 0,0 0,-1 0,0 -1,0 -1,0 0,-1 0,-2 0,-2 0,-1 0,-1 -1,-1 0,0 0,-1 0,-1 0,0 0,0 0,0l27 0c2,0 3,-2 3,-4 0,-3 0,-7 -2,-9zm-27 4c1,0 1,0 1,0 0,-1 1,-2 1,-3 0,0 0,0 0,0 0,0 1,0 1,0 0,-1 1,-1 1,-2 0,1 1,0 1,0 0,0 1,-1 1,-1 -1,0 0,0 0,0 2,0 3,-1 4,-1 3,0 6,1 8,2 0,0 0,0 0,0 0,0 0,1 1,1 0,0 0,1 1,1 0,0 0,1 0,1 0,0 1,1 1,1 0,0 0,1 0,1 0,0 0,1 1,1 0,0 0,0 0,1l-22 0c0,-1 0,-1 0,-1 0,0 0,-1 0,-1z"/>
                   <path class="fil0" d="M112 37l-27 0c0,-12 -7,-37 -26,-37 -21,0 -26,27 -26,37l-27 0c-7,-1 -6,7 -6,7l5 72c0,0 0,16 14,16 1,0 78,0 80,0 13,-1 14,-16 14,-16l5 -72c0,0 1,-8 -6,-7zm-53 -30c17,0 19,27 19,30l-38 0c0,-3 1,-30 19,-30zm21 92c-1,15 -17,15 -20,15 -12,0 -19,-7 -19,-7 -1,0 -1,-1 -1,-2 0,-1 1,-2 2,-2 0,0 1,1 1,1l0 0c0,0 0,0 0,0l0 0c1,1 8,6 17,6 7,0 15,-4 15,-11 1,-10 -13,-14 -16,-15 -3,-1 -18,-5 -17,-17 0,-5 5,-14 17,-14 11,-1 16,4 16,4l0 0c1,1 1,1 1,2 0,1 -1,2 -2,2 0,0 -1,0 -1,0 0,0 -6,-4 -14,-4 -8,0 -12,6 -13,10 0,8 11,11 13,12 10,3 22,7 21,20z"/>
                  </g>
                 </g>
                </svg>
                </div>
                </div>
             <svg width="70" height="33" viewBox="0 0 84 33" fill="" style="color:#fff;" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9663 5.75562H4.58141C4.43753 5.75561 4.29507 5.78399 4.16218 5.83912C4.02928 5.89425 3.90857 5.97505 3.80694 6.07689C3.70531 6.17873 3.62477 6.29962 3.56992 6.43263C3.51508 6.56564 3.487 6.70816 3.48731 6.85203V26.2115C3.48751 26.5016 3.60285 26.7798 3.80799 26.9849C4.01313 27.1901 4.2913 27.3054 4.58141 27.3056H17.0458V21.8614H8.9663V5.75562Z" fill="white"/>
              <path d="M23.9361 5.75562H11.6084V11.1366H19.7088V19.2191H25.0325V6.85203C25.0329 6.70796 25.0047 6.56525 24.9497 6.43209C24.8947 6.29893 24.814 6.17794 24.7121 6.07607C24.6102 5.9742 24.4892 5.89345 24.3561 5.83846C24.2229 5.78346 24.0802 5.75531 23.9361 5.75562Z" fill="white"/>
              <path d="M19.6855 27.3056H19.6871V32.4031H25.0325V21.8613H19.6855V27.3056Z" fill="white"/>
              <path d="M56.2166 5.65674H51.2588V27.1396H56.2166V5.65674Z" fill="white"/>
              <path d="M79.809 25.9242V22.0397V18.7527V16.3738V13.7949H65.7077V10.6153H79.809V5.65674H58.3262V7.50752V10.6153V13.7949V17.0579V18.7527H72.4267V22.0397H58.3262V26.9982H79.809V25.9242Z" fill="white"/>
              <path d="M11.5947 19.0668H17.0575V13.604H11.5947V19.0668ZM13.2517 15.2618H15.3998V17.4098H13.2517V15.2618Z" fill="white"/>
              <path d="M27.3314 10.6153H43.1167V13.7988H32.2684H28.705H27.3105V27.1812H32.2684V18.7751L41.1385 27.2121H48.8659L39.6151 18.7566H48.8968V18.1899V13.7988V10.6153V7.25195V5.65674H27.3314V10.6153Z" fill="white"/>
              <path d="M82.0641 21.9609V30.672C82.0639 30.7901 82.0169 30.9033 81.9334 30.9868C81.8499 31.0704 81.7367 31.1174 81.6186 31.1176H72.7832V32.4433H81.6186C82.088 32.4421 82.5378 32.2551 82.8697 31.9232C83.2016 31.5912 83.3886 31.1414 83.3899 30.672V21.9609H82.0641Z" fill="white"/>
              <path d="M10.6067 0.443359H1.77125C1.30186 0.444582 0.852048 0.631589 0.520139 0.963498C0.188229 1.29541 0.00122291 1.74522 0 2.21461L0 10.9257H1.32574V2.21461C1.32574 2.09645 1.37268 1.98314 1.45623 1.89959C1.53978 1.81603 1.65309 1.7691 1.77125 1.7691H10.6067V0.443359Z" fill="white"/>
              </svg>
              </div>
              <div class="d-flex method-pay align-items-center gap-3 rounded-2 py-3 px-2 w-100 text-light" style="background:rgba(118, 176, 236, 0.25);" id="payment" data-pajak="800" data-pay="e-wallet-gopay">
                <label class="text-light">E-wallet (Hanya QR Gopay + 800) (via WhatsApp)</label>
                <div>
                <svg width="30" height="20" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M19.5744 39.4434C30.3851 39.4434 39.1489 30.7129 39.1489 19.9434C39.1489 9.17381 30.3851 0.443359 19.5744 0.443359C8.76378 0.443359 0 9.17381 0 19.9434C0 30.7129 8.76378 39.4434 19.5744 39.4434Z" fill="#01AED6"/>
                  <path d="M30.4648 18.2003C30.2313 17.3172 29.7268 16.5287 29.0218 15.945C28.3167 15.3613 27.4463 15.0115 26.5321 14.9444H13.3104C13.1814 14.9654 13.0493 14.9583 12.9234 14.9234C12.7974 14.8886 12.6806 14.8269 12.5809 14.7425C12.4813 14.6582 12.4013 14.5533 12.3464 14.4351C12.2915 14.3169 12.263 14.1883 12.263 14.058C12.263 13.9278 12.2915 13.7991 12.3464 13.6809C12.4013 13.5627 12.4813 13.4578 12.5809 13.3735C12.6806 13.2892 12.7974 13.2274 12.9234 13.1926C13.0493 13.1577 13.1814 13.1506 13.3104 13.1717H26.1525C26.1525 13.1717 26.105 9.77393 21.7927 9.77393H14.8705C11.9046 9.77393 8.75492 11.3339 8.57104 15.1571C8.37215 18.3489 8.37215 21.5499 8.57104 24.7417C8.75492 26.9635 9.37181 29.5103 14.2536 29.9357C19.1353 30.3612 24.539 30.1248 26.4372 29.6994C27.5328 29.4394 28.5156 28.8356 29.2408 27.9771C29.9659 27.1185 30.395 26.0506 30.4648 24.9307C30.6546 22.2657 30.9393 20.0912 30.4648 18.2003ZM27.0066 22.3839V23.5657C27.0066 23.7789 26.9216 23.9833 26.7703 24.134C26.619 24.2847 26.4139 24.3694 26.1999 24.3694C25.986 24.3694 25.7808 24.2847 25.6295 24.134C25.4782 23.9833 25.3932 23.7789 25.3932 23.5657V22.3839C25.1989 22.2194 25.06 21.9995 24.9952 21.7539C24.9304 21.5082 24.9428 21.2487 25.0307 21.0103C25.1187 20.7719 25.278 20.5661 25.487 20.4208C25.6961 20.2754 25.9449 20.1975 26.1999 20.1975C26.4549 20.1975 26.7037 20.2754 26.9128 20.4208C27.1218 20.5661 27.2811 20.7719 27.3691 21.0103C27.457 21.2487 27.4694 21.5082 27.4046 21.7539C27.3398 21.9995 27.2009 22.2194 27.0066 22.3839Z" fill="white"/>
                  <path d="M63.694 12.1196C60.2121 12.1196 57.3887 14.7255 57.3887 17.946C57.3887 21.1664 60.2121 23.7724 63.694 23.7724C67.1759 23.7724 69.9934 21.1605 69.9934 17.946C69.9934 14.7314 67.1759 12.1196 63.694 12.1196ZM63.694 20.9833C62.8505 21.0136 62.0292 20.7099 61.41 20.1384C60.7908 19.5669 60.424 18.7744 60.3901 17.9342C60.4603 17.1094 60.8388 16.341 61.4507 15.7809C62.0625 15.2209 62.8631 14.9102 63.694 14.9102C64.5249 14.9102 65.3255 15.2209 65.9374 15.7809C66.5492 16.341 66.9277 17.1094 66.9979 17.9342C66.9834 18.3515 66.8863 18.7618 66.7123 19.1417C66.5383 19.5216 66.2907 19.8635 65.9838 20.1478C65.6768 20.4322 65.3166 20.6534 64.9236 20.7988C64.5307 20.9442 64.1129 21.0109 63.694 20.9951V20.9833Z" fill="#080403"/>
                  <path d="M78.1917 12.1196C76.9062 12.1205 75.6616 12.57 74.6743 13.3901V12.421H71.5127V27.7846H74.6743V22.2596C75.6595 23.084 76.905 23.536 78.1917 23.536C79.7114 23.536 81.1689 22.9346 82.2434 21.8641C83.318 20.7936 83.9217 19.3417 83.9217 17.8278C83.9217 16.3139 83.318 14.862 82.2434 13.7915C81.1689 12.721 79.7114 12.1196 78.1917 12.1196ZM77.5986 20.9833C76.96 20.9786 76.3386 20.7773 75.8193 20.4071C75.3 20.0368 74.9084 19.5157 74.698 18.9151V16.7405C74.9086 16.1406 75.3005 15.6202 75.8199 15.251C76.3392 14.8817 76.9605 14.6817 77.5986 14.6783C78.4371 14.6783 79.2412 15.0101 79.8341 15.6007C80.427 16.1914 80.7601 16.9925 80.7601 17.8278C80.7601 18.6631 80.427 19.4642 79.8341 20.0549C79.2412 20.6455 78.4371 20.9774 77.5986 20.9774V20.9833Z" fill="#080403"/>
                  <path d="M105.821 12.1196L102.226 19.3701L98.6314 12.1196H95.458L100.636 22.5728L98.062 27.7669H101.241L102.226 25.7755L103.816 22.5728L109 12.1196H105.821Z" fill="#080403"/>
                  <path d="M55.882 23.8848V12.2144H53.0822V13.2898C52.226 12.6887 51.2204 12.3335 50.1752 12.2629C49.1301 12.1923 48.0856 12.409 47.1557 12.8895C46.2258 13.37 45.4463 14.0957 44.9022 14.9874C44.3581 15.8791 44.0703 16.9026 44.0703 17.9462C44.0703 18.9897 44.3581 20.0132 44.9022 20.9049C45.4463 21.7967 46.2258 22.5224 47.1557 23.0028C48.0856 23.4833 49.1301 23.7001 50.1752 23.6295C51.2204 23.5589 52.226 23.2037 53.0822 22.6025V23.4239C53.0822 24.8834 51.6468 26.0594 49.8732 26.0594C49.2479 26.0904 48.6271 25.9393 48.0867 25.6245C47.5463 25.3097 47.1097 24.8447 46.8303 24.2866L44.4873 26.1598C45.0816 27.0149 45.8817 27.708 46.8143 28.1756C47.7469 28.6432 48.7822 28.8705 49.8258 28.8366C53.0585 28.8366 55.6922 26.7389 55.8286 24.1094V23.8789L55.882 23.8848ZM50.0749 21.1666C49.4861 21.1673 48.9082 21.0081 48.4035 20.7061C47.8987 20.4041 47.4861 19.9707 47.2101 19.4526C46.9341 18.9344 46.8052 18.3511 46.8371 17.7654C46.869 17.1797 47.0606 16.6137 47.3912 16.1284C47.7219 15.6431 48.1791 15.2567 48.7137 15.0109C49.2484 14.7651 49.8401 14.6691 50.4254 14.7333C51.0107 14.7975 51.5673 15.0194 52.0354 15.3752C52.5036 15.731 52.8655 16.2072 53.0822 16.7525V19.1162C52.846 19.7196 52.4327 20.238 51.8962 20.6038C51.3597 20.9696 50.725 21.1657 50.0749 21.1666Z" fill="#080403"/>
                  <path d="M89.888 12.1196C85.9376 12.1196 84.6682 14.6546 84.1699 15.6651L86.8214 16.2914C86.8214 16.2914 87.1061 14.3769 89.9533 14.3769C92.8005 14.3769 92.4149 16.2914 89.7635 16.6401C87.112 16.9887 84.1699 17.6269 84.1699 20.1028C84.1699 22.2478 86.0325 23.471 88.6246 23.471C91.2167 23.471 92.1302 21.9583 92.1302 21.9583V23.471H94.9062V16.1496C94.9062 14.4537 93.8385 12.1196 89.888 12.1196ZM88.7492 21.1605C86.2519 21.1605 86.5722 19.2342 87.9899 19.0805C89.7694 18.8796 91.3413 18.6019 92.1954 17.7864C92.1954 19.6774 91.2464 21.1605 88.7492 21.1605Z" fill="#080403"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="109" height="39" fill="white" transform="translate(0 0.443359)"/>
                  </clipPath>
                  </defs>
                  </svg>
                </div>
              </div>
        `;
        
        if (productShow === 'ff' && row[3] === 'FREE FIRE') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFf();
          if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'ml' && row[3] === 'ML') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductMl();
            if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'coc' && row[3] === 'COC') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductCoc();
            if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'cod' && row[3] === 'COD') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductCod();
            if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'fifa' && row[3] === 'FIFA') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFifa();
            if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'pubg' && row[3] === 'PUBG') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductPubg();
            if (row[9] === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (row[9] === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'tt' && row[3] === 'TIKTOK') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductTt();
            if (row[9] === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (row[9] === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else if (productShow === 'ig' && row[3] === 'INSTAGRAM') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductIg();
            if (row[9] === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (row[9] === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else if (productShow === 'yt' && row[3] === 'YOUTUBE') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductYt();
            if (row[9] === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (row[9] === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else if (productShow === 'fb' && row[3] === 'FACEBOOK') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          payBody.appendChild(payDiv);
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFb();
            if (row[9] === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (row[9] === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else {
       //   alert("409 product not found")
       // localStorage.removeItem('checkout');
        // window.location.href = "/pages/home/";
        }
    })
        
const inputShow = document.querySelector('.input-to-show');
const inputProductToShow = inputShow.getAttribute('data-inputProduct');
const showId = document.querySelector('.show-id');
const showIdPort = document.querySelector('.show-id-port');
const showUsn = document.querySelector('.show-usn');
const inputId = document.querySelector('#id-game1');
const inputId2 = document.querySelector('#id-game2');
const inputIdP = document.querySelector('#port-game');
const inputUsnSosmed = document.querySelector('#usn-ipt');
inputShow.addEventListener('input', (e) => {
  if (inputProductToShow === 'id') {
    showId.classList.remove('d-none')
    showId.classList.add('d-flex')
    showId.textContent = 'ID User : ' + inputId.value;
  } else if (inputProductToShow === 'id-port') {
    showIdPort.classList.remove('d-none')
    showIdPort.classList.add('d-flex')
    inputId2.addEventListener('input', (e) => {
    showIdPort.textContent = 'Data : ' + inputId2.value + '(' + inputIdP.value + ')';
    })
    inputIdP.addEventListener('input', (e) => {
    showIdPort.textContent = 'Data : ' + inputId2.value + '(' + inputIdP.value + ')';
    })
  } else if (inputProductToShow === 'usn') {
    showUsn.classList.remove('d-none')
    showUsn.classList.add('d-flex')
  } else {
    return;
  }
})

const pCheck = document.querySelectorAll('.product-checkout');
pCheck.forEach(pc => {
  pc.addEventListener('click', function(e) {
    // Menghapus kelas 'product-active' dari semua elemen
    pCheck.forEach(item => item.classList.remove('product-active'));
    
    // Menambahkan kelas 'product-active' pada elemen yang diklik
    this.classList.add('product-active');

    // Mendapatkan nilai atribut data-game dan data-harga
    const game = this.getAttribute("data-nama-game");
    const harga = parseInt(this.getAttribute("data-harga-item"));
    const estimasi = this.getAttribute("data-estimasi-ch");
    const displayGame = document.getElementById("nama-product");
    const displayHarga = document.getElementById("price-product");
    const displayEst = document.getElementById("estimasi-product");
    const hargaFormatted = harga.toLocaleString();
    
    displayGame.textContent = game;
    displayHarga.textContent = "Rp" + hargaFormatted;
    displayEst.textContent = "Dikirim : " + estimasi;
  });
});
const pay = document.querySelectorAll('.method-pay');
pay.forEach(p => {
  p.addEventListener('click', function (e) {
    
    console.log("dd", this)
    pay.forEach(pays => pays.classList.remove('method-pay-active'));
    
    this.classList.add('method-pay-active');
    
    const pajak = parseInt(this.getAttribute("data-pajak"));
    const hargaText = document.getElementById("price-product").textContent;
    const harga = parseInt(hargaText.replace(/\D/g, '')); // Menghapus semua karakter non-angka dari string
    const displayTotal = document.getElementById("total-product");
    const total = harga + pajak;
    const totalFormatted = total.toLocaleString();
    displayTotal.textContent = "Total : " + totalFormatted;
  })
})
    
        localStorage.removeItem('checkout');

  })   
  .catch(e => console.error('fail', error.message))
    } else {
        window.location.href = "/pages/home/";
    }
});




// deklarasi item 
var imgFf = 'https://drive.google.com/thumbnail?id=1Al4QoAGs2H2TWMuNC5j4VRerS0qGM2Vd';
var imgMl = 'https://drive.google.com/thumbnail?id=1AlLfexGTXP0Dri6rFY4sSjWcGCYj4mNI';
var imgCoc = 'https://drive.google.com/thumbnail?id=1B4HrGQxC8-wIKMx-smHf8X6hdxultTFA';
var imgCod = 'https://drive.google.com/thumbnail?id=1AowqHlzAgjbwQpoZizu9T_rVlv7JOnf_';
var imgFifa = 'https://drive.google.com/thumbnail?id=1B1UbIv0M73EO99zjD3fQsB7Cxysx5R8g';
var imgPubg = 'https://drive.google.com/thumbnail?id=1B5SgK4XxvBAjh-qSEFWrcWuzDzORHPm9';
var imgTt = 'https://drive.google.com/thumbnail?id=1CMiaX13bR7VwkmC6wmonUVkUikKpE34H';
var imgIg = 'https://drive.google.com/thumbnail?id=1COD2B8KZVbl-TLRqFwSfI0jFH3HOiQUN';
var imgYt = 'https://drive.google.com/thumbnail?id=1CT6e7Tfge3OA6gG87kcqPrCJeLXqCdQ-';
var imgFb = 'https://drive.google.com/thumbnail?id=1CWFk7eGmtEpdMqCHbyaN82JE9TbXuNqi';
const imgC1 = document.getElementById('img-checkout1');
const imgC2 = document.getElementById('img-checkout2');
const imgC3 = document.getElementById('img-checkout3');
const namaGame = document.getElementById('nama-game');
const namaPerusahaan = document.getElementById('nama-perusahaan');
const namaBrand = document.getElementById('brand-product');
const iptId = document.getElementById('ipt-id');
const iptIP = document.getElementById('ipt-id-port');
const iptUsn = document.getElementById('ipt-usn');


function showProductFf() {
  console.log('product FF')
  imgC1.src = imgFf;
  imgC2.src = imgFf;
  imgC3.src = imgFf;
  namaGame.textContent = 'Free Fire';
  namaPerusahaan.textContent = "@Garena";
  namaBrand.textContent = 'Free Fire';
  iptId.classList.remove('d-none');
  iptId.classList.add('d-flex');
  iptId.classList.add('input-to-show');
  iptId.setAttribute("data-inputProduct", 'id');
}
function showProductMl() {
  console.log('product Ml')
  imgC1.src = imgMl;
  imgC2.src = imgMl;
  imgC3.src = imgMl;
  namaGame.textContent = 'Mobile Legends';
  namaPerusahaan.textContent = "@Montoon";
  namaBrand.textContent = 'Mobile Legends';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductCoc() {
  console.log('product Coc')
  imgC1.src = imgCoc;
  imgC2.src = imgCoc;
  imgC3.src = imgCoc;
  namaGame.textContent = 'Clash Of Clans';
  namaPerusahaan.textContent = "@Supercell";
  namaBrand.textContent = 'Clash Of Clans';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductCod() {
  console.log('product Cod')
  imgC1.src = imgCod;
  imgC2.src = imgCod;
  imgC3.src = imgCod;
  namaGame.textContent = 'Call of Duty';
  namaPerusahaan.textContent = "@Timi Studio";
  namaBrand.textContent = 'Call of Duty';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductFifa() {
  console.log('product Fifa')
  imgC1.src = imgFifa;
  imgC2.src = imgFifa;
  imgC3.src = imgFifa;
  namaGame.textContent = 'Fifa';
  namaPerusahaan.textContent = "@EA Sport";
  namaBrand.textContent = 'Fifa';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductPubg() {
  console.log('product Puhg')
  imgC1.src = imgPubg;
  imgC2.src = imgPubg;
  imgC3.src = imgPubg;
  namaGame.textContent = 'Pubg';
  namaPerusahaan.textContent = "@Tencent";
  namaBrand.textContent = 'Pubg';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductTt() {
  console.log('product tiktok')
  imgC1.src = imgTt;
  imgC2.src = imgTt;
  imgC3.src = imgTt;
  namaGame.textContent = 'Tiktok';
  namaPerusahaan.textContent = "@Sosmed";
  namaBrand.textContent = 'Tiktok';
  iptUsn.classList.remove('d-none');
  iptUsn.classList.add('d-flex');
  iptUsn.classList.add('input-to-show');
  iptUsn.setAttribute("data-inputProduct", 'usn');
}
function showProductIg() {
  console.log('product Instagram')
  imgC1.src = imgIg;
  imgC2.src = imgIg;
  imgC3.src = imgIg;
  namaGame.textContent = 'Instagram';
  namaPerusahaan.textContent = "@Sosmed";
  namaBrand.textContent = 'Instagram';
  iptUsn.classList.remove('d-none');
  iptUsn.classList.add('d-flex');
  iptUsn.classList.add('input-to-show');
  iptUsn.setAttribute("data-inputProduct", 'usn');
}
function showProductYt() {
  console.log('product yt1')
  imgC1.src = imgYt;
  imgC2.src = imgYt;
  imgC3.src = imgYt;
  namaGame.textContent = 'Youtube';
  namaPerusahaan.textContent = "@Sosmed";
  namaBrand.textContent = 'Youtube';
  iptUsn.classList.remove('d-none');
  iptUsn.classList.add('d-flex');
  iptUsn.classList.add('input-to-show');
  iptUsn.setAttribute("data-inputProduct", 'usn');
}
function showProductFb() {
  console.log('product Fb')
  imgC1.src = imgFb;
  imgC2.src = imgFb;
  imgC3.src = imgFb;
  namaGame.textContent = 'Facebook';
  namaPerusahaan.textContent = "@Sosmed";
  namaBrand.textContent = 'Facebook';
  iptUsn.classList.remove('d-none');
  iptUsn.classList.add('d-flex');
  iptUsn.classList.add('input-to-show');
  iptUsn.setAttribute("data-inputProduct", 'usn');
}
        