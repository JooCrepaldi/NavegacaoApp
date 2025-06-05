import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const [emailVal, setEmail] = useState('');
const [senhaVal, setSenha] = useState('');

//função para salvar o email
const saveEmail = async (e) => {
    try {
        await AsyncStorage.setItem('emailVal', JSON.stringify(e));//na função "salvarEmail", é utilizada o método setItem(pegando o valor de email) e transforma em string
    } catch (error) {
        console.log('Erro ao salvar o email', error);//se não der certo, é pegado um erro e printado
    }
};

//função para salvar a senha
const saveSenha = async (e) => {
    try {
        await AsyncStorage.setItem('senhaVal', JSON.stringify(e));//é feito a mesma coisa para o senha
    } catch (error) {
        console.log('Erro ao salvar o senha', error);
    }
};

useEffect(() => {// detector de eventos
    const loadHome = async () => {
        const storedEmail = await AsyncStorage.getItem('emailVal');//verificando o valor salvo
        const storedSenha = await AsyncStorage.getItem('senhaVal');

        if (saveEmail !== null && saveSenha !== null) {
            navigation.navigate('Home');
        } else {
            navigation.navigate('Login');
        }
    };

    loadHome();
}[navigation]);