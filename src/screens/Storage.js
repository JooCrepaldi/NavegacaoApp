import AsyncStorage from "@react-native-async-storage/async-storage";
//import { useEffect } from "react";

const [emailVal, setEmail] = useState('');
const [senhaVal, setSenha] = useState('');

const saveData = async() => {
    try {
        email = emailVal;
        senha = senhaVal;

        await AsyncStorage.setItem('usuario', JSON.stringify(email));//salva os dados?
        await AsyncStorage.setItem('usuario', JSON.stringify(senha));

        if (email && senha) {//verifica se existe um cadastro
            Alert.alert('Erro', 'Este email já está cadastrado.');
            return;
        }
    }catch(erro){
        console.error('Erro ao salvar:', erro);
    }
};


/*
    pegar os dados do input
    verifica se o usuário registrou pela primeira vez
    se for registrado de novo o mesmo input, pular tela de login
*/