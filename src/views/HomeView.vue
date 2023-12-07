<template>
  <body>
    <HeaderBar></HeaderBar>
    <header id="Carousel">
      <div class="header-img-posi">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            class="carousel-indicators"
            data-bs-target="#carouselExampleSlidesOnly"
          >
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
              <img src="../assets/c1.jpg" class="carousel-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img src="../assets/c2.jpg" class="carousel-img" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="3000">
              <img
                src="../assets/c3.jpg"
                class="carousel-img object-fit-cover"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="div-saying">
      <h3>KA·SHION</h3>
      <p>歡慶開幕，輸入優惠碼 『 OPEN2024 』 全面享有7折優惠！</p>
    </div>
    <div style="height: 80vh"></div>
    <div class="row" style="background-color: white">
      <section class="mt-6" style="background-color: white">
        <div class="container">
          <div>
            <div style="width: 20%">
              <h1 class="h1-line">FASHION 패션</h1>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <img
                src="../assets/pant.jpg"
                alt=""
                class="home-img object-fit-cover px-1"
              />
              <img
                src="../assets/watch.jpg"
                alt=""
                class="home-img object-fit-cover px-1"
              />
            </div>
            <div class="col-md-6 justify-content-center align-items-center row">
              <h3 style="text-align: center">首爾風情，獨特你的時尚夢</h3>
              <p>
                我們將韓國獨特的時尚風情帶到你的生活。
                每一款服飾都是一場夢幻的旅程，穿越時尚與傳統的交錯。從
                簡約到奢華，我們的選擇讓你能夠編織屬於自己的時尚童話。開啟首爾
                之夢，讓風格成為你的獨特印記。
              </p>
            </div>
          </div>
          <!-- ///////////////////////////// -->

          <div class="row mt-5 flex-row-reverse">
            <div class="col-md-6">
              <img
                src="../assets/man.jpg"
                alt="dance"
                class="home-img object-fit-cover px-1"
              />
              <img
                src="../assets/woman.jpg"
                alt="dance"
                class="home-img object-fit-cover px-1"
              />
            </div>
            <div class="col-md-6 justify-content-center align-items-center row">
              <h3 style="text-align: center">與時光同行</h3>
              <p>
                韓國流行元素融入衣櫥，讓時尚成為生活的一部分。每一個設計
                都是一段時光旅程的見證者，帶你穿越過去、現在和未來。這裡不僅是購物的地方
                ，更是展現個性的時尚樞紐。與時光同行，尋找獨特的自己。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 第二區塊 -->
    <div class="row" style="background-color: white">
      <section class="mt-6" style="background-color: gray">
        <div class="container">
          <div style="width: 28%">
            <h1 class="h1-line-1">NEW IN 새로운 제품</h1>
          </div>
          <div class="mt-6 row">
            <div class="col-md-4 px-0 pb-3">
              <div class="custom-img-container">
                <router-link to="{name:'about'}"
                  ><img src="../assets/eoo.jpg" alt="" class="custom-img" />
                  <div class="custom-img-text">最新單品</div></router-link
                >
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div class="custom-img-container">
                <router-link to="{name:'about'}"
                  ><img src="../assets/eoo2.jpg" alt="" class="custom-img" />
                  <div class="custom-img-text">熱門款式</div></router-link
                >
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div class="custom-img-container">
                <router-link to="{name:'about'}"
                  ><img src="../assets/eoo3.jpg" alt="" class="custom-img" />
                  <div class="custom-img-text">促銷商品</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="row" style="background-color: white">
      <div class="mt-6"></div>
    </div>
    <div class="d-flex div-info justify-content-center align-items-center">
      <div>
        <h1>KA·SHION</h1>
        <p>
          「你的穿著就是你如何向世界展示自己，尤在今日，當人們的交流短暫快速，時尚就是立即的語言。」－普拉達Miuccia
          Prada
        </p>
      </div>
    </div>
    <div class="row" style="background-color: white">
      <div class="mt-6"></div>
    </div>

    <section style="background-color: white">
      <div class="container">
        <div style="width: 23%">
          <h1 class="h1-line">POSITION 위치</h1>
        </div>
        <div class="row mt-4 pb-3">
          <div class="col mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0463400074354!2d121.49318557563863!3d25.134124134252012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae53c3cca3ff%3A0x84fd1c3f8e187256!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A5aSn5qWt6LevNTIx6Jmf!5e0!3m2!1szh-TW!2stw!4v1701540907883!5m2!1szh-TW!2stw"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </body>
</template>

<style scoped>
body {
  background-image: url("../assets/c3.jpg");
  background: cover;
  background-size: cover;
  z-index: -10;
}
</style>

<script>
import HeaderBar from "@/components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    HeaderBar,
    Footer,
  },
};
</script>
