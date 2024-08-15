
export default function Clients() {
  return (
    <>
      <div className="container mx-auto max-w-[1300px] flex flex-col lg:flex-row gap-4 justify-between">
        <div className="mb-8">
          <p className="text-sm text-gray-300 leading-6 md:leading-7 uppercase mb-2">
            Our Clients
          </p>
          <h3 className="text-3xl md:text-4xl font-[600] mb-2 text-white leading-10">
            We're trusted by our clients.
          </h3>
        </div>
        <div>
          <div className="_clients justify-center flex gap-4 lg:gap-6 mt-2 flex-wrap">
            <div className="w-16 h-16">
              <img
                src="/images/static/qweekai.png"
                alt="Client Logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="/images/static/dhanshalik.jpg"
                alt="Client Logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="/images/static/specialstars.jpeg"
                alt="Client Logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-16 h-16">
              <img
                src="/images/static/dropbox.png"
                alt="Client Logo"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
