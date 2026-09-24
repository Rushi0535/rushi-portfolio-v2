export type ProfileLine = { text: string; linkText?: string; href?: string };

export const profileTagline =
  "An avid learner, researcher, and community builder with a profound passion for Artificial Intelligence, dedicated to leveraging technology to tackle real-world challenges. Committed to sharing knowledge and fostering collaboration through talks and blogs within the community.";

export const profileLines: ProfileLine[] = [
  {
    text: "Graduate Student, MS in Data Science and Quantitative Economics @ ",
    linkText: "Fordham University",
    href: "https://www.fordham.edu/",
  },
  { text: "Graduate Assistantship Recipient @ ", linkText: "Fordham University", href: "https://www.fordham.edu/" },
  {
    text: "Community Outreach Manager @ ",
    linkText: "Google Developer Group, NYC",
    href: "https://gdg.community.dev/gdg-nyc/",
  },
  {
    text: "Technical Product Intern @ ",
    linkText: "Organic Intelligence Group LLC",
    href: "https://oi-group-llc.com/",
  },
  { text: "AI-ML | Data Analytics | Computer Vision | NLP | Reinforcement Learning" },
];

// ---------------------------------------------------------------------------
// Education
// ---------------------------------------------------------------------------

export type EducationEntry = {
  degree: string;
  institution: string;
  institutionUrl: string;
  location: string;
  dateRange: string;
  status?: string;
  cgpa?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    degree: "Master of Science in Data Science and Quantitative Economics",
    institution: "Fordham University",
    institutionUrl: "https://www.fordham.edu/",
    location: "New York City, United States",
    dateRange: "August 2025 – May 2027",
    status: "Graduate Assistantship Recipient - Working on Research Project",
  },
  {
    degree:
      "Bachelor of Technology in Computer Engineering with Specialization in Artificial Intelligence and Machine Learning",
    institution: "Silver Oak University",
    institutionUrl: "https://silveroakuni.ac.in/",
    location: "Ahmedabad, India",
    dateRange: "August 2020 – August 2024",
    cgpa: "9.87/10",
  },
];

export const educationCoursework = [
  "Natural Language Processing",
  "Machine Learning",
  "Artificial Intelligence",
  "Deep Learning and Reinforcement Learning",
  "Computer Vision",
  "Data Structures & Algorithms",
  "Computer Networks",
  "Cloud Computing",
  "Software Engineering",
  "Object-Oriented Programming",
  "Python Programming",
];

export const educationAchievements = [
  "Ranked 22nd out of 1,213 students in the Bachelor of Technology program.",
  "Achieved 3rd position out of 44 students in the specialization batch of Artificial Intelligence and Machine Learning.",
];

export const testimonialVideoUrl = "https://drive.google.com/file/d/1AV36leorZh_B2ZsFhPMXFx-E7n6csTfo/preview";

// ---------------------------------------------------------------------------
// Professional Experience
// ---------------------------------------------------------------------------

export type ExperienceEntry = {
  role: string;
  organization: string;
  organizationUrl?: string;
  dateRange: string;
  location: string;
  description?: string;
  bullets: string[];
  documentLabel?: string;
  documentUrl?: string;
};

// TODO: missing the current Fordham Graduate Research Assistant role. Will be corrected once
// the LinkedIn export is provided. Entries are structured as an array so new roles are a
// one-line addition.
export const professionalExperience: ExperienceEntry[] = [
  {
    role: "Community Outreach Manager",
    organization: "Google Developer Group (GDG NYC)",
    organizationUrl: "https://gdg.community.dev/gdg-nyc/",
    dateRange: "Dec 2025 – Present",
    location: "New York, United States · On-site",
    description:
      "Volunteering position. Responsible for content planning, publishing, and audience outreach. Additionally involved in producing and shooting podcasts, conducting interviews with Googlers and other professionals from leading tech companies, managing the creator studio, and supporting the execution and coordination of community events. Actively involved in curating events, serving as an MC, delivering orations, and supporting the execution and coordination of community and tech events. Managing end-to-end social media and content operations across platforms including Instagram, YouTube, Twitter (X), and LinkedIn.",
    bullets: [],
  },
  {
    role: "Technical Product Intern",
    organization: "Organic Intelligence Group LLC",
    organizationUrl: "https://oi-group-llc.com/",
    dateRange: "Sep 2026 – Present · 1 mo",
    location: "Minneapolis, Minnesota, United States · Remote",
    description:
      "Selected as a Fellow in the LifePath OI Fellowship at Organic Intelligence Group LLC, an early-stage deterministic AI governance company, working directly with the founder on product development, product strategy and go-to-market content.",
    bullets: [
      "Developed the narrative architecture and full video scripts for the company's product explainer series, tailored separately for executive, technical, and compliance audiences",
      "Translated a 12-layer deterministic decision framework and its core kernel technology into clear, audience-specific storytelling for investor and enterprise stakeholders",
      "Built a lean production pipeline and budget for AI-generated video content (HeyGen, CapCut), enabling rapid creation of multiple go-to-market assets",
      "Supported early-stage product positioning at the intersection of AI governance, regulatory compliance (EU AI Act, HIPAA, SOC 2, ISO 27001), and enterprise sales enablement",
    ],
  },
  {
    role: "AI Associate (Intern)",
    organization: "RagMetrics",
    organizationUrl: "https://ragmetrics.ai/",
    dateRange: "May 2026 – Aug 2026 · 4 mos",
    location: "Miami, Florida, United States · Hybrid",
    bullets: [
      "Technical PM — working directly with the founding team on product roadmap and evaluation criteria",
      "GTM Specialist — building verticalized outreach campaigns for finance, healthcare, and insurance",
      "Fundraising support — helping source investor meetings as the company raises its next round",
      "Client Management — sitting in on enterprise client calls, learning to close and deliver the product as per the client's needs",
    ],
  },
  {
    role: "AI Technology – Delivery & Support Engineer",
    organization: "Sahana System Limited",
    dateRange: "June 2024 – June 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Techno-Commercial Tasks: Handled RFP analysis, technical proposal drafting, documentation for tenders, system architecture and workflow design, model benchmarking of AI for on-prem hardware recommendations for AI deployment and maintaining strong client engagement.",
      "Multimodal Interactive Assistant Development: Engaged in creating interactive assistants utilizing Text-to-Speech (TTS) and Speech-to-Text (STT) engines, along with face-lip-sync models based on Generative Adversarial Networks (GANs).",
      "Project Management: Responsible for preparing professional project proposals, designing intricate system architectures, and cultivating productive client relationships.",
      "NLP Solutions: Developing document comparison and summarization tools using advanced Natural Language Processing (NLP) frameworks.",
    ],
    documentLabel: "View Experience Letter",
    documentUrl: "https://drive.google.com/file/d/1YZuKRfTKvHH10dewWhK8yWVAwAfnwyxC/view?usp=drive_link",
  },
  {
    role: "AI Technology – Delivery & Support Intern",
    organization: "Sahana System Limited",
    dateRange: "December 2023 – May 2024",
    location: "Ahmedabad, India",
    bullets: [
      "Object Detection & Tracking Models: Developed various models for object detection and tracking, leveraging Convolutional Neural Network (CNN) architectures and pretrained models to align with business logic and downstream applications.",
      "Chatbot Development: Built a Retrieval-Augmented Generation (RAG) based offline chatbot using the LangChain framework and various open-source Large Language Models (LLMs), resulting in a 25% improvement in response accuracy and a 30% reduction in hallucinations.",
    ],
    documentLabel: "View Completion Certificate",
    documentUrl: "https://drive.google.com/file/d/1CysEhrMjiITV_dP89xoStWb4k3M3ddk6/view?usp=sharing",
  },
  {
    role: "Visiting Lecturer",
    organization: "Softvan Pvt Ltd & Silver Oak University",
    dateRange: "Part-Time | One Academic Semester 2025",
    location: "Ahmedabad, India",
    bullets: [
      "Taught an advanced course on deep learning to the specialization batch, focusing on both the theoretical and practical sides of the subject.",
      "Covered major neural network architectures such as Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), Generative Adversarial Networks (GANs), and Autoencoders.",
      "Explored key areas in Computer Vision, including image classification, object detection, and feature extraction, connecting concepts to real-world applications.",
      "Introduced foundational and applied concepts in Natural Language Processing (NLP), such as embeddings and sequence modeling.",
      "Encouraged curiosity, discussion, and independent thinking, helping students build both confidence and creativity in deep learning.",
    ],
    documentLabel: "View Experience Letter",
    documentUrl: "https://drive.google.com/file/d/14LISY4SyHPVse_gg1ScPKLUvnMqDwH-j/view?usp=sharing",
  },
  {
    role: "Teaching Assistant – ML Course",
    organization: "Silver Oak University",
    dateRange: "April 2023 – April 2024",
    location: "Ahmedabad, India",
    bullets: [
      "Assisted in lectures, labs, and tutorials for AI/ML courses under faculty supervision. Supported academic delivery, technical instruction, assignment evaluation, and student mentoring.",
      "Contributed to curriculum execution and enhanced peer learning outcomes in core subjects.",
    ],
    documentLabel: "View Teaching Assistant Letter",
    documentUrl: "https://drive.google.com/file/d/1NSMPmyzriXf6U-FAVGHViDxG-RrBAM2Z/view",
  },
  {
    role: "Lab Assistant & Maintainer",
    organization: "Silver Oak University",
    dateRange: "On-Campus Volunteering | Jan 2023 – Nov 2023",
    location: "Ahmedabad, India",
    bullets: [
      "Provided Level 1 and Level 2 support at the Apple Lab and PARAM Shavak Supercomputer Facility. Assisted with events and lectures by setting up AV equipment, projectors, and troubleshooting internet/hardware issues across Windows, macOS, Ubuntu, and CentOS environments.",
      "Delivered live technical workshops and handled Q&A support on-site. Conducted regular inventory checks and scheduled room/equipment availability.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Position Of Responsibility
// ---------------------------------------------------------------------------

export type RoleEntry = { role: string; organization: string; dateRange: string; description: string };

// NOTE: current Community Outreach Manager, GDG NYC role is captured in Professional
// Experience above, not duplicated here.
export const positionsOfResponsibility: RoleEntry[] = [
  {
    role: "Advisory Board Member",
    organization: "IEEE SOU Student Branch",
    dateRange: "Jan 2024 – Present",
    description:
      "As an Advisory Board Member at IEEE SOU SB, I guide the student leadership team in planning and executing technical, professional, and community initiatives. I mentor members on research and innovation, help strengthen industry–academia collaborations, and ensure activities align with IEEE's global standards. My focus is on fostering technical excellence, leadership growth, and long-term sustainability of the branch.",
  },
  {
    role: "Chairperson",
    organization: "IEEE Special Interest Group for Humanitarian Technology (SIGHT) SOU Student Branch Group",
    dateRange: "Jan 2023 – Jan 2024",
    description:
      "Leading an organization dedicated to bridging the technology gap for underserved communities requires both compassion and strategic vision. As Chairperson, I spearheaded initiatives that directly impacted over 500 individuals in rural areas. This included organizing cybersecurity awareness campaigns, highlighting cyber fraud risks and empowering locals with essential knowledge. My leadership wasn't limited to awareness programs. My team, under my guidance, actively explored and implemented technological solutions for the benefit of these communities. This experience honed my ability to identify social needs, translate them into actionable plans, and motivate a team to achieve tangible results.",
  },
  {
    role: "Section Representative",
    organization: "IEEE SIGHT Gujarat Section",
    dateRange: "Jan 2023 – Jan 2024",
    description:
      "Leading at a regional level demanded a broader perspective and strategic planning. As Section Representative for IEEE SIGHT Gujarat Section, I played a pivotal role in cybersecurity awareness campaigns across the state. My responsibilities included collaborating with various chapters, coordinating resources, and ensuring the successful execution of these programs. This role fostered my ability to think strategically, manage diverse stakeholders, and orchestrate complex initiatives across a larger geographical area.",
  },
  {
    role: "Vice-Chairperson",
    organization: "IEEE Women in Engineering (WIE) Affinity Group",
    dateRange: "Jan 2023 – Jan 2024",
    description:
      "Promoting diversity and inclusion in STEM fields is a personal passion. As Vice-Chairperson of the IEEE WIE Affinity Group, I actively championed the cause of women in engineering. My role involved creating a supportive environment for female engineers through workshops, mentorship programs, and networking events. Witnessing the growth and confidence of my peers under these initiatives was truly rewarding. This leadership experience instilled in me the importance of fostering an inclusive environment and empowering others to reach their full potential. Additionally, it sharpened my communication and interpersonal skills, allowing me to effectively connect with a diverse group of individuals.",
  },
  {
    role: "Founder & Lead",
    organization: "IEEE Silver Oak University ML Geeks Club",
    dateRange: "Jan 2023 – Jan 2024",
    description:
      "Building a thriving community of like-minded individuals requires a unique blend of leadership and mentorship. As Founder & Lead of the IEEE Silver Oak University ML Geeks Club, I created a platform for over 120 peers to explore the exciting world of machine learning. My responsibilities encompassed curating content, organizing workshops, and providing mentorship. Witnessing the enthusiasm and growth of my fellow students reaffirmed my passion for knowledge sharing and inspiring others. This experience bolstered my communication and organizational skills, allowing me to effectively lead and guide a growing team.",
  },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

export type SkillCategory = { title: string; items: string[] };

// TODO: skills list is CV/2022-era heavy and missing LLM/RAG/agent-engineering skills despite
// the RUSHIverse chatbot itself being proof of that skill. Will be revised in the
// content-refresh pass.
export const technicalSkillCategories: SkillCategory[] = [
  { title: "Programming Languages", items: ["Python 3.6+"] },
  {
    title: "Python Libraries",
    items: [
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "scikit-image",
      "Detectron2",
      "NLTK",
      "spaCy",
      "Transformers",
      "Gensim",
      "DALL-E",
      "StyleGAN",
      "DeepFaceLab",
      "Keras",
      "Librosa",
      "SpeechRecognition",
      "gTTS",
      "Pydub",
      "Scapy",
      "Requests",
      "Flask",
    ],
  },
  { title: "AI Frameworks", items: ["TensorFlow", "PyTorch", "Keras", "MXNet", "Caffe", "Theano"] },
  {
    title: "AI Algorithms",
    items: [
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "Long Short-Term Memory (LSTM)",
      "Generative Adversarial Networks (GANs)",
      "Variational Autoencoders (VAEs)",
      "Transformer Models",
      "BERT",
      "GPT",
      "Object Detection Algorithms (YOLO, SSD, Faster R-CNN)",
      "Image Segmentation Algorithms",
      "Face Recognition Algorithms",
      "Pose Estimation Algorithms",
      "Similarity Search Algorithms",
      "Reinforcement Learning Algorithms",
    ],
  },
  { title: "Operating Systems", items: ["Windows", "Ubuntu", "MacOS", "CentOS"] },
  {
    title: "Computer Vision Techniques",
    items: [
      "Object Detection",
      "Object Recognition",
      "Image Segmentation",
      "Feature Extraction",
      "Image Enhancement",
      "Image Transformation",
      "Image Filtering",
      "Fourier Transforms",
      "Wavelet Transforms",
      "Image Compression",
      "Color Vision",
      "Pose Estimation",
      "Visual Recognition",
      "Multi-Object Tracking",
      "Facial Recognition",
      "Face Lipsync Processing",
    ],
  },
  { title: "Web Tools", items: ["Flask", "Streamlit", "Roboflow", "Docker"] },
  {
    title: "Deep Learning",
    items: [
      "CNNs",
      "RNNs",
      "LSTM Networks",
      "GANs",
      "VAEs",
      "Transformers",
      "Attention Mechanisms",
      "Transfer Learning",
      "Reinforcement Learning",
      "Autoencoders",
      "Siamese Networks",
      "Neural Style Transfer",
    ],
  },
  { title: "IDEs", items: ["Visual Studio Code", "PyCharm"] },
  { title: "Python Server", items: ["WSGI", "Nginx"] },
  { title: "Databases", items: ["MySQL", "FAISS", "Pinecone", "ChromaDB", "MongoDb"] },
];

export const nonTechnicalSkills = [
  "Cross Functional Team Leading, Building and Working",
  "Event & Budget Management",
  "Outreach and Sponsorship Acquisition",
  "Public Speaking & Anchoring",
  "Problem Solving & Strategy Formulations",
  "Professional and Technical Content Writing",
  "Adaptability & Time Management",
  "Market Research & Business Development",
  "Market Basket Analysis & Data Storytelling",
];

export type LanguageSkill = { language: string; proficiency: string };

export const languageSkills: LanguageSkill[] = [
  { language: "English", proficiency: "Intermediate" },
  { language: "Hindi", proficiency: "Fluent" },
  { language: "Gujarati", proficiency: "Fluent" },
];

// ---------------------------------------------------------------------------
// Research Experience
// ---------------------------------------------------------------------------

export type ResearchEntry = {
  type: string;
  title: string;
  publication: string;
  releaseDate: string;
  context?: string;
  link: string;
  abstract: string;
};

// TODO: missing the current Fordham GA research project — physical appearance bias in
// Vision-Language Models. Will be added in the content-refresh pass.
export const researchExperience: ResearchEntry[] = [
  {
    type: "Chapter Contribution",
    title: "Reinforcement Learning-Based Data Dissemination",
    publication: "Springer",
    releaseDate: "June 9, 2025",
    context: "Featured in the book Deep Learning Based Solutions for Vehicular Ad-hoc Networks.",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-5190-0_9",
    abstract:
      "Data dissemination in Vehicular Ad Hoc Networks (VANETs) is vital for the development and operation of intelligent transportation systems, as it enables the rapid and reliable exchange of critical information among vehicles and infrastructure. However, the dynamic nature of VANETs, characterised by high node mobility and frequently changing network topologies, poses significant challenges for conventional routing protocols. The major challenges of traditional routing protocols struggle with scalability, Quality of Service (QoS), and efficient data dissemination. Machine learning (ML) based traditional routing algorithms that typically rely on predefined datasets for training and can struggle to adapt to the dynamic and unpredictable nature of VANET environments. In contrast, reinforcement learning (RL) excels by learning from interactions with the environment in real-time. RL-based routing algorithms can adaptively optimize routing decisions based on the constantly changing network conditions, such as vehicle density, mobility patterns, and communication link quality. This chapter explores the potential of Reinforcement Learning (RL) to address these challenges by enabling adaptive routing protocols that dynamically adjust to network conditions. We provide a comprehensive overview of the fundamentals of RL and examine how these concepts can be applied to develop RL-based routing strategies in VANETs. Through detailed analysis and discussion, the chapter demonstrates the ability of RL to enhance the scalability, QoS, and overall performance of data dissemination in VANETs, paving the way for more robust and efficient vehicular communications in future ITS deployments.",
  },
  {
    type: "Research Paper",
    title: "Enhancing Image Understanding in Automatic Captioning",
    publication: "Procedia Computer Science, Elsevier",
    releaseDate: "May 10, 2025",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050925015613",
    abstract:
      "Automatic captioning of images (ACI) is a sophisticated methodology combining image analysis and text generation, with the attention mechanism playing a critical role in identifying key image elements for elaboration. While transformer-based architectures have proven effective in text analysis and translation, their application to image captioning has been challenged by the structural disparity between image semantics typically identified by object detection models and sentence words. To bridge this gap, we introduce the Image Transformer, a novel model featuring a reformed encoding transformer tailored for spatial relationships among image regions and an implicit decoding transformer. This adaptation significantly enhances the standard transformer architecture, making it more suitable for image structures. Our model sets new state-of-the-art performance benchmarks on both online and offline MS COCO dataset testing platforms by utilizing regional features as inputs, representing a substantial advancement in ACI. Experimental results show that our spatially-aware transformer architecture achieved a BLEU-4 score of 38.4, a CIDEr score of 128.4, and a METEOR score of 27 on the MS COCO dataset, outperforming baseline methods significantly. Additionally, the model demonstrated robust performance with a 4.2% accuracy increase on the ImageNet dataset, validating its effectiveness across diverse scenarios. Its robust performance across diverse scenarios demonstrates its potential for broad application and substantial advancements in automatic image captioning.",
  },
];

// ---------------------------------------------------------------------------
// Volunteership
// ---------------------------------------------------------------------------

export const volunteershipIntro =
  "As a dedicated GDG NYC volunteer, I have been deeply involved in organizing, managing, and enhancing large-scale tech events in New York City. My role has extended across various functions including event coordination, speaker management, audience engagement, and content creation. I actively worked with event organizers and content teams, driving seamless event execution and digital storytelling to amplify GDG's mission of promoting innovation, inclusivity, and collaboration in the tech community.";

export type GdgEvent = { title: string; date: string; context: string; bullets: string[]; videos: string[] };

export const gdgEvents: GdgEvent[] = [
  {
    title: "Peace by Design: AI & Tech @ZeroSpace Brooklyn",
    date: "September 15th, 2025",
    context: "In partnership with the United Nations",
    bullets: [
      "Participated in planning, communication, and logistics for this large-scale event celebrating the UN's 80th anniversary.",
      "Hosted interactive AI activities, including trivia and community quiz sessions, to energize attendees and spark conversation.",
      "Facilitated open community discussions about ongoing AI projects and collaboration opportunities.",
      "Served as a Speaker Buddy, helping presenters with setup, transitions, coordination, and communication between teams.",
    ],
    videos: ["https://drive.google.com/file/d/11OqSgH5L-GrB-y6NyOkRqPXLvtvN5K_3/preview"],
  },
  {
    title: "DevFest NYC 2025 @Google St. John's Terminal Campus",
    date: "October 3rd, 2025",
    context: "Flagship multi-track developer conference",
    bullets: [
      "Supported multi-track operations including speaker flow, scheduling, and track coordination.",
      "Served as Master of Ceremonies (MC) for the Pitch Pine Track, hosting 30+ sessions across 4 tracks.",
      "Engaged with speakers from companies such as Google, NVIDIA, J.P. Morgan, Stack Overflow, and DeepL.",
      "Managed stage operations, session timings, announcements, and live audience engagement.",
      "Ensured smooth cross-team communication for the organizing and technical teams.",
    ],
    videos: [
      "https://drive.google.com/file/d/1G3qwRQ4HUpvUclQX3UIz-GFpBvpQjm8n/preview",
      "https://drive.google.com/file/d/1Ttgh87n39dWn72gxL-ZMseEjuIvrLArT/preview",
    ],
  },
  {
    title: "DevFest Brooklyn/Queens @Pier 57",
    date: "November 18th, 2025",
    context: "Creator Studio & Community Content Event",
    bullets: [
      "Conducted on-site creator studio sessions — interviewing speakers, product experts, and industry leaders.",
      "Led the coordination required for filming interviews and podcast-style discussions.",
      "Assisted speakers with preparation, setup, and stage guidance while ensuring smooth backstage operations.",
      "Helped produce engaging media content that captured the event's energy and human stories.",
      "Contributed to post-event storytelling and social content to amplify community impact.",
    ],
    videos: ["https://drive.google.com/file/d/1BBh-dqr7mzj00uQCc7OGXkuaNbAs4C4P/preview"],
  },
];

export type VolunteerOrg = { title: string; dateRange: string; description: string };

export const otherVolunteering: VolunteerOrg[] = [
  {
    title: "Polygon Technology — Volunteer",
    dateRange: "Nov 2022",
    description:
      "Volunteered at a Polygon/Guild roadshow in Ahmedabad, contributing to the success of Gujarat's largest web3 conference. The event hosted over 300 attendees and featured 15 speakers from across India, creating lasting memories and valuable connections within the tech community.",
  },
  {
    title: "AWS Cloud Club, Silver Oak University — Member & Volunteer",
    dateRange: "Dec 2022 – Jan 2024",
    description:
      "As an active member of the AWS Cloud Club, I regularly attended meetings and events hosted by the group. In addition to participating in these events, I volunteered my time to help organize and run AWS Cloud Club activities. This involvement provided opportunities to collaborate with like-minded individuals who share a passion for cloud computing and AWS technologies. Through these interactions, I gained insights into the latest trends and innovations in the field while sharing my own knowledge and experiences. My volunteer responsibilities included setting up event spaces, coordinating with guest speakers, and promoting AWS Cloud Club events on social media. I am committed to contributing in any way I can to help the AWS Cloud Club continue to grow and thrive.",
  },
  {
    title: "Google Developer Student Club (GDSC), Silver Oak University — Member & Volunteer",
    dateRange: "Aug 2023 – Sep 2024",
    description:
      "As a dedicated member of GDSC SOU, I actively participate in organizing and executing a wide range of tech events. This involvement has allowed me to gain valuable experience in event management, including planning, coordination, and execution. An avid learner, I continuously seek opportunities to enhance my skills and knowledge in the ever-evolving tech landscape. In addition to my contributions to GDSC SOU, I am focused on expanding my professional network by connecting with like-minded individuals in the tech industry. I believe that collaboration and networking are essential for personal and professional growth, and I remain open to exploring new opportunities and partnerships.",
  },
];

export const volunteeringSkills = [
  "Curation & Orating",
  "Event Hosting (MC)",
  "Event Management & Coordination",
  "Audience Engagement & Outreach",
  "Creative Studio & Media Production",
  "Speaker & Keynote Support",
  "Community & Social Media Collaboration",
  "Cross-Functional Team Building & Working",
  "Marketing",
  "Crowd Management",
  "Sponsorship Acquisition",
  "Budget Management",
];

// TODO: current title is Community Outreach Manager, GDG NYC — this tab still says
// "Volunteer". Will be corrected in the content-refresh pass.

// ---------------------------------------------------------------------------
// Presentations
// ---------------------------------------------------------------------------

export const presentationsIntro = {
  heading: "Where Innovation Meets Impact",
  body: "Here, you'll find a glimpse into some of my presentations, where I had the opportunity to connect with industry leaders, Officers, showcase the power of AI and delve into the future of cutting-edge technology.",
};

export type Presentation = { title: string; description: string; photos: string[] };

export const presentations: Presentation[] = [
  {
    title: "A Presentation to the Youngest IPS Officer in India: AI-Based Traffic Management System",
    description:
      "I had the privilege of presenting my AI research to DCP Safin Hasan, the youngest IPS officer in India. This meeting provided a unique opportunity to discuss the potential applications of AI in law enforcement and public & vehicle monitoring. DCP Hasan's guidance and insights were invaluable in shaping the direction of my project. His expertise and experience in the field of law enforcement provided me with a deeper understanding of the challenges faced by law enforcement agencies and the potential of AI to address them. I am deeply inspired and motivated by this interaction and am committed to continuing my research and development efforts to create innovative AI solutions that can make a positive impact on public safety. I would like to express my sincere gratitude to DCP Safin Hasan for his time, support, and guidance.",
    photos: [
      "https://drive.google.com/file/d/1bdZjTm36z7ljGJIEpA-um-hdYv9cL_ia/preview",
      "https://drive.google.com/file/d/1xUFIWI-H2sh58gLYtFEFR_6ZaSNSZxZK/preview",
      "https://drive.google.com/file/d/1-bR_3ojgBOevyq2MSu2xckcoVmsuPfwc/preview",
      "https://drive.google.com/file/d/1Z-MWr_bLPclqSYj1E1gHUpwi_JA2jU8x/preview",
      "https://drive.google.com/file/d/1AOZ4SxhqCTnNPRfkCDSGMQ1V7MS_hkU0/preview",
    ],
  },
  {
    title: "Showcasing AI for Public Safety: A Meeting with Gujarat's Director General of Police (DGP)",
    description:
      "I had the distinct honor of presenting our work in artificial intelligence to Shri Anil Kumar Pratham, the esteemed Director General of Police (DGP) of Gujarat. This meeting provided a valuable platform to discuss the transformative potential of AI and its applications in enhancing public safety and emergency response systems. My team and I had the opportunity to elaborate on how machine learning and AI can be leveraged to address critical challenges faced by law enforcement agencies. We explored various use cases, including predictive analytics, intelligent surveillance, and automated incident response. I am deeply grateful to Shri Anil Kumar Pratham, IPS Sir, for his keen interest and support in our endeavors. His encouragement and guidance have been instrumental in driving our research and development efforts towards creating innovative AI solutions that can make a positive impact on society.",
    photos: ["https://drive.google.com/file/d/1vASgeTaAwsuxy2ooOVAJn64zax0D_Nrd/preview"],
  },
  {
    title: "Connecting with Industry Leaders: A Conversation with Mike Chambers",
    description:
      "I had the privilege of engaging in a thought-provoking discussion with Mike Chambers, a seasoned AI Specialist Developer Advocate at AWS and a former AWS ML Hero. Our conversation delved into the intricacies of current AI projects and the underlying data pipelines that power them within the AWS ecosystem. Mike's expertise and insights were invaluable. His passion for technology and innovation were evident as we explored various aspects of AI and cloud computing. Beyond the technical discussions, we also had the opportunity to connect on a personal level, sharing perspectives on topics outside the realm of technology. Interacting with individuals like Mike Chambers who are deeply committed to advancing the field of AI and cloud computing is always a rewarding experience. I am grateful for the opportunity to learn from his expertise and contribute to ongoing conversations surrounding these cutting-edge technologies.",
    photos: [
      "https://drive.google.com/file/d/1ge6cidL6KgY-uAVZXG-e4A4iAGIIkgEm/preview",
      "https://drive.google.com/file/d/1nDnJY_ya45V6_5BF2ciHITLBPM5EiUoY/preview",
      "https://drive.google.com/file/d/15rEyozodNSfR6GGwnx3N3vNLfuYv5ciX/preview",
    ],
  },
];

// ---------------------------------------------------------------------------
// Journey
// ---------------------------------------------------------------------------

export type JourneyPhase = { phase: string; institution: string; focus: string; start: string; end: string };

export const journeyIntro =
  "Journey Map — A visual overview of how my passion for AI evolved — from learning foundations to contributing professionally, and now exploring advanced research in AI & Data Science.";

export const journeyPhases: JourneyPhase[] = [
  {
    phase: "Undergraduate Studies",
    institution: "Silver Oak University",
    focus: "AI/ML specialization, core projects in Computer Vision, NLP, Reinforcement Learning.",
    start: "Aug 2020",
    end: "Aug 2024",
  },
  {
    phase: "AI Engineer",
    institution: "Sahana System Limited",
    focus: "Defense-tech, Brand Ambassador & Outstanding Project Delivery Army Day 2024-25 awardee.",
    start: "Jun 2024",
    end: "Jun 2025",
  },
  {
    phase: "Graduate Studies",
    institution: "Fordham University, NYC",
    focus: "Pursuing MS in Data Science; Graduate Assistantship; exploring data preprocessing, analytics, and GenAI.",
    start: "Aug 2025",
    end: "May 2027",
  },
  {
    phase: "Community Leadership",
    institution: "GDG NYC, IEEE, ML Geeks",
    focus: "Volunteer & organizer; spreading AI education, hosting events, and mentoring young developers.",
    start: "Jan 2023",
    end: "Present",
  },
  {
    phase: "Future Vision",
    institution: "Global AI Innovation",
    focus: "Aiming to advance AGI, Brain-Computer Interfaces, and Human-AI symbiosis research.",
    start: "Jun 2027",
    end: "2030",
  },
];

export type JourneyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; items: string[] };

// TODO: dates need updating — RagMetrics internship, current GA/research role, and community
// outreach manager title are all missing here too. Will fold into the content-refresh pass.
export const journeyNarrative: JourneyBlock[] = [
  {
    type: "paragraph",
    text: "Growing up fascinated by science fiction depictions of AI like Iron Man's JARVIS, I found myself captivated by the potential of technology to solve real-world problems. This early inspiration sparked a journey of discovery that has profoundly shaped who I am today and fueled my passion for graduate study in AI-ML. Whether it was programming basic automation scripts or experimenting with AI-driven applications during my formative years, my curiosity has always been rooted in understanding the intricate logic behind complex algorithms and architectures. Nurtured by the unwavering support of my parents and mentors, as well as my profound fascination with Artificial Intelligence, pursuing a degree in Bachelors of Computer Engineering with a specialization in AI-ML emerged as the inevitable path for me.",
  },
  {
    type: "paragraph",
    text: "My undergraduate journey was a balance of theory and practicals. Disciplines like NLP, Deep Learning, Computer Vision, and Reinforcement Learning intrigued me to explore beyond the curriculum. This passion deepened my understanding of AI technologies and fueled my academic success, resulting in a 9.87 CGPA and a top 2% ranking in my department.",
  },
  {
    type: "paragraph",
    text: "As part of my academic journey, I undertook projects that rigorously tested my AI knowledge and practical skills. Focusing on AI for public safety, I developed a computer vision-based casualty detection system for public spaces, earning recognition from faculty, peers, and professionals. Encouraged by this success, I further tackled AI-driven substance abuse detection, animal and child abuse detection using advanced architectures, and a Generative AI-powered interactive kiosk machine merging TTS, STT, and GANs for lip-syncing — merging creativity with technical precision.",
  },
  {
    type: "paragraph",
    text: "I've always believed that the best way to truly understand something is to teach it, and this belief shaped much of my journey in the AI community. During my time at university, I founded ML Geeks, a club that quickly grew to over 100-120 students eager to explore data science, cloud computing, and AI-ML. Through this platform, I led workshops and talks that fostered curiosity and confidence among students. These experiences solidified my love for teaching and deepened my commitment to contributing to the AI field through education and mentorship.",
  },
  { type: "heading", text: "Professional Chapter — AI Engineer at Sahana System Limited (2024–2025)" },
  {
    type: "paragraph",
    text: "Stepping into the professional world with Sahana System Limited marked a pivotal turning point in my journey. My role uniquely combined techno-commercial responsibilities—spanning sales, presales, requirement gathering, and client representation—with deep technical involvement in AI system design and deployment. This dual exposure allowed me to appreciate how technology translates into tangible business value.",
  },
  { type: "paragraph", text: "Within this role, I:" },
  {
    type: "bullets",
    items: [
      "Designed system architectures and performed AI model benchmarking for on-prem hardware recommendations and tenders.",
      "Developed multimodal interactive assistants integrating Text-to-Speech (TTS), Speech-to-Text (STT), and GAN-based face-lip-sync models.",
      "Built NLP-powered tools for document comparison and summarization using transformer frameworks.",
      "Collaborated directly with clients and cross-functional teams to ensure seamless project delivery and technical alignment.",
    ],
  },
  {
    type: "paragraph",
    text: "My work extended beyond core engineering into defense-tech innovations, where I contributed to projects aimed at enhancing operational efficiency through AI. The most memorable milestone was being honored with the Outstanding Project Delivery Award for the Army Day Parade 2024–2025 project at Sahana's R&R event. Additionally, I was recognized as a Sahana Brand Ambassador and received an Apple Watch as a token of appreciation — a proud moment that reflected both recognition and trust.",
  },
  {
    type: "paragraph",
    text: "This experience broadened my understanding of how AI can serve critical domains like defense, fintech, and healthtech. Guided by my mentor Harshal Trivedi, I developed not only technically but also as a professional who values leadership, collaboration, and the human side of technological innovation. It reinforced my passion for building AI systems that go beyond theory — creating real-world impact at scale.",
  },
  { type: "heading", text: "Stepping outside the homeland — Graduate Studies in the USA (2025–Present)" },
  {
    type: "paragraph",
    text: "I'm done with my undergraduate studies and my role as an AI Engineer at Sahana System Limited. Right now, I'm pursuing my Master's in Data Science at Fordham University, New York City, USA. Why Data Science? My curiosity spiked in data when I was working on GenAI models and techno-commercial solutions at Sahana System Limited. \"Garbage in, garbage out\" — I realized this truth while developing models. I understood that it's essential to have a deep understanding of data preprocessing, data quality, and the techniques used to make data truly valuable. That's why I chose Data Science. Why a Master's in the USA? The United States offers great infrastructure, exceptional research capabilities, and world-class education — an environment that fuels exploration, innovation, and academic excellence.",
  },
  {
    type: "paragraph",
    text: "My long-term career goal is to leverage advanced AI techniques to mimic human cognitive skills by achieving Artificial General Intelligence (AGI), positioning myself as a leader in the AI field. My focus lies in transformative areas such as Brain-Computer Interfaces (BCI), Human-Computer Interaction (HCI), and Autonomous Systems — where I aim to create innovations that blend intelligence, empathy, and impact.",
  },
];
