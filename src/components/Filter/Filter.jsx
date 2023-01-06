const Filter = ({ value, onChange }) => {
  return (
    <div className='filter_container'>
      <label className='filter_title'>
        Find contacts by name
        <input className='filter_input' name="name" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
};

export default Filter;