export default function ProblemPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
        Current Challenges
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "A. Inefficient Job Matching", desc: "Manual processes take weeks, high mismatch rates" },
          { title: "B. Certificate Fraud", desc: "Paper certificates easily forged, verification delays" },
          { title: "C. Inconsistent Inspections", desc: "Paper-based, no predictive analytics" },
          { title: "D. Limited Training Capacity", desc: "Expensive, dangerous, regional shortages" },
          { title: "E. Fragmented Data", desc: "No real-time labor market visibility" },
          { title: "F. Lost Diaspora Expertise", desc: "No knowledge transfer mechanism" }
        ].map((problem, i) => (
          <div key={i} className="bg-white/70 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{problem.title}</h3>
            <p className="text-gray-600">{problem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
