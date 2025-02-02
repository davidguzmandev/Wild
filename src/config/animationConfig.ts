interface AnimationProps {
  opacity: number;
  y: number;
  x: number;
  scale: number;
  duration?: number;
  ease?: string;
}

interface ImageAnimation {
  from: AnimationProps;
  to: AnimationProps;
}

interface AnimationConfig {
  default: Record<string, ImageAnimation>;
  [breakpoint: number]: Record<string, ImageAnimation>;
}

const animationConfig: AnimationConfig = {
    default: {
      image1: {
        from: { opacity: 0, y: 120, x: 0, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: -30, x: 350, scale: 0 },
        to: {
          opacity: 1,
          y: -30,
          x: 350,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -100, x: 220, scale: 0 },
        to: {
          opacity: 1,
          y: -100,
          x: 220,
          scale: 0.7,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: -20, x: 190, scale: 0 },
        to: {
          opacity: 1,
          y: -20,
          x: 190,
          scale: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    1536: {
      image1: {
        from: { opacity: 0, y: 120, x: 290, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 290,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: -230, x: 490, scale: 0 },
        to: {
          opacity: 1,
          y: -230,
          x: 490,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -330, x: 350, scale: 0 },
        to: {
          opacity: 1,
          y: -330,
          x: 350,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: -210, x: 290, scale: 0 },
        to: {
          opacity: 1,
          y: -210,
          x: 290,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    1280: {
      image1: {
        from: { opacity: 0, y: 120, x: 290, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 290,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: -230, x: 460, scale: 0 },
        to: {
          opacity: 1,
          y: -230,
          x: 460,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -280, x: 350, scale: 0 },
        to: {
          opacity: 1,
          y: -280,
          x: 350,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: -210, x: 290, scale: 0 },
        to: {
          opacity: 1,
          y: -200,
          x: 290,
          scale: 0.9,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    1024: {
      image1: {
        from: { opacity: 0, y: 120, x: 290, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 290,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: -230, x: 460, scale: 0 },
        to: {
          opacity: 1,
          y: -180,
          x: 420,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -280, x: 350, scale: 0 },
        to: {
          opacity: 1,
          y: -250,
          x: 350,
          scale: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: -210, x: 290, scale: 0 },
        to: {
          opacity: 1,
          y: -190,
          x: 290,
          scale: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    768: {
      image1: {
        from: { opacity: 0, y: 120, x: 290, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 290,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: -155, x: 375, scale: 0 },
        to: {
          opacity: 1,
          y: -155,
          x: 375,
          scale: 0.7,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -220, x: 330, scale: 0 },
        to: {
          opacity: 1,
          y: -220,
          x: 330,
          scale: 0.7,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: -150, x: 290, scale: 0 },
        to: {
          opacity: 1,
          y: -150,
          x: 290,
          scale: 0.6,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    640: {
      image1: {
        from: { opacity: 0, y: 120, x: 0, scale: 1 },
        to: {
          opacity: 1,
          y: -90,
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        },
      },
      image2: {
        from: { opacity: 0, y: 10, x: 530, scale: 0 },
        to: {
          opacity: 1,
          y: 10,
          x: 530,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image3: {
        from: { opacity: 0, y: -50, x: 350, scale: 0 },
        to: {
          opacity: 1,
          y: -90,
          x: 350,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
      image4: {
        from: { opacity: 0, y: 10, x: 290, scale: 0 },
        to: {
          opacity: 1,
          y: 10,
          x: 290,
          scale: 1,
          ease: "elastic.out(1, 0.5)",
        },
      },
    },
    };

  export default animationConfig;