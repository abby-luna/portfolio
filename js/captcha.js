// I felt like the captcha belonged in a class definition 
// x.getAnswer() seemed intuitve to me

// i also edited how it blited text, I realised it wasnt perfectly centered when resizing, 
// in addition to this, i changed code to be a string rather than an array of characters

// i also wanted it to blend with its surrondings (a litle bit counterinutive)
// i felt like obscuring the text too much would cuase an accesability issue 
// i found it difficult to navigate this issue, becuase one side of me wanted to make the text 
// obsucre

// however i found that when i obsured the text, the individual i used to test it (my mother, bad eyesight) was not able to read it
// this lead me to decide to minimally obsure it, but make it uncopyable (without using console of course)

class captcha
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.font = "60px Roboto";
        this.ctx.textAlign = "center";   
        this.alphaNums = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        this.code = "";

    }

    generateCode()
    {
        this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.code = "";
        for (let i = 1; i <= 6; i++) 
        {
            this.code += this.alphaNums[Math.floor(Math.random() * this.alphaNums.length)];
        }
        this.ctx.fillStyle = "#DA7B93";
        this.ctx.fillText(this.code, this.canvas.width/2, this.canvas.height/2 + 15);
    }

    getAnswer()
    {
        return this.code;
    }
}