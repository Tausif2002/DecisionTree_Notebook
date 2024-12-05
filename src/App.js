import Layout from './components/Layout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Terminology from './pages/Terminology'
import Introduction from './pages/Introduction'
import Story from './pages/Story'
import DecisionML from './pages/DecisionML'
import UsefullnessDT from './pages/UsefullnessDT'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/introduction' element={<Introduction />} />
                    <Route path='/story' element={<Story />} />
                    <Route path='/terminologies' element={<Terminology />} />
                    <Route path='/decision-tree-in-ai' element={<DecisionML />} />
                    <Route path='/usefullness' element={<UsefullnessDT />} />
                    <Route
                        path="*"
                        element={<Navigate to="/introduction" />}
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
