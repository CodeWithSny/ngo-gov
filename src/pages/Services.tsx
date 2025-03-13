
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, HeartPulse, Leaf, Home, DollarSign, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const projectCategories = [
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Education",
      description: "Expanding access to quality education through school construction, teacher training, and scholarship programs."
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: "Healthcare",
      description: "Improving healthcare access through medical camps, facility upgrades, and health education initiatives."
    },
    {
      icon: <Leaf className="h-10 w-10 text-primary" />,
      title: "Environment",
      description: "Promoting environmental sustainability through conservation projects, clean energy, and climate resilience."
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Community Development",
      description: "Building infrastructure, creating economic opportunities, and strengthening community institutions."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "Economic Empowerment",
      description: "Supporting entrepreneurship, vocational training, and microfinance initiatives for sustainable livelihoods."
    }
  ];

  const featuredProjects = [
    {
      title: "Clean Water Initiative",
      location: "Rural Tanzania",
      description: "Provided access to clean drinking water for 5 villages through well construction and water purification systems.",
      impact: "Benefited 2,500+ residents and reduced waterborne diseases by 60%",
      imageClass: "bg-gray-200"
    },
    {
      title: "School Construction Project",
      location: "Northern India",
      description: "Built and equipped a primary school serving underprivileged children in a remote community.",
      impact: "Enabled education for 350 children with 12 classrooms and a library",
      imageClass: "bg-gray-200"
    },
    {
      title: "Community Health Center",
      location: "Central Philippines",
      description: "Established a health center providing primary care, maternal services, and health education.",
      impact: "Serves 12 communities with 15,000+ medical consultations annually",
      imageClass: "bg-gray-200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how NGO Connect is creating positive change through sustainable development programs around the world.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-lg text-gray-600 mb-4">
                At NGO Connect, we believe in a collaborative, community-centered approach to sustainable development. We work directly with local communities to identify needs, design solutions, and implement projects that create lasting impact.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our programs are guided by principles of sustainability, equity, and local ownership. We focus on building capacity within communities, enabling them to lead their own development initiatives long after our direct involvement ends.
              </p>
              <p className="text-lg text-gray-600">
                Through strategic partnerships with local organizations, government agencies, and other stakeholders, we leverage resources and expertise to maximize our impact and reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work across multiple sectors to address interconnected development challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our impactful initiatives from around the world.
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="bg-white overflow-hidden shadow-md">
                <div className="grid md:grid-cols-2">
                  <div className={`${project.imageClass} min-h-[300px]`}></div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary mb-4">{project.location}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="bg-primary/10 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-1">Impact:</h4>
                      <p>{project.impact}</p>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/project/${index + 1}`}>
                        Learn More <LinkIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from the communities and individuals we've worked with.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="bg-white shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col">
                    <p className="text-gray-600 italic mb-4">
                      "The clean water project has transformed our village. Our children are healthier, and women no longer have to walk for hours to fetch water. We are grateful to NGO Connect for their support."
                    </p>
                    <div className="flex items-center mt-auto">
                      <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">Maria Nkosi</h4>
                        <p className="text-gray-600">Community Leader, Tanzania</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution helps us continue creating sustainable change in communities worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/get-involved">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Same footer as in Index.tsx */}
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} NGO Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
