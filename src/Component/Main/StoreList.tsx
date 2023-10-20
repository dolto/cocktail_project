import logoimg from "../../res/img/Store-1.jpeg";
import StoreLocation from "../Fn/Interface/StoreLocation";
import Store from "../../styled/Store";
import { useRecoilState } from "recoil";
import { Stores } from "../atom";

function StoreList() {
  let [getstorelocations, setstorelocations] = useRecoilState<StoreLocation[]>(Stores);

  // useEffect(() => {
  //   storeLoad()
  //     .then((data) => {
  //       setStoreData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading store data: ", error);
  //     });
  // }, []);

  return (
    <Store>
      <div className="store-container">
        <section className="left-section">
          <div className="image-container">
            <img src={logoimg} alt="Cocktail Sense Logo" />
            <div className="overlay">
              <h2>Cocktail Bar</h2>
            </div>
          </div>
        </section>
        <section className="right-section">
          <article>
            <section id="store">
            <ul>
                {getstorelocations.map((store, i) => (
                  <li key={i} className="store-item" style={
                    {
                      transform: "translate(0, 2rem)",
                      opacity: 0.05,
                      animation: 'identifier 0.7s forwards',
                      animationDelay: `${(i + 1) * 0.2}s`
                    }
                  }>
                    <div className="item-image">
                      <img src={store.Image} alt={store.Name} />
                    </div>
                    <div className="item-info">
                      <h2>{store.Name}</h2>
                      <p>{store.Infomation}</p>
                      <p>{store.Contact}</p>
                      <p>{store.Hour}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </section>
      </div>
    </Store>
  );
}

export default StoreList;
