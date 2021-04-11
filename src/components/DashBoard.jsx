import React from "react";
import Footer from "./Footer";
import Header from "./Header.jsx";
import "../assets/img/favicon.png";
import "../assets/img/apple-touch-icon.png";
import "../assets/vendor/animate.css/animate.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import slide2 from "../assets/img/slide-2.jpg";
import slide3 from "../assets/img/slide-3.jpg";

// Below functional component contains UI for dashboard section.
function DashBoard() {

  return (
    <React.Fragment>
      <Header />

      <div class="intro intro-carousel swiper-container position-relative">
        <div class="swiper-wrapper float">
          <div class="swiper-slide carousel-item-a intro-item bg-image">
            <div class="overlay overlay-a"></div>
            <div class="intro-content display-table float">
              <div class="table-cell">
                <div class="container float-left">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="intro-body float-left ml-1">
                        <div className="ml-2">
                          <p class="intro-title-top float-left ml-5 px-5">
                            Doral, Florida 78345
                          </p>
                        </div>
                        <h1 class="intro-title mb-4 float-left px-5 ml-5">
                          <div className="float-left ml-1">
                            <span class="color-b">204 </span>Mount{" "}
                          </div>
                          Olive Road Two
                        </h1>
                        <p class="intro-subtitle intro-price px-5">
                          <a href="#">
                            <span class="price-a float-left ml-5 px-5">
                              rent | $ 12.000
                            </span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="swiper-slide carousel-item-a intro-item bg-image"
            styles="background-image: url(assets/img/slide-2.jpg)"
          >
            <div class="overlay overlay-a"></div>
            <div class="intro-content display-table">
              <div class="table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="intro-body">
                        <p class="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 class="intro-title mb-4">
                          <span class="color-b">204 </span> Rino
                          <br /> Venda Road Five
                        </h1>
                        <p class="intro-subtitle intro-price">
                          <a href="#">
                            <span class="price-a">rent | $ 12.000</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="swiper-slide carousel-item-a intro-item bg-image"
            styles="background-image: url(assets/img/slide-3.jpg)"
          >
            <div class="overlay overlay-a"></div>
            <div class="intro-content display-table">
              <div class="table-cell">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="intro-body">
                        <p class="intro-title-top">
                          Doral, Florida
                          <br /> 78345
                        </p>
                        <h1 class="intro-title mb-4">
                          <span class="color-b">204 </span> Alira
                          <br /> Roan Road One
                        </h1>
                        <p class="intro-subtitle intro-price">
                          <a href="#">
                            <span class="price-a">rent | $ 12.000</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <main id="main" />

      <section class="section-services section-t8">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">Our Services</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-cart"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h2 class="title-c">Lifestyle</h2>
                  </div>
                </div>
                <div class="card-body-c">
                  <p class="content-c">
                    Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                    dictum porta. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi.
                  </p>
                </div>
                <div class="card-footer-c">
                  <a href="#" class="link-c link-icon">
                    Read more
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-calendar4-week"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h2 class="title-c">Loans</h2>
                  </div>
                </div>
                <div class="card-body-c">
                  <p class="content-c">
                    Nulla porttitor accumsan tincidunt. Curabitur aliquet quam
                    id dui posuere blandit. Mauris blandit aliquet elit, eget
                    tincidunt nibh pulvinar a.
                  </p>
                </div>
                <div class="card-footer-c">
                  <a href="#" class="link-c link-icon">
                    Read more
                    <span class="bi bi-calendar4-week"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card-box-c foo">
                <div class="card-header-c d-flex">
                  <div class="card-box-ico">
                    <span class="bi bi-card-checklist"></span>
                  </div>
                  <div class="card-title-c align-self-center">
                    <h2 class="title-c">Sell</h2>
                  </div>
                </div>
                <div class="card-body-c">
                  <p class="content-c">
                    Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                    dictum porta. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi.
                  </p>
                </div>
                <div class="card-footer-c">
                  <a href="#" class="link-c link-icon">
                    Read more
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-property section-t8">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">Latest Properties</h2>
                </div>
                <div class="title-link">
                  <a href="property-grid.html">
                    All Property
                    <span class="bi bi-chevron-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="property-carousel" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="carousel-item-b swiper-slide">
                <div class="card-box-a card-shadow">
                  <div class="img-box-a">
                    <img src={slide3} alt="" class="img-a img-fluid" />
                  </div>
                  <div class="card-overlay">
                    <div class="card-overlay-a-content">
                      <div class="card-header-a">
                        <h2 class="card-title-a">
                          <a href="property-single.html">
                            206 Mount
                            <br /> Olive Road Two
                          </a>
                        </h2>
                      </div>
                      <div class="card-body-a">
                        <div class="price-box d-flex">
                          <span class="price-a">rent | $ 12.000</span>
                        </div>
                        <a href="#" class="link-a">
                          Click here to view
                          <span class="bi bi-chevron-right"></span>
                        </a>
                      </div>
                      <div class="card-footer-a">
                        <ul class="card-info d-flex justify-content-around">
                          <li>
                            <h4 class="card-info-title">Area</h4>
                            <span>
                              340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item-b swiper-slide">
                <div class="card-box-a card-shadow">
                  <div class="img-box-a">
                    <img src={slide2} alt="" class="img-a img-fluid" />
                  </div>
                  <div class="card-overlay">
                    <div class="card-overlay-a-content">
                      <div class="card-header-a">
                        <h2 class="card-title-a">
                          <a href="property-single.html">
                            157 West
                            <br /> Central Park
                          </a>
                        </h2>
                      </div>
                      <div class="card-body-a">
                        <div class="price-box d-flex">
                          <span class="price-a">rent | $ 12.000</span>
                        </div>
                        <a href="property-single.html" class="link-a">
                          Click here to view
                          <span class="bi bi-chevron-right"></span>
                        </a>
                      </div>
                      <div class="card-footer-a">
                        <ul class="card-info d-flex justify-content-around">
                          <li>
                            <h4 class="card-info-title">Area</h4>
                            <span>
                              340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item-b swiper-slide">
                <div class="card-box-a card-shadow">
                  <div class="img-box-a">
                    <img
                      src="assets/img/property-7.jpg"
                      alt=""
                      class="img-a img-fluid"
                    />
                  </div>
                  <div class="card-overlay">
                    <div class="card-overlay-a-content">
                      <div class="card-header-a">
                        <h2 class="card-title-a">
                          <a href="property-single.html">
                            245 Azabu
                            <br /> Nishi Park let
                          </a>
                        </h2>
                      </div>
                      <div class="card-body-a">
                        <div class="price-box d-flex">
                          <span class="price-a">rent | $ 12.000</span>
                        </div>
                        <a href="property-single.html" class="link-a">
                          Click here to view
                          <span class="bi bi-chevron-right"></span>
                        </a>
                      </div>
                      <div class="card-footer-a">
                        <ul class="card-info d-flex justify-content-around">
                          <li>
                            <h4 class="card-info-title">Area</h4>
                            <span>
                              340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item-b swiper-slide">
                <div class="card-box-a card-shadow">
                  <div class="img-box-a">
                    <img
                      src="assets/img/property-10.jpg"
                      alt=""
                      class="img-a img-fluid"
                    />
                  </div>
                  <div class="card-overlay">
                    <div class="card-overlay-a-content">
                      <div class="card-header-a">
                        <h2 class="card-title-a">
                          <a href="property-single.html">
                            204 Montal
                            <br /> South Bela Two
                          </a>
                        </h2>
                      </div>
                      <div class="card-body-a">
                        <div class="price-box d-flex">
                          <span class="price-a">rent | $ 12.000</span>
                        </div>
                        <a href="property-single.html" class="link-a">
                          Click here to view
                          <span class="bi bi-chevron-right"></span>
                        </a>
                      </div>
                      <div class="card-footer-a">
                        <ul class="card-info d-flex justify-content-around">
                          <li>
                            <h4 class="card-info-title">Area</h4>
                            <span>
                              340m
                              <sup>2</sup>
                            </span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Beds</h4>
                            <span>2</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Baths</h4>
                            <span>4</span>
                          </li>
                          <li>
                            <h4 class="card-info-title">Garages</h4>
                            <span>1</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="propery-carousel-pagination carousel-pagination"></div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

// Exporting the DashBoard component.
export default DashBoard;
