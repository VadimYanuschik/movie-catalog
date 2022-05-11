import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import './context'
import {Context} from './context';
import {useState} from 'react';

function App() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    return (
        <Context.Provider value={{
            results,
            setResults,
            isLoading,
            setIsLoading,
            searchTerm,
            setSearchTerm,
            page,
            setPage,
            totalResults,
            setTotalResults
        }}>
            <div className="App">
                <Header/>
                <Catalog/>
            </div>
        </Context.Provider>
    );
}

export default App;
