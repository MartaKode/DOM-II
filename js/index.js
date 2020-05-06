// Your code goes here

//-------------------selector function-------------------------
function get(selector) {
    return document.querySelector(selector)
  }

  function getAll(selector) {
    return document.querySelectorAll(selector)
  }


//---------------variables for Elements on Page-------------------
const logoText = document.querySelector('.logo-heading');
const allNavLinks = getAll('.nav-link');
const allImgsArray = Array.from(getAll('img'))
const allPsArray= Array.from(getAll('p'));
const allH2sArray = Array.from(getAll('h2'));
const allBtnsArray = Array.from(getAll('.btn'))


//------------------Functions and Listeners----------------------------------

//MouseOver ---> Listener#1
function logoStuff (event) {
    if(logoText.style.color !== 'red'){
        logoText.style.color = 'red';
    }else{
        logoText.style.color = 'initial';
    }  
  
}


logoText.addEventListener('mouseover', logoStuff)

//Wheel Function --->Listener#2
function wheelNow (event){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    get('.main-navigation').style.backgroundColor = randomColor;
}


get('body').addEventListener('wheel',wheelNow)


//Press Shift function ---> Listener #3
function anyKey (event){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
       get('body').style.backgroundColor = randomColor;

         if(event.key === 'Shift'){
             allPsArray.forEach(item => {
                if(item.style.fontSize !== '3rem'){
                    item.style.fontSize = '3rem';
                }else{
                    item.style.fontSize ='initial';
                }
            })}

}

addEventListener('keydown', anyKey);


//DoubleClick function ---> Listener #4
function clickTwice(event){
    const homeLink = document.createElement('a');
    homeLink.textContent = 'Home'
    homeLink.href = "#"
    homeLink.classList.add('nav-link')
    
   if(get('.nav-link:nth-child(1)').textContent === 'Home'){
    get('.nav-link').remove();
   }else {
       get('nav').prepend(homeLink)
   } 
}

//getAll('.nav-link').forEach( (item) => item.addEventListener('dblclick', clickTwice))
get('.nav-link:nth-child(2)').addEventListener('dblclick',clickTwice)

//Load function ---> Listener #5
function loadPage(event){
  alert('Hi there! 🦄');
}

window.addEventListener('load', loadPage)
//stop nav refresh


//Resize function --> Listener #6
function resizeWindow(event){
    get('.footer p').style.color = 'purple';
    get('.footer p').style.fontSize = '4rem';
  allImgsArray.forEach(item => item.style.border = 'groove 5px skyblue')
}

window.addEventListener('resize', resizeWindow)


//scroll function (similar to wheel) --> Listener #7
function scrollNow(event){
    
    allPsArray.forEach(item => {

        if(item.style.color === 'black'){
           item.style.color = 'blue'
            }else if(item.style.color === 'blue'){
                item.style.color = 'pink'
            }else {
                item.style.color='black'
            }
    })
  
} 

window.addEventListener('scroll', scrollNow)

//Copy function ---> Listener #8


allH2sArray.forEach( item => item.addEventListener('copy', event => alert('whatcha doin????')))
document.addEventListener('copy', event => alert('Soo...what are you doin???'))
//.source.addEventListener('copy', event => alert('whatcha doin????'))


//preventDefault() --> Listener #9
allNavLinks.forEach((item) => { item.addEventListener('click', event => {
   event.preventDefault();
})
})



//Click Event from lecture to analyze Propagation ----> Listener #10 included here


function theClick(event) {
    console.log('🎯 the target    ', event.target)
    console.log('🧭 current target', event.currentTarget)
    console.log('\n')
  }
  const allElementsArray = Array.from(document.all )
  allElementsArray.forEach(element => {
    element.addEventListener('click', theClick)
  })

 get('.container.nav-container').addEventListener('click', event => {
     console.log('evil grin, stopping propagation of the event')
 event.stopPropagation() 
})





//----------------------Additional Listeners : ----------------------------

//function keyPress --> Listener #11 

function keyPressDown(event){
   
    allH2sArray.forEach( item => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        item.style.color = randomColor})
}

window.addEventListener('keypress', keyPressDown);

//function contextmenu  ---> Listener #12

function contextMenu(event){
allBtnsArray.forEach(item => {
    if(   item.style.backgroundColor !== 'pink')
    {   item.style.backgroundColor = 'pink'
}else{
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    item.style.backgroundColor = randomColor
}
 

})
}

window.addEventListener('contextmenu', contextMenu)

