
export const List = ({data}) => {
  return <div>
  <p>List</p>
  <ul>
    {data.map((item, index) => (
      <li key={index}>{item.name}</li>
    ))}
    </ul>
  </div>
}

