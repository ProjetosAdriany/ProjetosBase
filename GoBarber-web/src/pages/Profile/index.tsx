import React, {useCallback, useRef, ChangeEvent} from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import {  Link, useHistory } from 'react-router-dom';
import Api from '../../services/apiClient';
import { useToast } from '../../hooks/toast';

import { Container, Content, AvatarInput } from './styles';
import getValidationsErros from '../../utils/getValidationsErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import api from '../../services/apiClient';

interface IProfileFromData{
    name: string;
    email: string;
    old_password: string;
    password: string;
    password_confirmation: string;

}

const Profile: React.FC = () => {

    const formRef = useRef<FormHandles>(null);
    const { addToast } = useToast();
    const history = useHistory();
    const {user, updateUser } = useAuth();

    const updateData = {
        id: '1234',
        name: 'Adriany Aires',
        email: 'adrianyires@gmail.com',
        avatar_url: 'https://www.refinery29.com/images/9117820.jpg'
    };

    const handleSubmit = useCallback( async(data: IProfileFromData) => {
        try{
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório'), 
                email: Yup.string().required('E-mail Obrigatório').email('Digite um e-mail válido'),
                old_password: Yup.string(),
                password: Yup.string().when('old_password', {
                    is: val => !!val.length,
                    then: Yup.string().required('Campo Obrigatório'),
                    otherwise: Yup.string(),
                }),
                password_confirmation: Yup.string().when('old_password', {
                    is: val => !!val.length,
                    then: Yup.string().required('Campo Obrigatório'),
                    otherwise: Yup.string(),
                })
                .oneOf([Yup.ref('password')], 'Confirmação Incorreta'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            const { name, email, old_password, password, password_confirmation} = data;

            const formData = {
                name,
                email,
                ...(old_password ?
                {
                    old_password,
                    password,
                    password_confirmation
                }: {}),
            };

            // TODO: Dados fixos
            /* const response = await Api.put('/profile', formData);
                updateUser(response.data);
            */
            updateUser(updateData);
            history.push('/dashboard');
            addToast({
                type: 'success',
                title: 'Perfil Atualizado',
                description: 'Suas Informações do perfil foram atualizadas com sucesso'
            });

        }catch(err){
            console.log(err);
            if(err instanceof Yup.ValidationError){
                const errors = getValidationsErros(err);
                formRef.current?.setErrors(errors);
                return;
            }
            console.log(err);
            addToast({
                type: 'error',
                title: 'Erro ao Atualizar Perfil',
                description: 'Ocorreu um erro ao atualizar seu perfil.'
            });
        }
    }, [addToast, history, updateUser]);
    
    const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){

            const data = new FormData();
            data.append('avatar', e.target.files[0]);

            // TODO: Dados fixos
            /*api.patch('/users/avatar', data).then(() => {
                updateUser(response.data);
                addToast({
                    type: 'success',
                    title: 'Avatar atualizado'
                })
            });*/            
            updateUser(updateData);
            addToast({
                type: 'success',
                title: 'Avatar atualizado'
            })
            console.log(e.target.files);
        }
    }, [addToast, updateUser]);
    
    return (
        <Container>
            <header>
                <div>
                    <Link to="/dashboard"> <FiArrowLeft /> </Link>
                </div>
            </header>
            <Content>
                <Form ref={formRef} initialData={{
                        name: user.name,
                        email: user.email
                    }} 
                    onSubmit={handleSubmit}>
                    <AvatarInput>
                        <img src={user.avatar_url} alt={user.name}/>
                        <label htmlFor="avatar">
                            <FiCamera />
                        <input type="file" id="avatar" onChange={handleAvatarChange}/>
                        </label>
                    </AvatarInput>
                    <h1>Meu Perfil</h1>
                    <Input icon={FiUser} name="name" placeholder="Nome" />
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} containerStyle={{marginTop: 24 }}  name="old_password" placeholder="Senha Atual" type="password"/>
                    <Input icon={FiLock} name="password" placeholder="Nova Senha" type="password"/>
                    <Input icon={FiLock} name="password_confirmation" placeholder="Confirmar Senha" type="password"/>
                    <Button type="submit">Confirmar Mudanças</Button>
    
                </Form>
            </Content>
        </Container>
    );

};




export default Profile;