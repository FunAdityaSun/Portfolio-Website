export default function StartPlaceholder() {
    return (
        <div className="mt-8 p-8 bg-almond-cream-400 border-almond-cream-200 dark:bg-jet-black-900 border dark:border-jet-black-800 flex flex-col justify-center shadow-lg/50">
            <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold">Welcome to my workspace.</h3>
            </div>

            <p className="text-black-900 dark:text-almond-cream-100 leading-relaxed mb-8">Select a project to see demos.</p>

            <div className="space-y-4">
                <h4 className="text-sm font-mono text-black-900 dark:text-almond-cream-100 tracking-wider">Core Arsenal</h4>

                <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL', 'ROS / ROS2', 'OpenCV', 'Unity', 'Linux', 'Hadoop', 'Apache Spark', 'SDL'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-jet-black-800 border border-jet-black-700 rounded-full text-sm text-almond-cream-100">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}