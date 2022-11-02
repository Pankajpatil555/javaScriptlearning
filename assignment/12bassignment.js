class bank{
    constructor(bankName,location,account_no,ifsc,interest_rate){
    this.bankName=bankName
    this.location=location
    this.account_no=account_no
    this.ifsc=ifsc
    this.interest_rate=interest_rate
    }

    

}
let axix_bank=new bank("axix bank","pune",12345678933,3366,"7%")
let sbi_bank=new bank("sbi bank","dadar",33225566998,2255,"5%")
let icici_bank=new bank("icici bank","thane",3322114455,5556,"12%")
let kotak_bank=new bank("kotak bank","bandra",3325555455,5256,"12%")
let hdfc_bank=new bank("hdfc bank","pimpri",33225252555,2256,"13%")
let punjab_bank=new bank("punjab bank","andheri",33222815455,2526,"15%")

const array=[axix_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    console.log(`${element.bankName} ,${element.location}`);
     
}
for (let item of array) {
    if (item==kotak_bank) {
        console.log(item);  
    }
}
for (const iterator of array) {
    console.log(iterator);
    
}

