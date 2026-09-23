export const talksIntro = {
  lead: "Teaching is often regarded as the most effective way to learn.",
  quote: "Tell me and I forget, teach me and I remember, involve me and I learn.",
  attribution: "Benjamin Franklin",
  body: "This philosophy underpins the various talks and sessions I've conducted, which provided hands-on experience with cutting-edge technologies. Each event fostered an interactive learning environment, encouraging participants to engage deeply with the material. These experiences have reinforced my belief that sharing knowledge not only enhances understanding but also cultivates a community of lifelong learners dedicated to innovation and progress.",
};

export type Talk = { title: string; date: string; description: string; reportUrl: string; photos: string[] };

export const myTalks: Talk[] = [
  {
    title: "EDUTALK: CLOUD 101",
    date: "20th April, 2023",
    description:
      "I had the privilege of conducting the Edu-Talk 'Cloud 101: Get Ahead In Cloud'. The session aimed to provide attendees with a comprehensive overview of cloud computing and its significance, along with practical guidance on deploying a website using Amazon Web Services (AWS).",
    reportUrl: "https://drive.google.com/file/d/1MT6urWxV8pcCFFc_jgWCycm2ke-cxS7C/view?usp=sharing",
    photos: [
      "https://drive.google.com/file/d/1DtqIFuBmHSdX97TJq3umXQeAwxbmo4u-/preview",
      "https://drive.google.com/file/d/15kTrMlJMVmKKhFKaoX-1JuckDCu2dCOR/preview",
      "https://drive.google.com/file/d/1k4IwI0-9s7L9aBAMlsPZ_HqlsSGHh2r5/preview",
    ],
  },
  {
    title: "GEEK OUT: CHATBOTS AND LLM IN A DAY",
    date: "7th March, 2024",
    description:
      "In Geek Out: Chatbots and LLM in a Day, this member-exclusive initiative aimed to explore the intricacies of chatbots and Large Language Models (LLMs), providing participants with a comprehensive understanding of these cutting-edge technologies.",
    reportUrl: "https://drive.google.com/file/d/12Pv3zuNHSBq8KdXdrOz3Ug3R4XMieKSZ/view?usp=sharing",
    photos: [
      "https://drive.google.com/file/d/1-CORgb2hladyDGT9qMb9UWbdPue6CCJF/preview",
      "https://drive.google.com/file/d/1fEFHvI4fuxvn2JoCV6kkMuIsDazq5xxQ/preview",
      "https://drive.google.com/file/d/1LW1a9CqP8WHL4-0Kj9tloVL_YxCMImuY/preview",
    ],
  },
  {
    title: "PARAM Shavak: ML Unleashed",
    date: "23rd March, 2024",
    description:
      "I co-hosted the event 'PARAM Shavak: ML Unleashed'. The workshop focused on machine learning model optimization and Responsible AI practices. Participants were engaged in dynamic presentations and hands-on exercises.",
    reportUrl: "https://drive.google.com/file/d/1VbHuLKzXcVO6mjX-FDfoh26_0bQx9cLJ/view?usp=sharing",
    photos: [
      "https://drive.google.com/file/d/1uWRktKWzb0XRwC2OTbb6HOkPmSGJATtR/preview",
      "https://drive.google.com/file/d/1BxjvZ9ysrWmaeMrt5rlSGS0hJA4ihDOA/preview",
      "https://drive.google.com/file/d/1hF7WCfcam3puCywS4w7Q6bPNglVDMbZQ/preview",
    ],
  },
  {
    title: "EDU-TALK: Fundamentals Of Machine Learning",
    date: "4th July, 2022",
    description:
      "I conducted the Edu-Talk titled 'Fundamentals of Machine Learning', providing a comprehensive understanding of machine learning, its history, and use cases.",
    reportUrl: "https://drive.google.com/file/d/1rm5ewCl8iDBWs2FQXhMGeEA3uk4oucxB/view?usp=sharing",
    photos: [
      "https://drive.google.com/file/d/1d0XCWMM6byGVkOL9HWkFY2hRkYc1dOwr/preview",
      "https://drive.google.com/file/d/1Rr9Zqh1S6pqgdrcs2STUNwjA8qeBLCfB/preview",
    ],
  },
  {
    title: "IEEE SIGHT Enlightenment Drive",
    date: "8th May, 2023",
    description:
      "As Chairperson of the IEEE SIGHT SOU Student Branch Group, I delivered a talk that raised awareness about technology's transformative potential in addressing social and environmental challenges.",
    reportUrl: "https://drive.google.com/file/d/1R_TkoxSxf52HEtqoR-WRLqwrbyLL1g9b/view?usp=sharing",
    photos: ["https://drive.google.com/file/d/1ZtySoLbRYUVd-WmKcYNyqnevuMz1rvvo/preview"],
  },
];

export type OrganisedEvent = {
  name: string;
  date: string;
  participants: number;
  type: string;
  description: string;
  reportUrl: string;
};

export const organisedEvents: OrganisedEvent[] = [
  {
    name: "Dare To Lead",
    date: "18-19 Jan 2023",
    participants: 42,
    type: "Professional Event",
    description:
      '"Dare to Lead" was an impactful two-day event focused on leadership and personal growth, bringing together participants for hands-on sessions on decision-making and team building.',
    reportUrl: "https://drive.google.com/file/d/1Ja9iLiTUbBGw0bkaN_4Hd5zrTexVLSAr/view?usp=sharing",
  },
  {
    name: "Meet And Greet '23",
    date: "21 Jan 2023",
    participants: 63,
    type: "Professional Event",
    description:
      'The "Meet and Greet \'23" was a vibrant networking event, bringing together over 60 participants to build connections across the tech community.',
    reportUrl: "https://drive.google.com/file/d/1CgH-LbVDDnU0iB2ZztRp33cRp9YfA55R/view?usp=sharing",
  },
  {
    name: "Scaling On AWS For Millions of Users",
    date: "23 Jan 2023",
    participants: 64,
    type: "Technical Event",
    description:
      "This technical session on AWS scalability was attended by 64 participants and covered architecture patterns for handling high-traffic, high-availability systems.",
    reportUrl: "https://drive.google.com/file/d/1xIvyRv6-keJ06a-6rnfkCe20dTCEvI0S/view?usp=sharing",
  },
  {
    name: "Book Review",
    date: "04 Feb 2023",
    participants: 20,
    type: "Non-Technical Event",
    description:
      "This intimate event with 20 participants centered around discussing literary masterpieces and their relevance to personal and professional growth.",
    reportUrl: "https://drive.google.com/file/d/1nxGqcagQxF02d5mF69wW5CbnugGPV6eP/view?usp=sharing",
  },
];

export const curationPhotos: string[] = [
  "https://drive.google.com/file/d/16H-nogVCdxgTy65cc257iR-nX9XzaKrC/preview",
  "https://drive.google.com/file/d/1NKjrecdyigfK1zg4WryFX7SEKFbRjANp/preview",
  "https://drive.google.com/file/d/1EMIjrHwWPUNNs-zM_VkAieGHR-8ERCEx/preview",
  "https://drive.google.com/file/d/1JvdTvsOWxaQgqj5LT8Cfa2wUr2KUm3_M/preview",
  "https://drive.google.com/file/d/1sydk64J2HyPIZXf1Sp8Sz5H0B0USK08J/preview",
];
