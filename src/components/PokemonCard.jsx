import { Card } from "antd";
import Meta from 'antd/lib/card/Meta';
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorite } from "../actions";


const PokemonCard = ({ name, image, types, id }) => {

    const dispatch = useDispatch();
    const typeString = types.map(item => item.type.name).join(', ');

    const handleOnClick = () => {
        dispatch(setFavorite({ pokemonId: id }));
    }


    return <Card

        title={name}
        cover={<img src={image}
            alt={name}
        />}
        extra={<StarButton isFavorite={true} action={handleOnClick} />}
    >

        <Meta description={typeString} />
    </Card>
}

export default PokemonCard;