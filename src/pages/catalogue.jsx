import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from "formik";
import appData from "@data/app.json";

const Catalogue = () => {
  const Content = {
    subtitle: "Catalogue",
    title: "Get in touch",
    info: [
      {
        icon: "img/icons/email.svg",
        label: "Support email",
        value: "mohit.k.mokhasana@gmail.com",
        value2: "oswalpotteryworks@yahoo.in",
      },
      {
        icon: "img/icons/7.svg",
        label: "Call 24/7",
        value: "+91 95125 32000",
      },
    ],
  };

  return (
    <Layouts>
      {/* <PageBanner pageImage={"img/content/5.jpg"} pageTitle={"Contact"} /> */}
      <div className="mil-mb-30" style={{ position: "relative" }}>
        <img
          src={"img/content/banner1.jpg"}
          alt={"Blog"}
          height={"100%"}
          width={"100%"}
          style={{ marginTop: "105px" }}
          className="mil-scale-img"
          data-value-1=".5"
          data-value-2="1.2"
        />
        <p className="custom-mil-text-banner">{Content.subtitle}</p>
      </div>

      <div className="flex justify-content-center  mil-mb-30">
        <div className="mil-appearance mil-post-info mil-center ">
          <a
            href="/Oswal-HD.pdf"
            target="_blank"
            className="mil-button mil-button-md mil-scale-down-trigger mil-buttons-space"
          >
            <span>Our Portfolio</span>
          </a>
        </div>
      </div>
    </Layouts>
  );
};
export default Catalogue;
