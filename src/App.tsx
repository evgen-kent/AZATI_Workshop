import { RouterProvider } from "react-router-dom";
import router from "./routes";


const App = (): JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

