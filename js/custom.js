const vars = {

  heading: ``,

  subHeading: '',
  
  about: 'CR is a global team dedicated to innovation and excellence. We strive to stand out at the top, supporting players from every region to join us. With our own dedicated modding and creative teams, we foster a fun yet professional culture. We come together to create and play the best competitive matches the world has ever seen.',
  
  discord: 'https://discord.gg/KEZnkExAPk',
  
  twitter: '',
  
  inquiry: ''

}



console.log(vars.heading)
document.getElementById('heading').innerHTML = vars.heading;
document.getElementById('subHeading').textContent = vars.subHeading;
document.getElementById('about').textContent = vars.about;
document.getElementById('discord').setAttribute('href', vars.discord);
document.getElementById('twitter').setAttribute('href', vars.twitter);
document.getElementById('inquiry').textContent = vars.inquiry;
