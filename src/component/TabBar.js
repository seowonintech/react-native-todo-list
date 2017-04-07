import React, { Component } from 'react';
import { Text, View, Navigator, NativeModules } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements'

class TabBar extends Component {
  constructor() {
    super()
    this.state = {
      selectedTab: 'profile',
    }
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }

  render() {
    const { selectedTab } = this.state;
    return (
      < Tabs >
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
          selected={selectedTab === 'feed'}
          title={selectedTab === 'feed' ? 'FEED' : null}
          renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='whatshot' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
          onPress={() => this.changeTab('feed')}>          
          <Text>a</Text>
        </Tab>        
        <Tab
          titleStyle={{ fontWeight: 'bold', fontSize: 10 }}
          selectedTitleStyle={{ marginTop: -1, marginBottom: 6 }}
          selected={selectedTab === 'profile'}
          title={selectedTab === 'profile' ? 'PROFILE' : null}
          renderIcon={() => <Icon containerStyle={{ justifyContent: 'center', alignItems: 'center', marginTop: 12 }} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('profile')}>          
          <Text>b</Text>
        </Tab>
      </Tabs >
    );
  }
}

export default TabBar;