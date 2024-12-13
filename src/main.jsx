import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import Frontpage from './Components/frontpage/Frontpage.jsx'
import LoginPage from "./Components/LoginPage.jsx";
import ContactsPage from './Components/ContactsPage.jsx'
import CalendarPage from "@/Components/CalendarPage.jsx";
import SearchResultPage from "@/Components/searchResult/SearchResultPage.jsx";
import TestPage from "./Components/TestPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/kalender" element={<CalendarPage/>}/>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/result" element={<SearchResultPage/>}/>
                <Route path="/test" element={<TestPage/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
