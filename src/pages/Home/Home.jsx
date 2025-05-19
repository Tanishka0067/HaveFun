"use client";
import star from "../../assets/star3.jpg";
import TextContent from "./TextContent";
import DownloadButton from "./DownloadButton";
import ImageScroller from "./ImageScroller";
import meme1 from "../../assets/meme1.png";
import meme2 from "../../assets/meme2.jpg";
import meme3 from "../../assets/meme3.jpg";
import meme4 from "../../assets/meme4.jpg";
import meme5 from "../../assets/meme5.png";
import meme6 from "../../assets/meme6.jpg";
import meme7 from "../../assets/meme7.jpg";
import meme8 from "../../assets/meme8.jpg";
export default function Home() {
  // Sample images array
  const images = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8,meme1, meme2, meme3, meme4, meme5, meme6,
     meme7, meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme2, meme3, meme4, meme5, meme6];

  return (
    <section
      id="home"
      className=" min-h-screen bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${star})` }}
    >
      {/* Diagonal overlay */}
      <div className="absolute inset-0 z-20 ">
        <div
          className="absolute bottom-0 left-0 right-0 w-full bg-black/50"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%)",
            height: "100%",
          
          }}
        >
          <ImageScroller images={images} />
        </div>
      </div>

      {/* Content */}
      <div className="z-40 flex flex-col items-center justify-center min-h-screen">
        <div className="flex items-center justify-center pt-32">
            <DownloadButton />
          </div>
        <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <TextContent /> 
          
        </div>
        
      </div>
    </section>
  );
}
