import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

// chart options
const areaChartOptions = {
    chart: {
        height: 450,
        type: 'area'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

var csupply1 = [];
// const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({}) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors: [theme.palette.primary.main, theme.palette.primary[700]],
            xaxis: {
                type: 'datetime',
                tickAmount: 10,
                axisBorder: {
                    show: true,
                    color: line
                },
                labels: {
                    formatter: function (value) {
                        const d = new Date(value);
                        if (d.getUTCMinutes() < 10) return d.getUTCHours() + ':0' + d.getUTCMinutes();
                        else return d.getUTCHours() + ':' + d.getUTCMinutes();
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light',
                x: {
                    show: true,
                    formatter: function (value) {
                        const d = new Date(value);
                        return d.toUTCString();
                    }
                },
                y: {
                    show: true
                }
            }
        }));
    }, [primary, secondary, line, theme]);

    const [series, setSeries] = useState([
        {
            name: 'Circulating Supply',
            data: csupply1
        }
    ]);

    useEffect(() => {
        axios.get('http://ec2-18-223-229-233.us-east-2.compute.amazonaws.com:3300/dashsupplyapi/onchain/get-csupply?format=2').then((response) => {
            // console.log(response.data.result);
            // csupply1 = response.data.result;
            setSeries([
                {
                    name: 'Circulating Supply',
                    data: response.data.result
                }
            ]);
        });
    }, []);

    return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
    slot: PropTypes.string
};

export default IncomeAreaChart;
