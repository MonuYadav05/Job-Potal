import React from 'react'
import {
    Briefcase,
    Users,
    Building2,
    ArrowRight,
    Laptop,
    Globe2,
    GraduationCap,
    MessageSquare,
    Award,
} from 'lucide-react';

const Categories = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore opportunities across various industries and specializations
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Laptop className="h-8 w-8" />, title: 'Technology', count: '5,000+ Jobs' },
                        { icon: <Globe2 className="h-8 w-8" />, title: 'Remote', count: '3,500+ Jobs' },
                        { icon: <Building2 className="h-8 w-8" />, title: 'Finance', count: '3,200+ Jobs' },
                        { icon: <Users className="h-8 w-8" />, title: 'Marketing', count: '2,800+ Jobs' },
                        { icon: <Briefcase className="h-8 w-8" />, title: 'Sales', count: '2,500+ Jobs' },
                        { icon: <GraduationCap className="h-8 w-8" />, title: 'Education', count: '2,000+ Jobs' },
                        { icon: <MessageSquare className="h-8 w-8" />, title: 'Customer Service', count: '1,800+ Jobs' },
                        { icon: <Award className="h-8 w-8" />, title: 'Design', count: '1,500+ Jobs' },
                    ].map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-blue-100 rounded-lg text-blue">
                                    {category.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                                    <p className="text-gray-600">{category.count}</p>
                                </div>
                            </div>
                            <a href="/search" className="flex items-center text-blue hover:text-blue group">
                                Browse Jobs
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition duration-300" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Categories