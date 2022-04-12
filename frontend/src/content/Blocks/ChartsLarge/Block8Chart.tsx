import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

interface Block8ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block8Chart: FC<Block8ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Total Loss',
        data: dataProp.total,
        borderWidth: 6,
        pointRadius: 0,
        backgroundColor: 'transparent',
        borderColor: theme.colors.success.main,
        type: 'line'
      },
      {
        label: 'Net Profit',
        backgroundColor: 'transparent',
        data: dataProp.previous,
        borderWidth: 4,
        pointRadius: 0,
        borderColor: theme.colors.primary.main
      },
      {
        label: 'Net Gains',
        backgroundColor: 'transparent',
        data: dataProp.current,
        borderWidth: 3,
        pointRadius: 0,
        borderColor: theme.colors.error.main
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
            borderDash: [6],
            borderDashOffset: [0],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [6],
            zeroLineBorderDashOffset: [0],
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 12,
            fontColor: theme.palette.text.secondary,
            beginAtZero: false,
            min: 0
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
            zeroLineColor: theme.palette.divider,
            beginAtZero: false
          },
          ticks: {
            display: false,
            beginAtZero: false,
            min: 0
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
      mode: 'nearest',
      intersect: true
    }
  };

  return (
    <div {...rest}>
      <Line data={data} options={options} />
    </div>
  );
};

Block8Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block8Chart;
