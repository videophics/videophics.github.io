import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[600] text-white leading-8 md:leading-10">
          Our Services
        </h1>
        <p className="text-sm md:text-md lg:text-xl text-gray-400 leading-6 md:leading-7 mt-3">
          Growing Brands. Touching Souls.
        </p>
      </div>
      <div className="_services-box mt-[4rem] grid md:grid-cols-2 gap-12">
        <div>
          <Link to="/services/branding">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/branding.png"
                  alt="Branding"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">1.</span> Branding
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We create brand identities, brand guidelines, and
                  more.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services/development">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/development.png"
                  alt="Design"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">2.</span>{" "}
                  Development
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We develop websites, web applications, and more.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services/brand-advisory">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/advisory.png"
                  alt="BNrand Advisory"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">3.</span> Brand
                  Advisory
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We provide brand advisory services to help you grow.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services/marketing">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/marketing.png"
                  alt="Marketing"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">4.</span> Marketing
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We market your brand, products, and services.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services/content-writing">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/content.png"
                  alt="Content Writing"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">5.</span> Content
                  Writing
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We write compelling content for your brand.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/services/software-testing">
            <div className="main bg-yellow-light/10 w-full h-full min-h-[300px] flex items-center rounded-lg">
              <div className="p-6">
                <img
                  src="/images/static/patch.png"
                  alt="Software Testing"
                  className="w-15 h-15 mb-5"
                />
                <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
                  <span className="text-blue-700">6.</span> Software
                  Testing
                </h3>
                <p className="text-sm text-gray-300 leading-6">
                  We test your software to ensure quality and
                  performance.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}