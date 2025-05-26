export default function PhoneEmbed() {
  return (
    <div className="relative w-[320px] h-[640px] transform rotate-12 hover:rotate-0 transition-all duration-500 ease-in-out">
      <iframe
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/VdSJD6ACrmfcN87HsDqy0E/U-n-I-application?node-id=116-2547&scaling=scale-down&page-id=0%3A1&starting-point-node-id=116%3A2547"
        className="w-full h-full rounded-xl shadow-lg"
        allowFullScreen
      ></iframe>
      <div className="absolute top-0 left-0 w-full h-full rounded-xl border-4 border-purple-600 opacity-30"></div>
    </div>
  );
}