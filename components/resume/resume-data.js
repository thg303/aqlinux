const resumeData = [
  {
    data: {
      image: '/letvc.png',
      imageLink: 'https://letvc.com/',
      href: 'https://jahanweb.com/',
      firm: 'Jahan Web',
      job: 'Web Developer',
      duration: 'April 2011 - October 2011',
      shortDuration: '2011'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          <a href="https://letvc.com" target="_blank" rel="noopener noreferrer">
            LetVC
          </a>{' '}
          is an educational video platform, launched on a global scale. I joined the project since
          beginning, and here is what I did:
          <ul>
            <li>
              I learned{' '}
              <a href="https://www.yiiframework.com/" target="_blank" rel="noopener noreferrer">
                {' '}
                Yii (1.0)
              </a>{' '}
              and PHP within 2 weeks.
            </li>
            <li>
              I implemented the online payment system using{' '}
              <a href="https://paypal.com/" target="_blank" rel="noopener noreferrer">
                Paypal
              </a>{' '}
              which helped the company to have financial transactions in the early stage of the
              project.
            </li>
            <li>
              I Implemented social sign up / login using{' '}
              <a href="https://oauth.net/2/" target="_blank" rel="noopener noreferrer">
                OAuth2
              </a>{' '}
              and{' '}
              <a href="https://openid.net" target="_blank" rel="noopener noreferrer">
                OpenID
              </a>{' '}
              which improved the user registration rate to 30%.
            </li>
          </ul>
          Those experiences improved my reading technical documentation skills and share knowledge
          with the rest of my colleagues. Unfortunately, I had to left my job very soon and go to
          the military service for 2 years which is mandatory in Iran.
        </p>
      </>
    ),
    techIcons: [
      { title: 'PHP', iconName: 'php', href: 'https://php.net/' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'OpenID', iconName: 'openid', href: 'https://openid.net/' },
      { title: 'Paypal', iconName: 'paypal card', href: 'https://paypal.com/' }
    ]
  },
  {
    data: {
      image: '/albus-white.png',
      imageLink: 'https://web.archive.org/web/20190702111210/https://albuswhite.com/',
      href: 'https://web.archive.org/web/20190702111210/https://albuswhite.com/',
      firm: 'Albus White',
      job: 'Web Developer',
      duration: 'November 2015 - July 2016',
      shortDuration: '2015'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          When I returned from the military service period, everything was changed. I decided to
          update my knowledge and take a university degree in my favorite field (web development). I
          made a simple web application with{' '}
          <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
            Ruby on Rails
          </a>
          , and I wanted to learn more about it. So, I joined
          <em> Albus White</em> a Germany startup with 3 developers from different countries around
          the world. I liked the challenge of being in an international team and learning from them.
          here is what I did there:
          <ul>
            <li>
              I improved test coverage from 20% to 68% which reduced unexpected crashes and the time
              required to fix the bugs.
            </li>
          </ul>
          In Albus White, learned many things about how to effectively query the Postgres database.
          The web panel was in Angular JS and I found it interesting to work with. Unfortunately,
          the company faced a challenge in the market and I laid off. The company does not exist
          anymore.
        </p>
      </>
    ),
    techIcons: [
      { title: 'Ruby', iconName: 'gem', href: 'https://ruby-lang.org/' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'AngularJS', iconName: 'angular', href: 'https://angularjs.org/' }
    ]
  },
  {
    data: {
      image: '/ontime.png',
      imageLink: 'https://web.archive.org/web/20170318081708/http://ontimeapp.ir/',
      href: 'https://web.archive.org/web/20170318081708/http://ontimeapp.ir/',
      firm: 'Freelance',
      job: 'Web Developer',
      duration: 'July 2016 - November 2016',
      shortDuration: '2016'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          I knew that I need to learn more. I needed to implement a platform from ground-up and such
          an opportunity would not show up in an already founded company, so I decided to work as a
          freelancer. I was lucky that I could get a project very fast. It was an attendee system.
          here are what I did:
          <ul>
            <li>
              Implemented web service using{' '}
              <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
                Ruby on Rails
              </a>{' '}
              which allowed the customer to use the system for{' '}
              <a href="https://android.com" target="_blank" rel="noopener noreferrer">
                Android
              </a>{' '}
              and{' '}
              <a href="https://en.wikipedia.org/wiki/IOS" target="_blank" rel="noopener noreferrer">
                iOS
              </a>{' '}
              clients.
            </li>
            <li>
              Implemented front-end panels using{' '}
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React.js
              </a>
              . It reduced 30 hours of development time thanks to components reusability.
            </li>
            <li>
              I used{' '}
              <a href="https://trello.com/" target="_blank" rel="noopener noreferrer">
                Trello
              </a>{' '}
              and{' '}
              <a href="https://pomelloapp.com/" target="_blank" rel="noopener noreferrer">
                Pomello
              </a>{' '}
              to track tasks, issues and time spent on each task.
            </li>
          </ul>
          Unfortunately, the website does not exist anymore.
        </p>
      </>
    ),
    techIcons: [
      { title: 'Ruby', iconName: 'gem', href: 'https://ruby-lang.org/' },
      { title: 'React', iconName: 'react', href: 'https://reactjs.org/' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'trello', iconName: 'trello', href: 'https://trello.com/' }
    ]
  },
  {
    data: {
      image: '/iaho.png',
      imageLink: 'https://iaho.ir/',
      href: 'https://iaho.ir/',
      firm: 'OSI 7',
      job: 'Senior Frontend Developer',
      duration: 'November 2016 - May 2018',
      shortDuration: '2016'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          <a href="https://iaho.ir/" target="_blank" rel="noopener noreferrer">
            Iaho
          </a>{' '}
          is a website for Arabian horse breeds. I like horses and the idea behind the project, so I
          joined the team. Here are what I did:
          <ul>
            <li>
              I convinced the manager to use{' '}
              <a
                href="https://en.wikipedia.org/wiki/Web_service"
                target="_blank"
                rel="noopener noreferrer">
                web-service architecture
              </a>
              , it helped us to separate frontend and backend which reduced maintenance costs nearly
              35% and created a solid infrastructure for the mobile apps.
            </li>
            <li>
              I added <abbr title="Server Side Rendering">SSR</abbr> feature to{' '}
              <abbr title="Create React App">CRA</abbr> which brought us showing up in the
              google&apos;s result from nowhere to the first page for our targetted keywords.
            </li>
            <li>
              I made{' '}
              <a href="https://docker.com/" target="_blank" rel="noopener noreferrer">
                docker
              </a>{' '}
              images for the project services. It allowed us to have a CI system and that reduced
              our production server issues more than 30%
            </li>
            <li>
              Using{' '}
              <a href="https://trello.com/" target="_blank" rel="noopener noreferrer">
                trello
              </a>{' '}
              helped us to track issues and milestones better.
            </li>
          </ul>
          Unfortunately, we hit a financial crisis and the website is not actively maintain anymore.
        </p>
      </>
    ),
    techIcons: [
      { title: 'Docker', iconName: 'docker', href: 'https://docker.com/' },
      { title: 'React', iconName: 'react', href: 'https://reactjs.org/' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'trello', iconName: 'trello', href: 'https://trello.com/' }
    ]
  },
  {
    data: {
      image: '/tower-of-silence.png',
      imageLink: 'https://tower-of-silence.com/',
      href: 'https://tower-of-silence.com/',
      firm: 'Self Employed',
      job: 'Web Developer / Designer',
      duration: 'May 2018 - May 2019',
      shortDuration: '2018'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          I was sure about my technical skills, but I wanted to find out if I am a good designer too
          or not. I spend a couple of months to try different tools and ideas to improve my design
          skills.
          <br />I made a website for{' '}
          <a
            href="https://www.goodreads.com/book/show/38929010"
            target="_blank"
            rel="noopener noreferrer">
            Tower of Silence
          </a>{' '}
          a novel by Mr. Hamidreza Manaee which I found amazing. I chose to use{' '}
          <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
            Laravel
          </a>{' '}
          as backend and{' '}
          <a href="https://jquery.com" target="_blank" rel="noopener noreferrer">
            jQuery
          </a>
          , <abbr title="Hyper-Text Markup Language">HTML</abbr>, and{' '}
          <abbr title="Cascade Style Sheet">CSS</abbr> to build{' '}
          <a href="https://tower-of-silence.com" target="_blank" rel="noopener noreferrer">
            tower-of-silence.com
          </a>
          , it reduced development time to nearly 40% because the UI was not really component
          oriented nor complex.
          <br />
          Mr. Manaee found the website&apos;s design amazing. I tried different tools and worked on
          some prototypes for different projects. But I was not personally happy with the results.
        </p>
      </>
    ),
    techIcons: [
      { title: 'Docker', iconName: 'docker', href: 'https://docker.com/' },
      { title: 'HTML', iconName: 'html5', href: 'https://www.w3.org/MarkUp/' },
      { title: 'CSS', iconName: 'css3', href: 'https://www.w3.org/Style/CSS/Overview.en.html' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'Laravel', iconName: 'laravel', href: 'https://laravel.com/' }
    ]
  },
  {
    data: {
      image: '/chamedoon.png',
      imageLink: 'https://chamedoon.com/',
      href: 'https://chamedoon.com/',
      firm: 'Chamedoon',
      job: 'Chief Technical Officer',
      duration: 'May 2019 - Present',
      shortDuration: '2019'
    },
    description: (
      <>
        <p style={{ lineHeight: '1.425em', fontSize: '1.142em' }}>
          <a href="https://chamedoon.com" target="_blank" rel="noopener noreferrer">
            Chamedoon.com
          </a>{' '}
          is a <abbr title="Online Travel Agency">OTA</abbr> website selling flight tickets and
          hotel reservations, they needed a <abbr title="Cheif Technical Officer">CTO</abbr> who
          does not hesitate to write{' '}
          <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
            Ruby on Rails
          </a>{' '}
          code and lead the team. I joined them and here are what I did (so far):
          <ul>
            <li>
              Moved the build system to <a href="https://docker.com/">docker</a> and created a CI
              system using{' '}
              <a href="https://about.gitlab.com/" target="_blank" rel="noopener noreferrer">
                Gitlab
              </a>
              &apos;s CI feature. it allowed the frontend team to see their changes on the staging
              server and the test team to report bugs before they get to the production. It improved
              our uptime (nearly 10%) and decreased the production bugs on new features by nearly
              25%.
            </li>
            <li>
              I implemented fingerprint authentication which removed the delay required for
              two-factor authentication. Although, browser fingerprint authentication is a
              cutting-edge technology 10% of our users have the ability to use fingerprint
              authentication and enabled it.
            </li>
            <li>
              I refactored the rails codebase and used <a href="https://rspec.info/">Rspec</a> and{' '}
              <a href="https://github.com/rswag/rswag" target="_blank" rel="noopener noreferrer">
                RSWAG
              </a>{' '}
              gems to document the web service. It helped us to have both the API documentation and
              the test suite. It improved our service reliability by 14% and decreased
              implementation time nearly 16%.
            </li>
          </ul>
        </p>
      </>
    ),
    techIcons: [
      { title: 'Docker', iconName: 'docker', href: 'https://docker.com/' },
      { title: 'Ruby', iconName: 'react', href: 'https://reactjs.org/' },
      { title: 'GIT', iconName: 'git', href: 'https://git-scm.com/' },
      { title: 'trello', iconName: 'trello', href: 'https://trello.com/' }
    ]
  }
]

export default resumeData
