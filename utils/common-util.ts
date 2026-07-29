import cryptoJs from 'crypto-js'


export default class CommonUtils{
private secretkey : string

constructor (){
  //  this.secretkey = process.env.SECRET_KEY ? process.env.SECRET_KEY : ""
    
  if(process.env.SECRET_KEY){
        this.secretkey =  process.env.SECRET_KEY
    } 
    else{
        throw new Error('Pleas provide secret key while starting excution')
    }

}
    public encryptData(data: string){
        const encryptedData = cryptoJs.AES.encrypt(data,this.secretkey).toString()

        console.log(encryptedData)
        return encryptedData

    }

    public decryptData(encData: string){
      const decryptedData =  cryptoJs.AES.decrypt(encData, this.secretkey).toString(cryptoJs.enc.Utf8)
      return decryptedData

    }

}