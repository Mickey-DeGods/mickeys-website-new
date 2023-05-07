import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TwitterIcon } from "@/components/atoms/Twitter";
import { DiscordIcon } from "@/components/atoms/Discord";
import DocumentHead from "@/components/molecules/DocumentHead";
import { motion } from "framer-motion";
import { RingLoader } from 'react-spinners';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);

  const OPACITY_ANIMATION = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 4}
  };

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video playback started successfully
            setIsLoading(false); // Set isLoading to false after the video starts playing
          })
          .catch((error: Error) => {
            console.error('Video playback failed:', error);
          });
      }
    } else {
      setTimeout(() => {
        setIsLoading(false);
      }, 2500);
    }
  }, []);

  return (
    <main className="h-screen w-screen pb-8 flex flex-col items-center justify-between bg-primary">
      <DocumentHead
        title="Mickey DeGods"
        description="Mickey DeGods: New Website Coming Soon"
        baseUrl="https://mickeydegods.com/"
        favicon="/favicon.ico"
        siteName="Mickey DeGods"
        image="/assets/meta.png"
      />

      {/* navbar */}
      <div className="w-full flex items-center justify-center py-8 px-12">
        <Image src="/assets/fries-white.png" width={30} height={30} alt="White fries logo" />
      </div>

      {/* main section */}
      <div className="w-[250px] h-[250px] sm:w-[500px] sm:h-[500px]">
      { isLoading ? (
        <div className="h-full flex justify-center items-center">
          <RingLoader color="#E6CF45" />
        </div>
      ) : (
        <motion.div 
      {...OPACITY_ANIMATION}
      className="flex flex-col items-center justify-center gap-1">
        <video
          ref={videoRef}
          src="/assets/fries.mov"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`${isLoading ? 'hidden' : ''}`} // Hide the video initially using the 'hidden' class
        />
      </motion.div>
      )}
      </div>
      

      {/* socials */}
      <div className="flex items-center gap-3">
        <a
          href="https://twitter.com/MickeyDegods"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 w-[60px] h-[60px] flex items-center justify-center
          hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer"
        >
            <TwitterIcon fill="white" />
        </a>
        <a
          href="https://discord.gg/UwAUPgzgmZ"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/40 w-[60px] h-[60px] flex items-center justify-center
          hover:scale-110 transition-transform ease-in-out duration-300 cursor-pointer"
        >
            <DiscordIcon fill="white" />
        </a>
      </div>
      <div className="text-white/40 text-sm pb-16 sm:pb-5 pt-5">© 2023 Mickey DeGods</div>
    </main>
  );
};

export default Home;
