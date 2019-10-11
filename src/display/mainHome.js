import React, { useEffect } from 'react';
import Banner from '../containers/banner/index';
import DealsForToday from '../containers/dealsForToday/index';
import TabPanel from '../containers/tabPanel/tabpanel.index.js'
import scrollTop from '../utils/scrollTop';

let home = (props) => {
    scrollTop();
    return (
        <div>
            <Banner mainHome={true} />

            <DealsForToday
                route={'dotd'}
                dealName={'Deals For Today'}
                fetchBy={'deals_dotd'} />

            <Banner brandBanner={true} />

            <TabPanel
                route={'women'}
                viewAllName={'Shop for Women'}

                tabMenu={[
                    { name: 'Clothing & Apparel', keyName: 'c&a' },
                    { name: 'Footwear', keyName: 'footwear' },
                    { name: 'Accessories', keyName: 'acces' },
                    { name: 'Bags', keyName: 'bags' },
                ]} />

            <Banner fullBanner={true}
                name={'Lowest prices on Dress Combos'}
                offUpto={15}
                oldPrice={3500}
                newPrice={1500}
                validity={'25th July'} />

            <DealsForToday
                route={'tranding_clothes'}
                dealName={'Trending in Clothes'}
                fetchBy={'deals_tranding_clothes'} />

            <Banner
                sale={true}
                name={'Sale on chapal'}
                price={1500} />

            <TabPanel
                route={'men'}
                viewAllName={'Shop for Men'}
                left={true}
                tabMenu={[
                    { name: 'Clothing & Apparel', keyName: 'c&a' },
                    { name: 'Footwear', keyName: 'footwear' },
                    { name: 'Accessories', keyName: 'acces' },
                    { name: 'Bags', keyName: 'bags' },
                ]} />
        </div>
    )
}

export default home;