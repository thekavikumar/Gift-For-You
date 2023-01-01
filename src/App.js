import { ethers } from "ethers";
import React from "react";
import { useState } from "react";
import ShoppingCard from "./ShoppingCard";
import { CoolNavbar } from "simple-ui-devstuff";
import "./App.css";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";


function App() {
    const [data, setdata] = useState({
    address:'',    // Stores address
    Balance: null  // Stores balance
  })

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
const Click=async()=>{
  if(window.ethereum){
      // Do something 
    }else{
      alert("install metamask extension!!")
    }
    window.ethereum.request({method:'eth_requestAccounts'})
.then(res=>{
        // Return the address of the wallet
        console.log(res) 
})
window.ethereum.request({
    method:'eth_getBalance', 
    params: ["0x3F0d82c9654F6056b8F4B9D460D1183337C8acc2", 'latest']
}).then(balance => {
    // Return string value to convert it into int balance
    console.log(balance) 
      
    // Yarn add ethers for using ethers utils or
    // npm install ethers
    console.log(ethers.utils.formatEther(balance))
    // Format the string into main latest balance
})



}

  const navItems = [
    ["Home", "/"],
    ["About", "/"],
    ["Contact", "/"],
  ];

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          "autoPlay": true,
          "background": {
            "image": "",
            "position": "",
            "repeat": "",
            "size": "",
            "opacity": 1,
          },
          "backgroundMask": {
            "composite": "destination-out",
            "cover": {
              "color": {
                "value": "#fff",
              },
              "opacity": 1,
            },
            "enable": false,
          },
          "defaultThemes": {},
          "delay": 0,
          "fullScreen": {
            "enable": true,
            "zIndex": 1,
          },
          "detectRetina": true,
          "duration": 0,
          "fpsLimit": 120,
          "interactivity": {
            "detectsOn": "window",
            "events": {
              "onClick": {
                "enable": false,
                "mode": [],
              },
              "onDiv": {
                "selectors": [],
                "enable": false,
                "mode": [],
                "type": "circle",
              },
              "onHover": {
                "enable": false,
                "mode": [],
                "parallax": {
                  "enable": false,
                  "force": 2,
                  "smooth": 10,
                },
              },
              "resize": {
                "delay": 0.5,
                "enable": true,
              },
            },
            "modes": {
              "attract": {
                "distance": 200,
                "duration": 0.4,
                "easing": "ease-out-quad",
                "factor": 1,
                "maxSpeed": 50,
                "speed": 1,
              },
              "bounce": {
                "distance": 200,
              },
              "bubble": {
                "distance": 200,
                "duration": 0.4,
                "mix": false,
              },
              "connect": {
                "distance": 80,
                "links": {
                  "opacity": 0.5,
                },
                "radius": 60,
              },
              "grab": {
                "distance": 100,
                "links": {
                  "blink": false,
                  "consent": false,
                  "opacity": 1,
                },
              },
              "push": {
                "default": true,
                "groups": [],
                "quantity": 4,
              },
              "remove": {
                "quantity": 2,
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4,
                "factor": 100,
                "speed": 1,
                "maxSpeed": 50,
                "easing": "ease-out-quad",
              },
              "slow": {
                "factor": 3,
                "radius": 200,
              },
              "trail": {
                "delay": 1,
                "pauseOnStop": false,
                "quantity": 1,
              },
              "light": {
                "area": {
                  "gradient": {
                    "start": {
                      "value": "#ffffff",
                    },
                    "stop": {
                      "value": "#000000",
                    },
                  },
                  "radius": 1000,
                },
                "shadow": {
                  "color": {
                    "value": "#000000",
                  },
                  "length": 2000,
                },
              },
            },
          },
          "manualParticles": [],
          "particles": {
            "bounce": {
              "horizontal": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1,
                },
                "value": 1,
              },
              "vertical": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.1,
                },
                "value": 1,
              },
            },
            "collisions": {
              "absorb": {
                "speed": 2,
              },
              "bounce": {
                "horizontal": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1,
                  },
                  "value": 1,
                },
                "vertical": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0.1,
                  },
                  "value": 1,
                },
              },
              "enable": false,
              "mode": "bounce",
              "overlap": {
                "enable": true,
                "retries": 0,
              },
            },
            "color": {
              "value": ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
              "animation": {
                "h": {
                  "count": 0,
                  "enable": true,
                  "offset": 0,
                  "speed": 30,
                  "decay": 0,
                  "sync": true,
                },
                "s": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "decay": 0,
                  "sync": true,
                },
                "l": {
                  "count": 0,
                  "enable": false,
                  "offset": 0,
                  "speed": 1,
                  "decay": 0,
                  "sync": true,
                },
              },
            },
            "groups": {},
            "move": {
              "angle": {
                "offset": 0,
                "value": 90,
              },
              "attract": {
                "distance": 200,
                "enable": false,
                "rotate": {
                  "x": 3000,
                  "y": 3000,
                },
              },
              "center": {
                "x": 50,
                "y": 50,
                "mode": "percent",
                "radius": 0,
              },
              "decay": 0.1,
              "distance": {},
              "direction": "top",
              "drift": 0,
              "enable": true,
              "gravity": {
                "acceleration": 9.81,
                "enable": true,
                "inverse": false,
                "maxSpeed": 200,
              },
              "path": {
                "clamp": true,
                "delay": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0,
                  },
                  "value": 0,
                },
                "enable": false,
                "options": {},
              },
              "outModes": {
                "default": "destroy",
                "bottom": "destroy",
                "left": "destroy",
                "right": "destroy",
                "top": "none",
              },
              "random": false,
              "size": false,
              "speed": {
                "min": 50,
                "max": 150,
              },
              "spin": {
                "acceleration": 0,
                "enable": false,
              },
              "straight": false,
              "trail": {
                "enable": false,
                "length": 10,
                "fillColor": {
                  "value": "#000000",
                },
              },
              "vibrate": false,
              "warp": false,
            },
            "number": {
              "density": {
                "enable": false,
                "area": 800,
                "factor": 1000,
              },
              "limit": 300,
              "value": 0,
            },
            "opacity": {
              "random": {
                "enable": false,
                "minimumValue": 0.1,
              },
              "value": 1,
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 0.3,
                "decay": 0,
                "sync": true,
                "destroy": "min",
                "startValue": "max",
              },
            },
            "reduceDuplicates": false,
            "shadow": {
              "blur": 0,
              "color": {
                "value": "#000",
              },
              "enable": false,
              "offset": {
                "x": 0,
                "y": 0,
              },
            },
            "shape": {
              "options": {
                "polygon": [
                  {
                    "sides": 5,
                  },
                  {
                    "sides": 6,
                  },
                ],
                "star": [
                  {
                    "sides": 5,
                  },
                  {
                    "sides": 6,
                  },
                ],
              },
              "type": ["circle", "square", "polygon"],
            },
            "size": {
              "random": {
                "enable": false,
                "minimumValue": 1,
              },
              "value": 3,
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 5,
                "decay": 0,
                "sync": false,
                "destroy": "none",
                "startValue": "random",
              },
            },
            "stroke": {
              "width": 0,
            },
            "zIndex": {
              "random": {
                "enable": false,
                "minimumValue": 0,
              },
              "value": 0,
              "opacityRate": 1,
              "sizeRate": 1,
              "velocityRate": 1,
            },
            "life": {
              "count": 0,
              "delay": {
                "random": {
                  "enable": false,
                  "minimumValue": 0,
                },
                "value": 0,
                "sync": false,
              },
              "duration": {
                "random": {
                  "enable": false,
                  "minimumValue": 0.0001,
                },
                "value": 0,
                "sync": false,
              },
            },
            "rotate": {
              "random": {
                "enable": false,
                "minimumValue": 0,
              },
              "value": {
                "min": 0,
                "max": 360,
              },
              "animation": {
                "enable": true,
                "speed": 60,
                "decay": 0,
                "sync": false,
              },
              "direction": "random",
              "path": false,
            },
            "destroy": {
              "bounds": {},
              "mode": "none",
              "split": {
                "count": 1,
                "factor": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0,
                  },
                  "value": 3,
                },
                "rate": {
                  "random": {
                    "enable": false,
                    "minimumValue": 0,
                  },
                  "value": {
                    "min": 4,
                    "max": 9,
                  },
                },
                "sizeOffset": true,
                "particles": {},
              },
            },
            "roll": {
              "darken": {
                "enable": true,
                "value": 30,
              },
              "enable": true,
              "enlighten": {
                "enable": true,
                "value": 30,
              },
              "mode": "vertical",
              "speed": {
                "min": 15,
                "max": 25,
              },
            },
            "tilt": {
              "random": {
                "enable": false,
                "minimumValue": 0,
              },
              "value": {
                "min": 0,
                "max": 360,
              },
              "animation": {
                "enable": true,
                "speed": 60,
                "decay": 0,
                "sync": false,
              },
              "direction": "random",
              "enable": true,
            },
            "twinkle": {
              "lines": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1,
              },
              "particles": {
                "enable": false,
                "frequency": 0.05,
                "opacity": 1,
              },
            },
            "wobble": {
              "distance": 30,
              "enable": true,
              "speed": {
                "angle": {
                  "min": -15,
                  "max": 15,
                },
                "move": 10,
              },
            },
            "orbit": {
              "animation": {
                "count": 0,
                "enable": false,
                "speed": 1,
                "decay": 0,
                "sync": false,
              },
              "enable": false,
              "opacity": 1,
              "rotation": {
                "random": {
                  "enable": false,
                  "minimumValue": 0,
                },
                "value": 45,
              },
              "width": 1,
            },
            "links": {
              "blink": false,
              "color": {
                "value": "#fff",
              },
              "consent": false,
              "distance": 100,
              "enable": false,
              "frequency": 1,
              "opacity": 1,
              "shadow": {
                "blur": 5,
                "color": {
                  "value": "#000",
                },
                "enable": false,
              },
              "triangles": {
                "enable": false,
                "frequency": 1,
              },
              "width": 1,
              "warp": false,
            },
            "repulse": {
              "random": {
                "enable": false,
                "minimumValue": 0,
              },
              "value": 0,
              "enabled": false,
              "distance": 1,
              "duration": 1,
              "factor": 1,
              "speed": 1,
            },
          },
          "pauseOnBlur": true,
          "pauseOnOutsideViewport": true,
          "responsive": [],
          "smooth": false,
          "style": {},
          "themes": [],
          "zLayers": 100,
          "emitters": {
            "autoPlay": true,
            "fill": true,
            "life": {
              "wait": false,
            },
            "rate": {
              "quantity": 10,
              "delay": 0.1,
            },
            "shape": "square",
            "startCount": 0,
            "size": {
              "mode": "percent",
              "height": 0,
              "width": 0,
            },
            "particles": {},
            "position": {
              "x": 50,
              "y": 100,
            },
          },
        }}
      />
      <CoolNavbar title="+91-Gift-For-You" navItems={navItems} btnTitle="🛒" />
      <div className="grid">
        <ShoppingCard
          title="Sun Glasses"
          rate="4"
          price="10"
          image="https://images.unsplash.com/photo-1597467007140-e1dbc5c9409a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          btnTitle="Buy Now"
          btnOnClick={Click}
          description="Sunglasses are glasses with lenses that are tinted or polarized to block out sunlight and glare."
        />
        <ShoppingCard
          title="Pink Purse"
          rate="5"
          price="30"
          image="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          btnTitle="Buy Now"
          btnOnClick={Click}
          description="A purse is a small bag that is typically used by women to carry personal items such as keys, money, makeup, and other small items."
        />
        <ShoppingCard
          title="Gaming Mouse"
          rate="4"
          price="60"
          image="https://images.unsplash.com/photo-1616296425622-4560a2ad83de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1013&q=80"
          btnTitle="Buy Now"
          btnOnClick={Click}
          description="A computer mouse is a hand-held pointing device that detects two-dimensional motion relative to a surface."
        />
        <ShoppingCard
          title="Notepad"
          rate="4"
          price="15"
          image="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
          btnTitle="Buy Now"
          btnOnClick={Click}
          description="A notepad is a small book or pad of paper for writing on, especially one with a flexible cover."
        />
      </div>
    </div>
  );
}

export default App;
