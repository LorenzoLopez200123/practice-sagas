import { Provider } from "react-redux";
import { store } from "../store/store";


// create provider with store for react

interface PropsIProvider {
    children: React.ReactNode;
}

const ProviderRedux = ({ children } : PropsIProvider) => {
    return ( <Provider store={store}> {children} </Provider>)
};


// export the store and provider
export default ProviderRedux;