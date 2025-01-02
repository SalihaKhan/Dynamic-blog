import team1 from "@/app/assets/team 1.jpg"
import team2 from "@/app/assets/team 2.jpg"
import team3 from "@/app/assets/team 3.jpg"
import Image from "next/image";
// src/app/about/page.tsx
const AboutPage = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      {/* About Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to our blog! We are passionate about tech, programming, and the latest trends in web development.
          Our goal is to share knowledge, tutorials, and insights to help developers stay updated and improve their skills.
        </p>
      </section>


      {/* Team Section */}
      <section className="mt-12 bg-gray-50 py-8">
        <h2 className="text-4xl font-semibold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image
              src={team1}
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Alice Johnson</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={team2}
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Bob Smith</h3>
            <p className="text-gray-500">Backend Developer</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={team3}
              alt="Team Member 3"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg">Charlie Davis</h3>
            <p className="text-gray-500">Full Stack Developer</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-semibold mb-4 text-center">Get in Touch</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Have any questions, suggestions, or feedback? Feel free to reach out to us! We love hearing from our readers.
        </p>
        <div className="mt-6 text-center">
          <a
            href="mailto:contact@ourblog.com"
            className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 mb-16 rounded-lg text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
