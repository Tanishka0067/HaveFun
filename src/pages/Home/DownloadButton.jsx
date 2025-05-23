export default function GradientButton() {
  return (
    <a href="/">
      <button
        className={`
          w-[220px] h-[75px]
          text-white
          text-[20px] font-semibold
          cursor-pointer
          m-5
          text-center
          rounded-[10px]
          border-none
          bg-gradient-to-r from-[#febe23]  via-[#f0d069] to-[#fa9a28]
          bg-[length:300%_100%]
          shadow-[0_4px_15px_0_rgba(255,197,51,255)]
          transition-all duration-400 ease-in-out
          focus:outline-none
          hover:bg-[position:100%_0]
        `}
      >
       Launching Soon
      </button>
    </a>
  );
}
