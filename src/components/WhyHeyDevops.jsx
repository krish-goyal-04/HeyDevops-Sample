const WhyHeyDevops = () => {
  const features = [
    {
      title: "High-quality Learning",
      description:
        "Unlock your potential with our live & self-paced content that can help you crack your dream job",
    },
    {
      title: "Tech Community Access",
      description:
        "Boost your career in the surrounding of like-minded peers with similar learning goals as yours.",
    },
    {
      title: "Interview Prep",
      description:
        "Master DevOps interviews by being well-versed in common problem-solving techniques, and fundamental concepts",
    },
    {
      title: "Doubt Support",
      description:
        "Get comprehensive doubt support from our team of dedicated teaching assistants to optimize your learning experience.",
    },
    {
      title: "Problem Solving",
      description:
        "Learners can practice and solve problems on the platform",
    },
    {
      title: "Career Guidance",
      description:
        "Ace your career with resume building, interview mastery & personal branding",
    },
  ];

  return (
    <section className="max-w-7xl  py-5 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Why <span className="text-blue-600 dark:text-blue-400">HeyDevops?</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {features.map(({ title, description }) => (
          <div
            key={title}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHeyDevops;
