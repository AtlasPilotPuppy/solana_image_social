import { FC } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

interface AppointmentsAltChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const AppointmentsAltChart: FC<AppointmentsAltChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: theme.colors.primary.main,
        data: dataProp.month,
        barThickness: 10,
        maxBarThickness: 10,
        barPercentage: 1,
        categoryPercentage: 1
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 55,
    legend: {
      display: false
    },
    layout: {
      padding: 0
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }
      ]
    },
    tooltips: {
      enabled: false
    }
  };

  return (
    <div {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
};

AppointmentsAltChart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default AppointmentsAltChart;
