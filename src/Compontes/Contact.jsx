const Contact = ({ theme }) => {

  const images = [
    {
      title: "Call me",
      dis: "0956795322",
      img: "/call.png",
    },
    {
      title: "Email me",
      dis: "gieasmousa@gmail.com",
      img: "/masseg.png",
    },
    {
      title: "Address",
      dis: "Damascus,syria",
      img: "/location.png",
    },
  ]



  return (
    <section id="contact" className="md:mx-18 md:my-23 w-ful h-auto text-primary dark:text-white bg-white dark:bg-gray-900  ">

      <div className="text-center md:text-left mb-13">
        <h3 className=" text-[12px] text-[#0C96E2] font-medium md:text-xl mb-2">Contact</h3>
        <h1 className=" text-[20px]  font-semibold md:text-4xl">Let’s Discuss Your <span className="text-[#0C96E2]"> Project</span></h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        <div className="mx-5 md:mx-0 md:w-[40%] flex flex-col">
          {images.map((imag, index) => (
            <div key={index} className="flex gap-5 mb-5">
              <div className="w-[61px] h-[56px] rounded-lg bg-[#0C96E2] flex items-center justify-center">
                <img src={imag.img} alt="" />
              </div>
              <div>
                <h4 className="text-[#92929D]">{imag.title}</h4>
                <p >{imag.dis}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-5 md:mx-0 md:w-[55%] flex flex-col gap-4">

          {/* أول اثنين جنب بعض */}
          <div className="flex gap-4">
            <input type="text" placeholder="Full name"
              className="w-full px-4 py-3 rounded-lg border border-[#BEC0BF] border-opacity-30 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:border-[#0C96E2]" />
            <input type="email" placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border border-[#BEC0BF] border-opacity-30 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:border-[#0C96E2]" />
          </div>

          {/* Phone number */}
          <input type="tel" placeholder="Phone number"
            className="w-full px-4 py-3 rounded-lg border border-[#BEC0BF] border-opacity-30 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:border-[#0C96E2]" />

          {/* Message */}
          <textarea placeholder="Message" rows={6}
            className="w-full px-4 py-3 rounded-lg border border-[#BEC0BF] border-opacity-30 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:border-[#0C96E2] resize-none" />

          {/* زر الإرسال */}
          <button className="w-fit px-8 py-3 text-[14px] rounded-lg bg-[#0C96E2] text-white font-medium">
            Send Message
          </button>

        </div>


      </div>

    </section>

  
  );
}

export default Contact;


