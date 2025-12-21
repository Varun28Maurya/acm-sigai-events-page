import { Navigation } from "@/components/Navigation";
import { TypewriterText } from "@/components/TypewriterText";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const rawEventsData = [
  {
    "_id": "6836a2b0756504075b41a9c7",
    "title": "National Level Kaggle Competition",
    "smallDescription": "Conducted on 5th April 2025, the National Level Kaggle Competition invited students from across the country to test their machine learning expertise in a competitive and practical setting. Participants tackled real-world problems such as system threat prediction using tools like Python, scikit-learn, TensorFlow, and other machine learning libraries. The event encouraged innovation, critical thinking, and application of theoretical knowledge to real datasets.",
    "image": {
      "url": "https://res.cloudinary.com/df9us90ur/image/upload/v1748408695/KaggleSmallImage.png",
      "fileName": "kaggle_competition.jpg"
    },
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
const Events = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [navLoading, setNavLoading] = useState(false);
  const events2026 = events.filter(e => e.date.includes("2026"));
  const events2025 = events.filter(e => e.date.includes("2025"));
  const events2024 = events.filter(e => e.date.includes("2024"));
  const events2023 = events.filter(e => e.date.includes("2023"));

  const navigate = useNavigate();


  const [hovered, setHovered] = useState<number | null>(null);
  useEffect(() => {
    const layer = document.createElement("div");
    layer.id = "splash-layer";
    layer.className = "fixed inset-0 z-[999] pointer-events-none overflow-hidden";
    document.body.appendChild(layer);



    const aurora = document.querySelector(".aurora-bg") as HTMLElement;
    // Apply parallax transition once
    if (aurora) {
      aurora.style.transition = "transform 0.08s ease-out";
      aurora.style.willChange = "transform";
    }

    const handleParallax = (e) => {
      if (!aurora) return;

      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      aurora.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.15)`;
    };

    window.addEventListener("mousemove", handleParallax);

    let lastTime = 0;
    const throttleDelay = 50;

    const createSplash = (x, y) => {
      const splash = document.createElement("div");
      splash.className = "splash-advanced";

      const size = Math.max(window.innerWidth, window.innerHeight) * 0.12;
      splash.style.width = `${size}px`;
      splash.style.height = `${size}px`;
      splash.style.left = `${x}px`;
      splash.style.top = `${y}px`;

      const inner = document.createElement("div");
      inner.className = "splash-inner";
      splash.appendChild(inner);

      const outer = document.createElement("div");
      outer.className = "splash-outer";
      splash.appendChild(outer);

      layer.appendChild(splash);
      setTimeout(() => splash.remove(), 1200);
    };

    // Mouse splash (desktop)
    const handleMove = (e) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;
      createSplash(e.clientX, e.clientY + window.scrollY);
    };

    window.addEventListener("mousemove", handleMove);

    // ⭐ Scroll splash (mobile + tablet)
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      const randomX = Math.random() * window.innerWidth;
      const y = window.scrollY + window.innerHeight * 0.3; // mid-screen splash

      createSplash(randomX, y);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousemove", handleParallax);
      window.removeEventListener("scroll", handleScroll);
      layer.remove();
    };
  }, []);
  useEffect(() => {
  const loadEvents = async () => {
    setPageLoading(true);

    try {
      // 1️⃣ Fetch events from MongoDB backend
      const res = await fetch("http://localhost:5000/api/events");
      const dbEvents = await res.json();

      // 2️⃣ Merge rawEventsData + dbEvents
      const mergedEvents = [
        ...rawEventsData,
        ...dbEvents.filter(
          (dbEvent: any) =>
            !rawEventsData.some(raw => raw._id === dbEvent._id)
        ),
      ];

      // 3️⃣ Set merged data
      setEvents(mergedEvents);
    } catch (error) {
      console.error("Backend failed, using local data only");
      setEvents(rawEventsData); // fallback
    } finally {
      setPageLoading(false);
    }
  };

  loadEvents();
}, []);



  const handleEventClick = (id: string) => {
    setNavLoading(true);

    setTimeout(() => {
      navigate(`/seminar/${id}`);
    }, 2500);
  };
  const getEventImage = (event: any) => {
  if (Array.isArray(event.image)) {
    return event.image[0]?.url; // ✅ first image
  }
  return event.image?.url; // ✅ single image
};




  return (

    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="aurora-bg"></div>
      </div>

      <div className="relative z-20 flex flex-col min-h-screen">
        <Navigation />

        <div className="flex-grow"> {/* <-- this ensures footer stays at bottom */}
          <section className="flex items-start justify-start px-8 sm:px-12 md:px-16 pt-32 pb-10 overflow-hidden">
            <div className="max-w-4xl">
              <h1
                className="
    text-[4rem]
    sm:text-[6rem]
    md:text-[10rem]
    lg:text-[14rem]
    xl:text-[18rem]
    2xl:text-[22rem]
    font-extrabold 
    mb-10 
    tracking-tighter 
    leading-none
  "
              >
                EVENTS
              </h1>

              <div className="text-lg sm:text-xl md:text-2xl text-foreground/90 font-light">
                <TypewriterText
                  text="Hands-on workshops, competitions, and seminars."
                  speed={50}
                  loop={true}
                />
              </div>
            </div>
          </section>


          <section className="py-12 overflow-visible">
            {events2026.length > 0 && (
  <div className="mb-16 overflow-visible">
    <h2 className="text-6xl font-bold px-8 mb-8">2026 EVENTS</h2>

    <div className="overflow-x-auto overflow-y-visible">
      <div className="flex gap-6 px-8 pb-4 overflow-visible">
        {events2026.map((event, index) => (
          <EventCard
            key={event._id}
            title={event.title}
            date={event.date}
            image={getEventImage(event)}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
            onClick={() => handleEventClick(event._id)}
          />
        ))}
      </div>
    </div>
  </div>
)}

            <div className="mb-16 overflow-visible">
              <h2 className="text-6xl font-bold px-8 mb-8">2025 EVENTS</h2>

              <div className="overflow-x-auto overflow-y-visible overflow-visible">
                <div className="flex gap-6 px-8 pb-4 overflow-visible">
                  {events2025.map((event, index) => (
                    <EventCard
                      key={event._id}
                      title={event.title}
                      date={event.date}
                      image={getEventImage(event)}
                      index={index}
                      hovered={hovered}
                      setHovered={setHovered}
                      onClick={() => handleEventClick(event._id)}
                    />
                  ))}



                </div>
              </div>
            </div>

            <div className="overflow-visible">
              <h2 className="text-6xl font-bold px-8 mb-8">2024 EVENTS</h2>

              <div className="overflow-x-auto overflow-y-visible overflow-visible">
                <div className="flex gap-6 px-8 pb-4 overflow-visible">
                  {events2024.map((event, index) => (
                    <EventCard
                      key={event._id}
                      title={event.title}
                      date={event.date}
                      image={getEventImage(event)}
                      index={index}
                      hovered={hovered}
                      setHovered={setHovered}
                      onClick={() => handleEventClick(event._id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
      {(pageLoading || navLoading) && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-white mb-6"></div>
          <p className="text-xl tracking-widest uppercase text-white/80">
            Fetching event data...
          </p>
        </div>
      )}

    </div>
  );
};

export default Events;
