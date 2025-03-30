import { Briefcase, Building2, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const StartSection = () => {
    return (
        <div>
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Building2 className="h-12 w-12 text-blue" />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">10,000+</h3>
                            <p className="text-gray-600">Companies Hiring</p>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Users className="h-12 w-12 text-blue" />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">1M+</h3>
                            <p className="text-gray-600">Active Job Seekers</p>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-center mb-4">
                                <Briefcase className="h-12 w-12 text-blue" />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">50,000+</h3>
                            <p className="text-gray-600">Jobs Posted</p>
                        </div>
                        <div className="p-8 bg-white rounded-xl shadow-sm">
                            <div className="flex justify-center mb-4">
                                <TrendingUp className="h-12 w-12 text-blue" />
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-2">85%</h3>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StartSection