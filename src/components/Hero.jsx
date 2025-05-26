import Button from './Button.jsx';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm John Doe</h1>
      <p className="text-lg text-gray-400 max-w-3xl mb-8">
        I'm a UX/UI Designer passionate about blending creativity with functionality.
      </p>
      <div className="flex justify-center gap-6">
        <Button text="My Work" type="primary" />
        <Button text="Contact Me" type="secondary" />
      </div>
    </section>
  );
}