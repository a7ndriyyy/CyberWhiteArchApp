import { useEffect, useState } from "react";


function App() {
    const [data, setData] = useState(null);
    
    useEffect(() =>{
        fetch("http://localhost:8000/api/data")
        .then((res) => res.json())
        .then((data) => setData(data.message))
        .catch((err) => console.error("Error fetching data.",err));
    }, []);

    return <div>{data ? data : "Loading..."}</div>
}

export default App;