"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({

      fpsLimit: 60,
      fullScreen: {
        enable: false
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ['bubble', 'connect'],
          },
        },
        modes: {
          bubble: {
            distance: 350, // CHANGED: Was 250 (Wider "glow")
            size: 3,
            duration: 2,
            opacity: 0.5,
            color: {
              value: '#B8BB26',
            },
          },
          connect: {
            distance: 75, // CHANGED: Was 150 (Links are more "spread out")
            links: {
              color: {
                value: '#B8BB26',
              },
              opacity: 0.05, // CHANGED: Was 0.4 (Toned down)
            },
            radius: 300, // CHANGED: Was 200 (Wider "activation")
          },

        },
      },
      particles: {
        color: {
          value: '#EBDBB2',
        },
        links: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          speed: 0.2,
          random: true,
          straight: false,
          outModes: {
            default: 'out',
          },
        },
        number: {
          density: {
            enable: true,
            area: 1,
          },
          value: 350,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,

    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }}

      />
    );
  }

  return <></>;
};

export default ParticleBackground;