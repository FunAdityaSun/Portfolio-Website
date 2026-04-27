export default function StartPlaceholder() {
    return (
        <div className="mt-8 p-8 bg-slate-800 rounded-xl border border-slate-700 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold">Welcome to my workspace.</h3>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">Select a project to see demos.</p>

            <div className="space-y-4">
                <h4 className="text-sm font-mono text-emerald-400 tracking-wider">Core Arsenal</h4>

                <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'C++', 'C#', 'JavaScript', 'SQL', 'ROS / ROS2', 'OpenCV', 'Unity', 'Linux', 'Hadoop', 'Apache Spark', 'SDL'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}