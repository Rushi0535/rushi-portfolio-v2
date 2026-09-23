export const MEDIUM_BASE = "https://rushi-prajapati.medium.com/";

// Bio pulled directly from Rushi's Medium profile, rendered as separate paragraphs.
export const blogsIntro: string[] = [
  "I'm pursuing my Master's in Data Science and Quantitative Economics at Fordham University in New York, where I also work as a Graduate Research Assistant researching bias detection in Vision-Language Models.",
  "I grew up genuinely fascinated by how machines learn things. Not the theoretical version of that fascination but the practical one where you stay up late trying to understand why your model isn't converging and you learn more in that frustrated hour than you did in a week of lectures. That curiosity is what led me to computer vision projects, to reinforcement learning research, to building platforms that let non-technical people access AI without needing an engineering degree. It's also what led me to start writing.",
  "The Simplifying Series exists because the gap between what researchers understand and what most people understand about AI is enormous and mostly unnecessary. The concepts aren't as hard as the papers make them sound. The math isn't as intimidating as the notation suggests. And the implications of these technologies for how we live and work are too important to be locked behind academic jargon that most people reasonably give up trying to parse.",
  "So that's what I do here. I take things that feel complicated and I find the version of them that actually makes sense to a curious person who isn't a specialist. Sometimes that's a deep dive into how a specific model architecture works. Sometimes it's a practical guide to building something. Sometimes it's an honest conversation about what AI can and genuinely cannot do. If you're curious about where AI is going and how it actually works under the hood, you're in the right place. Follow along and let's figure it out together.",
];

export const blogsFollowNote = 'Don\'t forget to hit the "Follow" button to stay updated with the latest articles!';

export type BlogPost = { title: string; description: string; url: string; imageUrl: string; date?: string };

// Ordered chronologically (oldest first) per verified Medium publish dates.
export const blogPosts: BlogPost[] = [
  {
    title: "Simplifying the World of Computer Vision",
    description:
      "Have you ever wondered how your smartphone recognizes faces or objects in photos? Welcome to the world of Computer Vision! In this engaging blog, I simplify key concepts such as image processing techniques and object recognition algorithms. Through relatable examples and practical applications, you'll discover how computer vision is revolutionizing technology—from security systems to self-driving cars. Join me as we explore this dynamic field that bridges technology and visual perception.",
    url: "https://rushi-prajapati.medium.com/simplifying-the-world-of-computer-vision-6fb505b8ac9b",
    imageUrl: "https://drive.google.com/file/d/1GHnZCoyhnx1hx-vzrP8x8nhZa1mkuHQD/preview",
    date: "Jun 7, 2023",
  },
  {
    title: "Insights into Generative AI",
    description:
      "Generative AI is reshaping creativity by enabling machines to produce original content—from art to music. In this blog, I dive into what generative models are all about and their implications across various domains. By examining both their creative potential and ethical challenges, I invite you to join me on a thought-provoking journey that challenges traditional notions of creativity and authorship in the age of AI.",
    url: "https://medium.com/@rushi-prajapati/insights-of-generative-ai-8638ce0b1017",
    imageUrl: "https://drive.google.com/file/d/13mc-ggHYaZBteY4Pkf5DziDcc35JbPeY/preview",
    date: "Jun 9, 2023",
  },
  {
    title: "The ABCs of Neural Networks",
    description:
      "Are you curious about how machines learn from data? In 'The ABCs of Neural Networks,' I provide an engaging introduction to the fundamental concepts that underpin this revolutionary technology. From neurons to training processes, I simplify complex ideas into relatable terms that anyone can understand. This blog serves as your gateway into the world of neural networks, paving the way for further exploration into machine learning's vast landscape.",
    url: "https://rushi-prajapati.medium.com/the-abcs-of-neural-networks-2ad111779c93",
    imageUrl: "https://drive.google.com/file/d/13GwU0fPKM26dVLeGU7-P8TTwtoF5byNv/preview",
    date: "Jun 25, 2023",
  },
  {
    title: "Demystifying the Decision Makers of Neural Networks",
    description:
      "What goes on inside a neural network when it makes decisions? In this blog, I take you behind the scenes to explore the critical components that drive neural networks' decision-making processes. By breaking down concepts like activation functions and layers into digestible parts, I aim to provide clarity on how these systems learn from data. Whether you're new to deep learning or seeking to deepen your understanding, this exploration promises valuable insights into one of AI's most intriguing aspects.",
    url: "https://medium.com/@rushi-prajapati/demystifying-the-decision-makers-of-neural-networks-dcfb536d915a",
    imageUrl: "https://drive.google.com/file/d/1Hcy4b7SRAv081JBKfJNj8GAMlT6jrOkj/preview",
    date: "Jul 14, 2023",
  },
  {
    title: "Understanding Data",
    description:
      "In today's data-driven world, understanding how to harness the power of data is crucial for success. In this blog, I delve into the significance of data quality, preprocessing techniques, and how informed decision-making can transform businesses. Through practical insights and real-world scenarios, I aim to illuminate the path to effective data management. Whether you're a business leader or an aspiring data scientist, this exploration will empower you to leverage data as your most valuable asset.",
    url: "https://medium.com/@rushi-prajapati/understanding-data-109e0d7eb795",
    imageUrl: "https://drive.google.com/file/d/1kAyKvl_jFhdehh3eN7hW9uQRNXbLRrX8/preview",
    date: "Sep 6, 2023",
  },
  {
    title: "CNN in a Nutshell",
    description:
      "What if machines could see and interpret images just like humans? Enter Convolutional Neural Networks (CNNs), the technology behind computer vision. In this blog, I simplify the complexities of CNNs, explaining how they recognize patterns and objects within images. With relatable examples and clear explanations, you'll gain an appreciation for how CNNs are revolutionizing industries—from healthcare to autonomous vehicles. Join me on this visual journey that demystifies one of the most exciting advancements in artificial intelligence.",
    url: "https://rushi-prajapati.medium.com/cnn-in-nutshell-2959bdcbb3c1",
    imageUrl: "https://drive.google.com/file/d/1BkO0sc_tNSbM3hDTMtQfJRuRarPJ3LLC/preview",
    date: "Dec 11, 2023",
  },
  {
    title:
      "Demystifying Dynamic Programming and Linear Programming from the Perspective of AI and Reinforcement Learning",
    description:
      "Have you ever wondered how AI systems make complex decisions or optimize processes in real-time? In this blog, I unravel the intricate worlds of Dynamic Programming (DP) and Linear Programming (LP), two powerful techniques that are the backbone of efficient algorithms in artificial intelligence. Join me as we explore how these methodologies not only solve optimization problems but also enhance decision-making in Reinforcement Learning. Whether you're a novice or a seasoned tech enthusiast, this journey will provide you with valuable insights into the mechanics driving intelligent systems.",
    url: "https://rushi-prajapati.medium.com/demystifying-dynamic-programming-and-linear-programming-from-the-perspective-of-ai-and-15c9d0af13ac",
    imageUrl: "https://drive.google.com/file/d/1-4Z35-hHYrsVnYHSIgsHvfdGfCYSlxhP/preview",
    date: "Jun 2, 2024",
  },
  {
    title: "Learning to Win: Reinforcement Learning Demystified",
    description:
      "Imagine teaching a computer to play a game by rewarding it for good moves and punishing it for bad ones. This is the essence of Reinforcement Learning (RL), a fascinating area of machine learning that mimics how we learn from our experiences. In this blog, I break down the core concepts of RL, making them accessible and engaging. From understanding reward systems to exploring real-world applications, this post will equip you with a solid foundation in RL, inspiring you to delve deeper into its transformative potential.",
    url: "https://rushi-prajapati.medium.com/learning-to-win-reinforcement-learning-demystified-5ac2a14a0fe8",
    imageUrl: "https://drive.google.com/file/d/18Us2XNb3_wS5YDhSHTUVln6wPDaOsRlb/preview",
    // No confirmed publish date for this one.
  },
  // TODO: no live URL could be found for these 2 posts' individual pages — linked to the base
  // Medium profile until direct URLs are verified.
  {
    title: "Simplifying the World of Machine Learning & Deep Learning",
    description:
      "Machine Learning and Deep Learning are transforming industries at an unprecedented pace—but what do they really mean? In this comprehensive blog, I break down these complex fields into understandable segments. By exploring key differences and practical applications, I aim to demystify these technologies for readers at all levels. Join me as we navigate through algorithms and use cases that showcase the incredible potential of ML and DL in shaping our future.",
    url: MEDIUM_BASE,
    imageUrl: "https://drive.google.com/file/d/1VuhCVdw7A2FVdGngpB5FZQ2Tw-d0KNwC/preview",
  },
  {
    title: "Data: The New Oil",
    description:
      "Data has become the lifeblood of innovation in our digital age—akin to oil during the industrial revolution. In this thought-provoking blog, I explore why data is often referred to as 'the new oil' and discuss its implications for businesses and society at large. From ethical considerations to success stories that highlight data's transformative power, this post invites you to rethink your relationship with data and consider its potential as a strategic asset in your endeavors.",
    url: MEDIUM_BASE,
    imageUrl: "https://drive.google.com/file/d/1Y8scpmYjxaCXLIzobrdXDHew0nVDDU_g/preview",
  },
];

export const newspaperArticle = {
  title: "AI in Education",
  publication: "Divya Bhaskar (Ahmedabad City, India Edition)",
  date: "July 18, 2024",
  intro:
    "This article explores the growing integration of artificial intelligence (AI) in the educational landscape. It highlights how AI-powered tools are being used to enhance learning experiences and improve student outcomes.",
  keyPoints: [
    "Real-time Question Answering: AI can provide immediate answers to student queries, fostering a more interactive and engaging learning environment.",
    "Skill Development and Language Learning: AI-based platforms assist in developing essential skills like grammar, writing, and communication.",
    "Personalized Learning: AI algorithms can tailor educational content to individual student needs, ensuring a more effective learning experience.",
    "Assessment and Evaluation: AI tools can automate the assessment process, providing teachers with valuable insights into student performance.",
    "Virtual Tutors and Chatbots: AI-powered virtual tutors and chatbots can offer personalized guidance and support to students.",
  ],
  toolsNote:
    "The article also mentions specific AI tools used in education, including Duolingo, Smart Sparrow, Quizlet, DreamBox, Coursera, Carnegie Learning, and Gramin. These tools demonstrate the diverse applications of AI in the classroom, from language learning to math tutoring and writing assistance.",
  conclusion:
    "Overall, the article emphasizes the potential of AI to revolutionize education by providing personalized, engaging, and effective learning experiences.",
  imageUrl: "https://drive.google.com/file/d/1hIeeyx4E3n-qyN-Qo81PXCmI8QLqa3cr/preview",
};
