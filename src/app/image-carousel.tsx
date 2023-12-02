"use client";

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ImageCarousel.module.css";

type CarouselImage = {
  src: string;
  alt: string;
};

const images: CarouselImage[] = [
  {
    src: "ssd_pictures/ssd_meeting_google_fall_2022.jpg",
    alt: "SSD members (about 20) at our Fall 2022 meeting with Google.",
  },
  {
    src: "ssd_pictures/ssd_networking_event_fall_2022.jpg",
    alt: "SSD members Yonas Bahre, Trevor Richardson, Blake Anderson, and Eric Navar at a Fall 2022 networking event.",
  },
  {
    src: "ssd_pictures/ssd_zoom_meeting_summer_2020.png",
    alt: "SSD members meeting online over Zoom during Summer 2020.",
  },
  {
    src: "ssd_pictures/ssdinner_spring_2020.jpg",
    alt: "SSD members having dinner together during Spring 2020.",
  },
  {
    src: "ssd_pictures/ssd_meeting_bridgerock_data_spring_2020.jpg",
    alt: "SSD members (about 30) at our Spring 2020 meeting with BridgeRock Data.",
  },
  {
    src: "ssd_pictures/eric_navar_lighting_talk_fall_2019.jpg",
    alt: "Former SSD president Eric Navar giving a lighting talk at a Fall 2019 meeting.",
  },
  {
    src: "ssd_pictures/ssd_tabling_fall_2019.jpg",
    alt: "SSD members tabling at the UF Reitz Union breezeway.",
  },
];

export default function ImageCarousel() {
  const carouselItems = images.map((image) => (
    <div className={styles.carouselItem} key={image.src}>
      <Image src={image.src} alt={image.alt} height={600} width={600} />
      <p className="legend">
        {image.alt}
        &nbsp;
        <a
          className={styles.genericLink}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
        >
          View full size
        </a>
      </p>
    </div>
  ));

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
          emulateTouch
        >
          {carouselItems}
        </Carousel>
      </div>
    </div>
  );
}
