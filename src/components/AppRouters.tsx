import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout'
import { AudioPage } from '../pages/AudioPage/AudioPage'
import { Navigate } from 'react-router-dom'
import { TodoPage } from './../pages/TodoPage';

export const AppRouters: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<AudioPage />} />
                <Route path='todos' element={<TodoPage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Route>
        </Routes>
    )
}
