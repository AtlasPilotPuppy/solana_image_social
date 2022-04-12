import { FC } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTheme, alpha } from '@mui/material';

interface Block4ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block4Chart: FC<Block4ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Orders',
        backgroundColor: alpha(theme.colors.primary.main, 0.5),
        data: dataProp.orders,
        barThickness: 14,
        maxBarThickness: 14,
        borderWidth: 4,
        borderColor: 'transparent'
      },
      {
        label: 'Sales',
        backgroundColor: alpha(theme.colors.primary.main, 0.2),
        data: dataProp.sales,
        barThickness: 14,
        maxBarThickness: 14,
        borderWidth: 4,
        borderColor: 'transparent'
      },
      {
        label: 'Users',
        backgroundColor: alpha(theme.colors.primary.main, 0.7),
        data: dataProp.users,
        barThickness: 14,
        maxBarThickness: 14,
        borderWidth: 4,
        borderColor: 'transparent'
      },
      {
        label: 'Customers',
        backgroundColor: alpha(theme.colors.primary.main, 1),
        data: dataProp.customers,
        barThickness: 14,
        maxBarThickness: 14,
        borderWidth: 4,
        borderColor: 'transparent'
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 22,
    legend: {
      display: false
    },
    layout: {
      padding: {
        left: theme.spacing(0),
        right: theme.spacing(0)
      }
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            padding: 18,
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 10
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false,
      caretSize: 6,
      displayColors: true,
      yPadding: 8,
      xPadding: 16,
      borderWidth: 4,
      bodySpacing: 10,
      titleFontSize: 16,
      borderColor: theme.palette.common.black,
      backgroundColor: theme.palette.common.black,
      titleFontColor: theme.palette.common.white,
      bodyFontColor: theme.palette.common.white,
      footerFontColor: theme.palette.common.white
    },
    hover: {
      mode: 'index',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Bar data={data} options={options} />
    </div>
  );
};

Block4Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block4Chart;
