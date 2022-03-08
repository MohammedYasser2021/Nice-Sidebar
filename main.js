let asideToggle = document.querySelector('.sidebar-toggle')
let closeBtn = document.querySelector('.close')
let sidebar = document.querySelector('aside')

asideToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show')
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show')
})
