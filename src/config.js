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
    title: 'Backend Intern at Convin.ai',
    img: 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_9cb63377dca6779d6deed05c7cd793d5/convin-ai.png',
    description: 'Developed, maintained and deployed major features like batch processing, custom dashboard dev, and gpt lead generation, and many more.',
    categories: ['Python', 'Web', 'Github','Backend', 'Docker', 'AWS'],
    sourceCodeUrl: 'https://github.com/techhub-community/csoc_platform'
  },
  {
    title: 'CSOC Techhub Backend Lead',
    img: 'https://avatars.githubusercontent.com/u/43721025?s=400&u=cc331514b4d1c4f27e96ec8e850cf3fc50c7534a&v=4',
    description: 'Designed Infra , developed and deployed major feature and mentored over 10 people.',
    categories: ['Python', 'Web', 'Github','Backend'],
    sourceCodeUrl: 'https://github.com/techhub-community/csoc_platform'
  },
  {
    title: 'Engineering Intern at Tally Solutions',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tally_-_Logo.png/1200px-Tally_-_Logo.png',
    description: 'Developed an email client under mentors using flutter.',
    categories: ['Dart', 'Flutter', 'API', 'Authentication'],
  },
  {
    title: 'Backend Development Intern',
    img: 'https://media.licdn.com/dms/image/C4D0BAQGFh6DsEpXZmQ/company-logo_200_200/0/1519895241767?e=2147483647&v=beta&t=DRp6NjSd3xHwhBwxfTitumIQb41NWDy1aNkIIJIfrpQ',
    description: 'As a member of a development team, I was instrumental in the design and implementation of a GIS solution for the UK power grid software infrastructure.',
    categories: ['Python', 'Django', 'Web','Backend', 'GIS', 'DRF'],
  },
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
