import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function Contract(props) {
  const loanAmount = props.route.params.loanAmount;
  const numOfMonths = props.route.params.numOfMonths;
  console.log(loanAmount)
  console.log(numOfMonths)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Terms of Service</Text>
        
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.mainBodyText}>
                <Text style={styles.contractSections}>I. THE PARTIES</Text>
                {"\n"}
                I, the undersigned, John Holmes, Identity Number 00124587,
                with permanent residence on East Boulevard Nr. 45, apt. 42, Washington (hereinafter referred to as the ‘Debtor’)
                do hereby acknowledge myself to be truly and lawfully indebted to{"\n"}
                {"\n"}
                James Van Brijk, Identity Number 00215125, Address West Street nr. 1245, Washington (hereinafter referred to as the Creditor)
                in the sum of USD 500 (five hundred US dollars) together with 0% interest signed in Washington, on January 9, 2021.{"\n"}
                {"\n"}
                IN WITNESS WHEREOF
                {"\n"}
                1. Ms. Yana Ivanova
                {"\n"}
                2. Mr. Christian Mayer{"\n"}
                {"\n"}

                <Text style={styles.contractSections}>II. PAYMENT</Text>
                {"\n"}

                The Loan Amount shall be due and payable, including the principal and any accrued interest, under the following re-payment plan:{"\n"}
                {"\n"}
                Monthly payment of $350 beginning on March 31, 2021 and to be paid on the 31st of every month until the balance is paid ending on August 31, 2021.
              </Text>
            </ScrollView>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.declineButtonContainer}>
              <Text style={styles.disagreeButtonText}>Decline</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.agreeButtonContainer}>
              <Text style={styles.agreeButtonText}>Agree</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  mainBodyText: {
    fontSize: 18,
    
  },
  contractSections: {
    fontSize: 18,
    fontWeight: "600"
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 5
  },
  scrollView: {
    marginHorizontal: 30,
    backgroundColor: "#f2f2f2",
    borderRadius: 6
  },
  agreeButtonContainer: {
    elevation: 8,
    backgroundColor: "#4EE5B7",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 12,
    width: 180,
  },
  declineButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffff",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 12,
    width: 180,
  },
  agreeButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  disagreeButtonText: {
    fontSize: 18,
    alignSelf: "center",
    textTransform: "uppercase"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
