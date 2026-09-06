import { img } from "../utils/getImageUrl";

const Dot = ({ theme }) => {
  {/*dark and light */ }
  const lineColor = theme === 'dark' ? '#ffffff' : '#1D2130';

  return (
    <div className="mt-3 flex justify-center items-center gap-1 bg-white dark:bg-gray-900">

      {/* الخط الأيسر */}
      <div
        className="flex-1 h-px"
        style={{
          backgroundImage: `repeating-linear-gradient(to right, ${lineColor} 0, ${lineColor} 5px, transparent 5px, transparent 15px)`
        }}
      />

      {/* النقطة في المنتصف */}
      <img src={img("dot1.png")} alt="" />

      {/* الخط الأيمن */}
      <div
        className="flex-1 h-px"
        style={{
          backgroundImage: `repeating-linear-gradient(to right, ${lineColor} 0, ${lineColor} 5px, transparent 5px, transparent 15px)`
        }}
      />

    </div>
  );
}

export default Dot;