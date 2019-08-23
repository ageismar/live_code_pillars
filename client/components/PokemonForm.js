import React from 'react';

const PokemonForm = props => {
  const { handleSubmit, handleChange, name, element, description } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Pokemon Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <label htmlFor="element">Element:</label>
      <input
        type="text"
        name="element"
        value={element}
        onChange={handleChange}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PokemonForm;
