function HeroSection(props) {
  const style = {
    "border-radius": "1rem",
    "margin-bottom": "40px",
  };
  return (
    <section style={style} class="hero is-primary">
      <div class="hero-body">
        <p class="title">{props.title}</p>
        <p class="subtitle">{props.subtitle}</p>
      </div>
    </section>
  );
}
export default HeroSection;
