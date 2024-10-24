import Image from "next/image";

function Loader() {
  return (
    <div className="z-10 flex w-full max-w-[360px] flex-col items-center justify-center bg-white transition-all md:max-w-[460px]">
      <span className="relative flex">
        <span className="me pp2 relative top-[8px] z-0 mb-[-16px] ml-[-18px] mr-[-14px] inline-block rotate-[-6deg] overflow-hidden rounded-[16px] border-[5px] border-white">
          <Image
            className=""
            src="/assets/pp.jpg"
            width={56}
            height={56}
            alt="profile picture"
            unoptimized={true}
            priority={true}
          />
        </span>
      </span>
    </div>
  );
}

export default Loader;
