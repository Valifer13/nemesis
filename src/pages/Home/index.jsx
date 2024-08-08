import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";
import ShieldSvg from "../../assets/properties/undraw_security_on_re_e491.svg";

const Home = () => {
  return (
    <section className="text-center text-lg-start hero">
      <div className="row">
        <div className="col-sm text-content">
          <h1 className="px-4 pt-4">
            Nemesis project for Security
          </h1>
          <h4 className="px-4 py-4">
            Keep your business safe from cyber threat and make your business dream come true with us.
          </h4>
          <button type="button" className="btn btn-dark mx-4" id="read-btn">
            Read More
          </button>
          <button type="button" className="btn btn-light mx-4">
            Get Started
          </button>
        </div>
        <div className="col-sm image-content p-5 d-none d-lg-block">
          <img src={ShieldSvg} alt="Shield Logo" />
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="wave-bg"
          viewBox="0 0 1440 320"
        >
          <path
            fill-opacity="1"
            d="M0,64L21.8,96C43.6,128,87,192,131,234.7C174.5,277,218,299,262,304C305.5,309,349,299,393,261.3C436.4,224,480,160,524,165.3C567.3,171,611,245,655,245.3C698.2,245,742,171,785,154.7C829.1,139,873,181,916,213.3C960,245,1004,267,1047,277.3C1090.9,288,1135,288,1178,272C1221.8,256,1265,224,1309,208C1352.7,192,1396,192,1418,192L1440,192L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
