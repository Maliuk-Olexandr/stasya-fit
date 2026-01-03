import css from './CourseCard.module.css';
import clsx from 'clsx';

interface CourseCardProps {
  title: string;
  description: string;
}

export default function CourseCard({ title, description }: CourseCardProps) {
  return (
    <div className={clsx('card', css.courseCard)}>
      <div className={css.courseContent}>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}