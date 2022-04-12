import { FC } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { alpha, useTheme } from '@mui/material';

interface Block7ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block7Chart: FC<Block7ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const primaryGradient = ctx.createLinearGradient(0, 0, 0, 180);

    primaryGradient.addColorStop(0, theme.colors.primary.dark);
    primaryGradient.addColorStop(1, alpha(theme.colors.primary.main, 0.5));

    return {
      datasets: [
        {
          label: 'Visitors',
          backgroundColor: primaryGradient,
          data: dataProp.current,
          barThickness: 18,
          maxBarThickness: 18
        }
      ],
      labels
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 44,
    animation: false,
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
            fontColor: theme.palette.text.secondary
          }
        }
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 15
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

Block7Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block7Chart;
