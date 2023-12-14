function changeColors(selectedValue) {
    var imageUrlp = 'pictures/p.png';
    var imageElement = document.getElementById('image');
    var imageUrlt = 'pictures/t.png';
    var imageUrlr = 'pictures/aalto_paint-pour_04 1 (1).jpg';
    var imageElement1 = document.querySelector('.sign-up-1 img');
    var imageElement2l = document.querySelector('#navlogo img');
    var imageElement3l = document.querySelector('.inner-column-11 img');
  var absolimg=document.getElementById("absolute-image");
    
    switch (selectedValue) {
      case 'PROTANOPIA':
        document.documentElement.style.setProperty('--main-blue', '#3F4E7A');
        document.documentElement.style.setProperty('--main-orange', '#DAC010');
        document.documentElement.style.setProperty('--products-gray', '#E1DDDD');
        document.documentElement.style.setProperty('--main-ultra-violet', '#3C5591');
        document.documentElement.style.setProperty('--main-oreenery', '#B5A249');
        document.documentElement.style.setProperty('--main-serenity', '#9BA4CD');
        document.documentElement.style.setProperty('--main-classic-blue', '#354A7D');
        document.documentElement.style.setProperty('--main-lying-coral', '#A79B71');
        document.documentElement.style.setProperty('--main-very-peri', '#516AAD');
        document.documentElement.style.setProperty('--main-illuminating', '#F8DD4E');
        if(imageElement2l){
        imageElement2l.src = 'pictures/logo2.png';
        }
        if(imageElement3l){
        imageElement3l.src = 'pictures/logo2.png';
        }
        if(imageElement1){
        imageElement1.src = 'pictures/brush1.png';
        }
        if(absolimg){
        absolimg.style.backgroundImage="url('pictures/coloryear2.jpg')";
        }
        if(imageElement){
        imageElement.src = imageUrlp;
        }
        
        break;
      case 'TRITANOPIA':
        document.documentElement.style.setProperty('--main-blue', '#00585E');
        document.documentElement.style.setProperty('--main-orange', '#FFA9B3');
        document.documentElement.style.setProperty('--products-gray', '#E1DDDD');
        document.documentElement.style.setProperty('--main-ultra-violet', '#55575D');
        document.documentElement.style.setProperty('--main-oreenery', '#96A4B0');
        document.documentElement.style.setProperty('--main-serenity', '#8AABB8');
        document.documentElement.style.setProperty('--main-classic-blue', '#005459');
        document.documentElement.style.setProperty('--main-lying-coral', '#FF6D74');
        document.documentElement.style.setProperty('--main-very-peri', '#587179');
        document.documentElement.style.setProperty('--main-illuminating', '#FFD1DF');
        if(imageElement2l){
        imageElement2l.src = 'pictures/logo3.png';
        }
        if(imageElement3l){
        imageElement3l.src = 'pictures/logo3.png';
        }
        if(imageElement1){
        imageElement1.src = 'pictures/brush3.png';
        }
        if(absolimg){
        absolimg.style.backgroundImage="url('pictures/coloryear3.jpg')";
        }
        if(imageElement){
        imageElement.src = imageUrlt;
        }
        break;
      case 'remove':
        // Reset to default colors or set to whatever you want for the 'remove' option
        document.documentElement.style.setProperty('--main-blue', '#00537F');
        document.documentElement.style.setProperty('--main-orange', '#FFB301');
        document.documentElement.style.setProperty('--products-gray', '#E1DDDD');
        document.documentElement.style.setProperty('--main-ultra-violet', '#5F4B8B');
        document.documentElement.style.setProperty('--main-oreenery', '#88B04B');
        document.documentElement.style.setProperty('--main-serenity', '#91A8D0');
        document.documentElement.style.setProperty('--main-classic-blue', '#0F4C81');
        document.documentElement.style.setProperty('--main-lying-coral', '#FF6F61');
        document.documentElement.style.setProperty('--main-very-peri', '#6666AB');
        document.documentElement.style.setProperty('--main-illuminating', '#F5DF4D');
        if(imageElement2l){
        imageElement2l.src = 'pictures/logo.png';
        }
        if(imageElement3l){
        imageElement3l.src = 'pictures/logo3.png';
        }
        if(imageElement1){
        imageElement1.src = 'pictures/brush (2).png';
        }
        if(imageElement){
        imageElement.src = imageUrlr;
        }
        if(absolimg){
        absolimg.style.backgroundImage="url('pictures/Mask group.jpg')";
        }
        break;
      default:
        // Reset to default colors for the default case
        document.documentElement.style.setProperty('--main-blue', '#00537F');
        document.documentElement.style.setProperty('--main-orange', '#FFB301');
        document.documentElement.style.setProperty('--products-gray', '#E1DDDD');
        document.documentElement.style.setProperty('--main-ultra-violet', '#5F4B8B');
        document.documentElement.style.setProperty('--main-oreenery', '#88B04B');
        document.documentElement.style.setProperty('--main-serenity', '#91A8D0');
        document.documentElement.style.setProperty('--main-classic-blue', '#0F4C81');
        document.documentElement.style.setProperty('--main-lying-coral', '#FF6F61');
        document.documentElement.style.setProperty('--main-very-peri', '#6666AB');
        document.documentElement.style.setProperty('--main-illuminating', '#F5DF4D');
        break;
    }
  
    // Store the selected value in local storage
    localStorage.setItem('selectedColor', selectedValue);
  }
  
  // Retrieve the selected value from local storage on page load
  document.addEventListener('DOMContentLoaded', function () {
    var storedValue = localStorage.getItem('selectedColor');
    if (storedValue) {
      // Apply the stored color scheme
      changeColors(storedValue);
    }
  });
  
  // If there is a select element, add an event listener
  var colorSelect = document.getElementById('colorSelect');
  if (colorSelect) {
    colorSelect.addEventListener('change', function () {
      var selectedValue = this.value;
      changeColors(selectedValue);
      // Store the selected color in local storage immediately after change
      localStorage.setItem('selectedColor', selectedValue);
    });
  }
  