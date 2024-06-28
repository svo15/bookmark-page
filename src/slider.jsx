
function Toggle1(e){
    const add= e;
    add.target.classList.add("active")
    document.getElementById("t2").classList.remove("active")
    document.getElementById("t3").classList.remove("active")
    document.getElementById("tab1").style.display="block"
    document.getElementById("tab2").style.display="none"
    document.getElementById("tab3").style.display="none"
}
function Toggle2(e){
    const add= e;
    add.target.classList.add("active")
    document.getElementById("t3").classList.remove("active")
    document.getElementById("t1").classList.remove("active")
    document.getElementById("tab1").style.display="none"
    document.getElementById("tab2").style.display="block"
    document.getElementById("tab3").style.display="none"
}
function Toggle3(e){
    const add= e;
    add.target.classList.add("active")
    document.getElementById("t2").classList.remove("active")
    document.getElementById("t1").classList.remove("active")
    document.getElementById("tab1").style.display="none"
    document.getElementById("tab2").style.display="none"
    document.getElementById("tab3").style.display="block"
}

import "./slider.css"
function Slider(){
    return(<>
    <div className="select">
        <button id="t1" onClick={(e)=>Toggle1(e)}>Simple Bookmarking</button>
        <button id="t2" onClick={(e)=>Toggle2(e)}>Speedy Searhing</button>
        <button id="t3" onClick={(e)=>Toggle3(e)}>Easy Sharing</button>
    </div>
    <div className="change">
        <div className="tab1" id="tab1">
            <div className="tab1-flex">
                <img src="illustration-features-tab-1.svg" alt="" />
                <div className="text">
                    <h1>Bookmark in one click</h1>
                    <p>Organize your bookmarks however you like. Our simple drag-and-drop interface 
                    gives you complete control over how you manage your favourite sites.</p>
                    <button>More Info</button>
                </div>
            </div>
        </div>
        <div className="tab2" id="tab2">
            <div className="tab2-flex">
                <img src="illustration-features-tab-2.svg" alt="" />
                <div className="text">
                    <h1>Intelligent search</h1>
                    <p>Our powerful search feature will help you find saved sites in no time at all. 
                    No need to trawl through all of your bookmarks.</p>
                    <button>More Info</button>
                </div>
            </div>
        </div>
        <div className="tab3" id="tab3">
            <div className="tab3-flex" >
                <img src="illustration-features-tab-3.svg" alt="" />
                <div className="text">
                    <h1>Share your bookmarks</h1>
                    <p>Easily share your bookmarks and collections with others. Create a shareable 
                    link that you can send at the click of a button.</p>
                    <button>More Info</button>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default Slider