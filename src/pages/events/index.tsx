import { useContext } from "react";
import { Context } from "../../context";
import './style.css';

const Events: React.FC = (): JSX.Element => {

    const { movies, theaters, concerts } = useContext(Context);

    return <div>
        <div className="event-category">
            <h2>Movies</h2>
            {movies?.map((elm) => {
                return <div key={elm.id} className="event-item">
                    <div>
                        <img src={elm.img} />
                        <h3>{elm.name}</h3>
                        <p>{elm.category}</p>
                    </div>
                    <span>{elm.year}</span>
                </div>
            })}
        </div>

        <div className="event-category">
            <h2>Theaters</h2>
            {theaters?.map((elm) => {
                return <div key={elm.id} className="event-item">
                    <div>
                        <img src={elm.img}/>
                        <h3>{elm.name}</h3>
                    </div>
                </div>
            })}
        </div>

        <div className="event-category">
            <h2>Concerts</h2>
            {concerts?.map((elm) => {
                return <div key={elm.id} className="event-item">
                    <div>
                        <img src={elm.img}/>
                        <h3>{elm.name}</h3>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default Events;
