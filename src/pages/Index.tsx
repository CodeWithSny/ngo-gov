
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Globe, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-primary/90 to-primary h-[500px] flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6">
                Making a difference in communities worldwide
              </h1>
              <p className="text-xl mb-8">
                Join us in our mission to create sustainable change through education, healthcare, and community development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/get-involved">Donate Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At NGO Connect, we strive to create lasting change in communities through sustainable development, education, and healthcare initiatives, empowering individuals to build better futures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Development</h3>
                  <p className="text-gray-600">Implementing projects that promote environmental sustainability and economic growth.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Community Empowerment</h3>
                  <p className="text-gray-600">Building capacity within communities to lead their own development initiatives.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Health & Education</h3>
                  <p className="text-gray-600">Providing access to quality healthcare and education for underserved populations.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">120+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">35</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">50,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">5,000+</h3>
              <p className="text-gray-600">Volunteers Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News & Events</h2>
            <Link to="/news" className="text-primary font-medium flex items-center hover:underline">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 15, 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Water Project Completion in Rural Tanzania</h3>
                    <p className="text-gray-600 mb-4">Successfully completed a clean water initiative providing access to safe drinking water for 5 villages.</p>
                    <Link to="/news/1" className="text-primary font-medium hover:underline">Read More</Link>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Mission Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether through donations, volunteering, or spreading awareness, your support makes our work possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/get-involved">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/get-involved">Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NGO Connect</h3>
              <p className="text-gray-400">
                Making a difference in communities worldwide through sustainable development, education, and healthcare initiatives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Our Work</Link></li>
                <li><Link to="/get-involved" className="text-gray-400 hover:text-white">Get Involved</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-white">News & Events</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <address className="text-gray-400 not-italic">
                <p>123 NGO Street, Suite 456</p>
                <p>Charity City, CC 12345</p>
                <p className="mt-2">Phone: +1 (555) 123-4567</p>
                <p>Email: info@ngoconnect.org</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our newsletter</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900" 
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} NGO Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
