"use client";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true, align: "center" };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselView: React.FC = () => (
  <motion.div className="">
    <Carousel slides={SLIDES} options={OPTIONS} />
  </motion.div>
);

export default CarouselView;
