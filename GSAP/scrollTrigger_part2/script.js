gsap.to("#page2 h1",{
    transform:"translateX(-190%)",
    scrollTrigger:{
        trigger:"#page2",//jab bhi pin ka use krte hai tab parent element ko use krte hai
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true // pin animation pura hone tak element ko rok ke rakhta h

    }
})