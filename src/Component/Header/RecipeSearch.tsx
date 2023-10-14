import SearchBar from "../../styled/SearchBar";

const RecipeSearch = () => {
    return (
        <SearchBar>
            <select id="category">
                <option value="ingredient">ingredient</option>
                <option value="name">name</option>
            </select>
            <section id="input_area">
                <i className="fa-solid fa-magnifying-glass"></i>
                <div className="keyword">abc</div>
                <input type="text" id="input" placeholder="input keyword"/>
            </section>
            <section id="submit_area">
                <input type="submit" value="Search" id="submit"/>
            </section>
        </SearchBar>
    )
}

export default RecipeSearch;