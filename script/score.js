export class Score{
    constructor(){
        this.scoreBlock = document.getElementById('score-text');
        this.recordScoreBlock = document.getElementById('record-score-text');
        this.score = 0;
        if(localStorage.getItem('record')){
            this.recordScore = localStorage.getItem('record');
        }
        else{
            this.recordScore = this.score;
        }
        this.write();
    }

    updateRecordScore(){
        if(this.recordScore < this.score){
            this.recordScore = this.score;
            localStorage.setItem('record', this.recordScore);
        }
    }

    incScore(){
        this.score++;
        this.updateRecordScore();
        this.write();
    }
    
    write(){
        this.scoreBlock.textContent = "Score: " + this.score;
        this.recordScoreBlock.textContent = "Record: " + this.recordScore;
    }
}