import { DisplayAboutOurFood, DisplayCareers, DownloadApp, FindYourRestaurant, GetGiftCards, GetHomepage, ChangeLanguage, GetMcdelivery, GetMcvalueDeals, GetMyMcdonaldsRewards, SubmitOrderNow, DisplayOurMenu, ReturnToHomepage, Search, DisplaySignUpForEmail } from './index'
import { useState } from 'react'

const MenuHeader = () => {
    return (
        <div>
            <ul>
                <li>
                    <ChangeLanguage />
                    <DisplaySignUpForEmail />
                    <DisplayCareers />
                </li>
                <li>
                    <Search />
                    <FindYourRestaurant />
                    <SubmitOrderNow />
                </li>
            </ul>
            <ul>
                <li>
                    <DisplayOurMenu />
                    <DownloadApp />
                    <GetMyMcdonaldsRewards />
                    <GetMcvalueDeals />
                    <GetMcdelivery />
                    <DisplayAboutOurFood />
                    <GetGiftCards />
                </li>
            </ul>
        </div>
    )
};


export default MenuHeader