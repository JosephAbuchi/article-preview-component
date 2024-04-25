const navBarClick = document.querySelector('.navBar');
const shareBtnClick = document.querySelector('.fa-solid');

shareBtnClick.addEventListener('click', function () {
  navBarClick.classList.toggle('hidden')
  shareBtnClick.classList.toggle('bg-dark')
})




