import React from 'react'
import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";


export class AuthService{
    account;
    constructor(){
        const client=new Client();
        client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.account=new Account(client);
    }

    async createAccount({email,password,name}){
        try{
            userAccount= await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                //Call another method to log in 
                //User who created account should be logged in after successful creation of new account
                return this.login(email,password)
            }
            else{
                return userAccount
            }
        }
        catch(error){
            console.log("APPWRITE AUTH SERVICE :: createAccount :: ",error)
            return false
        }

    }

    async login({email,password}){
        try {
            return await this.account.createEmailSession(email,password)          
        } catch (error) {
            console.log("APPWRITE AUTH SERVICE :: login :: ",error)
            return false
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }
        catch(error){
            // console.log("APPWRITE AUTH SERVICE :: getCurrentUser :: ",error)
            return false
        }
    }

    async logout(){
        try{
            await this.account.deleteSessions()
        }
        catch(error){
            console.log("APPWRITE AUTH SERVICE :: logout :: ",error)
            return false
        }
    }
}
const authService=new AuthService()
export default authService
