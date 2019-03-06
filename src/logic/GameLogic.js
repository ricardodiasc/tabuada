class GameLogic {
    /**
     * Construc a new game logic
     * 
     * @constructor
     */
    constructor(){
        this.gameStarted = false;
        this.gameOver = false;
        this.score = 0;
        this.n1 = 0;
        this.n2 = 0;
        this.result = '';

        this.record = 0;

        this.startGame.bind(this);
        this.testResult.bind(this);
    }

    /**
     * Start a new game
     */
    startGame() {
        this.gameInProgress = true;
        this.gameOver = false;
        this.score = 0;
        this._newChallenge();            
    }

    _newChallenge() {
        this.n1 = this._getRandom(10);
        this.n2 = this._getRandom(10);
        this.result = this.n1 * this.n2;
    }



    /**
     * Generate a random number between 0 and max parameter
     * 
     * @param {number} max max number generation from 0 
     */
    _getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    /**
     * Test if the guess maches with result expected
     * 
     * @param {number} guess 
     * @returns {boolean} - Return true if the guess maches with the expected result
     */
    testResult(guess) {
        if(guess === this.result) {
            this.score = this.score + 1;
            this._newChallenge();
        } else {
            this.gameInProgress = false;
            this.gameOver = true;
            if(this.score > this.record) {
                this.record = this.score;
            }
            this.gameInProgress = false;
        }
        return this.gameInProgress;
    }
}

export default GameLogic;