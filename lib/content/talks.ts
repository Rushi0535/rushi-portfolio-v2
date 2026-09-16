export const talksIntro = {
  lead: "Teaching is often regarded as the most effective way to learn.",
  quote: "Tell me and I forget, teach me and I remember, involve me and I learn.",
  attribution: "Benjamin Franklin",
  body: "This philosophy underpins the various talks and sessions I've conducted, which provided hands-on experience with cutting-edge technologies. Each event fostered an interactive learning environment, encouraging participants to engage deeply with the material. These experiences have reinforced my belief that sharing knowledge not only enhances understanding but also cultivates a community of lifelong learners dedicated to innovation and progress.",
};

export type Talk = { title: string; date: string; description: string; photoCount: number };

export const myTalks: Talk[] = [
  {
    title: "EDUTALK: CLOUD 101",
    date: "20th April, 2023",
    description:
      "I had the privilege of conducting the Edu-Talk 'Cloud 101: Get Ahead In Cloud'. The session aimed to provide attendees with a comprehensive overview of cloud computing and its significance, along with practical guidance on deploying a website using Amazon Web Services (AWS).",
    photoCount: 3,
  },
  {
    title: "GEEK OUT: CHATBOTS AND LLM IN A DAY",
    date: "7th March, 2024",
    description:
      "In Geek Out: Chatbots and LLM in a Day, this member-exclusive initiative aimed to explore the intricacies of chatbots and Large Language Models (LLMs), providing participants with a comprehensive understanding of these cutting-edge technologies.",
    photoCount: 3,
  },
  {
    title: "PARAM Shavak: ML Unleashed",
    date: "23rd March, 2024",
    description:
      "I co-hosted the event 'PARAM Shavak: ML Unleashed'. The workshop focused on machine learning model optimization and Responsible AI practices. Participants were engaged in dynamic presentations and hands-on exercises.",
    photoCount: 3,
  },
  {
    title: "EDU-TALK: Fundamentals Of Machine Learning",
    date: "4th July, 2022",
    description:
      "I conducted the Edu-Talk titled 'Fundamentals of Machine Learning', providing a comprehensive understanding of machine learning, its history, and use cases.",
    photoCount: 2,
  },
  {
    title: "IEEE SIGHT Enlightenment Drive",
    date: "8th May, 2023",
    description:
      "As Chairperson of the IEEE SIGHT SOU Student Branch Group, I delivered a talk that raised awareness about technology's transformative potential in addressing social and environmental challenges.",
    photoCount: 1,
  },
];

export type OrganisedEvent = {
  name: string;
  date: string;
  participants: number;
  type: string;
  description: string;
};

export const organisedEvents: OrganisedEvent[] = [
  {
    name: "Dare To Lead",
    date: "18-19 Jan 2023",
    participants: 42,
    type: "Professional Event",
    description:
      '"Dare to Lead" was an impactful two-day event focused on leadership and personal growth, bringing together participants for hands-on sessions on decision-making and team building.',
  },
  {
    name: "Meet And Greet '23",
    date: "21 Jan 2023",
    participants: 63,
    type: "Professional Event",
    description:
      'The "Meet and Greet \'23" was a vibrant networking event, bringing together over 60 participants to build connections across the tech community.',
  },
  {
    name: "Scaling On AWS For Millions of Users",
    date: "23 Jan 2023",
    participants: 64,
    type: "Technical Event",
    description:
      "This technical session on AWS scalability was attended by 64 participants and covered architecture patterns for handling high-traffic, high-availability systems.",
  },
  {
    name: "Book Review",
    date: "04 Feb 2023",
    participants: 20,
    type: "Non-Technical Event",
    description:
      "This intimate event with 20 participants centered around discussing literary masterpieces and their relevance to personal and professional growth.",
  },
];

export const curationPhotoCount = 5;

// TODO: add photos + captions for the Curation gallery — none exist in the source content yet.
