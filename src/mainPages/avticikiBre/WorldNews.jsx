import { useOutletContext } from "react-router-dom";
import NewsCars from "./NewsCars";
import "./WorldNews.css";

export default function WorldNews() {
  const [subtitle] = useOutletContext();

  
  return (
    <>
      <div className="world">
      
          {subtitle ? "СВЕТСКИ НОВИТЕТИ" : "WORLD NEWS"}
       
      </div>

      <div className="textOurTwo">
       
          <h3>
            {subtitle
              ? "'Ги апдејтуваме сите нови модели во светот на автичики'"
              : "'We update all the new models in the world of cars'"}
          </h3>
       
      </div>

      <div className="newWorld">
        <NewsCars />
      </div>
    </>
  );
}
