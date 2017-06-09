
$('.panel').velocity("transition.slideUpIn",{stagger: 300,easing: "easeInOutCubic"});

const slideButton = $('#contact-form-slide-button')
let slideState = false;
const slideOut = ()=>{
  console.log("Called!  Slide state is " + slideState)
  if(!slideState){
    console.log("not slide state.")
    slideButton.parent().velocity({
    bottom: "0px",
}, {
    duration: 300,
    easing: "easeIn"
});
  }else{
    console.log("Yup slide state.")
    slideButton.parent().velocity({
    bottom: "-350px",
}, {
    duration: 500,
    easing: "easeIn"
});
  }
  slideState = !slideState;
}

slideButton.click(()=>slideOut(slideState))
