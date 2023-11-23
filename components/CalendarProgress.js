import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

function CalendarProgress() {
  const [selected, setSelected] = useState('');

  return (
    <View style={{ width: '100%' }}>
      <Calendar
        // Initially visible month. Default = now
        // initialDate={'2023-11-26'}
        // Minimum date that can be selected, dates before minDate will be greyed out. Default = undefined
        // minDate={'2023-11-01'}
        // Maximum date that can be selected, dates after maxDate will be greyed out. Default = undefined
        // maxDate={'2023-11-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          setSelected(day.dateString);
          console.log('selected day', day);
        }}
        // Handler which gets executed on day-long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when the visible month changes in the calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
        renderArrow={direction => <Arrow />}
        // Do not show days of other months on the month page. Default = false
        hideExtraDays={false}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible on the calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday.dayNames and dayNamesShort should still start on Sunday
        firstDay={1}
        // Hide day names. Default = false
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receives a callback that can go back a month
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receives a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
        // Disable the left arrow. Default = false
        disableArrowLeft={true}
        // Disable the right arrow. Default = false
        disableArrowRight={true}
        // Disable all touch events for disabled days. can be overridden with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace the default month and year title with a custom one. the function receive a date as parameter
        renderHeader={date => {
          /*Return JSX*/
        }}
        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={false}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: '#DC7272' },
        }}
      />
    </View>
  );
}

export default CalendarProgress;