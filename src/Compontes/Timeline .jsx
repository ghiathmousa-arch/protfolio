const timelineData = [
  { title: "Experience Designer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" },
  { title: "Frontend Developer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" },
  { title: "Experience Designer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" },
  { title: "Frontend Developer", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales" },
]

const TimelineItem = ({ item }) => (
  // كومبوننت عنصر واحد بالتايملاين
  <div className="flex gap-4">
    {/* الخط والنقطة */}
    <div className="flex flex-col items-center ">
      {/* النقطة */}
      <div className="relative flex items-center justify-center" style={{ width: '36px', height: '28px', flexShrink: 0 }}>
        <div
          className="flex items-center justify-center rounded-full "
          style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'dashed' }}
        >
          {/* الدائرة الداخلية */}
          <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: '#0C96E2' }} />
        </div>
      </div>
      {/* الخط الرأسي */}
      <div style={{ borderLeft: '3px dashed #344054', height: '100%'}} />
    </div>
    {/* العنوان والوصف */}
    <div className="pb-10">
      <h3 className="font-semibold text-primary dark:text-white mb-1">{item.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
    </div>
  </div>
)

const Timeline = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="education" className="relative px-6 md:px-[70px] py-16 bg-white dark:bg-gray-900">

      {/* صورة يمين فوق - مخفية على موبايل */}
      <img src="/top left image.svg" alt="" className="hidden  md:block absolute top-0 right-0 " />

      {/* العنوان */}
      <div className="text-center mb-12">
        <h3 className="text-[20px] font-medium text-[#0C96E2] mb-2">Education and Experience</h3>
        <h1 className="text-3xl md:text-[40px] font-semibold text-primary dark:text-white">Education & Experience</h1>
      </div>

      {/* الكارتات */}
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12">
        <div className="flex flex-col">
          {timelineData.slice(0, 2).map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
        <div className="flex flex-col">
          {timelineData.slice(2, 4).map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>

      {/* صورة يسار تحت + زر */}
      <div className="relative flex items-end justify-between mt-19">
        {/* صورة مخفية على موبايل */}
        <img src="/bootem image.svg" alt="" className="hidden md:block absolute -left-16 bottom-0 -rotate-[148deg] w-[130px]" />
        <button
          onClick={scrollToTop}
          className="w-[50px] h-[50px] rounded-full shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center ml-auto"
          style={{ backgroundColor: '#0C96E2' }}>
          <img src="/this.png" alt="" />
        </button>
      </div>

    </section>
  );
}

export default Timeline;