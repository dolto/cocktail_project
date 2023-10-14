import SearchBar from "../../styled/SearchBar";

const RecipeSearch = () => {
    return (
        <SearchBar>
            <header id="RecipeLogo">
                RECIPE
            </header>
            <section id="format">
                <select id="category">
                    <option value="ingredient">재료</option>
                    <option value="name">이름</option>
                </select>
                <article id="input_area">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <div className="keyword">abc</div> */}
                    <input type="text" id="input" placeholder="재료를 입력해보세요"/>
                </article>
                <article id="submit_area">
                    <input type="submit" value="Search" id="submit"/>
                </article>
            </section>
        </SearchBar>
    )
}

export default RecipeSearch;