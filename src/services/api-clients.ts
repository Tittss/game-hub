import axios from "axios";

export default axios.create({
        baseURL: "https://api.rawg.io/api",
        params : {
            //baseURL: "https://api.rawg.io/api",
            key: 'ea70cf97363749bc8239fb708de429bf',
        },
});