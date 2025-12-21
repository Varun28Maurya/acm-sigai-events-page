import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const rawEventsData = [
  {
    "_id": "6836a2b0756504075b41a9c7",
    "title": "National Level Kaggle Competition",
    "smallDescription": "Conducted on 5th April 2025, the National Level Kaggle Competition invited students from across the country to test their machine learning expertise in a competitive and practical setting. Participants tackled real-world problems such as system threat prediction using tools like Python, scikit-learn, TensorFlow, and other machine learning libraries. The event encouraged innovation, critical thinking, and application of theoretical knowledge to real datasets.",
    "image": [
      {
        "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408695/KaggleSmallImage.png",
        "fileName": "kaggle_competition.jpg"
      },
      {
        "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408694/KaggleBigImage.png",
        "fileName": "kaggle_competition_big.jpg"
      }
    ],
    "date": "5th April 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9c8",
    "title": "Local IV at TCS",
    "smallDescription": "Held on 19th March 2025, Local IV at TCS offered students an immersive experience into the world of cutting-edge technology and industrial innovation. Esteemed speakers Mr. Yogesh Rao and Mr. Vivek Parashuram Sundareswaran shared their insights on the impact of AI across industries, drawing from their own professional journeys. The session also provided valuable exposure to Tata’s vision, mission, and the TCS NQT exam. The venue itself—designed with the essence of a leading IT environment—served as a strong source of inspiration for all attendees.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408696/TCSIVSmallImage.jpg",
      "fileName": "local_iv_tcs.jpg"
    },
    "date": "19th March 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9c9",
    "title": "Mastering Research Writing: Essential Tools for Effective Presentations",
    "smallDescription": "This hands-on session held on 15th March 2025 guided participants through essential tools for crafting professional research documents and presentations. Focused on improving academic writing workflows, the event covered LaTeX for structured document preparation, Zotero for efficient reference management, and Mendeley for research organization and collaboration.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408695/ResearchPaperSmallImage.jpg",
      "fileName": "research_writing_workshop.jpg"
    },
    "date": "15th March 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9ca",
    "title": "CodeHathon2.0 - DSA Coding Competition",
    "smallDescription": "CodeHathon2.0 challenged participants with a fast-paced 1-hour DSA competition. Competitors tackled 4 algorithmic problems across varying difficulty levels — 2 easy, 1 medium, and 1 hard. The event aimed to enhance problem-solving skills, speed, and code efficiency under pressure. With an impressive turnout, the event showcased the coding talent and logical thinking of all attendees.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408695/CodeHathon20SmallImage.jpg",
      "fileName": "codehathon2_dsa_competition.jpg"
    },
    "date": "7th March 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9cb",
    "title": "Multicon Pre-Conference Workshop on Google Cloud Platform (GCP)",
    "smallDescription": "The Multicon Pre-Conference Workshop on Google Cloud Platform (GCP) brought together 272 learners to explore cloud computing. Over three days, participants gained real-world cloud skills in areas like infrastructure, security, networking, serverless computing, and database management. Special thanks to Er. Keval Gada for his practical approach to teaching GCP, and to Ms. Krithika N for her insightful, hands-on sessions.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1741794877/SmallPreConference17Feb.jpg",
      "fileName": "multicon_gcp_workshop.jpg"
    },
    "date": "17th-20th February 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9cc",
    "title": "Smart Investing & Financial Literacy!",
    "smallDescription": "The Investor Awareness Seminar, aimed at promoting financial literacy and smart investing, brought together 55 participants. The session covered investment strategies, market insights, and risk management, helping attendees make informed financial decisions and plan better for their future. Special thanks to Ms. Shweta Nema, an NISM-certified SEBI SMART Trainer, for delivering an engaging and insightful session.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1741794471/smallInvesting13Feb.jpg",
      "fileName": "investor_awareness_seminar.jpg"
    },
    "date": "13th February 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9cd",
    "title": "Empowering Young Minds with AI & ML at Gundecha School!",
    "smallDescription": "TCET ACM-SIGAI recently organized an engaging and informative AI & ML Awareness Program at Gundecha Education Academy, Kandivali, for 8th-grade students. This interactive session provided students with hands-on learning experiences, exploring the exciting world of Artificial Intelligence and Machine Learning. Through insightful discussions and practical programming exercises, the event highlighted the transformative power of AI across various industries, inspiring students to embrace the future of technology and innovation!",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1741794472/AIMLawarenessSmall.jpg",
      "fileName": "ai_ml_program_gundecha.jpg"
    },
    "date": "29th-30th January 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9ce",
    "title": "National Level Seminar – Future of AI with LLMs and LSTMs",
    "smallDescription": "The National-Level Seminar,LLM vs. LSTM: Understanding and Applying AI Models, held on January 18, 2025, was a resounding success. Organized by TCET ACM-SIGAI, the seminar explored the powerful AI models—LLMs and LSTMs. With 167 attendees, the event offered in-depth insights into these models and their industrial applications. Mr. Shanthi Kumar V led the sessions, providing practical knowledge, case studies, and hands-on activities.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1741794471/SmallLSTMVsllm18Jan.jpg",
      "fileName": "ai_seminar_llm_lstm.jpg"
    },
    "date": "18th January 2025",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9cf",
    "title": "Zephyr 2024",
    "smallDescription": "Get ready for 3 days of non-stop fun, epic games, and amazing prizes! Whether you're solving puzzles, cracking codes, or battling it out in the arena, there’s something for everyone!",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730819598/Zephyr2024.png",
      "fileName": "zephyr_2024.jpg"
    },
    "date": "3rd-5th October 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d0",
    "title": "Seminar on Prompt Engineering and RAG Technology",
    "smallDescription": "On 30th September 2024, the Department of Artificial Intelligence and Machine Learning at TCET organized an insightful seminar on 'Prompt Engineering and RAG Technology,' led by Mr. Surajkumar Singh from LTI Mindtree. The seminar aimed to introduce students to cutting-edge AI concepts and industry applications.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730825770/RAGeventimage.jpg",
      "fileName": "prompt_engineering_seminar.jpg"
    },
    "date": "30th September 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d1",
    "title": "Seminar on Cloud Computing and Microservices",
    "smallDescription": "On 25th September 2024, the Department of AI&ML at TCET organized a session on 'Deployment on Cloud Computing and Microservices,' led by Mr. Raj Gupta from Vervali Systems.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730825926/CloudComputingsmallimage.jpg",
      "fileName": "cloud_microservices_seminar.jpg"
    },
    "date": "25th September 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d2",
    "title": "Empowering Tomorrow’s Developers: Full Stack Development Seminar Recap",
    "smallDescription": "On 27th September 2024, TCET ACM SIGAI hosted an insightful session on Full Stack Development for Industry and Marketing, led by Mr. Ankur Singh, Software Engineer at Red Hat and proud alum of TCET.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730826114/FullStacksmallimage.jpg",
      "fileName": "full_stack_seminar.jpg"
    },
    "date": "27th September 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d3",
    "title": "AI Awareness Session",
    "smallDescription": "Thakur College of Engineering & Technology's AI&ML Department, in collaboration with ACM SIGAI and the Super-AI Club, hosted an AI Awareness Session at Thakur Public School. Engaging 7th and 8th graders, the event introduced young minds to AI, sparking curiosity and a passion for tech. A big thank you to Dr. Shiwani Gupta and the entire team for a successful event!",
    "image": {
      "url": "https://res.cloudinary.com/ds8oawwu2/image/upload/v1726990712/AI_S_f1jf7d.jpg",
      "fileName": "zephyr2023.jpg"
    },
    "date": "26th July 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d4",
    "title": "Mastering Personal Finance",
    "smallDescription": "TCET ACM SIGAI organized a session titled \"Maximizing Your Money: Power of Personal Finance to Achieve Your Goals on Time\" for second-year AI & ML students. Led by Mr. Harshit Samdani, a financial expert and TCET alumnus, the session covered budgeting, saving, investing, and financial planning. With 51 attendees, it received a highly positive response, equipping students with crucial financial knowledge.",
    "image": {
      "url": "https://res.cloudinary.com/ds8oawwu2/image/upload/v1726990712/FIN_S_zfzoqm.jpg",
      "fileName": "personalFinance.jpg"
    },
    "date": "9th August 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d5",
    "title": "Industrial Visit",
    "smallDescription": "TCET ACM SIGAI organized a Local Industrial Visit to Veravali Systems Pvt. Ltd. for second-year AI&ML students, offering a firsthand look at industry practices in AI and ML. The visit featured interactive presentations, Q&A sessions, and networking opportunities, providing students with practical insights into real-world applications.",
    "image": {
      "url": "https://res.cloudinary.com/ds8oawwu2/image/upload/v1726992352/IV_S_goe3tt.jpg",
      "fileName": "llmModels.jpg"
    },
    "date": "10th August 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d6",
    "title": "Exploring the Future with LLMs",
    "smallDescription": "CET ACM-SIGAI hosted an insightful seminar titled \"How the World is Changing Because of LLMs?\" on 31st August 2024, featuring Mr. Sumit Gupta, Sr. Business Intelligence Engineer at Notion and TCET alumnus. The session explored how Large Language Models (LLMs) are transforming industries like job searching, software engineering, and data analytics through engaging demos and practical applications.",
    "image": {
      "url": "https://res.cloudinary.com/ds8oawwu2/image/upload/v1726990712/LLM_S_gesl94.jpg",
      "fileName": "llmModels.jpg"
    },
    "date": "31st August 2024",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d7",
    "title": "National Level Expert Talk",
    "smallDescription": "A national level workshop on 'Intellectual Property Rights and IP Management for startups' was conducted by TCET ACM-SIGAI. By attending this webinar, students now have a better understanding of what intellectual property entails, including patents, trademarks, copyrights, and trade secrets.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730826974/NationalLevelExpertTalksmallimage.png",
      "fileName": "zephyr2023.jpg"
    },
    "date": "15th September 2023",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d8",
    "title": "Seminar on Higher Studies",
    "smallDescription": "A seminar on Higher Studies was conducted by TCET ACM-SIGAI in collaboration with CareerLabs Technologies Pvt Ltd. Participants gained a deeper understanding of the importance and benefits of pursuing higher studies. They now have a clearer perspective on how advanced education can contribute to their personal and professional development.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730819018/SeminarOnHigherStudies.jpg",
      "fileName": "zephyr2023.jpg"
    },
    "date": "22nd October 2023",
    "optionDate": 2023
  },
  {
    "_id": "6836a2b0756504075b41a9d9",
    "title": "ACM & SIG-AI National Level Coding Competition",
    "smallDescription": "The coding competition, organized by SuperAI Community Stakeholder in collaboration with TCET ACM-SIGAI, demonstrated successful execution and a collaborative effort. The use of the HackerRank platform ensured objective evaluation of participants' solutions.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1730818865/NationalLevelCodingCompetition2023.jpg",
      "fileName": "zephyr2023.jpg"
    },
    "date": " 2023",
    "optionDate": 2023
  }
];
const Seminar = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const images =
    event && Array.isArray(event.image)
      ? event.image
      : event && event.image
        ? [event.image]
        : [];

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true);

      try {
        // 1️⃣ Try fetching from MongoDB backend
        const res = await fetch(`https://acm-blog-backend.vercel.app/api/events/${id}`);

        if (res.ok) {
          const dbEvent = await res.json();
          setEvent(dbEvent);
          return;
        }

        // 2️⃣ If backend returns 404, fallback
        const localEvent = rawEventsData.find(e => e._id === id);
        setEvent(localEvent || null);
      } catch (error) {
        // 3️⃣ Backend down → fallback
        console.error("Backend failed, using local data");
        const localEvent = rawEventsData.find(e => e._id === id);
        setEvent(localEvent || null);
      } finally {
        setLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Event not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      {/* Hero Section with Gradient */}
      <div className="gradient-blue-glow-left pt-24 pb-16 px-4 md:px-12 lg:px-16">

        <div className="max-w-4xl">
          <h1
            className="
    font-bold 
    leading-tight 
    mb-6
    text-6xl
    sm:text-7xl
    md:text-7xl
    lg:text-7xl
    xl:text-8xl
    2xl:text-9xl
  "
          >
            {event.title}
          </h1>

        </div>
      </div>

      {/* Content Section with Floating Image */}
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 relative">

        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-12 items-start">

          {/* Left Column - Content */}
          <div className="space-y-8 order-2 2xl:order-1">
            <section>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
                Event Overview
              </h2>

              <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed">



                {event.smallDescription}
              </p>
            </section>

          </div>

          {/* Right Column - Floating Image */}
          <div className="2xl:sticky 2xl:top-24 order-1 2xl:order-2">



            <div
              className="relative group rounded-2xl overflow-hidden shadow-2xl transform 2xl:-translate-y-24"
              style={{ boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)' }}
            >
              {/* IMAGE */}
              <img
                key={currentImage}
                src={images[currentImage]?.url}
                alt={event.title}
                className="w-full h-auto transition-opacity duration-700"
              />

              {/* LEFT ARROW */}
              {images.length > 1 && (
                <button
                  onClick={prevImage}
                  className="
        absolute left-4 top-1/2 -translate-y-1/2
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        bg-black/60 hover:bg-black
        text-white
        w-12 h-12
        rounded-full
        flex items-center justify-center
        backdrop-blur
        z-10
      "
                >
                  ‹
                </button>
              )}

              {/* RIGHT ARROW */}
              {images.length > 1 && (
                <button
                  onClick={nextImage}
                  className="
        absolute right-4 top-1/2 -translate-y-1/2
        opacity-0 group-hover:opacity-100
        transition-all duration-300
        bg-black/60 hover:bg-black
        text-white
        w-12 h-12
        rounded-full
        flex items-center justify-center
        backdrop-blur
        z-10
      "
                >
                  ›
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Seminar;
