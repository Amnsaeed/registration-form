import FormList from "./FormList";
import { useState } from "react";

const Home = () => {

  const [isPending, setIspending] = useState(false);
    

  return ( 

    <div>

        
          <FormList />
        


    </div>



   );
}
 
export default Home;