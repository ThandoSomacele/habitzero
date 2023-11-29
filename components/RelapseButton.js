import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';

function RelapseButton({ setRelapseDate }) {
  const getCurrentDate = (addDay = 0) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate() + addDay;

    // Format the date as needed (e.g., YYYY-MM-DD)
    const formattedDate = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;

    return formattedDate;
  };

  //  Relapse button handler
  const relapseHandler = () => {
    setRelapseDate(getCurrentDate());
  };

  return (
    <Pressable
      onPress={() => {
        alert(
          "Noted in the calendar. 😔 \nDon't be too hard on yourself, \ntommorow is another opportunity.🙂 \nTry and note the events before you relapsed and try to avoid this next time."
        );
        relapseHandler();
      }}
      style={{
        backgroundColor: 'white',
        borderColor: '#DC7272',
        borderWidth: 4,
        borderRadius: 100,
        padding: 2,
        ...styles.center,
        elevation: 5,
      }}>
      <View
        style={{
          ...styles.center,
          backgroundColor: '#DC7272',
          borderRadius: 100,
          padding: 15,
          width: '100%',
        }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Tap if you've relapsed today</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 70,
    padding: '10%',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RelapseButton;
