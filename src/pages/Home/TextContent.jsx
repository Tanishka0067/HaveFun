export default function TextContent() {
  return (
    <div
      className="
        rounded-3xl
        bg-gradient-to-br from-[#0b1f3f] via-[#1a2a5f] to-[#0a132f] 
        p-8 z-50
        flex flex-col justify-center 
        h-full
        shadow-[0_0_20px_5px_rgba(58,123,213,0.7)] /* subtle blue glow */
        border border-[#3a7bd5]/50
      "
    >
      <h1
        className="
          text-4xl 
          font-extrabold 
          mb-4 
          text-[#a0d8ef] 
          drop-shadow-[0_0_8px_rgba(160,216,239,0.8)] /* neon glow */
        "
      >
          A playful, intelligent platform for Gen Z & Gen Alpha to create, play, connect, and earn.
      </h1>
      <p
        className="
          text-lg 
          text-[#cbd5e1] 
          leading-relaxed
          drop-shadow-[0_0_4px_rgba(80,120,180,0.6)]
        "
      >
         A cutting-edge digital platform built to revolutionize the world of gaming, live streaming, and content creation.We believe in the future of interactive entertainment—where games are more than just pastimes, content is a currency, and creators have the freedom to earn, express, and grow without limitations. 

      </p>
    
    </div>
  );
}
