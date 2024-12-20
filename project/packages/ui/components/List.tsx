
export const List = ({data}) => {
  return <div>
  <p>List</p>
  <ul className="list-grid">
    {data.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))}
    </ul>
  </div>
}

