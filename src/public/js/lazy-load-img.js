const images = document.querySelectorAll('.js-lazy-image');
const config = {
  rootMargin: '50px 0px',
  threshold: 0.01
};

let imageCount = images.length;
let observer;

if (!('IntersectionObserver' in window)) {
  loadImagesImmediately(images);
} else {
  observer = new IntersectionObserver(onIntersection, config);

  for (let i = 0; i < images.length; i++) { 
    let image = images[i];

    /*if (image.classList.contains('js-lazy-image--handled')) {
      continue;
    }*/

    observer.observe(image);
  }
}

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

function preloadImage(image) {
  const src = image.dataset.src;
  if (!src) {
    return;
  }

  return fetchImage(src).then(() => { applyImage(image, src); });
}

function loadImagesImmediately(images) {
  // foreach() is not supported in IE
  for (let i = 0; i < images.length; i++) { 
    let image = images[i];
    preloadImage(image);
  }
}

function disconnect() {
  if (!observer) {
    return;
  }

  observer.disconnect();
}

function onIntersection(entries) {

  if (imageCount === 0) {
    observer.disconnect();
  }

  for (let i = 0; i < entries.length; i++) { 
    let entry = entries[i];
    // Are we in viewport?
    if (entry.intersectionRatio > 0) {
      imageCount--;

      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  }
}
 
function applyImage(img, src) {
  //img.classList.add('js-lazy-image--handled');
  img.classList.add('h-blur');
  img.src = src;  
}