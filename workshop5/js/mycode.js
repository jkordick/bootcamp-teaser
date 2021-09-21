const homeMenu = document.getElementById('home-page');
const aboutMenu = document.getElementById('about-page');
const servicesMenu = document.getElementById('services-page');

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight'); //to showcase selector
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  else {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


document.querySelector('#likeButton').addEventListener('click', clickContact); 
let counter = 0;
function clickContact() { 
  counter += 1;
  alert("Thanks for liking me. This is " + counter + " like today"); 
}

const myForm = document.getElementById("contactMe");

myForm.addEventListener('submit', (e) => { 
    e.preventDefault(); //stops refreshing
    console.log("First element " + myForm.elements['email'].value);
    document.getElementById('reply').innerHTML="Thank your for contacting me.";
    myForm.elements['email'].value="";
    myForm.elements['subject'].value="";
    setInterval((e) => {document.getElementById('reply').innerHTML="";}, 3000);
});