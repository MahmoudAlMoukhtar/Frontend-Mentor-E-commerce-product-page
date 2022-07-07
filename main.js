let titleProdact = document.getElementById("title-prodact");
let descripProdact = document.getElementById("descrip-prodact");
let priceProdact = document.getElementById("price-prodact");
let devtiionDescount = document.getElementById("devtiion-descount");
let oldPrice = document.getElementById("old-price");
let count = document.getElementById("count");

titleProdact.innerHTML = `${prodacts[0].name}`;
descripProdact.innerHTML = `${prodacts[0].description}`;
priceProdact.innerHTML = `$${prodacts[0].price}`;
devtiionDescount.innerHTML = `${prodacts[0].descount}`;
oldPrice.innerHTML = `$${prodacts[0].oldPrice}`;

const addCount = () => {
  count.innerHTML = parseInt(count.innerHTML) + 1;
};

const decrement = () => {
  if (count.innerHTML > 1) {
    count.innerHTML = parseInt(count.innerHTML - 1);
  }
};

const handelImgsBtn = (idImgsBtn, idMainImgProdact) => {
  let arrayImgs = Array.from(document.querySelectorAll(idImgsBtn));
  console.log(arrayImgs);
  let time = 100;
  for (let i = 0; i < arrayImgs.length; i++) {
    setTimeout(() => {
      arrayImgs[i].classList.remove("hide");
      arrayImgs[i].classList.add("block");
      arrayImgs[i].classList.add("animate__animated", "animate__jello");
    }, time);
    time += 200;
  }

  arrayImgs.forEach(item => {
    item.addEventListener("click", () => {
      let img = item.dataset.src;
      document.getElementById(idMainImgProdact).setAttribute("src", img);
    });
  });
};
handelImgsBtn("#imgBtn", "img-prodact");
handelImgsBtn("#imgBtnModal", "img-prodact-modal");

let imgCartProd = document.getElementById("img-cart-prodact");
let detailsCartProdact = document.getElementById("details-cart-prodact");
let modalTitle = document.getElementById("modal-title");
let calcuteAllPrice = document.getElementById("calcute-allPrice");
let priceAll = document.getElementById("all-price");
let deleteCartProdact = document.getElementById("delete-prodact");

let div = document.getElementById("cart-prodact");
let cartProdacts = [];

const isCartEmpty = () => {
  if (cartProdacts.length === 0) {
    /* imgCartProd.setAttribute("src", ""); */
    div.innerHTML = "Your cart is empty";
  }
};

const toggleModal = () => {
  isCartEmpty();
  document.getElementById("modal").classList.toggle("hidden");
};

const cancel = () => {
  document.getElementById("modal").classList.add("hidden");
};

const addProdactToCart = () => {
  let isProdact = prodacts.find(prodact => {
    return titleProdact.textContent === prodact.name;
  });
  let isProdactCart = cartProdacts.find(prodact => {
    return titleProdact.textContent === prodact.name;
  });
  if (isProdact && count.innerHTML > 0 && !isProdactCart) {
    let prodact = {
      name: isProdact.name,
      price: isProdact.price,
      count: count.innerHTML,
      img: isProdact.imageCart,
      description: isProdact.description,
    };
    cartProdacts.push(prodact);
    div.innerHTML = "";
    /* image */
    let imgProdactCart = document.createElement("img");
    imgProdactCart.setAttribute("src", prodact.img);
    imgProdactCart.classList.add("w-20");
    /* end image */

    /* detailsProdact */
    let detailsProdactCart = document.createElement("div");
    detailsProdactCart.classList.add("flex", "flex-col", "w-full", "p-2");
    /* name */
    /* title */
    let titleCart = document.createElement("p");
    titleCart.textContent = `${prodact.name}`;
    titleCart.classList.add("text-xl", "font-bold");
    /* end title */
    /* description */
    /* price */
    let divPrice = document.createElement("div");
    let priceCart = document.createElement("p");
    let allPrice = document.createElement("p");
    priceCart.textContent = `$${prodact.price} * ${prodact.count}`;
    allPrice.textContent = `$${prodact.price * prodact.count}`;
    divPrice.appendChild(priceCart);
    divPrice.appendChild(allPrice);
    divPrice.classList.add("flex", "gap-x-2", "w-full");
    /* end price */
    /* end description */
    detailsProdactCart.appendChild(titleCart);
    detailsProdactCart.appendChild(divPrice);
    detailsProdactCart.classList.add("flex", "flex-col", "w-full", "p-2");
    /* append all details prodact and image in one div */
    div.appendChild(imgProdactCart);
    div.appendChild(detailsProdactCart);
    div.classList.add("flex", "gap-x-4", "items-center", "p-4");
    document.getElementById("count-cart-prodact").innerHTML = count.textContent;
  }
};

const checkout = () => {
  document.getElementById("modal-checkout").classList.toggle("hidden");
};

const cancelCheckout = () => {
  document.getElementById("modal-checkout").classList.add("hidden");
};

const collapsMenu = () => {
  document.getElementById("modal-nav").classList.toggle("hidden");
};

const cancelNav = () => {
  document.getElementById("modal-nav").classList.add("hidden");
};
