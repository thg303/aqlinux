const projectData = [
  {
    data: {
      title: 'Web Interface for Linux Kernel Firewall (iptables)',
      creationDate: '2011, July',
      tags: ['perl', 'firewall', 'cgi', 'IPC', 'inter-process communication'],
      link: 'https://github.com/thg303/iptables-cgi',
      linkCaption: 'https://github.com/thg303/iptables-cgi',
      shortDuration: 'Jul, 2011'
    },
    techIcons: [
      { title: ' Perl/CGI', iconName: 'icon-apache', href: 'https://perl.org/' },
      { title: ' GitHub', iconName: 'icon-github', href: 'https://github.com/thg303/iptables-cgi' }
    ],
    images: [
      {
        alt: 'main screen',
        src: '/projects/iptables-cgi/main-screen.png'
      },
      {
        alt: 'creating an incoming rule',
        src: '/projects/iptables-cgi/incoming-rule.png'
      },
      {
        alt: 'creating a forwarding rule',
        src: '/projects/iptables-cgi/forwarding-rule.png'
      },
      {
        alt: 'editing an existing rule',
        src: '/projects/iptables-cgi/editing-rule.png'
      },
      {
        alt: 'applying a rule',
        src: '/projects/iptables-cgi/applying-a-rule.png'
      }
    ],
    description: (
      <div className="description">
        <p>
          This was a personal project. I implemented a web interface to manage Linux firewall using
          iptables. The idea was challenging because:
        </p>
        <ul>
          <li>The user should be able to update the firewall instantly.</li>
          <li>The user should not be able to access or change other parts of the server.</li>
        </ul>
        <p>
          After trying a couple of IPC (Inter-Process Communication) methods I come up with a
          working paradigm. I split the application into 2 parts:
        </p>
        <ul>
          <li>
            Web Interface - It works with Apache and CGI. It uses a simple UI to take user rules and
            builds a simple command-file that tells what commands should be executed by iptables.
            Once the user submitted a rule, the interface sends a signal to the backend daemon
            indicating a new rule should be executed by iptables.
          </li>
          <li>
            Backed Daemon - It was a daemon written in Perl which forks itself and waits for the web
            interface signal. Once the signal is received it reads the command-file, creates the
            proper iptables command, and executes it.
          </li>
        </ul>
      </div>
    )
  },
  {
    data: {
      title: 'Tehran Miveh',
      creationDate: '2012, Frebrary',
      tags: ['java', 'j2me', 'lwuit', 'mobile', 'sms', 'e-commerce'],
      link: null,
      linkCaption: null,
      shortDuration: 'Feb, 2012'
    },
    techIcons: [
      { title: ' Java', iconName: 'icon-java', href: 'https://www.oracle.com/java/technologies/' }
    ],
    images: [
      {
        alt: 'welcome screen of Tehran Miveh app in the lwuit theme editor',
        src: '/projects/tehran-miveh/welcome-screen-in-ui-editor.png'
      },
      {
        alt: 'updating screen of Tehran Miveh app in the lwuit theme editor',
        src: '/projects/tehran-miveh/update-screen-in-ui-editor.png'
      },
      {
        alt: 'order success screen of Tehran Miveh app',
        src: '/projects/tehran-miveh/order-success-screen.png'
      },
      {
        alt: 'localization feature used in Tehran Miveh app in the theme editor',
        src: '/projects/tehran-miveh/localization-screen.png'
      }
    ],
    description: (
      <div className="description">
        <p>
          Tehran Miveh is my first professional programming experience. It is a simple e-commerce
          application that takes fruit orders from customers and delivers the order at the door. It
          was needed to be written in java (j2me) to maximize device support.
        </p>
        <p>
          I decided to build the application using the LWUIT framework because it reduced a lot of
          complexity and provides a nice and easy theme editor for the UI. Back in those days, the
          internet was not as widely available as now, so the customer decided to use SMS
          technology. I created a custom protocol to communicate with the server using S.M.S
          technology.
        </p>
      </div>
    )
  }
]

export default projectData
