import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({
  size = 'medium',
  variant = 'primary',
  kind = 'rounded',
  iconOnly = false,
  icon,
  text,
  onPress,
}) => {
  
  const sizeStyles = {
    small: {
      paddingHorizontal: 12,
      paddingVertical: 8,
    },
    medium: {
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    large: {
      paddingHorizontal: 20,
      paddingVertical: 12,
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      textColor: '#ffffff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
      textColor: '#ffffff',
    },
    warning: {
      backgroundColor: '#ffc107',
      borderColor: '#ffc107',
      textColor: '#212529',
    },
    success: {
      backgroundColor: '#28a745',
      borderColor: '#28a745',
      textColor: '#ffffff',
    },
  };

  const kindStyles = {
    rounded: {
      borderRadius: 20,
    },
    outlined: {
      borderWidth: 1,
    //   backgroundColor: 'transparent',
    },
  };

  const selectedSizeStyle = sizeStyles[size] || sizeStyles.medium;
  const selectedVariantStyle = variantStyles[variant] || variantStyles.primary;
  const selectedKindStyle = kindStyles[kind] || kindStyles.rounded;

  const renderContent = () => {
    if (iconOnly && icon) {
      return icon;
    } else {
      return (
        <View style={styles.buttonContent}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          {text && <Text style={[styles.buttonText, { color: selectedVariantStyle.textColor }]}>{text}</Text>}
        </View>
      );
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        selectedSizeStyle,
        {
          backgroundColor: selectedVariantStyle.backgroundColor,
          borderColor: selectedVariantStyle.borderColor,
        },
        selectedKindStyle,
        iconOnly && styles.iconOnlyButton,
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconOnlyButton: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});

export default CustomButton;

