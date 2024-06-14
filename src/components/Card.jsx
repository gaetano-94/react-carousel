import cardStyle from './Card.module.css';

export default function ({ title, image, content, isAvailable }) {
  return (
    <div
      className={cardStyle.container}
      style={{ display: isAvailable ? 'block' : 'none' }}
    >
      <section className={cardStyle.select}>
        <img src={image} alt={title} className={cardStyle.image} />
        <h2 className={cardStyle.titolo}>{title}</h2>
        <p className={cardStyle.contenuto}>{content}</p>
      </section>
    </div>
  );
}
