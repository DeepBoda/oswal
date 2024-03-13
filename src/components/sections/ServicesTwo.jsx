import Data from "@data/sections/services-2.json";
import Link from "next/link";

const ServicesTwoSection = ({ services }) => {
  return (
    <>
      {/* services */}
      <div className="mil-gray-bg mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 mil-mb-120">
              <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">
                {Data.subtitle}
              </h3>
              <h3 className="mil-appearance mil-mb-30">{Data.title}</h3>
              <p className="mil-appearance mil-mb-30">{Data.description}</p>

              {/* buttons */}
              <div className="mil-appearance">
                <Link
                  href={Data.button1.link}
                  className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space"
                >
                  <span>{Data.button1.label}</span>
                </Link>
                {/* <Link href={Data.button2.link} className="mil-link-hover mil-scale-down-trigger mil-accent-trigger">{Data.button2.label}</Link> */}
              </div>
              {/* buttons end */}
            </div>
            <div className="col-xl-6 mil-mb-90">
              <div className="row">
                {services.map((item, key) => (
                  <div key={`services2-item-${key}`} className="col-lg-6">
                    {/* service card */}
                    <div
                      // href={`/services/${item.id}`}
                      // mil-icon-2-trigger
                      className="mil-service-card mil-appearance 
                      
                      mil-mb-30"
                    >
                      <div
                        className="mil-card-content"
                        style={{
                          // paddingLeft: "2px",
                          // paddingRight: "2px",
                          padding: "30px 10px 30px 20px",
                        }}
                      >
                        {/* icon */}
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mil-card-icon"
                        />
                        <div>
                          {/* text */}
                          <h5 className="mil-mb-10">{item.title}</h5>
                          <p className="mil-softened-40 mil-text-sm">
                            {item.short}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* service card end */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services end */}
    </>
  );
};

export default ServicesTwoSection;
