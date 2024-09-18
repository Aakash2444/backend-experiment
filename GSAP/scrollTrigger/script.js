gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1.3,
    rotate:360
})
// gsap.from("#page2 #box",{
//     scale:0,
//     // delay:1,
//     duration:1.3,
//     rotate:360,
//     // scrollTrigger:"#page2 #box" // jis element ko trigger krana h scroll krane pr uska nam
//     // scrollTrigger properties
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"

//     }
// })
gsap.from("#page2 h2",{
    opacity:0,
    x:-500,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 60%"
    }
})
gsap.from("#page2 h4",{
    opacity:0,
    x:500,
    scale:0,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h4",
        scroller:"body",
        // markers:true,
        start:"top 50%"
    }
})
gsap.from("#page2 #box",{
    scale:0,
    duration:1.3,
    rotate:900,
    scrollTrigger:{
                trigger:"#page2 #box",
                scroller:"body",
                markers:true,
                start:"top 60%",
                end:"top 20%",
                scrub:true, // animation depend completly on scrolling means animation ki journy start se end k bich hoti h
                // true ki jagah number(5) likhne pr bhaynkar smooth ho jayega
                pin:true
            }
})
