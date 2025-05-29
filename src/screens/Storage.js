import AsyncStorage from "@react-native-async-storage/async-storage";

const [emailVal, setEmail] = useState('');
const [senhaVal, setSenha] = useState('');

//função para salvar o email
const saveEmail = async (e) => {
    try {
        await AsyncStorage.setItem('emailVal', JSON.stringify(e));
    } catch(error){
        console.log('Erro ao salvar o email', error);
    }
};

//função para salvar a senha
const saveSenha = async (e) => {
    try {
        await AsyncStorage.setItem('senhaVal', JSON.stringify(e));
    } catch(error){
        console.log('Erro ao salvar o senha', error);
    }
};

const loadHome = async () => {
    if(saveEmail !== null && saveSenha !== null){

    }
}