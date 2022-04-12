import { FC } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import { useTheme } from '@mui/material';

interface Block2ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block2Chart: FC<Block2ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        label: 'Previous Period',
        backgroundColor: 'transparent',
        data: dataProp.previous,
        borderColor: theme.palette.success.main,
        pointBorderColor: theme.palette.common.white,
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointHoverBackgroundColor: theme.palette.success.main,
        pointHoverBorderColor: theme.palette.common.white,
        pointHoverColor: theme.palette.success.main,
        pointHoverBorderWidth: 4,
        pointBackgroundColor: theme.palette.success.main,
        type: 'line'
      },
      {
        label: 'Current Period',
        backgroundColor: theme.palette.info.light,
        data: dataProp.current,
        barThickness: 22,
        maxBarThickness: 22,
        barPercentage: 0.6,
        categoryPercentage: 0.6
      }
    ],
    labels
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cornerRadius: 6,
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
            padding: 12,
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
            maxTicksLimit: 5
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
      <Bar data={data} options={options} />
    </div>
  );
};

Block2Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block2Chart;
