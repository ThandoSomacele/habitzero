import React, { useState } from 'react';
import { Button } from 'react-native';

function RelapseButton({ onRelapse }) {
  return <Button title='Tap if you relapsed' color={'#DC7272'} onPress={onRelapse} />;
}

export default RelapseButton;
