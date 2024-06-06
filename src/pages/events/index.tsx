import { useContext, useState } from "react";
import { Context } from "../../context";
import './style.css';

const Events: React.FC = (): JSX.Element => {
    const { movies, theaters, concerts } = useContext(Context);
    const [selectedItems, setSelectedItems] = useState<any[]>([]);

    const handleSelect = (item: Object) => {
        setSelectedItems([...selectedItems, item]);
    };

    return (
        <div className="events-container">
            <div className="event-list">
                <div className="event-category">
                    <h2>Movies</h2>
                    {movies?.map((elm) => (
                        <div key={elm.id} className="event-item">
                            <div>
                                <img src={elm.img} alt={elm.name} />
                                <h3>{elm.name}</h3>
                                <p>{elm.category}</p>
                            </div>
                            <span>{elm.year}</span>
                            <button onClick={() => handleSelect(elm)}>Select</button>
                        </div>
                    ))}
                </div>

                <div className="event-category">
                    <h2>Theaters</h2>
                    {theaters?.map((elm) => (
                        <div key={elm.id} className="event-item">
                            <div>
                                <img src={elm.img} alt={elm.name} />
                                <h3>{elm.name}</h3>
                            </div>
                            <button onClick={() => handleSelect(elm)}>Select</button>
                        </div>
                    ))}
                </div>

                <div className="event-category">
                    <h2>Concerts</h2>
                    {concerts?.map((elm) => (
                        <div key={elm.id} className="event-item">
                            <div>
                                <img src={elm.img} alt={elm.name} />
                                <h3>{elm.name}</h3>
                            </div>
                            <button onClick={() => handleSelect(elm)}>Select</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="selected-items">
                <h2>Selected Events</h2>
                {selectedItems.map((item, index) => (
                    <div key={index} className="selected-item">
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.category}</p>
                        <span>{item.year}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
