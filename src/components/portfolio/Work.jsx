export default function Work(props) {
  return (
    <div className="work">
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  )
}
