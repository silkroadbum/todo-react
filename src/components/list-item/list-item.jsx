function ListItem({setItems, id, children}) {
    const handleClick = (id) => {
        setItems((prev) => [...prev.slice(0,id), ...prev.slice(id + 1)]);
    }

  return (
    <li className='list-item'>
        {children}
        <button onClick={() => handleClick(id)}>Удалить</button>
    </li>
  )
}

export default ListItem;
