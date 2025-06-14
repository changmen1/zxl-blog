import type { FC } from "react";
// import { NavLink } from "react-router-dom";

const Header: FC = () => {
    return (
        // <>
        //     <header className="sticky top-0  z-10 bg-customGray border-b shadow-sm px-3 py-2 flex justify-between items-center">
        //         <div className="text-white text-xl font-bold">Zxl Blog</div>
        //         <nav className="space-x-6">
        //             <NavLink
        //                 to="/"
        //                 end
        //                 className={({ isActive }) =>
        //                     isActive
        //                         ? "text-white"
        //                         : "text-gray-600 hover:text-blue-500 transition"
        //                 }
        //             >
        //                 主页
        //             </NavLink>
        //             <NavLink
        //                 to="/blog"
        //                 className={({ isActive }) =>
        //                     isActive
        //                         ? "text-white"
        //                         : "text-gray-600 hover:text-blue-500 transition"
        //                 }
        //             >
        //                 关于我
        //             </NavLink>
        //         </nav>
        //     </header>
        // </>
        <div className="z-50 h-[50px] w-full flex-none select-none md:h-[140px]">
            <div className="fixed left-0 top-0 z-50 h-[50px] w-full shadow-2xl shadow-black/10 md:h-[140px]">
                <div className="h-[50px] bg-white-contrast-1 md:h-10 dark:bg-black-bg">
                    <div className=" relative mx-auto h-full w-full px-4 md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]">
                        <span className="undefined">
                            <div className="flex h-full w-full justify-center">
                                <div className="h-full cursor-pointer">
                                    <div className="h-full w-56">
                                    </div>
                                </div>
                                <div className="sm:inline-flex md:inline-flex lg:inline-flex xl:inline-flex 2xl:inline-flex"></div>
                                <div className="mr-0 h-full md:ml-auto">
                                    <ul className="flex h-full items-center justify-center">
                                        <li
                                            className="ml-8 flex lg:inline-flex relative cursor-pointer text-white-bg hover:text-red-300 dark:text-black-contrast-1 dark:hover:text-black-red">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-2 flex h-6 w-6 items-center fill-current stroke-current"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="lucide lucide-gamepad2">
                                                    <line x1="6" x2="10" y1="11" y2="11"></line>
                                                    <line x1="8" x2="8" y1="9" y2="13"></line>
                                                    <line x1="15" x2="15.01" y1="12" y2="12"></line>
                                                    <line x1="18" x2="18.01" y1="10" y2="10"></line>
                                                    <path
                                                        d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z">
                                                    </path>
                                                </svg></div>
                                                <div className="fill-current stroke-current">小游戏</div>
                                            </div>
                                        </li>
                                        <li
                                            className="ml-8 flex md:inline-flex relative cursor-pointer text-white-bg hover:text-red-300 dark:text-black-contrast-1 dark:hover:text-black-red">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-2 flex h-6 w-6 items-center fill-current stroke-current"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="lucide lucide-info">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <path d="M12 16v-4"></path>
                                                    <path d="M12 8h.01"></path>
                                                </svg></div>
                                                <div className="fill-current stroke-current">关于我</div>
                                            </div>
                                        </li>
                                        <li
                                            className="ml-8 flex md:inline-flex relative cursor-pointer text-white-bg hover:text-red-300 dark:text-black-contrast-1 dark:hover:text-black-red">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-2 flex h-6 w-6 items-center fill-current stroke-current"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="lucide lucide-message-square-text">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                                    </path>
                                                    <path d="M13 8H7"></path>
                                                    <path d="M17 12H7"></path>
                                                </svg></div>
                                                <div className="fill-current stroke-current">街坊 · 留言</div>
                                            </div>
                                        </li>
                                        <li
                                            className="ml-8 flex md:inline-flex relative cursor-pointer text-white-bg hover:text-red-300 dark:text-black-contrast-1 dark:hover:text-black-red">
                                            <div className="tooltip-container-bottom relative flex justify-center z-40">
                                                <div className="flex items-center justify-center">
                                                    <div className="mr-2 flex h-6 w-6 items-center fill-current stroke-current"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                                                        className="lucide lucide-qr-code">
                                                        <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                                                        <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                                                        <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                                                        <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                                                        <path d="M21 21v.01"></path>
                                                        <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                                                        <path d="M3 12h.01"></path>
                                                        <path d="M12 3h.01"></path>
                                                        <path d="M12 16v.01"></path>
                                                        <path d="M16 12h1"></path>
                                                        <path d="M21 12v.01"></path>
                                                        <path d="M12 21v-1"></path>
                                                    </svg></div>
                                                    <div className="fill-current stroke-current">手机访问</div>
                                                </div>
                                                <div
                                                    className=" mt-4 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                    <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                        <div
                                                            className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                        </div>
                                                        <div
                                                            className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                            <div
                                                                className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-1 mix-blend-darken"><svg height="144" width="144"
                                                        viewBox="0 0 25 25">
                                                        <path fill="#FFFFFF" d="M0,0 h25v25H0z"
                                                            shape-rendering="crispEdges"></path>
                                                        <path fill="#000000"
                                                            d="M0 0h7v1H0zM8 0h2v1H8zM12 0h4v1H12zM18,0 h7v1H18zM0 1h1v1H0zM6 1h1v1H6zM8 1h1v1H8zM10 1h3v1H10zM14 1h3v1H14zM18 1h1v1H18zM24,1 h1v1H24zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM11 2h2v1H11zM14 2h2v1H14zM18 2h1v1H18zM20 2h3v1H20zM24,2 h1v1H24zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM8 3h5v1H8zM15 3h1v1H15zM18 3h1v1H18zM20 3h3v1H20zM24,3 h1v1H24zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h2v1H8zM11 4h1v1H11zM13 4h3v1H13zM18 4h1v1H18zM20 4h3v1H20zM24,4 h1v1H24zM0 5h1v1H0zM6 5h1v1H6zM10 5h1v1H10zM12 5h1v1H12zM14 5h3v1H14zM18 5h1v1H18zM24,5 h1v1H24zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18,6 h7v1H18zM8 7h8v1H8zM1 8h2v1H1zM4 8h1v1H4zM6 8h2v1H6zM9 8h1v1H9zM11 8h1v1H11zM14 8h3v1H14zM18 8h1v1H18zM20,8 h5v1H20zM0 9h2v1H0zM3 9h1v1H3zM5 9h1v1H5zM7 9h1v1H7zM12 9h1v1H12zM16 9h4v1H16zM24,9 h1v1H24zM1 10h3v1H1zM6 10h1v1H6zM12 10h2v1H12zM17 10h1v1H17zM20 10h1v1H20zM22,10 h3v1H22zM0 11h4v1H0zM7 11h2v1H7zM12 11h1v1H12zM23 11h1v1H23zM0 12h1v1H0zM3 12h1v1H3zM5 12h4v1H5zM11 12h1v1H11zM17 12h2v1H17zM21 12h1v1H21zM23,12 h2v1H23zM2 13h1v1H2zM4 13h2v1H4zM7 13h1v1H7zM9 13h2v1H9zM12 13h2v1H12zM16 13h3v1H16zM21 13h1v1H21zM24,13 h1v1H24zM0 14h1v1H0zM3 14h1v1H3zM6 14h2v1H6zM9 14h1v1H9zM14 14h1v1H14zM17 14h3v1H17zM22,14 h3v1H22zM1 15h1v1H1zM7 15h2v1H7zM10 15h4v1H10zM15 15h3v1H15zM20 15h1v1H20zM23 15h1v1H23zM0 16h1v1H0zM3 16h1v1H3zM5 16h3v1H5zM9 16h2v1H9zM12 16h2v1H12zM16 16h6v1H16zM8 17h1v1H8zM11 17h2v1H11zM15 17h2v1H15zM20 17h2v1H20zM23,17 h2v1H23zM0 18h7v1H0zM8 18h2v1H8zM14 18h3v1H14zM18 18h1v1H18zM20 18h2v1H20zM23,18 h2v1H23zM0 19h1v1H0zM6 19h1v1H6zM10 19h1v1H10zM12 19h3v1H12zM16 19h1v1H16zM20 19h2v1H20zM24,19 h1v1H24zM0 20h1v1H0zM2 20h3v1H2zM6 20h1v1H6zM8 20h1v1H8zM11 20h1v1H11zM14 20h1v1H14zM16 20h6v1H16zM24,20 h1v1H24zM0 21h1v1H0zM2 21h3v1H2zM6 21h1v1H6zM10 21h1v1H10zM12 21h1v1H12zM15 21h1v1H15zM17 21h1v1H17zM19 21h4v1H19zM0 22h1v1H0zM2 22h3v1H2zM6 22h1v1H6zM8 22h2v1H8zM11 22h2v1H11zM15 22h2v1H15zM20 22h1v1H20zM24,22 h1v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h1v1H8zM13 23h4v1H13zM18 23h1v1H18zM20 23h2v1H20zM23 23h1v1H23zM0 24h7v1H0zM9 24h2v1H9zM15 24h2v1H15zM19 24h1v1H19zM23,24 h2v1H23z"
                                                            shape-rendering="crispEdges"></path>
                                                    </svg></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li
                                            className="ml-8 flex md:inline-flex relative cursor-pointer text-white-bg hover:text-red-300 dark:text-black-contrast-1 dark:hover:text-black-red">
                                            <div className="flex items-center justify-center">
                                                <div className="mr-2 flex h-6 w-6 items-center fill-current stroke-current"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="1.3rem"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
                                                    stroke-linecap="round" stroke-linejoin="round"
                                                    className="lucide lucide-settings">
                                                    <path
                                                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                                                    </path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg></div>
                                                <div className="fill-current stroke-current">管理站点</div>
                                            </div>
                                            <div className="absolute z-10 h-full w-full"><button type="button"
                                                aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:"
                                                data-state="closed" className="h-full w-full outline-none"></button></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </span>
                        <div className="clear-both"></div>
                    </div>
                </div>
                <div className="absolute top-0 z-10 w-full bg-white md:relative dark:bg-black-bg-top">
                    <div className=" relative mx-auto h-full w-full px-4 md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]">
                        <span className="undefined">
                            <div
                                className="pointer-events-none absolute right-0 top-full hidden -translate-y-[0.5px] text-white lg:block dark:hidden dark:text-black-bg-top">
                                <svg width="20rem" height="20rem" viewBox="0 0 779 780" xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g transform="translate(0, 0.6255)">
                                            <g transform="translate(0.24, -0)" fill="currentColor" fill-rule="nonzero">
                                                <path
                                                    d="M0,0.37451 C255.91678,-0.12484 515.4868,-0.12484 778.71003,0.37451 C760.92499,0.37451 732.7566,5.64011 714.42543,17.02206 C701.00643,25.35401 694.53411,39.72725 692.89003,43.89451 C684.10003,66.22451 683.4926,103.62389 687.4926,127.15389 C689.7026,140.24389 691.5526,153.41389 692.9626,166.60389 C693.28572,171.16382 692.7463,175.7438 691.3726,180.10389 C689.6126,186.22389 684.7226,189.56389 679.3726,189.50389 C674.0226,189.44389 669.8526,186.18389 667.6026,180.18389 C664.3326,171.48389 664.2126,162.43389 665.6026,153.48389 C668.6026,134.63389 671.5205,115.66979 670.72917,93.88236 C670.56961,85.78783 668.99616,75.81647 668.13003,72.69451 C666.77003,67.63451 664.49284,62.02275 658.38284,61.76275 C652.27284,61.50275 647.52284,64.47275 644.61284,69.82275 C639.61284,79.00275 639.62995,87.6467 640.35995,97.8067 C641.11995,108.4067 642.35995,119.0167 642.35995,129.6167 C642.35995,135.5167 640.53995,141.5667 638.67995,147.2667 C636.81995,152.9667 632.56995,155.3667 627.15995,155.1867 C622.15995,155.0167 618.39995,152.1067 616.43995,146.6567 C614.01995,139.9667 615.01995,133.2167 616.43995,126.5267 C619.04995,114.5267 622.21995,102.6767 624.32995,90.6067 C626.75995,76.6867 626.91003,64.93451 621.61003,51.32451 C617.38003,40.47451 607.52003,38.51451 600.49003,47.76451 C595.36411,54.46193 589.07941,58.82489 581.71745,62.93975 C577.76745,65.20975 574.50729,68.40505 570.58745,71.00975 C563.0407,76.07895 557.16497,75.11258 551.70745,67.78975 C545.98347,60.10355 542.55003,52.11451 540.00003,42.73451 C538.96404,38.57695 537.45766,34.55098 535.51003,30.73451 C532.41003,24.92451 525.59003,24.68451 523.06003,30.66451 C520.62909,36.64773 519.14789,42.97402 518.67003,49.41451 C517.03003,69.06451 521.13286,93.69513 524.29164,116.20446 C525.00556,121.44287 524.73164,126.81446 524.78164,132.12446 C524.70161,133.30661 524.42094,134.46651 523.95164,135.55446 C522.27164,140.31446 518.76164,143.13446 514.95164,142.84446 C511.14164,142.55446 507.62578,138.73266 507.32164,133.77446 C506.99326,126.61182 507.313,119.48022 507.49872,110.36171 C507.68444,101.2432 509.33942,90.98818 508.58003,78.66451 C508.37102,74.79489 507.16003,70.49451 502.40003,69.34451 C498.15961,68.20434 493.72631,70.35705 492.00003,74.39451 C489.00003,80.89451 485.94003,87.73451 484.95003,94.72451 C481.61003,118.39452 481.39349,139.55322 483.95349,163.31322 C486.01349,182.39322 489.27854,200.29006 490.86854,219.41006 C491.96854,232.70006 491.29854,246.04006 487.37854,258.96006 C486.54192,261.79116 485.29897,264.48589 483.68854,266.96006 C478.93854,274.08006 470.68854,274.45006 465.53854,267.61006 C463.47842,264.73262 461.97892,261.49277 461.11854,258.06006 C456.89854,242.31006 457.95854,226.44006 460.65854,210.58006 C465.57854,181.58006 471.80003,156.58452 469.76003,126.88452 C468.89003,114.19452 466.20003,102.02452 458.54003,91.43451 C452.95003,83.70451 446.46003,81.19451 437.74003,85.09451 C429.74003,88.64451 422.32003,89.61451 413.74003,87.34451 C405.34003,85.11451 397.00003,91.06451 393.09003,100.50452 C388.20003,112.30452 387.84463,133.57122 391.32506,151.554 C392.7805,159.83738 394.64506,168.074 392.78506,176.554 C391.13506,184.104 387.46317,188.7359 382.06317,188.4159 C376.66317,188.0959 371.97506,182.684 372.63506,175.044 C373.44506,165.684 375.40688,156.75874 377.31506,147.174 C379.37666,136.70909 382.32179,118.76491 378.93003,101.16452 C377.69335,95.3006 374.60003,89.67451 371.53003,84.42451 C370.22003,82.17451 367.02003,80.58451 364.34003,79.66451 C357.79003,77.42451 352.49338,81.03799 352.15317,87.83708 C351.83718,92.94853 352.25056,97.56793 353.60667,105.8811 C354.04101,109.83548 354.08784,113.86468 353.87314,117.83704 C353.32314,123.58704 349.57314,127.38704 344.51314,128.25704 C339.66314,129.08704 333.82314,126.25704 332.03314,121.03704 C330.72678,117.18022 330.18019,113.06921 330.81314,109.03704 C333.1764,96.02099 335.51003,83.46489 336.70003,70.68451 C337.29994,64.42342 336.18003,57.68451 334.58003,51.54451 C332.72003,44.36451 325.40003,41.49451 318.58003,44.54451 C315.54017,46.04226 312.65037,47.82704 309.95003,49.87451 C307.18003,51.87451 304.70003,54.22451 301.95003,56.22451 C294.95003,61.35451 290.62003,61.15451 283.32003,56.32451 C279.92003,54.07451 276.23003,51.71451 272.32003,50.83451 C257.49003,47.49451 247.19003,56.66451 246.55003,73.09451 C245.84003,91.38451 245.97155,113.14544 252.31404,136.7953 C253.93473,142.79693 252.83404,148.5353 249.97404,153.9753 C246.08404,161.3753 240.83635,164.31127 234.45852,163.22116 C228.41176,162.19566 222.76404,155.4653 223.05404,147.8653 C223.40404,138.8653 224.87477,130.27252 226.49286,119.20834 C227.91715,110.0579 227.18003,98.02451 226.52003,91.50451 C225.52003,81.20451 218.33465,76.95682 208.28465,79.61682 C193.65465,83.48682 183.77003,91.12451 180.41003,107.26452 C175.88003,129.06452 176.11137,161.55022 177.66819,193.39799 C179.16032,223.56033 186.93987,251.64873 191.65987,277.93873 C193.87987,290.31873 194.82987,303.03873 190.31987,315.19873 C188.85987,319.13873 186.21987,323.31873 182.91987,325.77873 C172.91987,333.19873 160.81987,328.63873 159.01987,316.37873 C157.46386,306.45141 156.67704,296.12179 158.44987,283.95948 C162.7413,254.24019 167.85717,221.77805 166.48717,191.67805 C165.48717,169.60805 164.86003,126.15452 157.82003,104.81452 C154.53003,94.81451 149.52003,86.56451 139.82003,81.09451 C134.50003,78.09451 129.91003,73.21451 126.05003,68.33451 C122.05003,63.23451 117.39003,60.33451 111.05003,60.46451 C107.35831,60.40782 103.671,60.74303 100.05003,61.46451 C86.05003,64.72451 76.68003,58.28451 69.43003,47.22451 C68.62405,45.89035 61.59413,33.55207 55.06034,26.8946 C44.89441,16.53623 26.64743,0.37451 0,0.37451 Z">
                                                </path>
                                            </g>
                                            <rect x="0" y="0.374514757" width="779" height="779"></rect>
                                        </g>
                                    </g>
                                </svg></div>
                            {/* <div>
                                <div
                                    className="flex-block absolute right-0 top-0 flex h-[50px] w-[50px] items-center justify-center text-white md:hidden">
                                    <div className="hamburger-react" aria-expanded="false" role="button" tabindex="0"
                                        style="cursor: pointer; height: 48px; position: relative; transition: 0.4s cubic-bezier(0, 0, 0, 1); user-select: none; width: 48px; outline: none; transform: none;">
                                        <div
                                            style="background: currentcolor; height: 3px; left: 8px; position: absolute; width: 32px; top: 13px; transition: 0.4s cubic-bezier(0, 0, 0, 1); transform: none;">
                                        </div>
                                        <div
                                            style="background: currentcolor; height: 3px; left: 8px; position: absolute; width: 32px; top: 23px; transition: 0.4s cubic-bezier(0, 0, 0, 1); transform: none;">
                                        </div>
                                        <div
                                            style="background: currentcolor; height: 3px; left: 8px; position: absolute; width: 32px; top: 33px; transition: 0.4s cubic-bezier(0, 0, 0, 1); transform: none;">
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className=" absolute top-[50px] h-[100vh] w-full transition-all duration-500 ease-in-out md:relative md:top-0 md:h-full md:bg-transparent dark:bg-black-bg-top">
                                    <div
                                        className="grid md:grid-cols-8 grid-cols-2 justify-items-stretch gap-x-4 p-4 md:gap-x-0 md:p-0">
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-start md:justify-center relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div className=" flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/firstPageIcon-000-3454933122-Bajk48s3.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div className="items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">初页</h2>
                                                        <p className="text-left font-hoog text-[12px] leading-4">The beginning
                                                            of everything</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>最初的一页
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-center pl-4 md:pl-0 relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div
                                                    className="numberBox absolute h-[60px] w-7 border-r-2 border-r-black text-center">
                                                    <div className="font-hoog text-xs leading-3">111</div>
                                                    <div className="text-lg">篇</div>
                                                </div>
                                                <div
                                                    className="imageInnerBox flex-row-reverse md:flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="ml-1.5 md:ml-0 md:mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/xtwIcon-000-1483223894-Cgcd3jvc.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div
                                                        className="items-end md:items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">信天翁</h2>
                                                        <p className="text-right md:text-left font-hoog text-[12px] leading-4">
                                                            Diomedea exulans</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>关于自己关于信仰的文字
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-start md:justify-center relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div
                                                    className="numberBox absolute h-[60px] w-7 border-r-2 border-r-black text-center">
                                                    <div className="font-hoog text-xs leading-3">35</div>
                                                    <div className="text-lg">篇</div>
                                                </div>
                                                <div
                                                    className="imageInnerBox flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/travelIcon-000-818962365-BSXHvWin.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div className="items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">遊記</h2>
                                                        <p className="text-left font-hoog text-[12px] leading-4">The soul is
                                                            walking</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>旅游的小故事
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-center pl-4 md:pl-0 relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div
                                                    className="numberBox absolute h-[60px] w-7 border-r-2 border-r-black text-center">
                                                    <div className="font-hoog text-xs leading-3">23</div>
                                                    <div className="text-lg">篇</div>
                                                </div>
                                                <div
                                                    className="imageInnerBox flex-row-reverse md:flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="ml-1.5 md:ml-0 md:mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/movieIcon-000-391487118-OlSpJcoA.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div
                                                        className="items-end md:items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">影視</h2>
                                                        <p className="text-right md:text-left font-hoog text-[12px] leading-4">
                                                            Movies are art life</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>看过且喜欢的影视作品
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-start md:justify-center relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div
                                                    className="numberBox absolute h-[60px] w-7 border-r-2 border-r-black text-center">
                                                    <div className="font-hoog text-xs leading-3">32</div>
                                                    <div className="text-lg">篇</div>
                                                </div>
                                                <div
                                                    className="imageInnerBox flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/essayIcon-000-4281267915-DjvrOPqj.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div className="items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">雜文</h2>
                                                        <p className="text-left font-hoog text-[12px] leading-4">Something
                                                            different</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>不好分类的文字
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-center pl-4 md:pl-0 relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div
                                                    className="numberBox absolute h-[60px] w-7 border-r-2 border-r-black text-center">
                                                    <div className="font-hoog text-xs leading-3">46</div>
                                                    <div className="text-lg">篇</div>
                                                </div>
                                                <div
                                                    className="imageInnerBox flex-row-reverse md:flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="ml-1.5 md:ml-0 md:mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/dreamIcon-000-2167434052-CiIpAEdv.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div
                                                        className="items-end md:items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">夢境</h2>
                                                        <p className="text-right md:text-left font-hoog text-[12px] leading-4">
                                                            Reality is a dream</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>记录梦中的世界
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-start md:justify-center relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div className=" flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/artIcon-000-2495880155-D8MRd6rp.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div className="items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">搜集</h2>
                                                        <p className="text-left font-hoog text-[12px] leading-4">Little things
                                                            collected</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>搜集了一些有趣有用的东西
                                            </div>
                                        </div>
                                        <div className="tooltip-container-bottom relative flex justify-center z-40"><span
                                            className="flex w-full flex-none">
                                            <div
                                                className="imageBox justify-center pl-4 md:pl-0 relative flex h-[100px] w-full items-center bg-white md:pr-4 dark:bg-black-bg-top">
                                                <div className="absolute z-10 h-full w-full"><button type="button"
                                                    aria-haspopup="dialog" aria-expanded="false"
                                                    aria-controls="radix-:ri:" data-state="closed"
                                                    className="h-full w-full outline-none"></button></div>
                                                <div
                                                    className=" flex-row-reverse md:flex-row headerTextBox relative flex text-white-text-1">
                                                    <div className="ml-1.5 md:ml-0 md:mr-1.5 imageBox-hover h-[60px] w-[60px] shrink-0 grow-0"
                                                        style="background-image: url(&quot;/assets/searchIcon-000-3662060093-BdOrYgrw.svg&quot;); background-position: center center; background-size: cover; background-repeat: no-repeat; transition: background-image 0.2s ease-in-out;">
                                                    </div>
                                                    <div
                                                        className="items-end md:items-start flex w-auto flex-col justify-center">
                                                        <h2 className="mb-1 text-lg font-[400] leading-5">搜索</h2>
                                                        <p className="text-right md:text-left font-hoog text-[12px] leading-4">
                                                            Find something you want</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                            <div
                                                className=" -mt-2 top-full pointer-events-none border-[2px] border-black tooltip-content absolute flex rounded-md bg-white px-3 py-2 text-justify text-sm text-white-contrast-1 dark:bg-white-text-1 dark:text-black">
                                                <div className="absolute bottom-full left-1/2 z-10 h-2 w-4 -translate-x-1/2">
                                                    <div
                                                        className="absolute top-full z-10 h-1 w-full bg-white dark:bg-white-text-1">
                                                    </div>
                                                    <div
                                                        className="absolute -top-2 h-0 w-0 border-8 border-x-transparent border-b-black border-t-transparent">
                                                        <div
                                                            className="absolute -left-2 -top-[5.5px] w-0 border-8 border-x-transparent border-b-white border-t-transparent dark:border-b-white-text-1">
                                                        </div>
                                                    </div>
                                                </div>关键字站内搜索 Ctrl + K
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </span>
                        <div className="clear-both"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;