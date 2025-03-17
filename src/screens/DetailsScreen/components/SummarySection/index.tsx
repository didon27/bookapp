import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface SummarySectionProps {
  summary: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ summary }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text
        style={styles.summaryText}
      >
        {summary}
      </Text>
    </View>
  );
};

export default SummarySection;