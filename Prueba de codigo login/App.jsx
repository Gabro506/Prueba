import Dashboard from "./dashboard";

function App (){
    return (
        <BrowserRoter>
            <Routes>
                <Route path="/" element={<Login/>}>
                <Route path="/dashboard" element={<Dashboard/>}>
            </Routes>
        </BrowserRoter>
    );
}

export default App