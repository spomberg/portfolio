export default function Work(props) {
  return (
    <div className="work">
      <img src={props.img} alt={props.title} />
      <span>{props.title}</span>
    </div>
  )
}
