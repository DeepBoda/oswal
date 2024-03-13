import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Data from "@data/sections/hero-1.json";

const HeroOne = () => {
  return (
    <header>
      <div className="mil-hero-1">
        <div className="mil-image-frame">
          <img
            src={Data.bg_image}
            alt="img"
            className="mil-scale-img"
            data-value-1=".5"
            data-value-2="1.2"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="mil-overay" />
        </div>

        <div className="container">
          <div className="row mil-p-120-0 justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">
                {Data.subtitle}
              </div>
              <h1 className="mil-light mil-appearance mil-mb-120">
                {Data.title.before}{" "}
                <span className="mil-accent">{Data.title.accent}</span>{" "}
                {Data.title.after}
              </h1>
            </div>
            <div className="col-md-12 col-lg-5 mil-relative">
              <div className="mil-dots mil-appearance" />

              <p
                className="mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60"
                dangerouslySetInnerHTML={{ __html: Data.description }}
              />

              <div className="mil-scroll-animation-1 mil-appearance mil-mb-60">
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            {/* <div className="col-12">
              <div className="mil-appearance">
                <div className="mil-just-image">
                  <img
                    src={Data.image}
                    alt="img"
                    className="mil-scale-img"
                    data-value-1="1"
                    data-value-2="1.15"
                    style={{ objectPosition: "center 25%" }}
                  />
                </div>
              </div>
            </div> */}
            <div className="col-12 flex">
              {/* <div
                className="mil-about-prev col-xl-1"
                style={{ zIndex: 99999 }}
              >
                Prev
              </div> */}
              <div className="col-xl-10 ">
                <Swiper
                  {...sliderProps.milHomeSlider}
                  className="swiper-container "
                >
                  {Data.HeroSlideImages.map((item, key) => (
                    // <SwiperSlide
                    //   key={`hero1-item-${key}`}
                    //   className="swiper-slide"
                    // >
                    //   <div className="mil-review">
                    //     <div className="">
                    //       <img
                    //         src={item.image}
                    //         alt={item.alt}
                    //         style={{
                    //           width: "100%",
                    //           height: "100%",
                    //         }}
                    //         // className="mil-grayscale mil-opacity"
                    //       />
                    //     </div>
                    //   </div>
                    // </SwiperSlide>
                    <SwiperSlide
                      className="swiper-slide"
                      key={`home-slider-item-${key}`}
                    >
                      {/* review */}
                      <div className="mil-home-Slider">
                        <img
                          src={item.image}
                          alt={item.alt}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          // className="mil-grayscale mil-opacity"
                        />{" "}
                      </div>
                      {/* review end */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* <div
                className="mil-about-next col-xl-1"
                style={{ zIndex: 99999 }}
              >
                Next
              </div> */}
            </div>
            {/* <div className="col-12">
            
              <Swiper
                {...sliderProps.milInfinitySlider}
                className="swiper-container mil-infinite-show"
              >
                {Data.partners.map((item, key) => (
                  <SwiperSlide
                    key={`hero1-item-${key}`}
                    className="swiper-slide"
                  >
                    <a
                      href={item.link}
                      className="mil-partner-frame mil-hidden-trigger"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="mil-grayscale mil-opacity"
                      />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
              
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeroOne;
