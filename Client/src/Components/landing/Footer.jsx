import { Briefcase, Globe2, MessageSquare, Users } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div className="col-span-2">
                            <div className="flex items-center mb-6">
                                <Briefcase className="h-8 w-8 text-blue" />
                                <span className="ml-2 text-2xl font-bold text-gray-900">JobHub</span>
                            </div>
                            <p className="text-gray-600 mb-6">
                                Connecting talented professionals with amazing opportunities worldwide.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue">
                                    <Globe2 className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue">
                                    <Users className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue">
                                    <MessageSquare className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Job Seekers</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue">Browse Jobs</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Career Resources</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Job Alerts</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Salary Guide</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">For Employers</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue">Post a Job</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Browse Candidates</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Pricing</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Recruitment Solutions</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-blue">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Contact</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-center text-gray-600">© 2025 JobHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer