import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BuiltForSlider from "./components/BuiltForSlider";
import ClinicalStakes from "./components/ClinicalStakes";
import CurrentProblems from "./components/CurrentProblems";
import TheProduct from "./components/TheProduct";
import MedicineToGo from "./components/MedicineToGo";
import Capabilities from "./components/Capabilities";
import ColorVariants from "./components/ColorVariants";
import ImagingBreak from "./components/ImagingBreak";
import WhyHospitals from "./components/WhyHospitals";

import BuiltFor from "./components/BuiltFor";
import Founder from "./components/Founder";
import FAQ from "./components/FAQ";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Medicync — The First Laptop Built for Medicine | Clinical-Grade AI Workstation",
  description:
    "Purpose-built clinical-grade AI workstation laptop for physicians. GPU-accelerated CBCT, CT & MRI imaging, HIPAA-compliant biometric security, DICOM-grade display, and AI-powered diagnostics. Join the beta — first 1,000 physicians get Medicync for $500.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Medicync Clinical-Grade AI Workstation Laptop",
    description:
      "The first laptop built specifically for medicine. Clinical-grade imaging, absolute data security, AI-powered intelligence, and HIPAA compliance — all in one device.",
    brand: {
      "@type": "Brand",
      name: "Medicync",
    },
    category: "Medical Equipment",
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Physicians, Surgeons, Radiologists, Dentists, Clinical Researchers",
    },
    image: "https://medicync.com/notebook-branco-profissional.png",
    offers: {
      "@type": "Offer",
      price: "500",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      description: "Beta pricing for the first 1,000 physicians. $0 to reserve.",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Medicync",
      url: "https://medicync.com",
      founder: {
        "@type": "Person",
        name: "Dr. Jenny Chang",
        jobTitle: "Prosthodontist, Founder & CEO",
        affiliation: {
          "@type": "Organization",
          name: "Chang Dental Group",
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Harvard School of Dental Medicine",
        },
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Medicync for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Physicians, dentists, oral surgeons, radiologists, clinical researchers - anyone whose work depends on imaging, patient data, or planning software.",
        },
      },
      {
        "@type": "Question",
        name: "Can Medicync handle heavy medical imaging workloads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. GPU-accelerated rendering for CBCT, CT and MRI. Full surgical planning at native performance. The same files that crash consumer laptops run flawlessly on Medicync.",
        },
      },
      {
        "@type": "Question",
        name: "Is Medicync HIPAA compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hardware-level compliance. Encrypted storage, biometric multi-factor authentication, proximity auto-lock, and remote wipe capabilities built into the architecture.",
        },
      },
      {
        "@type": "Question",
        name: "When can I get a Medicync laptop?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First production batch is underway. Waitlist members get first access, best pricing, and founding member benefits that disappear at public launch.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Medicync waitlist cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nothing. $0 to reserve, no commitment. First 1,000 physicians get Medicync for $500 beta pricing.",
        },
      },
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Medicync",
    url: "https://medicync.com",
    logo: "https://medicync.com/logo-medicync-new.png",
    description:
      "Medicync builds clinical-grade AI workstation laptops purpose-built for physicians, hospitals, and medical research institutions.",
    founder: {
      "@type": "Person",
      name: "Dr. Jenny Chang",
      jobTitle: "Prosthodontist, Founder & CEO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://medicync.com/#waitlist",
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Medicync",
    url: "https://medicync.com",
    description: "The first laptop built for medicine.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />

      <div className="min-h-screen font-sans bg-white">
        <Navbar />
        <main>
          <Hero />
          <BuiltForSlider />
          <ClinicalStakes />
          <CurrentProblems />
          <TheProduct />
          <MedicineToGo />
          <Capabilities />
          <ColorVariants />
          <ImagingBreak />
          <WhyHospitals />

          <BuiltFor />
          <Founder />
          <FAQ />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </>
  );
}
