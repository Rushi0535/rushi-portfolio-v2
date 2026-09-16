export type Project = {
  title: string;
  description: string;
  database: string;
  language: string;
  techStack: string[];
};

// TODO: real GitHub repo links — all three of these currently point to the generic profile URL
// in the source site rather than the individual repos.
export const projects: Project[] = [
  {
    title: "AI Interactive Kiosk Machine",
    description:
      "The AI Interactive Kiosk Machine is an advanced, multi-modal AI-driven platform designed to provide seamless human-machine interaction. This project integrates three types of inputs—audio, video, and text—with corresponding outputs, creating a robust and versatile user interface. The system is equipped with cutting-edge technologies, including a face lip-sync model and a generative AI GAN model, enabling realistic and engaging interactions. Designed as an AI assistant, the kiosk can process and respond to user queries in real-time, delivering outputs in audio, video, and text formats. This innovative solution is ideal for various applications, from customer service to interactive information centers.",
    database: "ChromaDB",
    language: "Python 3.9",
    techStack: [
      "Google Generative AI",
      "Ollama",
      "ChatGroq",
      "SpeechRecognition",
      "D-ID Face API",
      "FAISS",
      "LangChain RecursiveCharacterTextSplitter",
    ],
  },
  {
    title: "Document Summarizer and Analyzer",
    description:
      "This project is a sophisticated document summarizer and analyzer specifically designed for comparing and analyzing bills of lading. The system efficiently processes two distinct bills of lading, identifies and highlights the key differences between them, and generates a concise summary. Additionally, it automates communication by crafting and sending a detailed email to the client, outlining the identified discrepancies. This tool streamlines document comparison and ensures accurate and timely reporting, making it invaluable for logistics, shipping, and related industries.",
    database: "ChromaDB",
    language: "Python 3.9",
    techStack: ["Ollama", "Langchain", "Streamlit"],
  },
  {
    title: "Behavioral Analysis in School",
    description:
      "This project leverages advanced technologies and algorithms to conduct comprehensive behavioral analysis within a classroom setting. The system utilizes computer vision and machine learning techniques to assess and categorize student behaviors, such as emotional states (e.g., happiness, neutrality), gender distribution, and physical actions (e.g., hand-raising, sitting, standing). By providing real-time insights into classroom dynamics, this solution enables educators to better understand and respond to student engagement and participation levels.",
    database: "MongoDB",
    language: "Python 3.9",
    techStack: ["CNN", "Object Detection", "YOLO", "DLIB", "FFMPEG", "Face Recognition", "OpenCV", "PyTorch"],
  },
];

// TODO: missing the RagMetrics GTM work and the Fordham VLM bias research project as showcased
// projects. Will be added in the content-refresh pass since those are current, high-value work.
