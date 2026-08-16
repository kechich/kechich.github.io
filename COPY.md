# COPY.md — Full Site Copy

One-page portfolio for Mohamed Kechiche. Sections in scroll order: Hero, About, Projects, Experience & Education, Contact.
Search targets woven throughout: **"Mohamed Kechiche"** and name + role variants ("Mohamed Kechiche software engineer", "Mohamed Kechiche TU Darmstadt", "Mohamed Kechiche GFT").
Placeholders marked `[PLACEHOLDER: …]` — screenshots/videos to be provided later.

---

## Meta

- **Page title (title tag):** Mohamed Kechiche — Software Engineer & CS Student at TU Darmstadt
- **Meta description:** Mohamed Kechiche is a software engineer and computer science student at TU Darmstadt, building AI-powered products at GFT Technologies and beyond. See his projects and get in touch.

---

## 1. Hero

**H1:** Mohamed Kechiche

**Subheading:** Software engineer building AI-powered products.

**Intro line:** CS student at TU Darmstadt · Working student at GFT Technologies · Algorithms & Data Structures tutor

**Buttons:**
- Primary: **See my work** → scrolls to Projects
- Secondary: **Get in touch** → scrolls to Contact

---

## 2. About

**H2:** About me

The About paragraph has two versions behind a Short / Long toggle. Short is the default.

**Greeting (above the toggle):** Hey — thanks for stopping by. Here's the short version, or the whole story.

> Doubles as the toggle's label: "short version / whole story" is what tells a reader what Short and Long mean.

### Bio — short (default)

Software engineer, computer science student, and teaching assistant. I spend my time building software, learning, teaching, and testing myself at hackathons and tech events.

### Bio — long

I grew up in Msaken, a small town in Tunisia.

As a kid, I built things with Lego. I would sit on the floor with the pieces spread around me, make one thing, take it apart, and make another. In high school, the pieces became numbers and equations. I found mathematics and physics, and I liked the work of staying with a problem until it made sense.

When school ended, I was eighteen and had to choose what came next. I already knew some code from school projects, so that summer I took an internship in web development. For three months, I wrote code, fixed what broke, and watched things come alive on a screen.

I liked it.

So I decided to study software engineering in Europe.

In 2024, I came to Germany with barely a thousand euros. I washed cars. I worked in restaurants and on construction sites. I learned German and went to university. At night, between shifts, and whenever I had the time, I kept writing code and learning how software was built.

The work went on.

Today, I am a student, a teacher, and a software engineer. I study computer science, teach algorithms and data structures, and build software for insurance clients.

I spend weekends at hackathons, building against the clock. I go to tech events, meet people who know more than I do, and ask questions.

Then I go home and build some more.

> Retired: the "The path here" block and the Languages line were removed from the page once the long bio covered the same ground.

**H3:** Beyond the code

Away from the keyboard, I'm rarely sitting still. The gym has been a constant for five years, running even longer, and I head for mountains and trails whenever I can — hiking, traveling, chasing coastlines. Music runs in the background of all of it: around 150,000 Spotify minutes a year, three years running. The quieter hours go to cinema (a lot of anime included), classical American literature, and lately, German philosophy.

**Languages:** Arabic (native) · English, French, German (fluent) — *no longer shown on the page.*

---

## 3. Projects

**H2:** Projects — AI engineering, end to end

**Section intro:** A selection of what I've built — from award-winning hackathon work to production RAG systems. Every project below is live or open source.

---

### LawBuddy
*Python · React · TypeScript · Supabase · OpenAI · Tailwind CSS*

Understand new laws in plain language — and see how they affect you. LawBuddy scrapes and indexes a law database, then runs a RAG pipeline that delivers source-grounded legal updates and personalized recommendations: how each law impacts your situation and what to do about it. Built on Supabase with real-time auth and a Vitest-covered core.

`[PLACEHOLDER: LawBuddy demo video/screenshot]`
**Links:** Live demo `[PLACEHOLDER: URL]` · [GitHub](https://github.com/kechich/LawBuddy)

---

### Lucid Analytics 🏆
*React · TypeScript · Supabase · OpenAI · Tailwind*

**"Best Idea" & "Best Tech" winner — Futury Hackathon, April 2026.** Lucid Analytics turns raw spreadsheets into plain-language margin analysis: it ingests Excel data, surfaces margin-bleeding cost centers across regions, and ranks them with a custom severity algorithm. An AI Co-Pilot separates signal from noise, and a What-If simulator quantifies the margin impact of operational changes on the spot.

`[PLACEHOLDER: Lucid Analytics demo video/screenshot]`
**Links:** Live demo `[PLACEHOLDER: URL]` · [GitHub](https://github.com/kechich/Lucid-analytics)

---

### Ariva
*Local-first AI · On-premises models*

Built for the Regierungspräsidium Freiburg: Ariva reads incoming cross-border legal-assistance PDFs and auto-fills the legacy case forms — replacing slow, error-prone manual entry. Everything runs on private, on-premises models, so sensitive documents never leave the building.

`[PLACEHOLDER: Ariva demo video/screenshot]`
**Links:** Live demo `[PLACEHOLDER: URL]` · [GitHub](https://github.com/kechich/Ariva)

---

### RAG-Production-App
*Python · FastAPI · Inngest · Qdrant · OpenAI*

A production-ready Retrieval-Augmented Generation pipeline: PDF ingestion, vector search, and an AI agent layer — built the way RAG should run outside a notebook.

`[PLACEHOLDER: RAG-Production-App screenshot]`
**Links:** Live demo `[PLACEHOLDER: URL]` · [GitHub](https://github.com/kechich/RAG-Production-App)

---

### SparEx
*TanStack Start · React 19 · TypeScript*

An AI-supported grocery savings and budget assistant — *Spare bei jedem Einkauf.* SparEx helps you save on every shopping trip.

`[PLACEHOLDER: SparEx demo video/screenshot]`
**Links:** Live demo `[PLACEHOLDER: URL]` · [GitHub](https://github.com/kechich/sparex-savings-assistant)

---

### Cross-modal brain-MRI retrieval
*Python · ML research*

Training-free cross-modal 3D brain-MRI retrieval (contrast-T1 to T2, same patient) hitting **0.862 macro-MRR** — using modality-invariant MIND descriptors and GPU affine registration to a canonical template. Research/hackathon work (Kaggle).

`[PLACEHOLDER: MRI retrieval figure/screenshot]`
**Links:** [GitHub](https://github.com/kechich/cross-modal-brain-mri-retrieval) *(no live demo — research code)*

---

### NeetCode submissions
*Python*

My ongoing algorithm-practice log: NeetCode.io problem solutions, one commit at a time.

**Links:** [GitHub](https://github.com/kechich/neetcode-submissions)

---

**Section outro:** These are the highlights — there's plenty more on [my GitHub](https://github.com/kechich).

---

## 4. Experience & Education

**H2:** Experience

### Software Engineer (Working Student) — GFT Technologies
*Tech Office, Frankfurt · April 2026 – present*

Working student in GFT's Tech Office, on a delivery team building for a global insurance client.

- Ship features in TypeScript and Spring Boot, hardened by CI/CD pipelines, automated tests and structured code review.
- Find manual bottlenecks in the team's workflows and automate them with AI, cutting repetitive work and speeding up delivery.
- Built an automated Confluence-to-Git sync service: a REST delta pipeline mirrors the full specification tree into a versioned repo as Markdown every 15 minutes, then an AI agent drafts specs per Jira ticket onto a review branch.

### Teaching Assistant, Algorithms & Data Structures — TU Darmstadt
*April 2026 – present*

Weekly tutorials for the algorithms and data structures course at TU Darmstadt.

- Lead weekly sessions for 35+ students on core algorithms, data structures and complexity analysis.
- Design and grade 20+ weekly assignments with individual feedback — average scores up 30% over the term.
- Run office hours debugging student Java and Python code, resolving 15+ issues a week.

### Web Developer Intern — GOMYCODE
*Sousse, Tunisia · June 2023 – August 2023*

Three months on an e-learning platform in Sousse — the first professional development work.

- Built responsive React features for a platform serving 1,000+ users, and ran cross-browser QA passes.
- Cut production page load times 25% through targeted code refactoring and lazy loading.

**H2:** Education

- **B.Sc. Computer Science** — Technical University of Darmstadt · Oct 2024 – Sep 2027
- **Baccalauréat in Mathematics (17.3/20)** — Lycée Pilote Sousse, Tunisia · 2019 – 2023

**H2 (inline heading or card):** Skills

- **Languages:** Java · Python · C · C++ · TypeScript · JavaScript · SQL (PostgreSQL) · HTML/CSS · Bash
- **Frameworks:** Spring Boot · React · Node.js · FastAPI · Flask · Angular · Express · Tailwind CSS · Pydantic
- **Testing & CI/CD:** JUnit · Vitest · Playwright · pytest · Git · GitHub Actions · Jenkins · Maven
- **Cloud & tools:** Docker · Kubernetes · Google Cloud Platform · AWS · Linux · PostgreSQL · Qdrant · REST APIs
- **Data & AI:** pandas · NumPy · Matplotlib · OpenCV · RAG pipelines · vector search · embeddings · LLM APIs
- **Spoken:** Arabic (native) · English, French, German (fluent)

**Buttons:** two downloads, equal weight —

- **Download my CV (English, PDF)** → `/cv/Mohamed_Kechiche_CV_EN.pdf`
- **Lebenslauf herunterladen (Deutsch, PDF)** → `/cv/Mohamed_Kechiche_CV_DE.pdf`

---

## 5. Contact

**H2:** Let's talk

Whether it's an opportunity, a project, or just to talk tech — I'd love to hear from you.

**Form fields:** Name · Email · Message · **Send** button

**Form success message:** Thanks for reaching out — I'll get back to you soon.

**Form failure message:** That didn't send. Please email me directly at kechiche579@gmail.com.

**Before the access key is set:** Opening your email app…

> The form posts to Web3Forms. Success is only ever shown on a confirmed response — see `src/main.ts`.

**Direct channels:**
- **Email:** kechiche579@gmail.com
- **LinkedIn:** [linkedin.com/in/kechiche](https://linkedin.com/in/kechiche)
- **GitHub:** [github.com/kechich](https://github.com/kechich)

**Footer:** © 2026 Mohamed Kechiche · Darmstadt, Germany
