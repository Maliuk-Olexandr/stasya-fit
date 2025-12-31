import clsx from "clsx"
import css from './AboutMe.module.css';

export default function AboutMeSection() {
  return (
    <section id="about" className="section">
      <div className={clsx("container", css.aboutMeContainer)}>
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! I&apos;m Stasya, a certified fitness trainer and nutrition
          enthusiast. My mission is to help you achieve your health and fitness
          goals through personalized training programs and nutritional guidance.
          With years of experience in the industry, I am dedicated to empowering
          individuals to lead healthier, happier lives.
        </p>
      </div>
    </section>
  );
}
