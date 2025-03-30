import { Banknote, MapPin } from 'lucide-react'
import React from 'react'

const FeaturedJobs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover opportunities from leading companies across various industries
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Senior Software Engineer',
                            company: 'TechCorp',
                            location: 'San Francisco, CA',
                            salary: '$120k - $180k',
                            type: 'Full-time'
                        },
                        {
                            title: 'Product Manager',
                            company: 'InnovateCo',
                            location: 'New York, NY',
                            salary: '$100k - $150k',
                            type: 'Full-time'
                        },
                        {
                            title: 'UX Designer',
                            company: 'DesignHub',
                            location: 'Remote',
                            salary: '$90k - $130k',
                            type: 'Remote'
                        },
                    ].map((job, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                                    <p className="text-gray-600 mb-2">{job.company}</p>
                                </div>
                                <div className="bg-blue-100 text-blue px-3 py-1 rounded-full text-sm">
                                    {job.type}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {job.location}
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Banknote className="h-4 w-4 mr-2" />
                                    {job.salary}
                                </div>
                            </div>
                            <button className="mt-6 w-full px-4 py-2 border-2 border-blue text-blue rounded-lg hover:bg-blue hover:text-white transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-blue text-blue rounded-lg hover:bg-blue hover:text-white transition duration-300">
                        View All Jobs
                    </button>
                </div>
            </div>
        </section>

    )
}

export default FeaturedJobs