import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class AppWriteConfig{
    client=new Client()
    storage;
    databases;

    constructor(){
        this.client.setEndpoint(conf.appwriteURL).setProject(conf.appwriteProjectId);
        this.storage=new Storage(this.client)
        this.databases=new Databases(this.client)
    }

    //featured image is the id of the image file uploaded to the storage
    async createPost({title,slug,content,featuredImage,status}){
        try{
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,ID.unique(),{
                title,slug,content,featuredImage,status
            })
        }
        catch(error){
            console.log("APPWRITE SERVICE :: createPost :: ",error)
            return false
        }
        
    }

    async updatePost(postId,{title,slug,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,postId,{
                title,slug,content,featuredImage,status
            })
        } catch (error) {
            console.log("APPWRITE SERVICE :: updatePost :: ",error)
            return false
        }
        
    }

    async deletePost(postId){
        try{
            await this.databases.deleteDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,postId)
            return true;
        }
        catch (error) {
            console.log("APPWRITE SERVICE :: deletePost :: ",error)
        }
        return false;
    }

    async getPost(postId){
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,postId)
        }catch (error) {
            console.log("APPWRITE SERVICE :: getPost :: ",error)
            return false;
        }
    }

    async getPosts(queries){
        const exactQuery=[...queries,Query.orderAsc("title"),Query.equal("status", "active")]
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,conf.appwriteCollectionId,exactQuery)
        } catch (error) {
            console.log("APPWRITE SERVICE :: getPosts ::",error)
            return false
        }
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(conf.appwriteBucketId,ID.unique(),file)
        } catch (error) {
             console.log("APPWRITE SERVICE :: uploadFile ::",error)
             return false
        }
    }

    async deleteFile(fileId){
        try{
            return await this.storage.deleteFile(conf.appwriteBucketId,fileId)
        }catch(error){
            console.log("APPWRITE SERVICE :: uploadFile ::",error)
            return false
        }
    }

    async getFilePreview(fileId){
        try{
            return await this.storage.getFilePreview(conf.appwriteBucketId,fileId)
        }catch(error){
            console.log("APPWRITE SERVICE :: getFilePreview ::",error)
            return false
        }
    }

    async getFile(fileId){
        try{
            return await this.storage.getFileView(conf.appwriteBucketId,fileId)
        }catch(error){
            console.log("APPWRITE SERVICE :: uploadFile ::",error)
            return false
        }
    }
}

const service=new AppWriteConfig()
export default service