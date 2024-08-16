
function Booking() {
  return (
    <div className="container mx-auto max-w-[1300px]">
      <div className="text-center">
        <img
          src="/images/static/appointment.png"
          alt="Appointment"
          className="w-12 h-12 mx-auto mb-4"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-[600] mb-4 text-white leading-10">
          Book an Appointment
        </h1>
        <p className="text-[14px] md:text-[17px] text-gray-400 leading-6 md:leading-7 mb-8">
          Schedule an appointment with us and let's get started on your
          project.
        </p>
        <button
          className="text-sm md:text-[16px] px-8 py-3 bg-transparent rounded-md border-2 border-primary hover:from-gray-100 hover:to-gray-200 active:scale-95 from-gray-800 to-gray-700 text-yellow-light"
          title="Click here to book an appointment"
          onClick={() => {
            Calendly.initPopupWidget({
              url: "https://calendly.com/videophics?hide_gdpr_banner=1",
            });
            return false;
          }}
        >
          Book Now &rarr;
        </button>
      </div>
    </div>
  );
}

export default Booking;
