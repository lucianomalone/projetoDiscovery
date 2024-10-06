function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag image
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute('src','./assets/Avatardia.png')
    img.setAttribute('alt','Foto com Oculos de sol')
    
  } else {
    img.setAttribute("src", "./assets/Avatarnoite.png")
    img.setAttribute("alt", "Foto com Oculos de grau")
  }

  //se estiver ligth add a iamgem ligt sem ligth manter imagem normal
}