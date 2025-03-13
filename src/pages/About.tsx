
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Landmark, FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About NGO Connect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A global organization dedicated to creating sustainable change through collaborative community-driven initiatives.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                NGO Connect was founded in 2005 by a group of passionate individuals who believed in the power of community-driven solutions to address global challenges.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What began as a small initiative to provide clean water to rural communities has evolved into a global organization working across multiple sectors including healthcare, education, economic development, and environmental sustainability.
              </p>
              <p className="text-lg text-gray-600">
                Over the past 18 years, we have expanded our reach to 35 countries, implementing over 120 projects that have positively impacted more than 50,000 lives.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-lg text-gray-600">
                  To empower communities through sustainable development initiatives that address critical challenges in healthcare, education, economic opportunity, and environmental conservation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-lg text-gray-600">
                  A world where all communities have the resources, knowledge, and capacity to thrive, with equitable access to opportunities and sustainable solutions to local challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="h-10 w-10 text-primary" />,
                title: "Community-Centered",
                description: "We believe in solutions developed with and for the communities we serve."
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: "Excellence",
                description: "We strive for the highest standards in all our initiatives and operations."
              },
              {
                icon: <Landmark className="h-10 w-10 text-primary" />,
                title: "Transparency",
                description: "We maintain open and honest communication with all stakeholders."
              },
              {
                icon: <FileText className="h-10 w-10 text-primary" />,
                title: "Accountability",
                description: "We take responsibility for our actions and their impacts."
              }
            ].map((value, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals guiding our organization's strategic direction and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <Card key={member} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200"></div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
                    <p className="text-primary mb-4">Executive Director</p>
                    <p className="text-gray-600">
                      With over 15 years of experience in international development, Jane leads our strategic initiatives and partnerships.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Governance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards of governance, transparency, and accountability in all our operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Board of Directors</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our Board of Directors provides strategic oversight and guidance to ensure that NGO Connect fulfills its mission effectively and responsibly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">John Smith</h4>
                    <p className="text-gray-600">Chairperson</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-600">Vice-Chairperson</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Michael Lee</h4>
                    <p className="text-gray-600">Treasurer</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Annual Reports & Financials</h3>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to transparency in our operations and financial management. Our annual reports and financial statements are available for public review.
              </p>
              <ul className="space-y-4">
                <li className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <a href="#" className="flex justify-between items-center">
                    <span className="font-semibold">Annual Report 2022</span>
                    <FileText className="h-5 w-5 text-primary" />
                  </a>
                </li>
                <li className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <a href="#" className="flex justify-between items-center">
                    <span className="font-semibold">Financial Statement 2022</span>
                    <FileText className="h-5 w-5 text-primary" />
                  </a>
                </li>
                <li className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <a href="#" className="flex justify-between items-center">
                    <span className="font-semibold">Annual Report 2021</span>
                    <FileText className="h-5 w-5 text-primary" />
                  </a>
                </li>
              </ul>
            </div>
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

export default About;
