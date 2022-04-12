import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { alpha, useTheme } from '@mui/material';

interface PageHeaderChartProps {
  data: any[];
  labels: string[];
}

const PageHeaderChart: FC<PageHeaderChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const primaryGradient = ctx.createLinearGradient(0, 0, 0, 42);

    primaryGradient.addColorStop(
      0,
      alpha(theme.colors.alpha.trueWhite[30], 0.3)
    );
    primaryGradient.addColorStop(
      0.5,
      alpha(theme.colors.alpha.trueWhite[30], 0.1)
    );
    primaryGradient.addColorStop(1, alpha(theme.colors.alpha.trueWhite[30], 0));

    return {
      datasets: [
        {
          data: dataProp,
          backgroundColor: primaryGradient,
          borderColor: theme.colors.alpha.trueWhite[70],
          pointBorderColor: theme.colors.alpha.trueWhite[70],
          pointBorderWidth: 0,
          pointRadius: 0,
          pointHoverRadius: 0,
          pointHoverBackgroundColor: theme.colors.alpha.trueWhite[70],
          pointHoverBorderColor: theme.palette.common.white,
          pointHoverColor: theme.colors.alpha.trueWhite[70],
          pointHoverBorderWidth: 2,
          borderWidth: 1,
          pointBackgroundColor: theme.palette.common.white
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    legend: {
      display: false
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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
            display: false,
            beginAtZero: true
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            display: false,
            beginAtZero: true
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
      <Line data={data} options={options} />
    </div>
  );
};

PageHeaderChart.propTypes = {
  data: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default PageHeaderChart;
