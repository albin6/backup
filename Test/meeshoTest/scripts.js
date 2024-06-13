// for all ..........

document.addEventListener('DOMContentLoaded', () => {
    const selectingLinks = document.querySelectorAll('nav ul li a');

    selectingLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            const targetName = link.getAttribute('data-target');
            const targetSelection = document.querySelector(`.scroll-down.${targetName}`);
            targetSelection.classList.add('active');
        });
        
        link.addEventListener('mouseleave', () => {
            const targetName = link.getAttribute('data-target');
            const targetSelection = document.querySelector(`.scroll-down.${targetName}`);
            targetSelection.classList.remove('active');
        });
    });
});


// for single item...........

// document.addEventListener('DOMContentLoaded', () => {
//     const targetName = document.querySelector('#one');
//     const targetSelection = document.querySelector('.scroll-down.ethnic');

//     targetName.addEventListener('mouseenter', () => {
//         targetSelection.classList.add('active');
//     });
//     targetName.addEventListener('mouseleave', () => {
//         targetSelection.classList.remove('active');
//     });
// });