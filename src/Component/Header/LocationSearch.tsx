import SearchBar from "../../styled/SearchBar";



const LocationSearch = () => {
    return (
        <SearchBar>
            <section id="format">
                <select id="category">
                    <option value="none">지역선택</option>
                    <option value="익산">익산</option>
                </select>
                <article id="input_area">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <div className="keyword">abc</div> */}
                    <input type="text" id="input" placeholder="매장명을 입력해보세요"/>
                </article>
                <article id="submit_area">
                    <input type="submit" value="Search" id="submit"/>
                </article>
            </section>
        </SearchBar>
    )
}

export default LocationSearch;