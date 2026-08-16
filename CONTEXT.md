# CONTEXT.md — Portfolio Website Facts

Source of truth for building the personal portfolio website of **Mohamed Kechiche**.
Every page, section, and line of copy on the site must be derived from the facts below. Do not invent facts.

---

## 1. What the site is

- A personal portfolio website for **Mohamed Kechiche** — computer science student and software engineer based in **Darmstadt, Germany**.
- Primary audience: **tech recruiters/employers** and **universities/academia**.
- Visitor journey: a visitor browses the site, gets a clear idea of Mohamed's **skills** and of **who he is as a person**, and ends up **contacting him**.
- Primary call-to-action: a **contact form**, with email as the direct channel.

## 2. Required sections

Based on Mohamed's choices and on what top software-engineer portfolios consistently include
(refs: CareerFoundry, Site Builder Report, TripleTen portfolio guides):

1. **Hero / intro** — short professional summary
2. **About** — bio plus genuine personality, not just credentials
3. **Projects** — selective, quality over quantity; each with description, tech stack, and GitHub link
4. **Skills & tech stack**
5. **Experience & education** — with a downloadable CV (PDF)
6. **Achievements** — hackathon awards as social proof
7. **Contact** — form + email + LinkedIn + GitHub links

## 3. Education

> Synced to the English CV (`public/cv/Mohamed_Kechiche_CV_EN.pdf`). Where the two CVs differ, the difference is noted inline.

- **B.Sc. Computer Science**, Technical University of Darmstadt, Germany — Oct 2024 – Sep 2027
  - Coursework: Algorithms & Data Structures, OOP, Operating Systems, Databases, Concurrent Programming, Software Engineering
- **Baccalauréat in Mathematics**, 17.3/20, Lycée Pilote Sousse, Tunisia — Sep 2019 – Jun 2023
  - ⚠ The **English** CV no longer lists this; the **German** CV still does. The site keeps it.

## 4. Experience

### Software Engineer (Working Student), Tech Office — GFT Technologies, Frankfurt
*April 2026 – present*
- Ships features for a global **insurance** client in TypeScript and Spring Boot, hardened by CI/CD pipelines, automated tests, and structured code review
- Identified manual bottlenecks across the team's workflows and automated them with AI, reducing repetitive work and speeding up delivery
- Engineered an automated Confluence-to-Git sync service: a REST delta pipeline mirrors the full specification tree into a versioned repo as Markdown every 15 minutes, then an AI agent drafts specs per Jira ticket onto a review branch

### Teaching Assistant, Algorithms & Data Structures — TU Darmstadt
*April 2026 – present*
- Leads weekly sessions for 35+ students on core algorithms, data structures, and complexity analysis
- Designs and grades 20+ weekly assignments with individual feedback; average scores rose 30% over the term
- Runs office hours debugging student Java and Python code, resolving 15+ issues per week

### Web Developer Intern — GOMYCODE, Sousse, Tunisia
*June 2023 – Aug 2023*
- Built responsive React features for an e-learning platform serving 1,000+ users; ran cross-browser QA passes
- Cut production page load times 25% through targeted code refactoring and lazy loading

## 5. Projects to feature

| Project | What it is | Tech |
|---|---|---|
| **LawBuddy** | Understand new laws in plain language and see how they affect you. RAG pipeline over a scraped, indexed law database delivering source-grounded legal updates and personalized AI recommendations. Supabase backend with real-time auth; Vitest test suite. | Python, React, TypeScript, Supabase, OpenAI, Tailwind CSS |
| **Lucid Analytics** | Turns raw spreadsheets into plain-language margin analysis: ingests Excel data, surfaces margin-bleeding cost centers, ranks them via a custom severity algorithm. AI Co-Pilot with signal-vs-noise verdicts plus a What-If simulator. **Won "Best Idea" & "Best Tech" at the Futury Hackathon (April 2026).** MIT-licensed. | React, TypeScript, Supabase, OpenAI, Tailwind |
| **Ariva** | Local-first AI for Regierungspräsidium Freiburg: reads incoming cross-border legal-assistance PDFs and auto-fills legacy case forms, replacing slow, error-prone manual entry. Runs private on-premises models. | HTML, on-prem AI models |
| **SparEx** (`sparex-savings-assistant`) | AI-supported grocery savings & budget assistant — "Spare bei jedem Einkauf." | TanStack Start, React 19, TypeScript |
| **Cross-modal brain-MRI retrieval** | Training-free cross-modal 3D brain-MRI retrieval (contrast-T1 to T2, same patient) at 0.862 macro-MRR, using modality-invariant MIND descriptors and GPU affine registration to a canonical template. Research/hackathon (Kaggle). | Python, ML |
| **RAG-Production-App** | Production-ready Retrieval-Augmented Generation pipeline with PDF ingestion and vector search. | Python, FastAPI, Inngest, Qdrant, OpenAI |
| **NeetCode submissions** | Ongoing algorithm-practice repository of NeetCode.io problem solutions. | Python |

All repos live at **github.com/kechich**. Excluded as duplicates: `LawBuddy-lovable`, `Lucid-analytics-lovable` (private).

## 6. Skills

- **Languages:** Java, Python, C, C++, TypeScript, JavaScript, SQL (PostgreSQL), HTML/CSS, Bash
- **Frameworks:** Spring Boot, React, Node.js, FastAPI, Flask, Angular, Express, Tailwind CSS, Pydantic
- **Testing & CI/CD:** JUnit, Vitest, Playwright, pytest, Git, GitHub Actions, Jenkins, Maven
- **Cloud & tools:** Docker, Kubernetes, Google Cloud Platform, AWS, Linux, PostgreSQL, Qdrant, REST APIs
- **Data & AI:** pandas, NumPy, Matplotlib, OpenCV, RAG pipelines, vector search, embeddings, LLM APIs
- **Concepts:** data structures & algorithms, OOP, design patterns, distributed systems, microservices, agile/Scrum
- **Spoken:** Arabic (native), English, French, German (fluent)

## 7. The person behind the code

- Gym and running since high school — the gym has been a consistent part of his life for ~5 years
- Outdoorsy: hikes very often; loves mountains, beaches, nature, and traveling
- Music: averages ~150,000 Spotify minutes streamed per year, three years running
- Into all forms of art — especially cinema, including a lot of anime
- Reader: classical American literature has always been present; recently drawn to German philosophy
- **Spoken languages:** Arabic (native); French, English, German (fluent)

## 8. Contact (public on the site)

- **Email:** kechiche579@gmail.com
- **LinkedIn:** linkedin.com/in/kechiche
- **GitHub:** github.com/kechich
- Contact form is the primary CTA
- **Deliberately not shown:** phone number, Instagram
