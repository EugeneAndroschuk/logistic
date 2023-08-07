
import axios from "axios";
const instance = axios.create({
//   baseURL: "https://api.example.com",
});
const AUTH_TOKEN = "2VYL3JJIVGO000003374";

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";


const CityFinder = () => {
    async function getCity() {
      try {
        const response = await instance.get(
          "https://api.lardi-trans.com/v2/references/towns/by/name?language=uk&query=kras&limit=5"
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }
    return (
      <div>
        <button onClick={()=>getCity()}>Find</button>
      </div>
    );
}

export default CityFinder;