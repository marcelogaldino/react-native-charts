import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator } from 'react-native';

import { ProgressCircle } from 'react-native-svg-charts';

function GoalsPerformanceProgressChart({ chartDimensions, smallStroke }) {
  return chartDimensions ? (
    <ProgressCircle
      progress={0.75}
      progressColor="rgba(175, 220, 139, 1)"
      backgroundColor="transparent"
      strokeWidth={smallStroke ? 3 : 14}
      style={{
        width: chartDimensions.width,
        height: chartDimensions.height,
      }}
    />
  ) : (
    <ActivityIndicator size="small" color="#2B2B73" />
  );
}

GoalsPerformanceProgressChart.propTypes = {
  chartDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  smallStroke: PropTypes.bool,
};

GoalsPerformanceProgressChart.defaultProps = {
  chartDimensions: null,
  smallStroke: null,
};

export default GoalsPerformanceProgressChart;
