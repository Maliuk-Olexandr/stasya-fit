import Image from "next/image";
import css from "./ReviewCard.module.css";

export default function ReviewCard({
  review,
}: {
  review: { name: string; photo: string; rating: number; comment: string };
}) {
  return (
    <div className={css.reviewCard}>
      <Image
        className={css.img}
        src={review.photo}
        alt="Reviewer photo"
        width={504}
        height={504}
      />
      <div className={css.reviewContent}>
        <h3 className={css.reviewerName}>{review.name}</h3>
        <div className={css.reviewRating}>
          {"★".repeat(review.rating)}
          {"☆".repeat(5 - review.rating)}
        </div>
        <p className={css.reviewComment}>{review.comment}</p>
      </div>
    </div>
  );
}
