class Tabs{
    constructor(container){
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init(){
        this.tabs.forEach(tab=>{
            tab.addEventListener('click',e=>{
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    }
    toggleTabs(e){
        this.tabs.forEach(tab=>tab.classList.remove('active'));
        e.target.classList.add('active'); 
    }
    toggleContent(e){
        this.container.querySelectorAll('.content').forEach(block=>block.classList.remove('active'));
        const selector = e.target.getAttribute('data-target');
        const disp = this.container.querySelector(selector);
        disp.classList.add('active');
    }
}

const tab = new Tabs(document.querySelector('.tabs'));
tab.init();