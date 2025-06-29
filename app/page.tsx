"use client";

// Import the new zinc-themed UI components
import { Sidebar } from "@/components/ui/sidebar";
import { Hero } from "@/components/ui/hero";
import { Projects } from "@/components/ui/projects";
import { About } from "@/components/ui/about";
import { Testimonials } from "@/components/ui/testimonials";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
const Home = () => {
  return (
    <main className="relative bg-zinc dark:bg-zinc-900 text-black dark:text-white min-h-screen w-full overflow-x-hidden">
      {/* Schema markup for SEO */}
      <SchemaMarkup pageType="homepage" />
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-20"> {/* Add left margin to account for the sidebar */}
        {/* Hero Section */}
        <Hero />
        
        {/* Projects Section */}
        <Projects />
        
        {/* About Section */}
        <About />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Contact Section */}
        <Contact />
        
        {/* Footer Section */}
        <Footer />
      </div>
    </main>
  );
};

export default Home;
