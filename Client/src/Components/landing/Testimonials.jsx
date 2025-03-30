import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from professionals who found their dream jobs through JobHub
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Sarah Johnson',
                                role: 'Software Engineer at TechCorp',
                                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
                                quote: 'JobHub made my job search incredibly easy. I found my dream role within weeks!',
                            },
                            {
                                name: 'Michael Chen',
                                role: 'Product Manager at InnovateCo',
                                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
                                quote: 'The smart matching feature helped me find exactly what I was looking for.',
                            },
                            {
                                name: 'Emily Rodriguez',
                                role: 'UX Designer at DesignHub',
                                image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
                                quote: 'Thanks to JobHub, I transitioned to a remote role that I absolutely love.',
                            },
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials