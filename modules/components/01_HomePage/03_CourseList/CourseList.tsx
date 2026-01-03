import css from './CourseList.module.css';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import CourseCard from './CourseCard';

type Course = {
  id: number;
  title: string;
  description: string;
  features: string[];
};

export default function CourseList() {
  const t = useTranslations('courseList');
  const courses = t.raw('courses') as Course[];

  return (
    <section id="courses" className="section">
      <div className={clsx('container', css.courseListContainer)}>
        <h2 className="text-3xl font-bold mb-6">{t('title')}</h2>
        <div className={css.courseGrid}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
