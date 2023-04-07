// i didnt want to repeat img slider code, im happy with how this object turned out

class slider
{
    constructor(imageList, imageElement)
    {
        this.index = 0;
        this.imageList = imageList;
        this.imageElement = imageElement;
    }

    set()
    {
        this.imageElement.src = this.imageList[this.index];
    }
    next() 
    {
        if(this.index >= this.imageList.length-1)
        {
            this.index = 0;
        }
        else
        {
            this.index++;
        }
        this.set();
    }
    previous() 
    {
        if(this.index <= 0)
        {
            this.index = this.imageList.length-1;
        }
        else
        {
            this.index--;
        }
        this.set();
    }
};