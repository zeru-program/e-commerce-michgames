
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

/// spinner
function spinerPageNormal () {
const conSpiner = document.querySelector('.con-spiner');
setTimeout(function() {
  conSpiner.style.opacity = 0;
  setTimeout(function() {
    
  conSpiner.style.display = 'none';
  }, 500);
}, 2100);
}
function spinerPageCheckout () {
const conSpiner = document.querySelector('.con-spiner');
  conSpiner.style.opacity = 0;
  setTimeout(function() {
  conSpiner.style.display = 'none';
  }, 500);
}


urlFb = "https://michstore-all-default-rtdb.firebaseio.com/";

// notif
fetch(urlFb + 'notification.json')
.then(res => res.json())
.then(data => {
  for (let key in data) {
    var val = data[key];
   // console.log(val)
  
     const getBodyNotif = document.getElementById("notif-body");
     
       const appenNotif = document.createElement('div');
       appenNotif.innerHTML = `
           <div class="w-100 py-2 text-light d-flex flex-column rounded-2" style="padding-inline:10px; background:#3B4856;">
             <h4 class="m-0">${val.judul}</h4>
             <p class="m-0">${val.message}</p>
             <p>${val.date}</p>
           </div>
           `;
           if (val.display === 'y') {
          getBodyNotif.appendChild(appenNotif);
           }
  }
       
})
.catch(e => console.error(error.message))

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

  const pathname = window.location.pathname;
  const urlParams = new URLSearchParams(window.location.search);
  const showlist = urlParams.get('showlist');

    if (window.location.pathname === "/pages/home/") {
        countdown();
      //  welcomeHomeManage();
        spinerPageNormal();
    } else if (window.location.pathname === "/pages/product/") {
        spinerPageNormal();
    } else if (window.location.pathname === "/pages/account/") {
        accountManageLS();
        spinerPageNormal();
    } else if (window.location.pathname === "/pages/troli/") {
        accountManageLS();
        spinerPageNormal();
    }
 

};

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
        divHasLogin.classList.remove("d-flex");
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
 //showCheckout();
const checkoutLSL = localStorage.getItem('hasLogin');
const checkoutLS = localStorage.getItem('checkout');

document.addEventListener('DOMContentLoaded', function () {
  //  const checkoutLS = localStorage.getItem('checkout');
 //  if (checkoutLS) {
    if (checkoutLS) {
        const urlParams = new URLSearchParams(window.location.search);
        const productShow = urlParams.get('showlist');
  
// do get read the datas and print it
fetch(urlFb + 'product.json')
  .then(res => res.json())
  .then(data => {
    spinerPageCheckout();
     function formatNumber(number) {
          return number.toLocaleString('id-ID');
      }
      const specialBody = document.getElementById('special-body');
      const diamondBody = document.getElementById('diamond-body');
      const payBody = document.getElementById('payBody');
      const productLoad = document.querySelectorAll(".product-load");
      const productLoadPay = document.querySelectorAll(".product-load-pay");
      const labelProduct1 = document.getElementById('label-product1');
      const labelProduct2 = document.getElementById('label-product2');
      for (let key in data) {
        var val = data[key];
        const pImg = val.img_src;
        const pName = val.produk_name;
        const pDesk = val.description_produk;
        const pCgame = val.category_game;
        const pPrice = val.price;
        const pEstimasi = val.estimasi;
        const pCproduk = val.category_produk;
        const pLdiskon = val.label_discount;
        const pPdiskon = val.price_discount;
        const pDisp = val.display;
        const pId = val.id;
        const divProduct = document.createElement('div');
        divProduct.innerHTML = `
          <div class="p-2 d-flex justify-content-center text-light rounded-2 product-checkout" style="background:rgba(118, 176, 236, 0.25);height:65px!important;" data-nama-game="${pName}" data-nama-item="" data-harga-item="${pPrice}" data-estimasi-ch="${pEstimasi}" >
                      <div class="d-flex flex-column w-75">
                       <label class="fw-bold title-product-checkout text-light" style="font-size:.69em!important;">
                         ${pName}
                       </label>
                        <label class="" style="color:#a6a6a6;font-size:.7em;">Rp ${formatNumber(pPrice)}</label>
                      </div>
                      <div class="w-25 d-flex justify-content-center align-items-center">
                        <i class="bi bi-bag" style="color:#319de2;"></i>
                      </div>
                    </div>
        `;
       

        const divProduct1 = document.createElement('div');
        divProduct1.innerHTML = `
          <div class="p-2 d-flex justify-content-center text-light rounded-2 product-checkout" style="background:rgba(118, 176, 236, 0.25);" data-nama-game="${pName}" data-nama-item="" data-harga-item="${pPrice}" data-estimasi-ch="${pEstimasi}" >
                      <div class="d-flex flex-column w-75">
                       <label class="fw-bold title-product-checkout text-light" style="">
                         ${pName}
                       </label>
                        <label class="" style="color:#a6a6a6;font-size:.7em;">Rp ${formatNumber(pPrice)}</label>
                      </div>
                      <div class="w-25 d-flex justify-content-center align-items-center">
                        <i class="bi bi-gem" style="color:#319de2;"></i>
                      </div>
                    </div>
        `;

        const dmDiv = document.getElementById('diamond-div');
        if (productShow === 'ff' && val.category_game === 'FREE FIRE') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFf();
          if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'ml' && val.category_game === 'ML') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductMl();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'coc' && val.category_game === 'COC') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductCoc();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'cod' && val.category_game === 'COD') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductCod();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'fifa' && val.category_game === 'FIFA') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFifa();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'pubg' && val.category_game === 'PUBG') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductPubg();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } else if (productShow === 'roblox' && val.category_game === 'ROBLOX') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductRoblox();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'hayday' && val.category_game === 'HAYDAY') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductHayday();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'sg' && val.category_game === 'STUMBLE GUYS') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductSg();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'honkai' && val.category_game === 'HONKAI STAR RAIL') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductHonkai();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'brawlstar' && val.category_game === 'BRAWL STAR') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductBrawlStar();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'valo' && val.category_game === 'VALORANT') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductValo();
            if (val.display === 'diamond') {
           diamondBody.appendChild(divProduct1);
          } else if (val.display === 'special-item') {
           specialBody.appendChild(divProduct).cloneNode(true);
          } 
        } 
        else if (productShow === 'xl' && val.category_game === 'XL') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductXl();
            if (val.display === 'pulsa') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Pulsa';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'three' && val.category_game === 'THREE') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductThree();
            if (val.display === 'pulsa') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Pulsa';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'axis' && val.category_game === 'AXIS') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductAxis();
            if (val.display === 'pulsa') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Pulsa';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'dana' && val.category_game === 'DANA') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductDana();
            if (val.display === 'wallet') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Saldo';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'gopay' && val.category_game === 'GOPAY') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductGopay();
            if (val.display === 'wallet') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Saldo';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'shopeepay' && val.category_game === 'SHOPEEPAY') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductSpay();
            if (val.display === 'pulsa') {
           specialBody.appendChild(divProduct);
           labelProduct1.textContent = 'Saldo';
           labelProduct2.textContent = '';
           dmDiv.classList.remove('d-flex')
           dmDiv.classList.add('d-none')
          } 
        } 
        else if (productShow === 'tt' && val.category_game === 'TIKTOK') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductTt();
            if (val.display === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (val.display === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } 
        else if (productShow === 'ig' && val.category_game === 'INSTAGRAM') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductIg();
            if (val.display === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (val.display === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else if (productShow === 'yt' && val.category_game === 'YOUTUBE') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductYt();
            if (val.display === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (val.display === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else if (productShow === 'fb' && val.category_game === 'FACEBOOK') {
           productLoad.forEach(pl => {
          pl.classList.remove("d-flex");
          pl.classList.add("d-none");
          })
          
          productLoadPay.forEach(plp => {
          plp.classList.remove('d-flex');
          plp.classList.add('d-none');
          })
          showProductFb();
            if (val.display === 'folowers') {
           diamondBody.appendChild(divProduct);
           labelProduct1.textContent = 'Folowers';
          } else if (val.display === 'liker') {
           specialBody.appendChild(divProduct).cloneNode(true);
           labelProduct2.textContent = 'Likers';
          } 
        } else {
         // console.log('409 product not found')
        //  alert("409 product not found")
       // localStorage.removeItem('checkout');
      //   window.location.href = "/pages/home/";
        }
    
      }
        
const inputShow = document.querySelector('.input-to-show');
const inputProductToShow = inputShow.getAttribute('data-inputProduct');
const showId = document.querySelector('.show-id');
const showIdPort = document.querySelector('.show-id-port');
const showUsn = document.querySelector('.show-usn');
const showNomor = document.querySelector('#nomor-show');
const inputId = document.querySelector('#id-game1');
const inputId2 = document.querySelector('#id-game2');
const inputIdP = document.querySelector('#port-game');
const inputNametag = document.querySelector('#nametag-ipt');
const inputNomor = document.querySelector('#nomor-ipt');
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
  } else if (inputProductToShow === 'nomor') {
    showNomor.classList.remove('d-none')
    showNomor.classList.add('d-flex')
    inputNomor.addEventListener('input', (e) => {
    showNomor.textContent = 'Nomor : ' + inputNomor.value;
    })
  } else if (inputProductToShow === 'nametag') {
    showId.classList.remove('d-none')
    showId.classList.add('d-flex')
    inputNametag.addEventListener('input', (e) => {
    showId.textContent = 'NameTag : ' + inputNametag.value;
    })
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
    pay.forEach(pays => pays.classList.remove('method-pay-active'));
    
    this.classList.add('method-pay-active');
    const method = this.getAttribute('data-pay');
    const pajak = parseInt(this.getAttribute("data-pajak"));
    const hargaText = document.getElementById("price-product").textContent;
    const harga = parseInt(hargaText.replace(/\D/g, '')); // Menghapus semua karakter non-angka dari string
    const displayTotal = document.getElementById("total-product");
    const displayMpay = document.getElementById("pay-method");
   displayMpay.textContent = method;
    const total = harga + pajak;
    const totalFormatted = total.toLocaleString();
    displayTotal.textContent = "Total : " + totalFormatted;
  })
})
    
   //     localStorage.removeItem('checkout');

  })   
  .catch(e => console.error('fail', error.message))
    } else {
    //  alert('kamu belum login, login dulu.')
    }
  /* } else {
        window.location.href = "/";
     return;
   }*/
});


// deklarasi item 
var imgFf = 'https://drive.google.com/thumbnail?id=1Al4QoAGs2H2TWMuNC5j4VRerS0qGM2Vd';
var imgMl = 'https://drive.google.com/thumbnail?id=1AlLfexGTXP0Dri6rFY4sSjWcGCYj4mNI';
var imgCoc = 'https://drive.google.com/thumbnail?id=1B4HrGQxC8-wIKMx-smHf8X6hdxultTFA';
var imgCod = 'https://drive.google.com/thumbnail?id=1AowqHlzAgjbwQpoZizu9T_rVlv7JOnf_';
var imgFifa = 'https://drive.google.com/thumbnail?id=1B1UbIv0M73EO99zjD3fQsB7Cxysx5R8g';
var imgPubg = 'https://drive.google.com/thumbnail?id=1B5SgK4XxvBAjh-qSEFWrcWuzDzORHPm9';
var imgRoblox = 'https://drive.google.com/thumbnail?id=1KCl4orxlJgkUN0ZDjNEB0RZy5-_83utd';
var imgHayday = 'https://drive.google.com/thumbnail?id=1K0xUgjpnGwO0ODsXBrIuLHmqsRcA2IZc';
var imgStumbleGuys = 'https://drive.google.com/thumbnail?id=1JtqndXnwdFflbjU-UwqsdpAj4U2NnfNX';
var imgHonkaiStarRail = 'https://drive.google.com/thumbnail?id=1JrLqGJf7Gn8eFtu8UXd6vNkvdz6czGp7';
var imgBrawlStar = 'https://drive.google.com/thumbnail?id=1Jpgs_OA_RKNc4jkeXPSebpA6ehPEkRfn';
var imgValorant = 'https://drive.google.com/thumbnail?id=1JoUmniyQCte3hJ97ZEMMiKxGj0BuYsdn';
var imgXl = 'https://drive.google.com/thumbnail?id=1LhYwvnkftmvnVPpmVgACkfji23LDFo4T';
var img3 = 'https://drive.google.com/thumbnail?id=1LVZLV8vk0q25tBSWzg-VR9U2WR9rgimR';
var imgAxis = 'https://drive.google.com/thumbnail?id=1LTCAG1w5Hd22Wam_R-CsGbo07_5JlKON';
var imgDana = 'https://drive.google.com/thumbnail?id=1LQrbnwNil4fuNWaHM49pi7bEH7f1F1yD';
var imgGopay = 'https://drive.google.com/thumbnail?id=1LSx99Bz5oKCod082SRzwHJ4NysCkm7wV';
var imgSpay = 'https://drive.google.com/thumbnail?id=1LC-Jb9IZqIV6rJ06KwZWfLABfMb_ZUoH';
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
const iptNo = document.getElementById('ipt-nomor');
const iptNametag = document.getElementById('ipt-nametag');


function showProductFf() {
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
function showProductRoblox() {
  imgC1.src = imgRoblox;
  imgC2.src = imgRoblox;
  imgC3.src = imgRoblox;
  namaGame.textContent = 'Roblox';
  namaPerusahaan.textContent = "@Roblox Corporation";
  namaBrand.textContent = 'Roblox';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductHayday() {
  imgC1.src = imgHayday;
  imgC2.src = imgHayday;
  imgC3.src = imgHayday;
  namaGame.textContent = 'Hayday';
  namaPerusahaan.textContent = "@Supercell";
  namaBrand.textContent = 'Hayday';
  iptNametag.classList.remove('d-none');
  iptNametag.classList.add('d-flex');
  iptNametag.classList.add('input-to-show');
  iptNametag.setAttribute("data-inputProduct", 'nametag');
}
function showProductSg() {
  imgC1.src = imgStumbleGuys;
  imgC2.src = imgStumbleGuys;
  imgC3.src = imgStumbleGuys;
  namaGame.textContent = 'Stumble Guys';
  namaPerusahaan.textContent = "@KitkaGames";
  namaBrand.textContent = 'Stumble Guys';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductHonkai() {
  imgC1.src = imgHonkaiStarRail;
  imgC2.src = imgHonkaiStarRail;
  imgC3.src = imgHonkaiStarRail;
  namaGame.textContent = 'Honkai Star Rail';
  namaPerusahaan.textContent = "@MiHoYo";
  namaBrand.textContent = 'Honkai Star Rail';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductBrawlStar() {
  imgC1.src = imgBrawlStar;
  imgC2.src = imgBrawlStar;
  imgC3.src = imgBrawlStar;
  namaGame.textContent = 'Brawl Stars';
  namaPerusahaan.textContent = "@Supercell";
  namaBrand.textContent = 'Brawl Stara';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}
function showProductValo() {
  imgC1.src = imgValorant;
  imgC2.src = imgValorant;
  imgC3.src = imgValorant;
  namaGame.textContent = 'Valorant';
  namaPerusahaan.textContent = "@Riot Games";
  namaBrand.textContent = 'Valorant';
  iptIP.classList.remove('d-none');
  iptIP.classList.add('d-flex');
  iptIP.classList.add('input-to-show');
  iptIP.setAttribute("data-inputProduct", 'id-port');
}

function showProductXl() {
  imgC1.src = imgXl;
  imgC2.src = imgXl;
  imgC3.src = imgXl;
  namaGame.textContent = 'Pulsa XL';
  namaPerusahaan.textContent = "@pulsa";
  namaBrand.textContent = 'Xl';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}
function showProductThree() {
  imgC1.src = img3;
  imgC2.src = img3;
  imgC3.src = img3;
  namaGame.textContent = 'Pulsa 3';
  namaPerusahaan.textContent = "@pulsa";
  namaBrand.textContent = '3';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}
function showProductAxis() {
  imgC1.src = imgAxis;
  imgC2.src = imgAxis;
  imgC3.src = imgAxis;
  namaGame.textContent = 'Pulsa Axis';
  namaPerusahaan.textContent = "@pulsa";
  namaBrand.textContent = 'Axis';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}
function showProductDana() {
  imgC1.src = imgDana;
  imgC2.src = imgDana;
  imgC3.src = imgDana;
  namaGame.textContent = 'Wallet Dana';
  namaPerusahaan.textContent = "@saldo";
  namaBrand.textContent = 'Dana';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}
function showProductGopay() {
  imgC1.src = imgGopay;
  imgC2.src = imgGopay;
  imgC3.src = imgGopay;
  namaGame.textContent = 'Wallet Gopay';
  namaPerusahaan.textContent = "@saldo";
  namaBrand.textContent = 'Gopay';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}
function showProductSpay() {
  imgC1.src = imgSpay;
  imgC2.src = imgSpay;
  imgC3.src = imgSpay;
  namaGame.textContent = 'Wallet ShopeePay';
  namaPerusahaan.textContent = "@saldo";
  namaBrand.textContent = 'Shopeepay';
  iptNo.classList.remove('d-none');
  iptNo.classList.add('d-flex');
  iptNo.classList.add('input-to-show');
  iptNo.setAttribute("data-inputProduct", 'nomor');
}

function showProductTt() {
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


/// notif 
const popupNotif = document.querySelector(".notif-popup");
function showNotif() {
  popupNotif.classList.remove("d-none")
  popupNotif.classList.add("d-flex")
}
function closeNotif() {
  popupNotif.classList.remove("d-flex")
  popupNotif.classList.add("d-none")
}