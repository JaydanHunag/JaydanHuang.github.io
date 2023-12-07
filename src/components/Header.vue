<template>
  <div id="NavBar " class="nav-setting fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand logo-set" href="#">KA·SHION</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/user/productlist" class="nav-link"
                  >ALL</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/user/productlist?category=TOPS"
                  class="nav-link"
                  >TOPS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/user/productlist?category=PANTS"
                  class="nav-link"
                  >PANTS</router-link
                >
              </li>
              <li class="nav-item">
                <router-link
                  to="/user/productlist?category=OUTER"
                  class="nav-link"
                  >OUTER</router-link
                >
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link to="/productlist" class="nav-link"
                  >ADMIN</router-link
                >
              </li>

              <li class="nav-item">
                <router-link to="/productlist" class="nav-link"
                  ><i class="bi bi-heart-fill"></i
                ></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/productlist" class="nav-link"
                  ><i class="bi bi-bag-fill"></i
                ></router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
