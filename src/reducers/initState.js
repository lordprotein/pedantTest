import {categories} from '../constants/categories'


export const initState = {
    settings: [
        {
            type: 'inputText',
            label: 'Поиск по тексту',
            value: false,
            id: 1,
        },
        {
            type: 'selectionList',
            label: 'Категории',
            value: false,
            list: [
                {
                    label: 'Все',
                    value: 'all',
                    id: 12434
                },
                {
                    label: categories[0].translate,
                    value: categories[0].title,
                    id: 2
                },
                {
                    label: categories[1].translate,
                    value: categories[1].title,
                    id: 3
                },
                {
                    label: categories[2].translate,
                    value: categories[2].title,
                    id: 4
                },
            ]
        },
        {
            type: 'checkbox',
            label: 'Горячий поиск',
            value: false,
            id: 5
        },
        {
            type: 'checkboxList',
            label: 'Доп. настройки',
            value: false,
            id: 6,
            list: [
                {
                    title: 'Первый',
                    value: false,
                    id: 7
                },
                {
                    title: 'Второй',
                    value: false,
                    id: 8
                },
                {
                    title: 'Третий',
                    value: false,
                    id: 9
                },
            ]
        }
    ]
}