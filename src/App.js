import React,{useEffect,useState} from 'react';
import Main from './component/Main';
import CreateBlog from './component/CreateBlog';
import { Route, Switch } from 'react-router-dom';
import LogInPage from './component/LogInPage';
import Register from './component/Register';
import SingleBlog from './component/SingleBlog';
import {useSelector,useDispatch} from 'react-redux';
import UserSessionService from './service/UserSessionService';
import {isLogIn} from './action/index';

const App= () => {

    const service = UserSessionService.shared
    
    const dispatch = useDispatch();
    

    useEffect(()=>{
        const checkLogIn = async() => {
            //check login firebase state
             await service.authStateEvent.on('login',(user)=>{
                //alert('LOGGED IN');
                 dispatch(isLogIn());
                console.log(user)
            });

            //check log out firebase state
            await service.authStateEvent.on('login',(user)=>{
                //alert('LOGGED IN');
                console.log(user)
            });

            await service.authStateEvent.on('login',(user)=>{
                //alert('LOGGED IN');
                console.log(user)
            });

            service.authStateEvent.on('error', (error) => {
                alert(error.message)
            })

        }
        checkLogIn();

    },[])

    return (
        <Switch >
            <Route exact path = '/' component = {Main} />
            <Route exact path = '/createblog' component = {CreateBlog} />
            <Route exact path = '/login' component = {LogInPage} />
            <Route exact path = '/register' component = {Register} />
            <Route exact path = '/article/:id' component ={SingleBlog}/>
        </Switch>
    )
}

export default App
