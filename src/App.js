import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Pagination from './components/Pagination/Pagination';

function App() {
    return (
        <div className="App">
            <Header/>
            <Catalog/>
            <Pagination/>
        </div>
    );
}

export default App;
