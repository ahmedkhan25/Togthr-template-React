import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Check from '../components/check'
import Line from '../components/line'
import IconContainer from '../components/icon-container'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Togthr template</title>
        <meta property="og:title" content="Togthr template" />
      </Helmet>
      <section className="home-hero">
        <video
          src="/playground_assets/video%20%5B1%5D.mp4"
          loop
          muted
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <img
            alt="image"
            src="/playground_assets/poetic0-1500h.png"
            className="home-branding"
          />
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <div className="home-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="home-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon03">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon05">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon07">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <br></br>
                <span>Poetic AI idea </span>
                <span className="home-text07">playground</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span>Join the AI Business Revolution</span>
              <br></br>
              <span>
                Click below to generate ideas for PropTech, EnergyTech and
                More..
              </span>
            </p>
          </div>
          <button id="showModal" className="button home-button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-note">
        <div>
          <DangerousHTML
            html={`<div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2 id="ideaName"></h2>
            <p><strong>Description:</strong> <span id="description"></span></p>
            <p><strong>Category:</strong> <span id="category"></span></p>
            <p><strong>Tech Stack:</strong> <span id="techStack"></span></p>
            <p><strong>Team:</strong> <span id="team"></span></p>
            <p><strong>Time Estimate:</strong> <span id="timeEstimate"></span></p>
        </div>
    </div>

    <script>
        const modal = document.getElementById("modal");
const btn = document.getElementById("showModal");
const close = document.getElementsByClassName("close")[0];

const ideas = [
  {
    "IdeaName": "AI-powered chatbots",
    "Description": "Create chatbots for customer support and lead generation on property websites.",
    "Category": "PropTech",
    "TechStack": "AI: Dialogflow or Microsoft Bot Framework, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "2-3 weeks"
  },
  {
    "IdeaName": "Sentiment analysis",
    "Description": "Analyze user reviews on apartment and energy management platforms.",
    "Category": "General",
    "TechStack": "AI: Google Cloud Natural Language or IBM Watson, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "2 weeks"
  },
  {
    "IdeaName": "NLP for property descriptions",
    "Description": "Analyze and generate improved content for property descriptions.",
    "Category": "PropTech",
    "TechStack": "AI: OpenAI GPT-3 API, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven property price prediction",
    "Description": "Predict property prices for multifamily apartments.",
    "Category": "PropTech",
    "TechStack": "AI: Zillow's Home Valuation API, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "2-3 weeks"
  },
  {
    "IdeaName": "AI-powered personalization and recommendations",
    "Description": "Personalize and recommend property listings.",
    "Category": "PropTech",
    "TechStack": "AI: TensorFlow Recommenders or Amazon Personalize, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "Smart energy management systems",
    "Description": "Develop energy management systems with IoT integration.",
    "Category": "EnergyTech",
    "TechStack": "AI: Google Cloud IoT or AWS IoT Analytics, Front-end: React Native, Back-end: Node.js, Postgres",
    "Team": "3 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-based preventative maintenance",
    "Description": "Predictive maintenance and issue detection for utility systems.",
    "Category": "EnergyTech",
    "TechStack": "AI: Google Cloud IoT or Azure Machine Learning, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "3 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "Voice-assistant integrations",
    "Description": "Integrate voice-assistants for property management and utility apps.",
    "Category": "General",
    "TechStack": "AI: Amazon Alexa, Google Assistant or Siri SDKs, Front-end: React Native, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven virtual tours",
    "Description": "Develop virtual tours for property listings using computer vision.",
    "Category": "PropTech",
    "TechStack": "AI: Google Cloud Vision or Azure Cognitive Services, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-enhanced security systems",
    "Description": "Upgrade security systems with AI-driven analytics and monitoring.",
    "Category": "PropTech",
    "TechStack": "AI: Deep Sentinel or Cloudastructure, Front-end: React Native, Back-end: Node.js, Postgres",
    "Team": "3 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "Automatic utility bill analysis",
    "Description": "Analyze and optimize utility bills using OCR and AI tools.",
    "Category": "EnergyTech",
    "TechStack": "AI: Google Cloud Vision OCR or Textract, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven energy consumption prediction",
    "Description": "Predict energy consumption for better energy management.",
    "Category": "EnergyTech",
    "TechStack": "AI: TensorFlow or Amazon Forecast, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based contract analysis",
    "Description": "Analyze contracts using AI for better decision making.",
    "Category": "General",
    "TechStack": "AI: OpenAI GPT-3 or IBM Watson, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered CRM systems",
    "Description": "Implement AI-driven CRM systems for sales and support.",
    "Category": "General",
    "TechStack": "AI: Salesforce Einstein, Zoho AI or HubSpot AI, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-enhanced reporting and analytics",
    "Description": "Upgrade reporting with AI-driven insights.",
    "Category": "General",
    "TechStack": "AI: Google Analytics Intelligence or Adobe Analytics, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered legal document automation",
    "Description": "Automate legal documents using AI.",
    "Category": "General",
    "TechStack": "AI: DocuSign, PandaDoc, or OpenAI GPT-3, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based workflow automation",
    "Description": "Automate repetitive tasks in business workflows.",
    "Category": "General",
    "TechStack": "AI: Zapier or Microsoft Power Automate, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven fraud detection",
    "Description": "Fraud Detection Service",
    "TechStack": "Front-end: React, Back-end: Node.js,Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-enhanced security systems",
    "Description": "Upgrade security systems with AI-driven analytics and monitoring.",
    "Category": "PropTech",
    "TechStack": "AI: Deep Sentinel or Cloudastructure, Front-end: React Native, Back-end: Node.js, Postgres",
    "Team": "3 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "Automatic utility bill analysis",
    "Description": "Analyze and optimize utility bills using OCR and AI tools.",
    "Category": "EnergyTech",
    "TechStack": "AI: Google Cloud Vision OCR or Textract, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven energy consumption prediction",
    "Description": "Predict energy consumption for better energy management.",
    "Category": "EnergyTech",
    "TechStack": "AI: TensorFlow or Amazon Forecast, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based contract analysis",
    "Description": "Analyze contracts using AI for better decision making.",
    "Category": "General",
    "TechStack": "AI: OpenAI GPT-3 or IBM Watson, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered CRM systems",
    "Description": "Implement AI-driven CRM systems for sales and support.",
    "Category": "General",
    "TechStack": "AI: Salesforce Einstein, Zoho AI or HubSpot AI, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-enhanced reporting and analytics",
    "Description": "Upgrade reporting with AI-driven insights.",
    "Category": "General",
    "TechStack": "AI: Google Analytics Intelligence or Adobe Analytics, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered legal document automation",
    "Description": "Automate legal documents using AI.",
    "Category": "General",
    "TechStack": "AI: DocuSign, PandaDoc, or OpenAI GPT-3, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based workflow automation",
    "Description": "Automate repetitive tasks in business workflows.",
    "Category": "General",
    "TechStack": "AI: Zapier or Microsoft Power Automate, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven fraud detection",
    "Description": "Implement AI-driven fraud detection systems for secure transactions.",
    "Category": "General",
    "TechStack": "AI: Sift Science, IBM Trusteer, or FraudLabs Pro, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "Smart home automation and IoT",
    "Description": "Integrate IoT devices with AI for smart home automation.",
    "Category": "EnergyTech",
    "TechStack": "AI: Google Cloud IoT or AWS IoT, Front-end: React Native, Back-end: Node.js, Postgres",
    "Team": "3 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-powered marketing automation",
    "Description": "Upgrade marketing efforts with AI-driven automation.",
    "Category": "General",
    "TechStack": "AI: Marketo, HubSpot, or Mailchimp, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-driven lease negotiation",
    "Description": "Use AI for improved lease negotiation.",
    "Category": "PropTech",
    "TechStack": "AI: Receptiviti or OpenAI GPT-3, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-enhanced property search engines",
    "Description": "Implement AI-powered search engines for property listings.",
    "Category": "PropTech",
    "TechStack": "AI: Algolia or Elasticsearch, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based competitor analysis",
    "Description": "Analyze competitors using AI-driven tools.",
    "Category": "General",
    "TechStack": "AI: SEMrush, Ahrefs, or SimilarWeb, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered tenant screening",
    "Description": "Screen tenants using AI-powered background checks.",
    "Category": "PropTech",
    "TechStack": "AI: Checkr, Onfido, or TransUnion, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-enhanced property investment",
    "Description": "Optimize property investments with AI-driven tools.",
    "Category": "PropTech",
    "TechStack": "AI: Skyline AI, Proportunity, or JLL, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-driven property maintenance scheduling",
    "Description": "Optimize property maintenance scheduling using AI tools.",
    "Category": "PropTech",
    "TechStack": "AI: Salesforce Einstein, Zoho AI, or ServiceTitan, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-based financial modeling",
    "Description": "Create AI-based financial models for property and energy businesses.",
    "Category": "General",
    "TechStack": "AI: QuanTemplate, Kensho, or Alteryx, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-powered risk assessment",
    "Description": "Assess risks for property and energy businesses using AI tools.",
    "Category": "General",
    "TechStack": "AI: RiskLens, Cyence, or SAS, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "4-6 weeks"
  },
  {
    "IdeaName": "AI-enhanced collaboration tools",
    "Description": "Integrate AI capabilities into collaboration tools.",
    "Category": "General",
    "TechStack": "AI: Microsoft Teams, Zoom, or Slack, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "3-4 weeks"
  },
  {
    "IdeaName": "AI-driven property tax estimation",
    "Description": "Estimate property taxes using AI-powered tax estimation APIs.",
    "Category": "PropTech",
    "TechStack": "AI: Avalara, Vertex, or TaxJar, Front-end: React, Back-end: Node.js, Postgres",
    "Team": "2 developers",
    "TimeEstimate": "2-3 weeks"
  }
]

function getRandomIdea() {
    return ideas[Math.floor(Math.random() * ideas.length)];
}

function displayIdea(idea) {
    document.getElementById("ideaName").textContent = idea.IdeaName;
    document.getElementById("description").textContent = idea.Description;
    document.getElementById("category").textContent = idea.Category;
    document.getElementById("techStack").textContent = idea.TechStack;
    document.getElementById("team").textContent = idea.Team;
    document.getElementById("timeEstimate").textContent = idea.TimeEstimate;
}

btn.onclick = function() {
    const randomIdea = getRandomIdea();
    displayIdea(randomIdea);
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

</script>
<style>
    body {
    font-family: Arial, sans-serif;
}

button {
    font-size: 18px;
    padding: 10px 20px;
    cursor: pointer;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    max-width: 600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

    </style>
`}
          ></DangerousHTML>
        </div>
        <h2 className="home-caption01">
          <span className="home-text15">
            Empower Your Business with AI Magic, Our Team at Poetic welcomes you
            to the world of friendly AI, where we make provide the technical
            glue to make business dreams come true! Our team of experts is here
            to help you embrace artificial intelligence in EnergyTech, PropTech,
            and beyond.
          </span>
          <br></br>
          <br></br>
          <span className="home-text18">
            Together, we&apos;ll discover AI&apos;s potential to enhance
            efficiency, save resources, and drive growth. Get ready to transform
            your business and join the future of innovation with a smile.
          </span>
        </h2>
      </section>
      <section className="home-statistics">
        <div className="home-content">
          <div className="home-stat">
            <h3 className="home-header01">$126B</h3>
            <span className="home-caption02">
              Expected Impact of AI Software on  business within the next 3
              Years
            </span>
          </div>
          <div className="home-stat1">
            <h3 className="home-header02">Generative AI Powered</h3>
            <span className="home-caption03">
              Poetic can provide AI Integrations to create real business value
              to drive revenue for your business
            </span>
          </div>
          <div className="home-stat2">
            <h3 className="home-header03">50</h3>
            <span className="home-caption04">Ideas to start</span>
          </div>
        </div>
      </section>
      <section className="home-slider">
        <div className="home-header04">
          <h2 className="home-heading01">Poetic + AI = Success</h2>
        </div>
        <div className="home-selector">
          <p className="home-caption05">Contact us </p>
          <div className="home-slide-titles">
            <div className="slide-title">
              <span>Labs</span>
            </div>
            <div className="slide-title slide-title-active">
              <span>Studios</span>
            </div>
            <div className="slide-title">
              <span>Development</span>
            </div>
            <div className="slide-title">
              <span>Integration</span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slides">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container blaze-container">
            <div className="home-slider-track-container blaze-track-container">
              <div className="home-slider-track blaze-track">
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="home-image01"
                  />
                  <div className="home-content01">
                    <div className="home-header05">
                      <h3 className="home-heading02">Metaverse</h3>
                      <p className="home-caption06">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more">
                      <span className="home-caption07">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon09">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="home-image02"
                  />
                  <div className="home-content02">
                    <div className="home-header06">
                      <h3 className="home-heading03">Ecosystems</h3>
                      <p className="home-caption08">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more1">
                      <span className="home-caption09">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon11">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="home-image03"
                  />
                  <div className="home-content03">
                    <div className="home-header07">
                      <h3 className="home-heading04">Development</h3>
                      <p className="home-caption10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more2">
                      <span className="home-caption11">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon13">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div data-role="current-banner" className="banner">
                  <img
                    alt="image"
                    src="/playground_assets/slider-ecosystems-400h.png"
                    className="home-image04"
                  />
                  <div className="home-content04">
                    <div className="home-header08">
                      <h3 className="home-heading05">Integration</h3>
                      <p className="home-caption12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </p>
                    </div>
                    <div className="home-more3">
                      <span className="home-caption13">Read More</span>
                      <svg viewBox="0 0 1024 1024" className="home-icon15">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-controls">
              <button
                data-role="previous-banner-button"
                className="home-previous blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon17">
                  <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon19">
                  <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '80px',
    loop: true,
    enableAutoplay: true,
  },
})
</script>`}
          ></DangerousHTML>
        </div>
      </section>
      <section className="home-get-started">
        <div className="home-header-container1">
          <div className="home-header09">
            <h2 className="home-heading06">
              Companies will dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore veniam and more opportunities.
            </h2>
            <p className="home-caption14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-button1">
            <button className="button">
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/getstarted-800w.png"
          className="home-image05"
        />
      </section>
      <section className="home-objectives">
        <div className="home-content05">
          <span className="home-text24">Objectives</span>
          <div className="home-objectives-list">
            <div className="objective">
              <h3 className="home-text25">Growth</h3>
              <p className="home-text26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective1">
              <h3 className="home-text27">Develop</h3>
              <p className="home-text28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective home-objective2">
              <h3 className="home-text29">Optimize</h3>
              <p className="home-text30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-growth">
        <div className="home-content06">
          <div className="home-header10">
            <div className="home-header11">
              <h2 className="home-heading07">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text32">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="home-caption15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="home-caption16">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-testimonial">
            <div className="home-content07">
              <span className="home-text34">Testimonial</span>
              <p className="home-text35">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="home-information">
              <div className="home-author">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon21"
                />
                <span className="home-name">Andrew Gonzales</span>
              </div>
              <img
                alt="image"
                src="/playground_assets/logoipsum.svg"
                className="home-from"
              />
            </div>
          </div>
        </div>
        <div className="home-images">
          <div className="home-square"></div>
          <img
            alt="image"
            src="/playground_assets/growth-1400w.png"
            className="home-image06"
          />
        </div>
      </section>
      <section className="home-experience">
        <div className="home-images1">
          <div className="home-square1"></div>
          <img
            alt="image"
            src="/playground_assets/experience-1400w.png"
            className="home-image07"
          />
        </div>
        <div className="home-content08">
          <div className="home-header12">
            <div className="home-header-container2">
              <div className="home-header13">
                <h2 className="home-heading08">
                  <span>A worlds class </span>
                  <span className="home-text37">experience</span>
                </h2>
              </div>
              <p className="home-caption17">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="home-checkmarks">
              <div className="home-check">
                <div className="home-mark">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text38">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="home-check1">
                <div className="home-mark1">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text39">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="home-check2">
                <div className="home-mark2">
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text40">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="home-check3">
                <div className="home-mark3">
                  <svg viewBox="0 0 1024 1024" className="home-icon28">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="home-text41">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="home-testimonial1">
            <div className="home-content09">
              <span className="home-text42">Testimonial</span>
              <p className="home-text43">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="home-information1">
              <div className="home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-icon30"
                />
                <span className="home-name1">Cory Smith</span>
              </div>
              <img
                alt="image"
                src="/playground_assets/logoipsum-2.svg"
                className="home-from1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-create">
        <div className="home-content10">
          <div className="home-header14">
            <h2 className="home-heading09">
              <span>
                Create your own
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text45">environment</span>
              <span> now!</span>
              <br></br>
            </h2>
          </div>
          <button className="home-button3 button">
            <span>
              <span>Get started today</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-comparision">
        <div className="home-header-container3">
          <div className="home-header15">
            <h2 className="home-heading10">
              <span>Environment c</span>
              <span className="home-text52">omparision</span>
              <br></br>
            </h2>
          </div>
          <p className="home-caption18">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
        </div>
        <div className="home-table">
          <div className="home-row">
            <div className="home-headers">
              <span className="home-text54">Placeholder</span>
            </div>
            <div className="home-plans">
              <div className="home-row01">
                <span className="home-text55">TOGHTR</span>
                <span className="home-text56">AGENCY</span>
                <span className="home-text57">FRELLANCE</span>
              </div>
            </div>
          </div>
          <div className="home-row02">
            <div className="home-headers1">
              <span className="home-text58">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans1">
              <div className="home-row03">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row04">
            <div className="home-headers2">
              <span className="home-text59">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans2">
              <div className="home-row05">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row06">
            <div className="home-headers3">
              <span className="home-text60">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans3">
              <div className="home-row07">
                <div className="value">
                  <span className="home-text61">Custom</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row08">
            <div className="home-headers4">
              <span className="home-text62">
                Duis aute irure dolor in reprehenderit
              </span>
            </div>
            <div className="home-plans4">
              <div className="home-row09">
                <div className="value">
                  <span className="home-text63">Unlimited</span>
                </div>
                <div className="value">
                  <span className="home-text64">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row10">
            <div className="home-headers5">
              <span className="home-text65">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans5">
              <div className="home-row11">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
                <div className="value">
                  <span className="home-text66">Limited</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row12">
            <div className="home-headers6">
              <span className="home-text67">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans6">
              <div className="home-row13">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <Check></Check>
                </div>
              </div>
            </div>
          </div>
          <div className="home-row14">
            <div className="home-headers7">
              <span className="home-text68">Lorem ipsum dolor sit amet</span>
            </div>
            <div className="home-plans7">
              <div className="home-row15">
                <div className="value">
                  <Check></Check>
                </div>
                <div className="value">
                  <span className="home-text69">Limited</span>
                </div>
                <div className="value">
                  <Line></Line>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-data">
        <div className="home-header-container4">
          <div className="home-header16">
            <div className="home-row16">
              <h2 className="home-heading11">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text71">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="home-caption19">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="home-content11">
          <div className="home-image08">
            <img
              alt="image"
              src="/playground_assets/data-1400w.png"
              className="home-image09"
            />
          </div>
          <div className="home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header17">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header18">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name1"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header19">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name2"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="home-header20">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name3"></IconContainer>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </div>
      </section>
      <section className="home-customer">
        <div className="home-header21">
          <h2 className="home-heading12">
            <span>
              Customer validation is an essential phase of the
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text74">product development process</span>
            <br></br>
          </h2>
        </div>
        <div className="home-quotes">
          <div className="home-quote">
            <p className="home-quote1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author2">
              <span className="home-name2">Joanna Smith</span>
              <span className="home-location">Briville</span>
            </div>
          </div>
          <div className="home-quote2">
            <p className="home-quote3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author3">
              <span className="home-name3">Joanna Smith</span>
              <span className="home-location1">Briville</span>
            </div>
          </div>
          <div className="home-quote4">
            <p className="home-quote5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author4">
              <span className="home-name4">Joanna Smith</span>
              <span className="home-location2">Briville</span>
            </div>
          </div>
          <div className="home-quote6">
            <p className="home-quote7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="home-author5">
              <span className="home-name5">Joanna Smith</span>
              <span className="home-location3">Briville</span>
            </div>
          </div>
        </div>
        <div className="home-controls1">
          <button className="home-previous1 button">
            <svg viewBox="0 0 1024 1024" className="home-icon31">
              <path d="M542.165 780.501l-225.835-225.835h494.336c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-494.336l225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-298.667 298.667c-4.096 4.096-7.168 8.789-9.259 13.824-2.176 5.205-3.243 10.795-3.243 16.341 0 10.923 4.181 21.845 12.501 30.165l298.667 298.667c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"></path>
            </svg>
          </button>
          <button className="home-next1 button">
            <svg viewBox="0 0 1024 1024" className="home-icon33">
              <path d="M481.835 243.499l225.835 225.835h-494.336c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h494.336l-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l298.667-298.667c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-298.667-298.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
            </svg>
          </button>
          <button className="button home-button4">
            <span>
              <span>View all cases</span>
              <br></br>
            </span>
          </button>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-header22">
          <h2 className="home-heading13">
            <span>Frequently asked </span>
            <span className="home-text80">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="home-content20">
          <div className="home-column">
            <div className="home-element04">
              <h3 className="home-header23">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element05">
              <h3 className="home-header24">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="home-content22">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="home-element06">
              <h3 className="home-header25">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content23">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-element07">
              <h3 className="home-header26">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="home-content24">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="home-element08">
              <h3 className="home-header27">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="home-content25">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="home-element09">
              <h3 className="home-header28">Incididunt ut labore et dolore?</h3>
              <p className="home-content26">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content27">
          <div className="home-main">
            <div className="home-branding1">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                className="home-image10"
              />
              <span className="home-text82">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-links">
              <div className="home-column2">
                <span className="home-header29">Company</span>
                <div className="home-list">
                  <Link to="/" className="home-navlink">
                    About
                  </Link>
                  <Link to="/" className="home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="home-navlink03">
                    <span className="home-text83">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="home-column3">
                <span className="home-header30">Extern</span>
                <div className="home-list1">
                  <Link to="/" className="home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="home-column4">
                <span className="home-header31">Social</span>
                <div className="home-list2">
                  <Link to="/" className="home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom">
            <span className="home-text85">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="home-button5 button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image11"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default Home
