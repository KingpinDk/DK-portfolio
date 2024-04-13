import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'DHARANIKUMARAN',
  subTitle: '< c o d e r >',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: "DK's    portfolio.",
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I'm a problem solver, a curious nerd who enjoys learning and comprehending how things function.",
        "* I'm a member of Technology Innovation Hub a club where we build extrordinary projects for our college",
        '* Mostly I love writing logic rather UI designing but still I have done some awesome projects with amazing frontend.',
        '* I have a wide range of skills, of which I can say that I’ve mastered many.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'Click the icon to find out more(^ - ^).\n\nAlso help me add your Company logo here!!',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my Resume!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/file/d/1yMRU_GgGVCiVlowD7OSQBTxKlvbsmd18/view?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Projects',
      footer: '\nAnd more...',
      imageList: {
        rows: 2,
        separation: 2.0,
        leftPadding: -0.3,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/HereAgain.png',
            websiteURL: 'https://kingpin-dk.itch.io/here-again',
          },
          {
            url: 'websites-preview/Taskify.png',
            websiteURL: 'https://github.com/KingpinDk/Taskify',
          },
          {
            url: 'websites-preview/cuvasol.jpeg',
            websiteURL:
              'https://play.google.com/store/apps/details?id=com.cuvasol.studentapp&pli=1',
          },
          {
            url: 'websites-preview/TIH.jpeg',
            websiteURL: 'https://github.com/KingpinDk/VisitorManagement',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/dharanikumaransk/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/KingpinDk',
          },
          {
            url: 'icons/instagram.jpg',
            websiteURL: 'https://www.instagram.com/kingpin_dk/',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:simplykingpin@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
