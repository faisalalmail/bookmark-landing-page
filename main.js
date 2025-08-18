console.log("JS loaded")
const q1 = document.getElementById("q1");
const a1 = document.getElementById("a1");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const ss1 = document.getElementById("ss1");
const ss2 = document.getElementById("ss2");
const ss3 = document.getElementById("ss3");
const form = document.getElementById("newsLetterSub");
let subemail = document.getElementById('subemail');
const redFrame = document.getElementById("redFrame");
const errorMsg = document.getElementById("errorMsg");
const emailfield = document.getElementById("email");
const screenWidth = screen.width;
console.log(screenWidth);



form.addEventListener('submit',handlesubmit);

function handlesubmit(e){
    console.log('called');
    e.preventDefault();
    console.log(e.target.querySelectorAll("input")[0].value);

    // if the email is correct do something
if ((e.target.querySelectorAll("input")[0].value).includes('@') & (e.target.querySelectorAll("input")[0].value).includes('.')) {

    console.log('correct Email');
    errorMsg.style.display = 'none';
redFrame.classList.remove("border-2");


}else{


    // if no correct email show the error
errorMsg.style.display = 'block';
redFrame.classList.add("border-2");
emailfield.style.backgroundImage = "url('images/icon-error.svg')";
emailfield.style.backgroundRepeat = 'no-repeat';
emailfield.style.backgroundPosition = 'right 1rem center';

}



  }







function slide(selection,sid){
    let slides = {slide1,slide2,slide3};
    for (sslide in slides){
        console.log(sslide);
        document.getElementById(sslide).style.display = 'none';
      /*   sslide.style.display = 'none'; */
    }
    const selectedSlide = document.getElementById(sid);

    if (screenWidth < 1024){
    selectedSlide.style.display ="block";}
else {
selectedSlide.style.display ="flex";
}


        let slideSelections = {ss1,ss2,ss3};
    for (ss in slideSelections){
        document.getElementById(ss).className= '';
        document.getElementById(ss).classList.add('text-blue-950/75');
        document.getElementById(ss).classList.add('hover:text-red-400');

        
    }
    document.getElementById(selection.id).classList.remove('hover:text-red-400');
    document.getElementById(selection.id).classList.remove('text-blue-950/75');
    document.getElementById(selection.id).classList.add('text-black');
    document.getElementById(selection.id).classList.add('relative');
    document.getElementById(selection.id).classList.add('after:h-0');
    document.getElementById(selection.id).classList.add('after:w-[60%]');
    document.getElementById(selection.id).classList.add('after:border-2');
    document.getElementById(selection.id).classList.add('after:border-red-400');
    document.getElementById(selection.id).classList.add('after:block');
    document.getElementById(selection.id).classList.add('after:left-[20%]');
    document.getElementById(selection.id).classList.add('after:absolute');
    document.getElementById(selection.id).classList.add('after:top-9');

}








function question(id,qNum){
const q = document.getElementById(qNum);
/* q.style.opacity = '100%';
q.style.height = 'fit-content'; */
console.log(id);

if (q.style.display == 'block'){
    q.style.display = 'none';
const qq = document.getElementById(id);
const img = qq.querySelector('img');
img.src = 'images/icon-arrow.svg';



}else{

console.log(q.style.display);
q.style.display = 'block';
const qq = document.getElementById(id);
const img = qq.querySelector('img');
img.src = 'images/icon-arrow-red.svg';

}
}

function clear(){
    console.log('clear');
    errorMsg.style.display = 'none';
    redFrame.classList.remove('border-2');
    emailfield.style.backgroundImage = '';
}

emailfield.addEventListener('input',clear);

function showNav(){
    const touchNavs = document.getElementById("touchNavs");

    touchNavs.style.display = 'flex';
}

function closeNav(){
    const touchNavs = document.getElementById("touchNavs");

    touchNavs.style.display = 'none';
}