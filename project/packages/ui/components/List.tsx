import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/pokemonSlice';

export const List = ({data}) => {
  const dispatch = useDispatch();

  const handleRemove = (name) => {
    dispatch(removePokemon(name));
  };

  return <div>
  <p>List</p>
      <ul className="list-grid">
        {data.map((item, index) => (
          <li key={index} className="list-item">
            <p>{item.name}</p>
            <button onClick={() => handleRemove(item.name)}>Remove</button>
          </li>
        ))}
      </ul>
  </div>
}

