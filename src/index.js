console.log('%c HI', 'color: firebrick')

function animalPictures() {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(array => {
  const dogPicture = array.message
  console.log(dogPicture)
  for(const data of dogPicture)
  {let image = document.createElement('img')
  image.src = data
  document.getElementById('dog-image-container').appendChild(image)}
})
}
animalPictures()

function breedNames(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(array => {
    const dogNames = array.message
    console.log(dogNames)
    for(const name in dogNames)
    {let li = document.createElement('li')
    document.getElementById('dog-breeds').appendChild(li)
    li.innerHTML = name
    li.addEventListener('click',() =>{
      li.style.color = 'blue'
    })
  }})
  .then(names => {
    const breedDrop = document.getElementById('breed-dropdown')
    console.log(breedDrop)
  })
}
breedNames()
