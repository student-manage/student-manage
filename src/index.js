import dva from 'dva';
//import {createBrowserHistory as createHistory} from 'history';
import './index.css';
import App from './App';
// 1. Initialize
const app = dva();


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
//app.router(require('./router').default);
app.router(App)
// 5. Start
app.start('#root');
