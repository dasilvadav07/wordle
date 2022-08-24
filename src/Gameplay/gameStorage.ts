
export class GameStorage {

    private static storageData : StorageData;

    private static tryInitialize() : boolean
    {
        let json = localStorage.getItem("data");
        let data : string = JSON.parse(json);
        this.storageData = new StorageData();
        Object.assign<StorageData, String>(this.storageData, data);
        
        return this.storageData !== null;
    }

    public static getWords() : string[]{
        if(this.tryInitialize()){
            return this.storageData.words;
        }
    }

    public static getTries() : number{
        if(this.tryInitialize()){
            return this.storageData.tries;
        }
    }

    public static saveWord(word : string){
        if(this.tryInitialize()){
            this.storageData.addWord(word);
            this.updateStorage();
        }
    }

    public static increaseTries()
    {
        if(this.tryInitialize()){
            this.storageData.addTries();
            this.updateStorage();
        }
    }

    private static updateStorage()
    {       
        let json = JSON.stringify(this.storageData)
        localStorage.setItem("data", json);
        this.tryInitialize();
    }
}

export class StorageData{
    public words : string[];
    public tries : number;

    constructor(){
        this.words = [];
        this.tries = 0;
    }

    public addWord(word : string){
        this.words.push(word);
    }

    public addTries(){
        this.tries += 1;
    }
}