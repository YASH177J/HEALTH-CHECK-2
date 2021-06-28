import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header,Icon,Badge } from 'react-native-elements';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>HEALTH CHECK </Text>
      </View>
    );
  }
}

const BellIconWithBadge=(props)=>{
  return(
    <View>
      <Icon name='bell' type='font-awesome' color='#696969' size={25}
        onPress={() =>props.navigation.navigate('Notification')}/>
       <Badge
        value="1"
       containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
    </View>
  )
}


const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      rightComponent={<BellIconWithBadge {...props}/>}
      backgroundColor = "red"
    />
  );
};


const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'orange',
  },
  text:{
    color: 'white',
    padding: 40,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;