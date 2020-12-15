import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import { BarChart } from 'react-native-svg-charts';

function HomeBarChart({ chartDimensions, chartData }) {
  return chartDimensions ? (
    <BarChart
      data={chartData}
      svg={{
        fill: 'rgba(175, 220, 139, 0.7)',
      }}
      yMin={0}
      spacingInner={0.25}
      yAccessor={({ item }) => item.value}
      style={{
        borderRadius: 8,
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2B2B73" />
  );
}

HomeBarChart.propTypes = {
  chartDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,
};

HomeBarChart.defaultProps = {
  chartDimensions: null,
};

export default HomeBarChart;
