import PhoneEmbed from './PhoneEmbed';

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20 bg-[#111] text-white">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
        <PhoneEmbed />

        <div className="max-w-md text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-4">Mobile App UI</h3>
          <p className="text-gray-400">
            Experience a seamless mobile UI designed for an app prototype. Click around to interact with it.
          </p>
        </div>
      </div>
    </section>
  );
}