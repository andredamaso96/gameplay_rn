import React, { useState } from "react";
import { 
    View, 
    Text, 
    Image
} from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export const SignIn = () => {
    
    return (
       <View style={styles.container}>
           
           <Image source={IllustrationImg} style={styles.image} resizeMode="stretch"/>

           <View style={styles.content}>
               <Text style={styles.title}>
                    Organize {'\n'}
                    seus jogos {'\n'}
                    facilmente
               </Text>

               <Text style={styles.subtitle}>
                   Crie grupos para jogar os jogos {'\n'}
                   favoritos com seus amigos
               </Text>

               <ButtonIcon title="Entrar com Discord" activeOpacity={0.7}/>
           </View>
       </View>
    );
}
