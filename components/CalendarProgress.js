import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { formatDate, generateLostDays, generateWonDays } from '../utils/dateUtils';
import RelapseButton from './RelapseButton';

function CalendarProgress({ relapseDates = [], onAddRelapseDate, startDate }) {
  const [relapseDate, setRelapseDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  // Handler to add relapse date
  const handleRelapseDate = (dateString) => {
    setRelapseDate(dateString);
    if (onAddRelapseDate) {
      onAddRelapseDate(dateString);
    }
  };

  // Set initial month
  useEffect(() => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const now = new Date();
    setCurrentMonth(`${months[now.getMonth()]} ${now.getFullYear()}`);
  }, []);

  const wonDays = generateWonDays(relapseDates, startDate);
  const lostDays = generateLostDays(relapseDates);

  const datesToMArk = {
    ...wonDays,
    ...lostDays,
    // Current relapse being marked (before it's saved to state)
    ...(relapseDate && { [relapseDate]: { selected: true, disableTouchEvent: true, selectedColor: '#DC7272' } }),
  };

  return (
    <View style={{ width: '100%', flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 35 }}>
      <Calendar
        monthFormat={'MMMM yyyy'}
        onMonthChange={month => {
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          const date = new Date(month.dateString);
          setCurrentMonth(`${months[date.getMonth()]} ${date.getFullYear()}`);
        }}
        hideArrows={false}
        hideExtraDays={false}
        disableMonthChange={false}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={false}
        onPressArrowLeft={subtractMonth => subtractMonth()}
        onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        enableSwipeMonths={true}
        markedDates={datesToMArk}
        theme={{
          arrowColor: '#47A8BD',
          monthTextColor: '#47A8BD',
          textMonthFontSize: 18,
          textMonthFontWeight: 'bold',
        }}
      />
      <RelapseButton setRelapseDate={handleRelapseDate} />
    </View>
  );
}

const styles = StyleSheet.create({
  monthHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#47A8BD',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default CalendarProgress;
