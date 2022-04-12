import { subHours, subDays } from 'date-fns';
import type { Mail, Tag } from 'src/models/mailbox';
import { copy } from 'src/utils/copy';

const tags: Tag[] = [
  {
    id: 'inbox',
    type: 'category_tag',
    name: 'Inbox',
    unreadMails: 7
  },
  {
    id: 'outbox',
    type: 'category_tag',
    name: 'Outbox',
    unreadMails: 1
  },
  {
    id: 'favourites',
    type: 'category_tag',
    name: 'Favourites',
    unreadMails: 0
  },
  {
    id: 'drafts',
    type: 'category_tag',
    name: 'Drafts',
    unreadMails: 0
  },
  {
    id: 'deleted',
    type: 'category_tag',
    name: 'Deleted',
    unreadMails: 1
  },
  {
    id: 'important',
    type: 'label_tag',
    name: 'Important',
    unreadMails: 4,
    color: '#57CA22'
  },
  {
    id: 'work',
    type: 'label_tag',
    name: 'Work',
    unreadMails: 3,
    color: '#FFA319'
  },
  {
    id: 'tasks',
    type: 'label_tag',
    name: 'Tasks',
    unreadMails: 1,
    color: '#33C2FF'
  },
  {
    id: 'business',
    type: 'label_tag',
    name: 'Business',
    unreadMails: 2,
    color: '#FF1943'
  }
];

const mails: Mail[] = [
  {
    id: '1',
    category: 'inbox',
    opened: false,
    tagIds: ['important'],
    subject: 'The PIN you requested for Google My Business is on the way',
    summary: "I know we haven't spoken in a while, so I just wanted",
    content: `

    <p>Hey Michele,</p>

    <p>I know we haven't spoken in a while, so I just wanted to touch base. As always, I'm here as a resource for you, so just let me know if you have any questions about new features, best practices, or anything in between!</p>
    
    <p>As soon as you run into a question or concern, please let me know by mail or you can call 00 77 44 44 44 44.</p>
    
    <p>If you're having a great experience with Google so far, would you be interested in referring us to your network?</p>
    
    <p>Kindly,</p>
    <p>Veer</p>
    `,
    to: [
      {
        name: 'Michele Rodrigues',
        email: 'michele.r@example.com',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    from: {
      name: 'Veer Moody',
      email: 'veer@example.com',
      avatar: '/static/images/avatars/2.jpg'
    },
    date: subHours(new Date(), 20).getTime()
  },
  {
    id: '2',
    category: 'inbox',
    opened: false,
    tagIds: [],
    subject: 'The easier way to create great images + 30% off all products',
    summary:
      'John here with Google Inc. You’ve been using our services for awhile,',
    content: `
    <p>Hey Veer,</p>

    <p>John here with Google Inc. You’ve been using our services for awhile, so I wanted to check in to see how things are going</p>
    
    <p>So, what questions can I answer? What features can I demo? What issues can I solve?</p>
    
    <p>I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between 10:00 - 11:30? If not then, let me know what works best for you.</p>
    
    <p>Best,</p>
    <p>John</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Kianna Keeling',
      email: 'kia@example.com',
      avatar: '/static/images/avatars/5.jpg'
    },
    date: subDays(new Date(), 1).getTime()
  },
  {
    id: '3',
    category: 'inbox',
    opened: true,
    tagIds: ['tasks', 'business'],
    subject: 'Powerful creator tools for independent publishing',
    summary:
      'We wanted to call your attention to our new panel we released over night',
    content: `
    <p>Hey Kianna,</p>

    <p>We wanted to call your attention to our new panel we released over night. Using this new feature, you’ll be able to view better analytics.</p>
    
    <p>If you have any questions about the best ways to use panel, please feel free to give us a call at 00 77 44 44 44 44.</p>
    
    <p>Best,</p>
    <p>Drew</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    from: {
      name: 'Eileen Morgan',
      email: 'eileen@morgan.com',
      avatar: '/static/images/avatars/4.jpg'
    },
    date: subDays(new Date(), 2).getTime()
  },
  {
    id: '4',
    category: 'inbox',
    opened: false,
    tagIds: ['work'],
    subject: 'Answered: your most burning questions about Software',
    summary: 'It was great meeting you the other day at Apple Conference 2022',
    content: `

    <p>Hi Drew,</p>

    <p>It was great meeting you the other day at Apple Conference 2022.</p>
    
    <p>I'd love to keep in touch and bounce some ideas around with you. Let's get coffee or lunch sometime soon. I'll follow up with you next week to see what’s possible.</p>
    
    <p>Look forward to connecting again soon.</p>
    
    <p>Cheers,</p>
    <p>Ferne</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/4.jpg'
      }
    ],
    from: {
      name: 'Ferne Berry',
      email: 'ferne.s@example.com',
      avatar: '/static/images/avatars/1.jpg'
    },
    date: subDays(new Date(), 3).getTime()
  },
  {
    id: '5',
    category: 'inbox',
    opened: true,
    tagIds: ['important'],
    subject: "15 things you didn't know about Web Development",
    summary:
      'It was great meeting you the other day at Goolge Corporate Event.',
    content: `
    <p>Hi Mr. Hawes,</p>

    <p>It was great meeting you the other day at Goolge Corporate Event.</p>
    
    <p>I'd love to keep in touch and bounce some ideas around with you. Let's get coffee or lunch sometime soon. I'll follow up with you next week to see what’s possible.</p>
    
    <p>Look forward to connecting again soon.</p>
    
    <p>Cheers,</p>
    <p>Ryley Hardin</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/5.jpg'
      }
    ],
    from: {
      name: 'Ryley Hardin',
      email: 'ryleyhar.2@example.com',
      avatar: '/static/images/avatars/3.jpg'
    },
    date: subDays(new Date(), 4).getTime()
  },
  {
    id: '6',
    category: 'inbox',
    opened: false,
    tagIds: ['important'],
    subject: '9 Marketing lessons from Bob Ross',
    summary: 'Are you available on Monday between 9:00 AM - 10:15 AM?',
    content: `
    <p>I hope you're doing well. I was hoping we could hop on the phone soon to get a better idea of what you're interested and what I can do to help.</p>
    
    <p>Are you available on Monday between 9:00 AM - 10:15 AM? Please let me know if there's a more convenient time. Also, is 00 77 44 44 44 44 still your preferred number?</p>
    
    <p>Looking forward to connecting soon,</p>
    <p>Edison</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/1.jpg'
      }
    ],
    from: {
      name: 'Edison Finnegan',
      email: 'edisonss1@example.com',
      avatar: '/static/images/avatars/2.jpg'
    },
    date: subDays(new Date(), 4).getTime()
  },
  {
    id: '7',
    category: 'inbox',
    opened: false,
    tagIds: [],
    subject:
      "If you've already tried Marketing, don't read this. It'll break your heart",
    summary: 'So tell me — what’s been going well for you and your business',
    content: `

    <p>Hello,</p>

    <p>I just wanted you to know that I genuinely enjoyed getting to meet you, albeit briefly. Instead of just sending you information on me, I’d love to know some more about you! I value each of my new relationships highly, and don’t want to send you "blanket" information.</p>
    
    <p>So tell me — what’s been going well for you and your business lately? What challenges are you encountering? I’m happy to assist in any way possible, even if it means connecting you to someone else I know who may be a better fit.</p>
    
    <p>Looking forward to connecting more in-depth.</p>
    
    <p>Cheers,</p>
    <p>Manraj Steele</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Manraj Steele',
      email: 'manraj.steele@example.com',
      avatar: '/static/images/avatars/1.jpg'
    },
    date: subDays(new Date(), 6).getTime()
  },
  {
    id: '8',
    category: 'outbox',
    opened: false,
    tagIds: ['work', 'business'],
    subject: 'The easier way to create great images + 30% off all products',
    summary:
      'John here with Google Inc. You’ve been using our services for awhile',
    content: `
    <p>Hey Veer,</p>

    <p>John here with Google Inc. You’ve been using our services for awhile, so I wanted to check in to see how things are going</p>
    
    <p>So, what questions can I answer? What features can I demo? What issues can I solve?</p>
    
    <p>I'd love to hop on a quick call to see how I can help. Are you free anytime tomorrow between 9:00 AM - 10:15 AM? If not then, let me know what works best for you.</p>
    
    <p>Best,</p>
    <p>John</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/2.jpg'
      }
    ],
    from: {
      name: 'Kianna Keeling',
      email: 'kia@example.com',
      avatar: '/static/images/avatars/5.jpg'
    },
    date: subDays(new Date(), 7).getTime()
  },
  {
    id: '9',
    category: 'deleted',
    opened: true,
    tagIds: ['important', 'work'],
    subject: 'Powerful creator tools for independent publishing',
    summary:
      'We wanted to call your attention to our new dashboard we released',
    content: `
    <p>Hey Kianna,</p>

    <p>We wanted to call your attention to our new dashboard we released over night. Using this new feature, you’ll be able to dashboard CASE.</p>
    
    <p>If you have any questions about the best ways to use dashboard, please feel free to give us a call at 00 77 44 44 44 44.</p>
    
    <p>Best,</p>
    <p>Drew</p>
    `,
    to: [
      {
        name: 'Drew Hawes',
        email: 'drew.hawes@example.com',
        avatar: '/static/images/avatars/3.jpg'
      }
    ],
    from: {
      name: 'Eileen Morgan',
      email: 'eileen@morgan.com',
      avatar: '/static/images/avatars/4.jpg'
    },
    date: new Date().getTime()
  }
];

class Mailbox {
  getTags(): Promise<Tag[]> {
    return Promise.resolve(copy(tags));
  }

  getMails({ tag }): Promise<Mail[]> {
    return new Promise((resolve, reject) => {
      try {
        let filteredMails = [];

        const labelTags = tags.reduce((ev, tag) => {
          if (tag.type === 'label_tag') {
            ev.push(tag.id);
          }

          return ev;
        }, []);

        if (labelTags.includes(tag)) {
          filteredMails = mails.filter((mail) => mail.tagIds.includes(tag));
        } else {
          switch (tag) {
            case undefined:
              filteredMails = mails.filter((mail) => mail.category === 'inbox');
              break;
            case 'deleted':
            case 'outbox':
              filteredMails = mails.filter((mail) => mail.category === tag);
              break;
            default:
              break;
          }
        }

        resolve(copy(filteredMails));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }

  getMail(mailId): Promise<Mail> {
    return new Promise((resolve, reject) => {
      try {
        const mail = mails.find((_mail) => _mail.id === mailId);

        if (!mail) {
          reject(new Error('Email not found'));
          return;
        }

        resolve(copy(mail));
      } catch (err) {
        console.error(err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const mailbox = new Mailbox();
