// AddEventListener

// document.addEventListener('click', function() {
//     console.log('I have clicked on the doucument');
// });

// function  addEventfunction() {
//     console.log('I have clicked on the doucument');
// }

// document.addEventListener('click',addEventfunction );

// RemoveEventListener
function  addEventfunction() {
     console.log('I have clicked on the doucument');
 }

document.addEventListener('click',addEventfunction );
// document.removeEventListener('click',addEventfunction );


const cotent = document.querySelector('#wrapper');

cotent.addEventListener('click',function(event) {
    console.log(event);
})