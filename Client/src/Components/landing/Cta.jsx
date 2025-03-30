import React from 'react'

const Cta = () => {
    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue to-blue rounded-2xl p-12 md:p-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                Ready to Take the Next Step in Your Career?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8">
                                Join millions of professionals who have found their dream jobs through JobHub.
                                Your next opportunity is just a click away.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue rounded-lg hover:bg-blue-50 transition duration-300 font-semibold">
                                    Find Jobs
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue transition duration-300 font-semibold">
                                    For Employers
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cta