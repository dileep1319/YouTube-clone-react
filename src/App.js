import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
import Feed from "./components/Feed"
import SearchResults from "./components/SearchResults"
import VideoDetails from "./components/VideoDetails.jsx"
import { AppContext } from './context/contextApi';


const App = () => {
    return (


        <AppContext>
            <BrowserRouter>
                <div className='flex flex-col h-full'>
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route path="/searchResults/:searchQuery" element={<SearchResults />} />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>

            </BrowserRouter>
        </AppContext>
    )
};

export default App
