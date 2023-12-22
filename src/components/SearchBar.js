const SearchBar = ({ setSearchQuery }) => {
  return (
    <input
      onChange={(val) => {
        setSearchQuery(val.target.value);
      }}
      className="searchbar w-full"
      placeholder="Type your prompt here"
    />
  );
};

export default SearchBar;
