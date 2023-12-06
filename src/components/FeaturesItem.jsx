export default function FeaturesItem({ data }) {
  console.log(data);
  const { src, alt, title, text } = data;

  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
