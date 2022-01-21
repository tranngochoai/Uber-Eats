import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        styles={{
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            marginRight: 10,
            alignItems: "center"
          },
          textInput: {
            borderRadius: 20,
            backgroundColor: "#eee",
            height: 38,
            fontWeight: "700",
            marginTop: 7
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
            borderColor: "#eee"
          }
        }}
				renderLeftButton={() => (
					<View>
						<Ionicons/>
					</View>
				)
				}
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en"
        }}
      />
    </View>
  );
}
