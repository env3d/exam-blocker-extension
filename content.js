window.addEventListener('load', evt => {
  console.log(document.location);
  // document.querySelector('.d2l-html-block-rendered')
});

window.addEventListener('blur', function() {
  alert('Should not be clicking outside\nYour action will be logged and reported!');
  // Perform any necessary action when the popup loses focus
}); 
