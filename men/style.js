let itemContainerElement = document.querySelector(".navbar");
itemContainerElement.innerHTML = `<div class="container-fluid">
<div class="d-flex ">
    <div class="logo"> <img src="logo.png"></div>
  </div>

  <form class="search d-flex" role="search">
    <input type="search " placeholder="Product name, company name ect." aria-label="Search" />
    <button class="search-btn" type="submit">Search</button>
  </form>
  <div class="login-cart">
    <a href="log in/login.html"><button class="log-btn" type="submit">
        Login </button></a>
    <div class="cart ">
    <a href="cart/cart.html">
      <i class="fa-solid fa-cart-shopping"></i>
      </a>
    </div>
  </div>
</div>`;

let navEl = document.querySelector(".navigation-bar");
navEl.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
      <div class="container ">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="All-product.html">All Products</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdownMen" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Men
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMen">
                <li><a class="dropdown-item" href="men/men-all.html">All </a></li>
                <li><a class="dropdown-item" href="men/shose.html">shose & Outfit</a></li>
                <li><a class="dropdown-item" href="men/shirt.html">Pants & shirts</a></li>
                <li><a class="dropdown-item" href="men/hoodies.html">Hoodies</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdownWomen" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                Women
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownWomen">
                <li><a class="dropdown-item" href="women/women-all.html">All</a></li>
                <li><a class="dropdown-item" href="women/women-dress.html">Dresses</a></li>
                <li><a class="dropdown-item" href="women/women-skirt.html">Skirts</a></li>
                <li><a class="dropdown-item" href="women/women-pants.html">Pants</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="kids/kids.html">Kids</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="contact us/Connect.html">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;

let footerEl = document.querySelector(".feet");
footerEl.innerHTML = ` <div class="container">
<div class="row">
  <div class="col-lg-3 col-md-6">
    <h5>Women</h5>
    <ul class="footer-links">
      <li><a href="women/women-dress.html">Dresses</a></li>
      <li><a href="women/women-pants.html">pants</a></li>
      <li><a href="women/women-skirt.html">skirt</a></li>
    </ul>
  </div>
  <div class="col-lg-3 col-md-6">
    <h5>Men</h5>
    <ul class="footer-links">
    <li><a href="men/shirt.html">shirt</a></li>
    <li><a href="men/shose.html">Shoes</a></li>
    <li><a href="men/hoodies.html">hoodies</a></li>
    </ul>
  </div>
  <div class="col-lg-3 col-md-6">
    <h5>Kids</h5>
    <ul class="footer-links">
    <li><a href="kids/kids.html">Boys</a></li>
    <li><a href="kids/kids.html">Girls</a></li>
    <li><a href="kids/kids.html">Toys</a></li>
    </ul>
  </div>
  <div class="col-lg-3 col-md-6">
    <h5>Links</h5>
    <ul class="footer-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="contact us/Connect.html">Contact</a></li>
      <li><a href="log in/login.html">Login</a></li>
    </ul>
  </div>
</div>
`;

let divide = document.querySelector(".divider-container");
divide.innerHTML = `<div class="footer-divider"></div>
<p class="text-center mt-3">© internshala ecommerce 2024 </p>
</div>`;
