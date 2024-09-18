// gsap.to() => used for initial to final stage
// gsap.from() => used for final to initial stage

// gsap.to("#box",{
//     x:500,
//     duration:2,
//     delay:1
// })
// gsap.from("#box",{
//     x:500,
//     duration:2,
//     delay:1
// })

// adding normal css to this so have to use camelCase
// gsap.to("#box",{
//         x:500,
//         duration:2,
//         delay:1,
//         rotate:360,
//         backgroundColor:"white",
//         borderRadius:"50%",
//         // scale is used for size. 1 for original size
//         scale:0.5
//     })

// gsap.from("h1",{
//     color:"blue",
//     duration:1,
//     opacity:0,
//     delay:1,
//     y:30,
//     // stagger element ko indivisual target krta h
//     // stagger ko sare h1 pr ek ek krne effect apply kiye
//     stagger:0.5  // 0.5 yha pr time h -1 se ulta ho jayega
// })
// gsap.from("#box1",{
//     y:50,
//     rotate:360,
//     borderRadius:"50%",
//     scale:5,
//     duration:2
//     // repeat:-1, // -1 means infinte
//     // yoyo:true // start to work like yoyo, wrna ye only initial ti final ja rha tha infinte time but ab jha se start hoga wha wapis aa jayega
// })

// GSAP Timeline
// gsap.to("#box2",{
//     x:500,
//     rotate:360,
//     borderRadius:"50%",
//     scale:0.7,
//     duration:2,
//     delay:1
    
// })
// gsap.to("#box3",{
//     x:500,
//     rotate:360,
//     borderRadius:"50%",
//     scale:0.9,
//     duration:2,
//     delay:3 // 3 = duration of first + delay of first

// })
// gsap.to("#box4",{
//     x:500,
//     rotate:360,
//     borderRadius:"50%",
//     scale:0.7,
//     duration:2,
//     delay:5 // 5 = duration of second + delay of second

// }) // yha pr ham chahte hai ki ek ka animation khatm ho fir dusare ka start ho
// pr age bohot sare honge to sab ka time calculate krke likhna possible nhi h to yha use krte hai TIMELINE ka
// timeline code ko syncronous bna deti h
var tl = gsap.timeline()

tl.to("#box1",{
    x:500,
    rotate:360,
    borderRadius:"50%",
    duration:0.5,
    scale:0.8,
    delay:1
})
tl.to("#box2",{
    x:500,
    rotate:360,
    borderRadius:"50%",
    duration:0.5,
    scale:0.8,
    // delay:1  yha pr delay dene ki jarurat nhi h yah box1 k complete hone pr apne aap chal jayega
})
tl.to("#box3",{
    x:500,
    rotate:360,
    borderRadius:"50%",
    duration:0.5,
    scale:0.8,
})
tl.to("#box4",{
    x:500,
    rotate:360,
    borderRadius:"50%",
    duration:0.5,
    scale:0.8,
})