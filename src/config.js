const profile = {
  fullName: 'Kushagra Agarwal',
  description: 'Linux | Python | Open Source',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'photo.jpeg',
  about: {
    title: `HEY THERE! 
    I'M KUSHAGRA AGARWAL`,
    description: `I am a Information Science and Engineering sophomore at Sir M Visvesvaraya Institute of Technology, Bengaluru. I know python, c++, javascript and c. I have created projects using Flask, firebase, pygame, android studio, Google mediapipe, MySQL, Rest API. I like to participate in hackathons and believe in learning by doing. I have worked as a web developer and also as a backend developer. 

    Learning DSA and bash scripting currently. Also exploring open source platforms. Have interest in exploring more of Linux orgs like: openSUSE.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Bengaluru, Karnataka',
        url: '',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'twitter',
        text: '@kushagra_agra08',
        url: 'https://twitter.com/kushagra_agra08',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'kushagraagra008@gmail.com',
        url: 'mailto:kushagraagra008@gmail.com',
        hoverColor: '#546e7a'
      },
      
    ]
  },
  social: [
    {
      iconName: 'twitter',
      url: 'https://twitter.com/kushagra_agra08',
      text: "I'm on Twitter",
      hoverColor: '#1da1f2'
    },
    {
      iconName: 'instagram',
      url: 'https://instagram.com/kushagra_agra008',
      text: "I'm on Telegram",
      hoverColor: '#ff89d1'
    },
    {
      iconName: 'github',
      url: 'https://github.com/codewithkushagra',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:kushagraagra008@gmail.com',
      text: 'Send me an email',
      hoverColor: '#878486'
    }
  ]
}

const projects = [
  {
    title: 'Tally Hackathon URL Shortener',
    img: 'https://www.4me.com/wp-content/uploads/2018/01/4me-icon-link.png',
    description: 'Web service to shorten links with statistics of clicks in the last 30 days.',
    categories: ['Python', 'Django', 'Web','Backend'],
    siteUrl: 'https://urlmakeshorter.herokuapp.com/',
    sourceCodeUrl: 'https://github.com/codewithkushagra/urlshortner'
  },
  {
    title: 'GitHub Challenge Game Backend',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
    description: 'Learn GitHub by doing certain tasks, I used webhooks to monitor the tasks done by users.',
    categories: ['Python', 'Web', 'Github','Backend'],
    sourceCodeUrl: 'https://github.com/glugmvit/Leaderboard-backend'
  },
  {
    title: 'Anime Music Player',
    img: 'https://cdn2.iconfinder.com/data/icons/music-player-black/32/music_player_black-01-512.png',
    description: 'A basic music player, that is anime themed. No backend only, frontend project',
    categories: ['Frontend', 'Web'],
    siteUrl: 'https://nandemonaiya.netlify.app/',
    sourceCodeUrl: 'https://github.com/codewithkushagra/kiminonawa'
  },
  {
    title: 'Office Manager',
    img: '',
    description: 'A basic office manager application made using python tkinter',
    categories: ['Python', 'MYSQL'],
    sourceCodeUrl: 'https://github.com/codewithkushagra/MOffice'
  },
  {
    title: 'Jump On Game',
    img: 'https://www.pygame.org/ftp/pygame-head-party.png',
    description: 'A retro game made using pygame library in python for HACKCADE hackathon by MLH.',
    categories: ['Python'],
    sourceCodeUrl: 'https://github.com/codewithkushagra/MLH-hack-cade-jump-on'
  },
  {
    title: 'Static Website',
    img: 'https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png',
    description: 'A statistic website template using HTML and CSS',
    categories: ['Web', 'Frontend'],
    siteUrl: 'https://counsellingguru.netlify.app/',
    sourceCodeUrl: 'https://github.com/codewithkushagra/counsellorPortfolio'
  },
  {
    title: 'Naruto Justsu Battle',
    img: 'https://viallyhardi.files.wordpress.com/2012/06/logo.png',
    description: 'A opencv game based on Naruto, were you make hand signs to fight your opponent.',
    categories: ['Python'],
    sourceCodeUrl: 'https://github.com/codewithkushagra/NarutoJustsuBattle'
  },
  {
    title: 'Instagram Scraper',
    img: 'https://www.saashub.com/images/app/service_logos/69/5ad531841677/large.png?1566787214',
    description: 'Scraps a insta account images and captions and compiles them into an pdf',
    categories: ['Python'],
    sourceCodeUrl: 'https://github.com/codewithkushagra/instascraper'
  }
]

const formUrl = 'http://localhost:3000'
// const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  // ReCAPTCHAKey,
  missingProjectIcon
}
