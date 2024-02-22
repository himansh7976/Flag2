import { useEffect, useState } from "react";
import "./Flag.css"
function Flag() {
    const [data, setdata] = useState("");



    function chnage(val) {
        console.log(val.target.value);
        setdata(val.target.value);

    }
    const [print, setprint] = useState("");

    function clicked() {
        setprint(data);
        // console.log(print)

    }

    const [featching, setfeatching] = useState([]);

    useEffect(() => {
        const fet = async () => {
            let res = await fetch("https://flagcdn.com/en/codes.json");

            // console.log(res);
            let jso = await res.json();
            // console.log(jso)
            setfeatching(jso)
            console.log(featching)




        }
        fet();

    }, [])


    const [pt, setpt] = useState("https://flagcdn.com/256x192/ua.png")


    useEffect(() => {
        for (let i in featching) {
            console.log(i);
            if (print === featching[i]) {
                setpt(i);
                console.log(pt)

            }
            // if (print === featching[i]) {
            //     setpt(i);
            //     console.log(i);


            // }
        }

    }, [print, featching])
    return (
        
        <div className="container">.

            <div className="input">
                <h1>{data}</h1>
                <input type="text" placeholder="Enter Flag code " onChange={chnage}></input>
                <button onClick={clicked}>SUBMIT</button>
            </div>
            <div className="input">
                <img src={`https://flagcdn.com/256x192/${pt}.png`}></img>
            </div>

        </div>

    )
}
export default Flag;