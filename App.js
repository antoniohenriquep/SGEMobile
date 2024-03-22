import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



export default function App() 
{
  const conjuntos = [
    {name:'hc0001',equipamentos:[

    ]}
  ]
  const maquina =[
    {patrimonio:'29000', descricao: 'gabinete I3'},
    {patrimonio:'29001', descricao: 'Monitor'},
    {patrimonio:'29002', descricao: 'Estabilizador'},
    {patrimonio:'29003', descricao: 'gabinete I5'},
    {patrimonio:'29005', descricao: 'gabinete I5'}
  ]

  const [searched, setSearched] = useState(false)
  const [selected,setSelected] = useState(maquina[0].patrimonio)
  async function handleSearch()
  {
    setSearched(true)
  }

  async function handleSwitchEquip()
  {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Conjunto</Text>
      <TextInput 
      placeholder='Ex: hc0000'
      style={styles.input}/>  

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Pesquisar</Text>
      </TouchableOpacity>

      {searched && 
      (
      <>
      
      <View style={styles.pickerArea}>
      <Text style={styles.label}>Equipamento tirado</Text>
        <View style={styles.picker}>
          <Picker
          onValueChange={setSelected}
          //style={styles.picker}
          selectedValue={selected}>
            <Picker.Item label={maquina[0].descricao} value={maquina[0].patrimonio}/>
            <Picker.Item label={maquina[1].descricao} value={maquina[1].patrimonio}/>
            <Picker.Item label={maquina[2].descricao} value={maquina[2].patrimonio}/>
          </Picker>
        </View>

        <Text style={styles.label}>Novo equipamento</Text>
        <View style={styles.picker}>
          <Picker
          onValueChange={setSelected}
          //style={styles.picker}
          selectedValue={selected}>
            <Picker.Item label={maquina[0].descricao} value={maquina[0].patrimonio}/>
            <Picker.Item label={maquina[1].descricao} value={maquina[1].patrimonio}/>
            <Picker.Item label={maquina[2].descricao} value={maquina[2].patrimonio}/>
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSwitchEquip}>
        <Text style={styles.buttonText}>Realizar movimentação</Text>
      </TouchableOpacity>
      </View>
      </>
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
    padding:10,
    alignItems:'center',
  },
  input:{
    borderWidth:0.2,
    width:'90%',
    height:50
  },
  label:{
    fontSize:22,
    fontWeight:'bold',
    color:'#000'
  },
  button:{
    backgroundColor:'#0407ff',
    width:'90%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    marginTop:10
  },
  buttonText:{
    fontSize:18,
    color:'#fff'
  },
  picker:{
    width:'90%',
    borderWidth:0.2,
    borderRadius:4,
    marginBottom:25
  },
  pickerArea:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20
  }
})