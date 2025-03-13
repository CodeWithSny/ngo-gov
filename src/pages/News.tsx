
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Clean Water Initiative Completed in Tanzania",
      category: "Projects",
      date: "June 15, 2023",
      readTime: "5 min read",
      summary: "Successfully completed a clean water initiative providing access to safe drinking water for 5 villages in rural Tanzania.",
      imageClass: "bg-gray-200"
    },
    {
      id: 2,
      title: "NGO Connect Launches New Education Program",
      category: "Programs",
      date: "May 28, 2023",
      readTime: "4 min read",
      summary: "Our new education program aims to improve access to quality education for underprivileged children in South Asia.",
      imageClass: "bg-gray-200"
    },
    {
      id: 3,
      title: "Annual Fundraising Gala Raises Record Amount",
      category: "Events",
      date: "April 10, 2023",
      readTime: "3 min read",
      summary: "This year's gala raised over $500,000 to support our global initiatives, thanks to generous donors and supporters.",
      imageClass: "bg-gray-200"
    },
    {
      id: 4,
      title: "New Partnership with Global Health Foundation",
      category: "Partnerships",
      date: "March 22, 2023",
      readTime: "6 min read",
      summary: "We're excited to announce a new strategic partnership to expand healthcare access in underserved communities.",
      imageClass: "bg-gray-200"
    },
    {
      id: 5,
      title: "Volunteer Training Program Expands to Three New Countries",
      category: "Volunteers",
      date: "February 15, 2023",
      readTime: "4 min read",
      summary: "Our volunteer training program is now available in Kenya, Philippines, and Colombia, with over 200 new participants.",
      imageClass: "bg-gray-200"
    },
    {
      id: 6,
      title: "Environmental Conservation Project Reaches Milestone",
      category: "Projects",
      date: "January 30, 2023",
      readTime: "5 min read",
      summary: "Our reforestation initiative has successfully planted over 100,000 trees across degraded lands in Southeast Asia.",
      imageClass: "bg-gray-200"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Community Health Workshop",
      date: "August 15, 2023",
      location: "Nairobi, Kenya",
      imageClass: "bg-gray-200"
    },
    {
      id: 2,
      title: "Fundraising Concert",
      date: "September 5, 2023",
      location: "New York, USA",
      imageClass: "bg-gray-200"
    },
    {
      id: 3,
      title: "Volunteer Orientation",
      date: "September 20, 2023",
      location: "Virtual Event",
      imageClass: "bg-gray-200"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">News & Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, stories, and upcoming events from NGO Connect.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search news and events..." className="pl-10" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">All</Button>
              <Button variant="outline" size="sm">Projects</Button>
              <Button variant="outline" size="sm">Programs</Button>
              <Button variant="outline" size="sm">Events</Button>
              <Button variant="outline" size="sm">Partnerships</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`${item.imageClass} h-48`}></div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Tag className="h-4 w-4 mr-1" />
                      <span className="mr-4">{item.category}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{item.readTime}</span>
                      </div>
                      <Button variant="outline" size="sm">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className={`${event.imageClass} h-48 relative`}>
                    <div className="absolute top-4 left-4 bg-primary text-white py-1 px-3 rounded-full text-sm font-medium">
                      {event.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-start mb-6">
                      <div className="h-5 w-5 mr-2 text-primary">📍</div>
                      <span className="text-gray-600">{event.location}</span>
                    </div>
                    <Button className="w-full">Register Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button>View All Events</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <Input 
              placeholder="Your email address" 
              className="rounded-r-none text-gray-900" 
            />
            <Button className="rounded-l-none">Subscribe</Button>
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

export default News;
