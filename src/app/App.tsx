import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './components/MainPage/MainPage'
import { ScrollToTop } from './hooks/useScrollToTop'
import { SearchPage } from './components/SearchPage/SearchPage'
import { NewsPage } from './components/NewsPage/NewsPage'

export function App() { 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/:searchRequest' element={<SearchPage />} />
          <Route path='/news/:newsId' element={<NewsPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
