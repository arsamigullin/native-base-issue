import React, { useEffect, useState } from 'react';
import { Container, Content, List, ListItem, Text, Header, Left, Right, Icon, Button } from 'native-base';


export default function SettingsScreen(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([{ itemindex: 1, value: 'a' }, { itemindex: 2, value: 'b' }])
  }, [items]);

  return (
    <Container>
      <Content>
        <List> 
          {items.map(item =>
            <ListItem key= {item.itemindex} onPress={()=>console.log('presssssed')}>
              <Left>
                <Text>{item.value}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          )}
        </List>
      </Content>
    </Container>
  );
}


