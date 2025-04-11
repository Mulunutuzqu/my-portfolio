// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { motion } from "framer-motion";
// import VideoComponent from "@/components/ui/Video";

// interface CaseCardProps {
//   display: string;
//   pageUrl: string;
//   imgUrl: string;
//   title: string;
//   description: string;
// }

// function CaseCard({
//   display,
//   pageUrl,
//   imgUrl,
//   title,
//   description,
// }: CaseCardProps) {
//   //framer variants
//   const cardVariants = {
//     onHover: { scale: 1.05, y: "8px", rotate: 2 },
//   };

//   return (
//     <Link href={pageUrl} className="">
//       <motion.div
//         initial={{ scale: 1, y: "0px", rotate: 2 }}
//         variants={cardVariants}
//         whileHover="onHover"
//         whileTap={{ scale: 1 }}
//         transition={{
//           type: "spring",
//           stiffness: 300,
//           damping: 20,
//         }}
//         className="card-shadow z-0 flex w-[244px] flex-col justify-center gap-[0px] rounded-[4px] bg-white px-[6px] py-[6px] text-maintext hover:z-50"
//       >
//         <div className="relative flex h-[220px] w-full justify-center">
//           <Image
//             width={556}
//             height={324}
//             className="object-cover"
//             src={imgUrl}
//             alt="picture"
//           />
//           <VideoComponent url="https://rmctnajnad9ak10m.public.blob.vercel-storage.com/surplus-cover.mp4" />
//         </div>
//         <div className="case-desc flex flex-col gap-[6px] px-[8px] pb-[8px] pt-[12px]">
//           <p className="text-[14px] font-medium leading-snug">{title}</p>
//           <p className="line-clamp-2 text-[12px] font-light text-subtext">
//             {description}
//           </p>
//         </div>
//       </motion.div>
//     </Link>
//   );
// }

// export default CaseCard;
