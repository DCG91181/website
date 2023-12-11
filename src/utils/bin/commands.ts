// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

import DCG from "../../assets/dcg.png";

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, Welcome to ${config.name}. 

DCG91181 is a community of passionate cybersecurity enthusiasts, hackers, thinkers, and innovators based in the vibrant city of Jalandhar. We are a collective dedicated to exploring the ever-evolving realms of cybersecurity, technology, and digital innovation.

🔒 Mission:

Our mission is to cultivate a thriving ecosystem where knowledge sharing, skill enhancement, and collaboration flourish. We aim to:
- Foster a vibrant cybersecurity community in Jalandhar.
- Facilitate discussions on cutting-edge security trends, challenges, and solutions.
- Organize workshops, meetups, and events to promote learning and skill development.
- Encourage ethical hacking, responsible disclosure, and cybersecurity best practices.
 
🤝 Join Us:

 Whether you're a seasoned cybersecurity professional, a curious novice, a tech enthusiast, or anyone intrigued by the world of cybersecurity, DCG91181 welcomes you! Join our diverse community to:
  
- Engage in thought-provoking discussions on cybersecurity, privacy, and technology.
- Participate in hands-on workshops, CTFs (Capture The Flag), and hackathons.
- Network with like-minded individuals, share knowledge, and collaborate on projects.
- Stay updated on the latest industry trends, security news, and advancements.`;
};

export const events = async (args: string[]): Promise<string> => {
  return `No upcomming events! Stay tuned.`;
};

export const meetups = async (args: string[]): Promise<string> => {
  return `
📆 Monthly Meetup Schedule 📆

🌟 DEFCON Group Jalandhar Meetups

Join us every first week of the month for our engaging and informative virtual cybersecurity meetups! These gatherings are an opportunity for enthusiasts, professionals, and learners alike to come together, share insights, and dive deep into the world of cybersecurity.

📍 Location: virtual
🕒 Time: [Will be notified later]

🗓️ Upcoming Meetups:

January 2024 Meetup

📅 Date: [Will be notified later]
🔗 [Additional Details or Guest Speaker Info will be notified later]

Agenda Overview:

- Discussion Sessions: Engage in thought-provoking discussions on recent cybersecurity trends, challenges, and solutions.
- Guest Speakers: Listen to industry experts sharing insights and experiences in the cybersecurity field.
- Workshops & Activities: Participate in hands-on workshops, CTF challenges, or group activities aimed at skill enhancement.

📣 Stay Tuned for Updates:

Join our Discord server for real-time updates, RSVPs, and detailed agendas for each meetup. Don't miss out on the chance to network, learn, and grow within our vibrant cybersecurity community.

🔗 Discord Link: https://discord.gg/j3VMgyVaDt 

Mark your calendars and be part of these engaging and enriching meetups!

  `;
};

export const contact = async (args: string[]): Promise<string> => {
  return `
📧 Contact Us

Primary Point of Contact: Kartik Dixit

Primary POC Email: kartik192168@outlook.com

Secondary POC: Chaitanya Madane

Secondary POC Email: chsitumadane785@gmail.com

`;
};

export const join = async (args: string[]): Promise<string> => {
  return `
  
🛡️ Join DEFCON Group Jalandhar - DCG91181

🌐 About Us:
  
DCG91181 is a vibrant community of cybersecurity enthusiasts based in Jalandhar. 
We're dedicated to exploring the ever-evolving realms of cybersecurity, fostering learning, and collaboration.
  
🤝 Why Join Us?
  
- Engage in thought-provoking discussions on cybersecurity topics.
- Access hands-on workshops, CTF challenges, and skill-enhancing activities.
- Network with like-minded professionals and learners passionate about cybersecurity.
- Stay updated with the latest industry trends, news, and events.

🔗 How to Join:

Discord: <a href="https://discord.gg/j3VMgyVaDt">click here to join or just type discord</a> 

`;
};

export const insta = async (args: string[]): Promise<string> => {
  window.open(`https://www.instagram.com/${config.social.insta}/`);

  return 'Opening Instagram...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/${config.social.twitter}/`);

  return 'Opening Twitter...';
};

export const blogs = async (args: string[]): Promise<string> => {
  window.open(`${config.blogs_url}`);
  return 'Opening blogs...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  <div style="display: inline-flex; align-items: center;">
  <img style="margin-right: 2em;" src =${DCG.src} width="180px" />

  ██████████     █████████    █████████   ████████  ████  ████   ████████   ████ 
  ░░███░░░░███   ███░░░░░███  ███░░░░░███ ███░░░░███░░███ ░░███  ███░░░░███ ░░███ 
   ░███   ░░███ ███     ░░░  ███     ░░░ ░███   ░███ ░███  ░███ ░███   ░███  ░███ 
   ░███    ░███░███         ░███         ░░█████████ ░███  ░███ ░░████████   ░███ 
   ░███    ░███░███         ░███    █████ ░░░░░░░███ ░███  ░███  ███░░░░███  ░███ 
   ░███    ███ ░░███     ███░░███  ░░███  ███   ░███ ░███  ░███ ░███   ░███  ░███ 
   ██████████   ░░█████████  ░░█████████ ░░████████  █████ █████░░████████   █████
  ░░░░░░░░░░     ░░░░░░░░░    ░░░░░░░░░   ░░░░░░░░  ░░░░░ ░░░░░  ░░░░░░░░   ░░░░░ 
</div>
<br>
Type 'sumfetch' to display summary.
Type 'events' to view all events.
Type 'meetups' to display meetup calendar.
Type 'blogs' to read latest blogs.
Type 'about' to know more about us.
Type 'contact' to view contact details.
Type 'join' to connect with us. 

Type 'help' to see all available commands.
Type 'linkedin', 'twitter' or 'insta' to follow us on these social handles.
`;
};
