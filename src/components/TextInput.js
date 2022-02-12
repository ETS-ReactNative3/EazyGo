import React from 'react';
import {TextInput} from 'react-native-paper';

const TextInputPaper = ({label, text, ref, keyboardType, secureTextEntry,style,onChange}) => {
  const onChangeHandler = value =>{
    onChange(value);
  }
  return (
    <TextInput
      label={label}
      value={text}
      ref={ref}
      mode={"outlined"}
      onChangeText={text => onChangeHandler(text)}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      style={style}
    />
  );
};

export default TextInputPaper;
