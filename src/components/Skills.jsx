export default function Skills() {
  return (
    <section id="skills" className="px-10 py-20 bg-[#111] text-white">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-lg">React</p>
          <div className="w-2/3 bg-gray-800 rounded-full">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg">UI/UX Design</p>
          <div className="w-2/3 bg-gray-800 rounded-full">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg">JavaScript</p>
          <div className="w-2/3 bg-gray-800 rounded-full">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
