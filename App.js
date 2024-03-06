import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function App() 
{
  const conjuntos = ['hc0001','hc0002','hc0003','hc0004']
  const maquina =[
    {patrimonio:'29000', descricao: 'gabinete I3'},
    {patrimonio:'29001', descricao: 'gabinete I3'},
    {patrimonio:'29002', descricao: 'gabinete I3'},
    {patrimonio:'29003', descricao: 'gabinete I5'},
    {patrimonio:'29005', descricao: 'gabinete I5'}
  ]
  return (
    <View>
      <TextInput placeholder='Ex: hc0000'/>
      <Text>Ola mundo</Text>

      <TouchableOpacity>
        <Text>Pesquisar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'black'
  }
})