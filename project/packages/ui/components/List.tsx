
export const List = ({ data }) => {
  return (
    <div>
      <p>List</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

