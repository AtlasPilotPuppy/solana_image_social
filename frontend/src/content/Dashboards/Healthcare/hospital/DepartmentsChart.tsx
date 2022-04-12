import { FC } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import { alpha, useTheme } from '@mui/material';

interface ChartProps {
  data: any;
}

const DepartmentsChart: FC<ChartProps> = ({ data: dataProp, ...rest }) => {
  const theme = useTheme();

  const data = {
    datasets: dataProp.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 0,
      hoverBorderWidth: 0,
      backgroundColor: [
        theme.colors.warning.main,
        theme.colors.warning.lighter
      ],
      hoverBackgroundColor: [
        theme.colors.warning.light,
        alpha(theme.colors.warning.lighter, 0.3)
      ]
    })),
    labels: dataProp.labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    cutoutPercentage: 60,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    tooltips: {
      enabled: false
    }
  };

  return <Doughnut data={data} options={options} {...rest} />;
};

DepartmentsChart.propTypes = {
  data: PropTypes.object.isRequired
};

export default DepartmentsChart;
