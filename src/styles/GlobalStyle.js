import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        color: white;
    }
    *{
        box-sizing: border-box;
    }

    .app{
        background-image: url("https://www.iotworlds.com/wp-content/uploads/2021/09/iotworlds_smart_weather_stations.jpeg");
        background-size: cover;
        background-position: bottom;
        transition: .4s;
        &.cold{
            background-image: url("https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/winter/close-up-of-a-snowflake-.jpg");
        }
        &.illig{
            background-image: url("https://www.gannett-cdn.com/-mm-/e5c305e00d80354d1c0350948b3ccc39c5d4956e/c=0-202-3867-2377/local/-/media/Salinas/2015/03/19/B9316661963Z.1_20150319105958_000_GLQA8VSAM.1-0.jpg");
            
        }
        .location_box{
            .location{
                font-size: 32px;
                font-weight: bold;
                text-align: center;
                text-shadow: 3px 3px rgba(50,50,70.75);
                margin-top: 10vh;

            }
            .date{
                font-size: 20px;
                font-weight: 300;
                font-style: italic;
                text-align: center;
                text-shadow: 2px 2px rgba(255,255,255,.5);

            }
        }
        .weather-box{
            text-align: center;
            position: relative;
            .temp{
                position: relative;
                display: inline-block;
                margin: 30px auto;
                background-color: rgba(255,255,255,0.2);
                border-radius: 16px;
                padding: 15px 100px 15px 25px;
                font-size: 100px;
                font-weight: bold;
                text-shadow: 3px 6px rgba(50,50,70,0.5);
                text-align: center;
                box-shadow: 3px 6px rgba(0,0,0,0.2)
            }
            .gradus{
                position: absolute;
                top: 0%;
                left: 60%;
            }
            .weather{
                font-size: 40px;
                font-weight: 700;
                text-shadow: 3px 6px rgba(50,50,70,0.2)


            }
        }
    }

    main{
        min-height: 100vh;
        background-image: linear-gradient(to bottom , rgba(0,0,0,.2), rgba(0,0,0,.75));
        padding: 25px;
        grid-template-columns: 50% 50%;

        .search_box{
            width: 100%;
            margin: 0 0 75px;
            .input{
                display: block;
                margin: 0 auto;
                width: 100%;
                padding: 15px;
                appearance: none;
                background: none;
                border: none;
                outline: none;
                background-color: rgba(255,255,255,.5);
                border-radius: 0 16px 0 16px;
                border-bottom: 5px solid rgba(201,201,3);
                border-left: 5px solid rgba(201,201,3);
                box-shadow: 0px 5px rgba(0,0,0,0.2);
                font-size: 20px;
                transition: .5s ease;
                &:focus{
                    background: rgba(255,255,255,.75);
                    border-radius: 16px 0 16px 0;
                    border-top: 5px solid rgba(201,201,3);
                    border-right: 5px solid rgba(201,201,3);
                    border-bottom: 0;
                    border-left: 0;
                    &::placeholder{
                        color: #000;
                    }
                }
                &::placeholder{
                    color: #fff;
                }
            }
        }
    }
 }
`;
export default GlobalStyle;
