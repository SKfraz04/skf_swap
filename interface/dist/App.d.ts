import ITheme from './definitions/theme-interface';
import { SwapProviderInterface } from './context/swap.context';
interface AppProps extends SwapProviderInterface {
    theme?: ITheme;
}
declare const App: (props: AppProps) => JSX.Element;
export default App;
