
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-gray-600">
                      123 NGO Street, Suite 456<br />
                      Charity City, CC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main Office: +1 (555) 123-4567<br />
                      Donations: +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: info@ngoconnect.org<br />
                      Volunteer Opportunities: volunteer@ngoconnect.org<br />
                      Donations: donate@ngoconnect.org
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="font-medium">First Name</label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="font-medium">Last Name</label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">Email</label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="font-medium">Phone (Optional)</label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="font-medium">Subject</label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="font-medium">Message</label>
                      <Textarea id="message" placeholder="Enter your message here..." className="min-h-[150px]" />
                    </div>
                    
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg font-medium">Interactive Map Would Display Here</p>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Regional Offices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              NGO Connect operates in multiple regions to better serve communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                region: "Africa",
                address: "45 Unity Road, Nairobi, Kenya",
                phone: "+254 20 123 4567",
                email: "africa@ngoconnect.org"
              },
              {
                region: "Asia",
                address: "78 Harmony Street, New Delhi, India",
                phone: "+91 11 2345 6789",
                email: "asia@ngoconnect.org"
              },
              {
                region: "Latin America",
                address: "123 Esperanza Ave, Bogotá, Colombia",
                phone: "+57 1 234 5678",
                email: "latam@ngoconnect.org"
              }
            ].map((office, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{office.region} Regional Office</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    <div className="flex">
                      <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    <div className="flex">
                      <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

export default Contact;
