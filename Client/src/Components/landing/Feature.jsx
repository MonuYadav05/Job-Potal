import { CheckCircle2, Clock, Globe2, MessageSquare, Star, TrendingUp } from 'lucide-react'
import React from 'react'

const Feature = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose JobHub</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We're committed to making your job search experience seamless and successful
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        {
                            icon: <CheckCircle2 className="h-12 w-12" />,
                            title: 'Verified Employers',
                            description: 'All employers are thoroughly verified to ensure legitimate opportunities',
                        },
                        {
                            icon: <Star className="h-12 w-12" />,
                            title: 'Smart Matching',
                            description: 'Our AI-powered system matches you with the most relevant jobs',
                        },
                        {
                            icon: <TrendingUp className="h-12 w-12" />,
                            title: 'Career Growth',
                            description: 'Access resources and tools to help advance your career',
                        },
                        {
                            icon: <Clock className="h-12 w-12" />,
                            title: 'Real-time Updates',
                            description: 'Get instant notifications for jobs matching your preferences',
                        },
                        {
                            icon: <Globe2 className="h-12 w-12" />,
                            title: 'Remote Opportunities',
                            description: 'Access a wide range of remote and flexible work options',
                        },
                        {
                            icon: <MessageSquare className="h-12 w-12" />,
                            title: 'Expert Support',
                            description: '24/7 support to help you with your job search journey',
                        },
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition duration-300">
                            <div className="text-blue mb-6">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feature