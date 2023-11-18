"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel() {
  return (
    <div className={styles.imageCarousel}>
      <div className={styles.container}>
        <Carousel
          showStatus={false}
          showArrows
          showThumbs={false}
          infiniteLoop
          centerMode
          centerSlidePercentage={100}
          autoPlay
          interval={5000}
          stopOnHover
        >
          {[
            <div className={styles.carouselItem} key="0">
              <Image
                src="fall_2022_planning_meeting.jpg"
                alt="SSD members (about 30) at our Fall 2022 planning meeting in CISE."
                height={600}
                width={600}
              />
            </div>,
            <div className={styles.carouselItem} key="1">
              <Image
                src="fall_2022_planning_meeting.jpg"
                alt="SSD members (about 30) at our Fall 2022 planning meeting in CISE."
                height={600}
                width={600}
              />
            </div>,
            <div className={styles.carouselItem} key="2">
              <Image
                src="fall_2022_planning_meeting.jpg"
                alt="SSD members (about 30) at our Fall 2022 planning meeting in CISE."
                height={600}
                width={600}
              />
            </div>,
          ]}
        </Carousel>
      </div>
    </div>
  );
}
