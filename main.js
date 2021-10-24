const LinksSocialMedia = {
  github: 'btomasmaiochi,
  linkedin: 'btomasmaiochi',
  facebook: 'VTM.FCS',
  instagram: 'btommai',
  twitter: 'brutomasmaiochi'
}
function changeSocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Wallysson Lima'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    if (social === 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${LinksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
  }
  // outra forma
  // userName.textContent = 'Leticia Arantes'
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userImg.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
// Function
// function nomeDaFuncao(arguments) {

// }

// Arrow Function
// const nomeDaFuncao = arguments => {

// }

// arguments => {

// }

// (arguments1, arguments2) => {

// }

// () => {

// }