import { categories } from "./categories";

export const settingsListConst = [
    {
        type: 'inputText',
        label: 'Поиск по тексту',
        value: false,
        id: '0bgp2l',
    },
    {
        type: 'selectionList',
        label: 'Категории',
        value: false,
        id: 'jgi3ijwd',
        list: [
            {
                label: 'Все',
                value: 'all',
                id: 'kdvjnms1'
            },
            {
                label: categories[0].translate,
                value: categories[0].title,
                id: 'gvjvmnnb'
            },
            {
                label: categories[1].translate,
                value: categories[1].title,
                id: '139rjfrwj'
            },
            {
                label: categories[2].translate,
                value: categories[2].title,
                id: 'fgmbmmkvv'
            },
        ]
    },
    {
        type: 'checkbox',
        label: 'Горячий поиск',
        value: false,
        id: 'prprprpwpd'
    },
    {
        type: 'checkboxList',
        label: 'Доп. настройки',
        value: false,
        id: 'g2i23if',
        list: [
            {
                title: 'Первый',
                value: false,
                id: 'fd1i4gubvcxa'
            },
            {
                title: 'Второй',
                value: false,
                id: 'cmxzczc1'
            },
            {
                title: 'Третий',
                value: false,
                id: 'd4o919e31'
            },
        ]
    }
]