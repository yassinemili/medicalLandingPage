import React from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SpecialtyCard from "@/components/SpecialtyCard";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import doctor1 from "../assets/2148980714.jpg";
import doctor2 from "../assets/hopital-travailleurs-sante-concept-traitement-covid-19-jeune-medecin-gommage-faisant-courses-quotidiennes-clinique-ecoutant-symptomes-du-patient-regardant-camera-medecin-professionnel-guerissant-maladies_1258-57233.avif";
import doctor3 from "../assets/journee-medecins-mignon-jeune-bel-homme-blouse-laboratoire-lunettes-souriant-tenant-cahier_140725-162885.avif";

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const specialties = [
    {
      icon: "tooth",
      title: "Dentistry",
      description: "Get consultation from our Dentistry team",
    },
    {
      icon: "stethoscope",
      title: "General Diagnosis",
      description: "Get consultation from our General Diagnosis team",
      featured: true,
    },
    {
      icon: "brain",
      title: "Neuro Surgery",
      description: "Get consultation from our Neuro Surgery team",
    },
    {
      icon: "heart",
      title: "Cardiology",
      description: "Get consultation from our Cardiology team",
    },
    {
      icon: "pill",
      title: "Pharmacy",
      description: "Get consultation from our Pharmacy team",
    },
    {
      icon: "users",
      title: "Trained Staff",
      description: "Get consultation from our trained staff team",
    },
    {
      icon: "dna",
      title: "DNA Mapping",
      description: "Get consultation from our DNA Mapping team",
    },
    {
      icon: "eye",
      title: "Ophthalmology",
      description: "Get consultation from our Ophthalmology team",
    },
    {
      icon: "first-aid",
      title: "Medical Aid",
      description: "Get consultation from our Emergency Medical Aid Team",
    },
  ];

  const testimonials = [
    {
      quote:
        "I received great service from the best doctor. Highly recommended!",
      name: "Patient",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "I received great service from the best doctor. Highly recommended!",
      name: "Patient",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "I received great service from the best doctor. Highly recommended!",
      name: "Patient",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "I received great service from the best doctor. Highly recommended!",
      name: "Patient",
      image: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#EFF6FF] px-4 py-16 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get Expert <span className="text-[#0D99FF]">Medical</span>
              <br />
              <span className="text-[#0D99FF]">Consultation!</span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Our doctors provide expert medical advice and treatment with years
              of experience. Book an appointment now!
            </p>
            <div className="flex items-center mt-8 max-w-md">
              <div className="relative flex-1">
                <Input
                  placeholder="Search Doctors in your location"
                  className="pl-10 pr-4 py-2 rounded-l-md border-r-0"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <Button className="bg-[#0D99FF] hover:bg-[#0D85FF] rounded-l-none">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={doctor1}
              alt="Doctor"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={doctor1}
              alt="Doctors discussing"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-[#0D99FF] font-medium">About Us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              World-Class Preventive, Prescriptive & Curative Medical Practices
            </h2>
            <p className="text-gray-600">
              We provide world-class healthcare services with a focus on the
              highest quality of care available. We're pioneers of the latest
              medical technologies, and guarantee the best possible outcome.
            </p>
            <Button className="bg-[#0D99FF] hover:bg-[#0D85FF] mt-4">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              Our Specialty
            </h2>
            <p className="text-gray-600 mt-2">
              We provide the best medical services with the best doctors in town
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <SpecialtyCard
                key={index}
                icon={specialty.icon}
                title={specialty.title}
                description={specialty.description}
                featured={specialty.featured}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={doctor1}
              alt="Doctor 1"
              width={250}
              height={250}
              className="rounded-lg object-cover"
            />
            <img
              src={doctor2}
              alt="Doctor 2"
              width={250}
              height={250}
              className="rounded-lg object-cover mt-8"
            />
            <img
              src={doctor3}
              alt="Doctor 3"
              width={250}
              height={250}
              className="rounded-lg object-cover"
            />
            <img
              src={doctor1}
              alt="Doctor 4"
              width={250}
              height={250}
              className="rounded-lg object-cover mt-8"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-[#0D99FF] font-medium">Integrity</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              Our Stellar Values
            </h2>
            <p className="text-gray-600">
              The cornerstone of our establishment is integrity. We believe in
              providing the best healthcare services without any form of bias or
              unfair discrimination. We strive to live up to the highest
              standards of integrity and honesty. We offer some of the best
              doctors in every specialty and offer quality healthcare services.
            </p>
            <Button className="bg-[#0D99FF] hover:bg-[#0D85FF] mt-4">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#EFF6FF] py-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              Read feedback about our
              <br />
              Services and wonderful team!
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              We take pride in our doctors and their dedication towards their
              profession. Here's what our patients say about us.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                image={testimonial.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
