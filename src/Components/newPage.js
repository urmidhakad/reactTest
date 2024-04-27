import Navbar from "./navbar";
import video from "../utils/video.mp4"

function Page3(){
    return(
    <div>
    <Navbar/>
    <div className="arrange">
        <div>
            <h1>Learn Design with Nia Matos</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
                laborum cupiditate possimus labore, hic temporibus velit dicta earum
                suscipit commodi eum enim atque at? Et perspiciatis dolore iure
                voluptatem.
            </p>
            <div className="search">
            <input type="text" placeholder="Search Course" name="search"  />
            <button type="button">Search</button>
            </div>
        </div>
        <video controls className="videoPlayer" src={video}></video>
    </div>
    </div>

    );
}

export default Page3;