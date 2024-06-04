
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('toggleButton');
//     toggleButton.addEventListener('click', toggleNightMode);

//     // Initialize Particles.js
//     particlesJS.load('particles-js', 'static/js/particles.json', function() {
//         console.log('particles.js loaded - callback');
//     });
// });

// function toggleNightMode() {
//     document.body.classList.toggle('night-mode');
// }

/* Initialize particles.js */
/* Initialize particles.js */
particlesJS("particles-js-left", {
    "particles": {
        "number": {
            "value": 120, // Increase the number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 10
            }
        },
        "opacity": {
            "value": 3.8, // Increase the opacity
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "opacity_min": 4.1,
                "sync": true
            }
        },
        "size": {
            "value": 8, // Increase the size
            "random": true,
            "anim": {
                "enable": true,
                "speed": 50,
                "size_min": 0.5,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 1.6, // Increase the opacity of the lines
            "width": 2 // Increase the width of the lines
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "bubble"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

particlesJS("particles-js-right", {
    "particles": {
        "number": {
            "value": 120, // Increase the number of particles
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 10
            }
        },
        "opacity": {
            "value": 3.8, // Increase the opacity
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "opacity_min": 4.1,
                "sync": true
            }
        },
        "size": {
            "value": 8, // Increase the size
            "random": true,
            "anim": {
                "enable": true,
                "speed": 50,
                "size_min": 0.5,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 1.6, // Increase the opacity of the lines
            "width": 2 // Increase the width of the lines
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": true,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "remove"
            },
            "onclick": {
                "enable": true,
                "mode": "grab"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

/* Toggle night mode */
const toggleBtn = document.querySelector('.toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('night-mode');
});
