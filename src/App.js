import "./App.css";
import Todo from "./components/todo/Todo";
// import { legacy_createStore as createStore } from "redux";
// import reducer from "./redux"
import { Provider } from "react-redux";
import {store} from "./redux"



function App() {
//? Store oluşturduk.
  // const store = createStore(reducer)
  return (
    <div className="app">

      {/* Store ile tum uygulamayı sarmalladık */}
      <Provider store={store}>
  
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
