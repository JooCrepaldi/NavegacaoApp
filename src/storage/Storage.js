import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "../screens/LoginScreen";
//import { useEffect } from "react";

const [emailVal] = useState('');
const [senhaVal] = useState('');

let loginState;

const saveData = async() => {
    try {
        email = emailVal;
        senha = senhaVal;

        await AsyncStorage.setItem('usuario', JSON.stringify(email));//vai salvar o dado como uma string em arquivo json
        await AsyncStorage.setItem('usuario', JSON.stringify(senha));
        console.log('Dados salvos com sucesso!');
        loginState = true;
        await AsyncStorage.setIten('usuario', JSON.stringify(loginState));
    }catch(erro){
        console.error('Erro ao salvar:', erro);
    }
};

/*const getData = async() => {

}*/


/*
    pegar os dados do input
    verifica se o usuário registrou pela primeira vez
    se for registrado de novo o mesmo input, pular tela de login

    //asyncStorage.getIten
    setIten() é utilizado para a persistencia de dados localmente
*/