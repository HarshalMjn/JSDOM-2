// AddEventListener

// document.addEventListener('click', function() {
//     console.log('I have clicked on the doucument');
// });

// function  addEventfunction() {
//     console.log('I have clicked on the doucument');
// }

// document.addEventListener('click',addEventfunction );

// RemoveEventListener
// function  addEventfunction() {
//      console.log('I have clicked on the doucument');
//  }

// document.addEventListener('click',addEventfunction );
// document.removeEventListener('click',addEventfunction );

//-------------------------The Event Object
// const cotent = document.querySelector('#wrapper');

// cotent.addEventListener('click',function(event) {
//     console.log(event);
// })

//--------------------------- The default action

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event) {
//     event.preventDefault();
//     console.log('mjaa aaya');
// });

// ----------------------------How to Avoid to Many Events

// let myDiv = document.createElement('div');

// for(let i =1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'  +i;

//     newElement.addEventListener('click',function(event) {
//         console.log('I have clicked on para')

//     });
//     myDiv.appendChild(newElement);
// }
//  document.body.appendChild(myDiv);

// ------------------------------Optimal code
// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('I have clicked on para')

// }
// for(let i =1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'  +i;

//     newElement.addEventListener('click',paraStatus);
//     myDiv.appendChild(newElement);
// }
//  document.body.appendChild(myDiv);

// ------------------------------Optimal code

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('I have clicked on para')

// }
//   myDiv.addEventListener('click',paraStatus);


// for(let i =1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para'  +i;

    
//     myDiv.appendChild(newElement);
// }
//  document.body.appendChild(myDiv);

// ----------------Target property
// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para '  +   event.target.textContent);

// }
//   myDiv.addEventListener('click',paraStatus);

  
// for(let i =1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para '  +i;

    
//     myDiv.appendChild(newElement);
// }
//  document.body.appendChild(myDiv);

// ----------------Target property probelm
// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     console.log('span pr click kia hai' + event.target.textCONTENT)
// });

// ----------------Target property solution

let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName == 'SPAN') {
        console.log('span pr click kia hai' + event.target.textCONTENT);
    }
    
});