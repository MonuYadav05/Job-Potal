import React from 'react';
import {
    Briefcase,
    Search,
    Users,
    Building2,
    ArrowRight,
    TrendingUp,
    Banknote,
    MapPin,
    Feather
} from 'lucide-react';
import Footer from '../Components/landing/Footer';
import Cta from '../Components/landing/Cta';
import Testimonials from '../Components/landing/Testimonials';
import Categories from '../Components/landing/Categories';
import FeaturedJobs from '../Components/landing/FeaturedJobs';
import StartSection from '../Components/landing/StartSection';

function LandingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <header className="bg-white">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-gray-900 mb-6  leading-tight">
                            Your Career Journey <br />
                            <span className="text-blue">Starts Here</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
                            Connect with top companies and opportunities that match your skills and aspirations.
                            Join millions of professionals finding their dream careers.
                        </p>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-xl shadow-xl">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Job title or keyword"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Location"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
                                        />
                                    </div>
                                </div>
                                <button className="px-8 py-3 bg-blue text-white rounded-lg hover:bg-blue transition duration-300 flex items-center justify-center">
                                    <Search className="w-5 h-5 mr-2" />
                                    Search Jobs
                                </button>
                            </div>
                            <div className="mt-4 text-gray-600">
                                Popular: Software Engineer, Data Scientist, Product Manager, Marketing
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <StartSection />

            {/* Featured Jobs */}
            <FeaturedJobs />

            {/* Featured Categories */}
            <Categories />

            {/* Features Section */}
            <Feather />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Section */}
            <Cta />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default LandingPage;