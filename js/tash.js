gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !==1){
 ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 1.5,
  effects: true,
 })
}

let itemsL = gsap.utils.toArray(".kyrgyztan .container-3")

itemsL.forEach(item =>{
 gsap.fromTo(item,{x: -500, opacity: 0}, {
  opacity:1, x:0,
  ScrollTrigger: {
   trigger:item,
   scrub: true
  }
 })
}
)