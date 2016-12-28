
export default {
  skills: [{name: 'HTML/CSS'}, {name: 'SASS'}, {name: 'Javascript'}, {name: 'jQuery'}, {name: 'Git'}, {name: 'APIs'}, {name: 'Node'}, {name: 'React'}, {name: 'Express'}, {name: 'Handlebars'}, {name: 'MongoDB'}, {name: 'MySQL'}, {name: 'Photoshop'}, {name: 'Illustrator'}, {name: 'InDesign'}],
  education: [
    {
      title: 'Undergraduate Degree',
      school: 'Rhode Island School of Design',
      program: 'Bachelor of Fine Arts',
      area: 'Sculpture',
      honors: true
    },
    {
      title: 'Graduate Coursework',
      school: 'University of Michigan',
      program: 'Taubman College of Architecture & Urban Planning',
      area: 'Master of Architecture Candidate',
      honors: false
    },
    {
      title: 'Technical Training',
      school: 'University of Texas, Austin',
      program: 'Center for Professional Education',
      area: 'Fullstack Web Development Certificate',
      honors: false
    }
  ],
  projects: [
    {
      id: 1,
      title: 'RISD Tour',
      skills: 'React &#x25cf; Google Maps &#x25cf; JS &#x25cf; SASS',
      image: 'assets/images/RISD2.png',
      links: ['https://github.com/doerschera/RISD-react', 'https://risd-tour.herokuapp.com/'],
      description: "This app is a web-based tour for prospective students who are unable to visit RISD in person. It provides a tour of campus with information about the different departments and spaces within each building. Students can also get insight into RISD student life and academics with links back to the main site for more details."
    },
    {
      id: 2,
      title: 'Word.ly',
      skills: 'Express &#x25cf; Handlebars &#x25cf; MySQL &#x25cf; Node',
      image: 'assets/images/Wordly3.png',
      links: ['https://github.com/doerschera/wordly', 'https://word-ly.herokuapp.com/'],
      description: "Word.ly is a curated word list for writers. The words can serve as inspiration point or as resource for expanding vocabulary. Users can view and add words, as well as save favorite words via local storage. A MySQL database provides persistent storage and a custom ORM is used to make queries."
    },
    {
      id: 3,
      title: 'Plum Radio',
      skills: 'React &#x25cf; JS &#x25cf; SASS',
      image: 'assets/images/PlumRadio3.png',
      links: ['https://github.com/doerschera/plum-radio-react', 'https://plum-radio.herokuapp.com/'],
      description: "Plum Radio is a tool for writers that provides a platform to jumpstart the creative juices. Writers respond to fragments of poems, which act as open ended prompts. In the timed version, Gut Mode, writers have sixty seconds to write as much as they can before the prompt changes, with either five or ten minute sessions. Zen Mode is untimed and allows writers to move at their own pace."
    },
    {
      id: 4,
      title: 'You Grow, Girl!',
      skills: 'jQuery &#x25cf; HTML/CSS',
      image: 'assets/images/GrowGirl4.png',
      links: ['https://github.com/doerschera/grow-girl', 'https://yougrowgirl.herokuapp.com/'],
      description: "You Grow Girl! is a flower-themed game designed for young girls in order to promote strength and confidence with basic math skills. Players solve problems by finding the correct order of addition, subtraction, multiplication, and division that makes the two sides of an equation equal. With each correct answer the player's flower grows and a weed withers."
    },
    {
      id: 5,
      title: 'Dim Valley',
      skills: 'vanilla JS &#x25cf; jQuery &#x25cf; HTML/CSS',
      image: 'assets/images/DimValley5.png',
      links: ['https://github.com/doerschera/Dim-Valley', 'https://dim-valley.herokuapp.com/'],
      description: "Dim Valley is a series of games oriented around saving the town of Dim Vallery from impending darkness. Currently, there are two levels of play: a hangman style game and a game based off the board game Mastermind. With each level with player gets closer to solving a secret ritual that will save the town."
    },
    {
      id: 6,
      title: '512 Bingo',
      skills: 'Express &#x25cf; Handlebars &#x25cf; MySQL &#x25cf; Sequelize &#x25cf; Google Maps Geolocation',
      image: 'assets/images/Bingo1.png',
      links: ['https://github.com/JessicaSung/512-Bingo', 'https://bingo-512.herokuapp.com/'],
      description: "512-Bingo is an interactive game designed to help tourists and locals alike connect with the unique features of Austin. Users choose a game board based on themes such as coffee shops or swimming holes and mark items as they are discovered. Created with Jessica Sung, Erin Gianette, and Blake Roddy."
    }
  ]
};
