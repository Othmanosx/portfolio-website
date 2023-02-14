import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const App = () => {
  return (
    <Particles
      id="tsparticles"
      init={loadFull}
      params={{
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 150,
              duration: 4,
            },
          },
        },
        particles: {
          opacity: {
            random: true,
            value: 0.7,
            animation: {
              enable: true,
            },
          },
          number: {
            value: 200,
            density: {
              enable: false,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },

          move: {
            enable: true,
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out",
          },
        },
      }}
    />
  )
}
export default App
