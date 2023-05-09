// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { ListItem, ListItemText } from '@mui/material';

// third-party
import axios from 'axios';

const CirculatingSupplyList = ({}) => {
    const [csupply, setCSupply] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-18-223-229-233.us-east-2.compute.amazonaws.com:3300/dashsupplyapi/onchain/get-csupply?format=3').then((response) => {
            // console.log(response.data.result);
            setCSupply(response.data.result);
        });
    }, []);

    const listItems = csupply.map((item) => (
        <ListItem key={item._id} divider>
            <ListItemText primary={item.result} secondary={item.timestamp} />
        </ListItem>
    ));

    return <div>{listItems}</div>;
};

export default CirculatingSupplyList;
