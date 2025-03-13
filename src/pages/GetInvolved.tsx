
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Gift, Users, MessageSquare, Heart, CreditCard, Calendar, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const GetInvolved = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in creating positive change. There are many ways to support our mission and make a difference.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ways to Help</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you have time, skills, or resources to share, there's a way for you to contribute to our work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Gift className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Donate</h3>
                  <p className="text-gray-600 mb-6">
                    Support our work through one-time or recurring donations. Your contribution funds our programs worldwide.
                  </p>
                  <Button asChild>
                    <a href="#donate">Donate Now</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Volunteer</h3>
                  <p className="text-gray-600 mb-6">
                    Contribute your time and skills to our projects or help with administrative tasks, events, and advocacy.
                  </p>
                  <Button asChild>
                    <a href="#volunteer">Become a Volunteer</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <MessageSquare className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advocate</h3>
                  <p className="text-gray-600 mb-6">
                    Raise awareness about our cause by sharing our work with your network and participating in campaigns.
                  </p>
                  <Button asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Make a Donation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your generous contribution helps us continue our work in communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="shadow-lg h-full">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Donation Amount</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      {[25, 50, 100, 250, 500, 1000].map((amount) => (
                        <Button 
                          key={amount} 
                          variant="outline" 
                          className="h-16 text-lg hover:bg-primary hover:text-white"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="customAmount" className="font-medium">Custom Amount</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                        <Input id="customAmount" className="pl-8" placeholder="Enter amount" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="oneTime" 
                          name="donationType" 
                          className="h-5 w-5 text-primary" 
                          defaultChecked 
                        />
                        <label htmlFor="oneTime" className="ml-2">One-time</label>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="radio" 
                          id="monthly" 
                          name="donationType" 
                          className="h-5 w-5 text-primary" 
                        />
                        <label htmlFor="monthly" className="ml-2">Monthly</label>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Personal Information</h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Payment Information</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />
                          <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiration Date</Label>
                          <div className="relative">
                            <Input id="expiry" placeholder="MM/YY" />
                            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="XXX" />
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full h-12 text-lg">Donate Now</Button>
                    
                    <p className="text-sm text-gray-500 text-center">
                      Your payment information is securely processed. NGO Connect does not store your full credit card details.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Donate?</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Your donation directly supports our programs and initiatives around the world. Every contribution, regardless of size, makes a difference in the communities we serve.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">$25 can provide school supplies for a child for a year</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">$50 can fund a water purification system for a family</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">$100 can support vocational training for a youth</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-6 w-6 text-primary mr-2 shrink-0 mt-0.5" />
                    <span className="text-gray-600">$500 can help establish a community garden</span>
                  </li>
                </ul>
              </div>
              
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Other Ways to Give</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <User className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Become a Monthly Donor</h4>
                        <p className="text-gray-600">Provide sustained support through monthly contributions.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Legacy Giving</h4>
                        <p className="text-gray-600">Include NGO Connect in your estate planning.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Corporate Partnerships</h4>
                        <p className="text-gray-600">Engage your company in supporting our mission.</p>
                      </div>
                    </li>
                  </ul>
                  <Button variant="outline" className="mt-6 w-full">Contact Us for Details</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Volunteer With Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Share your time, skills, and passion to make a difference in communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Volunteer Opportunities</h3>
              
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Field Volunteers</h4>
                    <p className="text-gray-600 mb-4">
                      Work directly in communities on various projects including education, healthcare, construction, and environmental initiatives.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Minimum commitment: 2 weeks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Locations: Various global sites</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Skills needed: Varies by project</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Virtual Volunteers</h4>
                    <p className="text-gray-600 mb-4">
                      Contribute remotely through research, content creation, translation, graphic design, IT support, and more.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Flexible hours and commitment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Work from anywhere</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Skills needed: Digital skills, language skills, research abilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-2">Event Volunteers</h4>
                    <p className="text-gray-600 mb-4">
                      Help organize and run fundraising events, awareness campaigns, and community outreach activities.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Short-term commitments</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Locations: Local offices and event venues</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                        <span className="text-gray-600">Skills needed: Organization, communication, teamwork</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Volunteer Registration</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="volFirstName">First Name</Label>
                        <Input id="volFirstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="volLastName">Last Name</Label>
                        <Input id="volLastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volEmail">Email</Label>
                      <Input id="volEmail" type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volPhone">Phone</Label>
                      <Input id="volPhone" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volLocation">Location</Label>
                      <Input id="volLocation" placeholder="City, Country" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Volunteer Type</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="fieldVol" 
                            className="h-5 w-5 text-primary" 
                          />
                          <label htmlFor="fieldVol" className="ml-2">Field Volunteer</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="virtualVol" 
                            className="h-5 w-5 text-primary" 
                          />
                          <label htmlFor="virtualVol" className="ml-2">Virtual Volunteer</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="eventVol" 
                            className="h-5 w-5 text-primary" 
                          />
                          <label htmlFor="eventVol" className="ml-2">Event Volunteer</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volSkills">Skills & Experience</Label>
                      <Textarea 
                        id="volSkills" 
                        placeholder="Tell us about your skills, experience, and why you'd like to volunteer with us."
                        className="min-h-[150px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="volAvailability">Availability</Label>
                      <Input id="volAvailability" placeholder="When are you available to volunteer?" />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="h-5 w-5 text-primary mt-1" 
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to receive communications from NGO Connect and understand that my personal information will be processed in accordance with the Privacy Policy.
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full">Submit Application</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Volunteer Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced the impact of volunteering firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <Card key={testimonial} className="bg-white shadow-md">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <p className="text-gray-600 italic mb-4">
                      "Volunteering with NGO Connect was one of the most rewarding experiences of my life. The connections I made and the impact I witnessed will stay with me forever."
                    </p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                      <div>
                        <h4 className="font-semibold">David Chen</h4>
                        <p className="text-gray-600">Field Volunteer, Kenya</p>
                      </div>
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

export default GetInvolved;
