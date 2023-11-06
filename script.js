var tl = gsap.timeline()

tl.from("#nav img, #nav h3, #nav h4, #nav button", {
    y:-100,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

tl.from("#main h1", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    stagger: 0.4
})

tl.from("#main>img", {
    opacity: 0,
    scale: 0,
    stagger: 0.3
})

tl.from ("h5", {
    scale: 0,
    opacity: 0,

})

tl.to ("h5", {
    y: 40,
    repeat: -1,
    // opacity: 0,
    duration: 1,
    yoyo: true
})