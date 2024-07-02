// import React from 'react';
// import { TextInput, View, Text, StyleSheet } from 'react-native';

// const CustomTextInput = ({
//   label,
//   value,
//   onChange,
//   placeholder,
//   errorMessage,
//   keyboardType = 'default',
//   secureTextEntry = false,
// }) => {
//   return (
//     <View style={styles.container}>
//       {label && <Text style={styles.label}>{label}</Text>}
//       <TextInput
//         style={[styles.input, errorMessage ? styles.errorInput : null]}
//         value={value}
//         onChangeText={onChange}
//         placeholder={placeholder}
//         keyboardType={keyboardType}
//         secureTextEntry={secureTextEntry}
//       />
//       {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 15,
//   },
//   label: {
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 4,
//   },
//   errorInput: {
//     borderColor: 'red',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginTop: 5,
//   },
// });

// export default CustomTextInput;

import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({
  label,
  value,
  onChange,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  errorMessage,
  isValid,
  validationMessage,
  pattern, // New prop for regex pattern
}) => {

  const validatePattern = () => {
    if (pattern && value.trim() !== '') {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        return false;
      }
    }
    return true;
  };

  const isValidInput = isValid && validatePattern();

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          errorMessage || !isValidInput ? styles.errorInput : null,
        ]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      {!isValidInput && validationMessage && (
        <Text style={styles.errorText}>{validationMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default CustomTextInput;

