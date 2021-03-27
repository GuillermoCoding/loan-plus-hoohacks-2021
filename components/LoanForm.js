import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Slider } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default function LoanForm({ navigation }) {
  const [loanAmount, setLoanAmount] = useState(100);
  const [numOfMonths, setNumOfMonths] = useState(2);

  const onCreateLoan = () => {
    navigation.navigate('Contract', { loanAmount, numOfMonths });
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Select Loan Amount</Text>
        <Text style={styles.subheading}>Move the slider to select loan amount</Text>
        <View style={styles.loanAmountContainer}>
          <Text style={styles.loanAmount}><Text style={styles.dollarSign}>$</Text>{loanAmount}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text>$100</Text>
          <Slider
            style={{width: 200, height: 40, marginRight: 5, marginLeft: 5}}
            minimumValue={100}
            maximumValue={2500}
            step={5}
            minimumTrackTintColor="#4EE5B7"
            maximumTrackTintColor="#d9d9d9"
            onValueChange={(value)=> {
              setLoanAmount(parseInt(value));
            }}
          />
          <Text>$2500</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Select Loan Due Date</Text>
        <Text style={styles.subheading}>Choose number of months</Text>
        <View style={styles.loanAmountContainer}>
          <Text style={styles.loanAmount}>{numOfMonths}</Text>
        </View>
        <View style={styles.sliderContainer}>
          <Text>2</Text>
          <Slider
            style={{width: 200, height: 40, marginLeft: 5, marginRight: 5}}
            minimumValue={2}
            maximumValue={24}
            minimumTrackTintColor="#4EE5B7"
            maximumTrackTintColor="#d9d9d9"
            onValueChange={(value)=> {
              setNumOfMonths(parseInt(value));
            }}
          />
          <Text>24</Text>
        </View>
     </View>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>
          <Text style={styles.boldText}>{numOfMonths} </Text>
          monthly payments of 
          <Text style={styles.boldText}> ${(loanAmount/numOfMonths).toFixed(2)}</Text>
        </Text>
      </View>
      <View style={styles.buttonOuterContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={onCreateLoan}>
          <Text style={styles.submitButtonText}>Get Loan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    margin: 20
  },
  heading: {
    fontWeight: "600",
    fontSize: 20
  },
  subheading: {
    fontWeight: "400",
    fontSize: 15,
    color: "gray",
    marginTop: 10
  },
  sliderContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loanAmountContainer: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 30

    //alignItems: "flex-end",
    //justifyContent: "flex-end"
  },
  loanAmount: {
    fontWeight: "300",
    fontSize: 50,
  },
  resultContainer: {
    marginTop: 40,
    margin: 12
  },
  result: {
    fontSize: 20,
    color: "gray",
    fontSize: 16
  },
  boldText: {
    fontWeight: "500",
    color: "black"
  },
  buttonOuterContainer: {
    justifyContent: "center",
    flexDirection: "row"
  },
  submitButton: {
    backgroundColor: "black",
    borderRadius: 50,
    marginTop: 25,
    paddingVertical: 18,
    margin: 12,
    width: 180,
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 24
  },
  dollarSign: {
    fontSize: 20,
    color: "gray"
  }
});
