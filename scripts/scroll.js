
// const scrollBtn = document.getElementById('buy');
// const target = document.getElementById('ticket');

// scrollBtn.addEventListener('click', () => {
//     const scroll = {
//         top: target.offsetTop,
//         behavior: 'smooth'
//     };

//     if (window.scrollTo) {
//         window.scrollTo(scroll);
//     } 
//     else {
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }
// });

function scrollToDown() {
    const downElement = document.getElementById('ticket');
    downElement.scrollIntoView({ behavior: 'smooth' });
  }