import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StarButton = ({ isFavorite, action }) => {

    console.log(action)
    const Icon = isFavorite ? StarFilled : StarOutlined;

    return <Button icon={<Icon />} onClick={action}></Button>

}

export default StarButton;