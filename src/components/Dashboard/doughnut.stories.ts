import type { Meta, StoryObj } from '@storybook/react';

import DoughnutChart from './doughnut';

const meta = {
    title: 'COMPONENTS/Dashboard',
    component: DoughnutChart,
    tags: ['autodocs'],

} satisfies Meta<typeof DoughnutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

 const mockArticles = [
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Amir Tal, Hadas Gold, Richard Allen Greene",
        "title": "Benjamin Netanyahu admitted to hospital for medical evaluation - CNN",
        "description": "Israeli Prime Minister Benjamin Netanyahu was admitted to hospital suffering from suspected dehydration Saturday, his office said, as fierce heat grips the country.",
        "url": "https://www.cnn.com/2023/07/15/middleeast/netanyahu-admitted-hospital-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230715103015-benjamin-netanyahu-0316-file.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-07-15T16:22:00Z",
        "content": "Israeli Prime Minister Benjamin Netanyahu was admitted to hospital suffering from suspected dehydration Saturday, his office said, as fierce heat grips the country.\r\nNetanyahus initial tests came out… [+2275 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "New York Post"
        },
        "author": "Brooke Kato",
        "title": "'Botched' doc Terry Dubrow issues Ozempic warning after Lisa Marie Presley autopsy - New York Post ",
        "description": "“Nobody’s talking about this right now, but we need to talk about it.”",
        "url": "https://nypost.com/2023/07/15/botched-doc-issues-ozempic-warning-after-lisa-marie-presley-autopsy/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-oeyxj2rpk-1689434808076.jpg?quality=75&strip=all&1689421309&w=1024",
        "publishedAt": "2023-07-15T15:40:00Z",
        "content": "The price of Ozempic is already sky-high but experts warn extreme weight loss could also cost your life.\r\nDr. Terry Dubrow, the mastermind plastic surgeon behind the hit series “Botched,” is slamming… [+3103 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Variety"
        },
        "author": "J. Kim Murphy",
        "title": "Box Office: ‘Mission: Impossible — Dead Reckoning Part One’ Now Cruising to Projected $78 Million Five-Day Debut - Variety",
        "description": "Paramount’s “Mission: Impossible — Dead Reckoning Part One” is defusing a bit at the domestic box office, readjusting for an estimated $78 million gross over its five-day opening.…",
        "url": "https://variety.com/2023/film/box-office/mission-impossible-7-projected-opening-weekend-tom-cruise-1235670840/",
        "urlToImage": "https://variety.com/wp-content/uploads/2023/06/mi7.jpg?w=1000&h=563&crop=1",
        "publishedAt": "2023-07-15T15:22:00Z",
        "content": "Paramount’s “Mission: Impossible — Dead Reckoning Part One” is defusing a bit at the domestic box office, readjusting for an estimated $78 million gross over its five-day opening. That’d be a substan… [+6658 chars]"
    }
]

export const DesktopDoughnut: Story = {
    args: {
        articleList: mockArticles
    }
}