import { View, Text } from 'react-native'
import React from 'react'

const CustomeInput = ({value, setValue, 
  placeHolder, 
  keyBoardType,
returnKeyType,
secureTextEntry}) => {
  return (
    <View>
      <TextInput
            ref={inputUser}
            placeholder={placeHolder}
            keyboardType={keyBoardType}
            value={value}
            returnKeyType={returnKeyType}
            onChangeText={setValue}
            style={{marginStart: 5}}
            maxLength={20}
            width={'90%'}
            secureTextEntry={secureTextEntry}
            onSubmitEditing={() => handleFunction(inputPass)}
          />
    </View>
  )
}

export default CustomeInput