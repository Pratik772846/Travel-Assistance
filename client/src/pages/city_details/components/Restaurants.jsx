import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"
import RestaurantCard from "./RestaurantCard"
import classes from './Restaurant.css'
function Restaurant() {

    // const restaurants = useCityStore(state => state.restaurants)

    return (
        <Citysearched>
            <div className={classes.container}>
                <div className={classes.notesList}>



                    <RestaurantCard


                        name="pranav"

                    />
                    


                </div>
            </div>
        </Citysearched>
    )
}

export default Restaurant

