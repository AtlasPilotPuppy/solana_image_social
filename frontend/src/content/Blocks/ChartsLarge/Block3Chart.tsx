import { FC } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { useTheme, alpha } from '@mui/material';

interface Block3ChartProps {
  className?: string;
  data: any;
  labels: string[];
}

const Block3Chart: FC<Block3ChartProps> = ({
  data: dataProp,
  labels,
  ...rest
}) => {
  const theme = useTheme();

  const data = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext('2d');
    const primaryGradient = ctx.createLinearGradient(6, 6, 6, 280);
    primaryGradient.addColorStop(0, alpha(theme.colors.alpha.black[100], 1));
    primaryGradient.addColorStop(0.3, theme.colors.alpha.black[70]);
    primaryGradient.addColorStop(1, alpha(theme.colors.alpha.black[100], 0.2));

    const successGradient = ctx.createLinearGradient(6, 6, 6, 280);
    successGradient.addColorStop(0, alpha(theme.colors.primary.main, 1));
    successGradient.addColorStop(0.3, theme.colors.primary.light);
    successGradient.addColorStop(1, alpha(theme.colors.primary.main, 0.2));

    return {
      datasets: [
        {
          label: 'Total Loss',
          data: dataProp.total,
          borderWidth: 4,
          pointRadius: 0,
          backgroundColor: 'transparent',
          borderColor: theme.colors.warning.main,
          type: 'line'
        },
        {
          label: 'Net Profit',
          backgroundColor: successGradient,
          data: dataProp.previous,
          borderWidth: 2,
          pointRadius: 0,
          borderColor: theme.colors.primary.main
        },
        {
          label: 'Net Gains',
          backgroundColor: primaryGradient,
          data: dataProp.current,
          borderWidth: 2,
          pointRadius: 0,
          borderColor: theme.colors.alpha.black[100]
        }
      ],
      labels
    };
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
            zeroLineColor: theme.palette.divider
          },
          ticks: {
            padding: 12,
            fontColor: theme.palette.text.secondary,
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

Block3Chart.propTypes = {
  data: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default Block3Chart;
