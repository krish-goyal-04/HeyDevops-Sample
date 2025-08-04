import Coursecard from "./Coursecard";
import CourseContent from "./CourseContent";
import CourseDetails from "./CourseDetails";
import CourseIncludes from "./CourseIncludes";
import CourseLearning from "./CourseLearnings";
import JobGuidance from "./JobGuidance";
import ToolsGrid from "./ToolsGrid";

const CourseBody = () => {
    return (
        <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 min-h-screen">
            {/* Hero Course Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-400/5 dark:to-purple-400/5"></div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                            Featured Program
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Transform Your Career with
                            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Industry-Leading DevOps
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Join over 10,000+ professionals who have accelerated their careers with our comprehensive,
                            hands-on DevOps and SRE training program designed by industry experts.
                        </p>
                    </div>
                    
                    {/* Main Course Card */}
                    <div className="relative">
                        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-3xl transition-all duration-500">
                            <div className="grid lg:grid-cols-5 gap-0">
                                {/* Course Card */}
                                <div className="lg:col-span-2 p-10 bg-gradient-to-br from-blue-50/80 to-indigo-100/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm">
                                    <div className="transform hover:scale-105 transition-transform duration-300">
                                        <Coursecard />
                                    </div>
                                </div>
                                
                                {/* Course Details */}
                                <div className="lg:col-span-3 p-10 bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/90 dark:to-gray-800/90">
                                    <CourseDetails />
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
                        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
                    </div>
                </div>
            </section>

            {/* Course Features Section */}
            <section className="relative py-20 lg:py-24 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What's Included in Your Journey
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Everything you need to master DevOps and advance your career
                        </p>
                    </div>
                    <div className="transform hover:scale-[1.02] transition-transform duration-300">
                        <CourseIncludes />
                    </div>
                </div>
            </section>

            {/* Tools & Technologies Section */}
            <section className="relative py-20 lg:py-24 bg-gradient-to-r from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800/50">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Master Industry-Standard Tools
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Get hands-on experience with the most in-demand DevOps technologies
                        </p>
                    </div>
                    <div className="transform hover:scale-[1.01] transition-transform duration-500">
                        <ToolsGrid />
                    </div>
                </div>
            </section>

            {/* Learning Outcomes Section */}
            <section className="relative py-20 lg:py-24 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Skills You'll Master
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Comprehensive learning path from fundamentals to advanced concepts
                        </p>
                    </div>
                    <div className="transform hover:scale-[1.01] transition-transform duration-300">
                        <CourseLearning />
                    </div>
                </div>
            </section>

            {/* Course Curriculum Section */}
            <section className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Comprehensive Curriculum
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Structured learning modules designed for maximum impact
                        </p>
                    </div>
                    <div className="transform hover:scale-[1.01] transition-transform duration-300">
                        <CourseContent />
                    </div>
                </div>
            </section>


            <section className="relative py-20 lg:py-24 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="transform hover:scale-[1.01] transition-transform duration-300">
                        <JobGuidance />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseBody;
