// reveal up when scroll for intro 
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function revealImages() {
  const introImgs = document.querySelectorAll('.intro img');
  introImgs.forEach(img => {
    if (isElementInViewport(img)) {
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealImages);







// Get the HTML section element
const htmlSection = document.querySelector('.html-section');

// Get the text and image elements
const htmlText = document.querySelector('.html-text');
const htmlImg = document.querySelector('.html-img');

// Add a scroll event listener to the window object
window.addEventListener('scroll', function() {
  // Get the distance from the top of the HTML section to the top of the viewport
  const distanceFromTop = htmlSection.getBoundingClientRect().top;

  // If the HTML section is in view, add the "show" class to the section and its children
  if (distanceFromTop < window.innerHeight - 200) {
    htmlSection.classList.add('show');
    htmlText.classList.remove('hide');
    htmlImg.classList.remove('hide');
  }
});


