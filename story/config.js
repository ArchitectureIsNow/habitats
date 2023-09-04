var config = {
    accessToken: 'pk.eyJ1IjoiYWJ1cmdlc3MiLCJhIjoiY2tyenRvZjQ4MGEzaDJ1b2Mzb2x0ZzVwcyJ9.DzFFA2Pet7r9njDNpyEkXw',
    style: 'mapbox://styles/mapbox/light-v11',
    // style: 'mapbox://styles/aburgess/clm4s8ca100hy01rffgwgea9v',
    // style: 'mapbox://styles/mapbox/satellite-v9',
    // zoom: 10,
    center: [174.287, 0],
    // projection: 'globe',
    theme: 'light',
    // projection: 'equirectangular',
    alignment: 'left',
    toptitle: 'Huri Te Ao | School of Future Environments',
    title: 'Abodes, Habitats and Districts: within and Beyond the Tropic of Capricorn',
    byline: 'Designing Healthy Systems and Communities Research Cluster',
    description: "<p>Inter-disciplinary research into innovation in the Tropic of Capricorn regions.</p><p> The exploration of ways communities are leveraging local and global technologies to improve wellbeing outcomes.</p><p>Keywords: Innovation, Technology, Regenerative Systems, Living Systems, Community, Local ways of knowing and doing, Para Kore, Emergence.</p><p><li>Ann Morrison <small>(Designing Interactive Systems)</small></li><li>Aleksandra Novikova <small>(Material Futures and Innovation)</small></li><li>Priscila Besen <small>(Sustainable and Regenerative Architecture)</small></li><li>Sangeeta Karmokar <small>(Systematic Change and Social Entrepreneurship)</small></li><li>Esther Aigwi <small>(Adaptive Reuse of Historical Buildings / Urban Regeneration)</small></li><li>Andrew Burgess <small>(Urban Systems and Infrastructures)</small></li></p>",
    footer: 'Designing Healthy Systems and Communities Research Cluster',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://www.aut.ac.nz/study/study-options/architecture-and-built-environment/research-in-future-environments">Huri Te Ao | The School of Future Environments</a>',

    chapters: [
        {
            id: 'slide1',
            alignment: 'right',
            title: 'Abodes, Habitats and Districts: within and Beyond the Tropic of Capricorn',
            image: 'images/Slide_1_Image.jpg',
            imageCredit: '<a href="https://www.oneearth.org/a-self-sustaining-approach-to-tackling-energy-poverty/">Empowered By Light. Upcycled EV batteries are used to create solar micro-grids in rural Zambia</a>',
            description: '<p>Innovation occurs through the creation of new methods and things that improve or enhance. We are interested in how communities leverage local and global technologies in innovative ways to improve wellbeing outcomes.</p><p>The Tropic of Capricorn regions are interesting because of the apparent differences of these communities.</p>',
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 1
                },
                {
                    layer: 'markers',
                    opacity: 0
                },
                {
                    layer: 'solar',
                    opacity: 0
                },
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'solar',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 0
                },
                
            ]
        },
        {
            id: 'slide2',
            title: 'The Tropic of Capricorn',
            // image: 'images/Chapter_1_Image.jpg',
            // imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: '<p>Communities in the Tropic of Capricorn share some experiences and conditions, and vary greatly in other ways too. Compared to the Tropic of Cancer regions, we are thinking about:<li>Landmass</li><li>Population</li><li>Geopolitical </li><li>Economy</li><li>Climate</li><li>Indigenous ways of knowing and doing</li><li>Environment</li><li>Proximity to Global North</li> </p>',
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 1
                },
                {
                    layer: 'markers',
                    opacity: 0
                },
                {
                    layer: 'solar',
                    opacity: 1
                },
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 1
                },
                {
                    layer: 'markers',
                    opacity: 0
                },
                {
                    layer: 'solar',
                    opacity: 1
                },
            ]
        },
        // {
        //     id: 'slide3',
        //     hidden: true,
        //     title: 'The Tropic of Capricorn',
            
        //     // image: 'images/Chapter_1_Image.jpg',
        //     // imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
        //     description: "<p>landmass</p>",
        //     location: {
        //         center: [174.09094, 0],
        //         zoom: 2,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 0
        //         }
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 0
        //         },

        //     ]
        // },
        // {
        //     id: 'slide4',
        //     title: 'The Tropic of Capricorn',
        //     // image: 'images/Chapter_1_Image.jpg',
        //     // imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
        //     description: "<p>population</p>",
        //     location: {
        //         center: [174.09094, 0],
        //         zoom: 2,
        //         pitch: 0,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 0
        //         },
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 0
        //         },
        //     ]
        // },
        {
            id: 'slide5',
            title: 'Our Key Questions and Goals',
            // image: 'images/Chapter_2_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<h4>Starting Points</h4><p><li>How are communities leveraging local and global technology and ways of knowing and ways of doing to engage with contemporary issues and opportunities?</li><li>What are the similarities and differences amongst the actions and activities of communities around the Tropic of Capricorn. How might this compare to the Tropic of Cancer?</li><li>How is information and innovation disseminated to, through and from these communities.</li><p><h4>Goals</h4><p><li>Develop a resource from which to expand and grow knowledge within SoFE (and beyond) that centres on this part of the world.</li><li>Building prototype solutions (to help disseminate information and knowledge)</li><li>To explore and develop synergies between researchers in SoFE and wider DCT community.</li></p>',
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 0
                },
                {
                    layer: 'solar',
                    opacity: 1
                },
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                },
                {
                    layer: 'solar',
                    opacity: 1
                },
            ]
        },
        {
            id: 'slide6',
            title: 'Our Work To Date',
            // image: 'images/Chapter_3_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: '<p>This project is in its initial stages. We are collecting examples of projects, research, initiatives and policies that utilise technology and local ways of knowing or being in innovative ways. We’ve collected over 70 examples so far, which have then been categorised and mapped.</p><p>Some of the key areas we are looking at are:<li>Project Outputs (innovation)<li> Location and Place (country, region, territorial typology)</li><li>Project Outcomes (the desired change)</li><li>Project Drivers (wider factors creating the need for change)</li><li>Key stakeholders/users</li><li>Key Strategy</li><li>Sector</li><li>Funding</li><li>Materials</li></p>',
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        // {
        //     id: 'slide7',
        //     title: 'Africa',
        //     location: {
        //         center: [21.59421, -22.52370],
        //         zoom: 4.5,
        //         pitch: 50,
        //         bearing: 0
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ]
        // },
        // {
        //     id: 'slide8',
        //     title: 'Pacific',
        //     location: {
        //         center: [141.74224, -27.40809],
        //         zoom: 3.65,
        //         pitch: 50,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ]
        // },
        // {
        //     id: 'slide9',
        //     title: 'South America',
        //     location: {
        //         center: [-78.17634, -34.35966],
        //         zoom: 3.65,
        //         pitch: 50,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ]
        // },
        {
            id: 'slide10',
            title: 'Case Studies',
            description: "<p><li>Building Healthy Communities (Local responses to housing needs)</li><li>Solar Energy (Variations in the use and value of solar energy technology)</li><li>Australia Remote Communities (The conflation of multiple wellbeing stressors)</li></p>",
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide11',
            title: 'Building Healthy Communities (Local responses to housing needs)',

            description: "Building at the intersection of technology and culture",
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide12',
            title: 'Rwanda Institute of Conservation Agriculture',
            image: 'images/Slide_12_Image_1.jpg',
            imageCredit: '<a href="https://massdesigngroup.org/work/design/rwanda-institute-conservation-agriculture">Iwan Baan</a>',
            description: "<li>First carbon positive university.</li><li>Low-carbon natural materials</li><li>Passive design principles</li><li>Off-grid infrastructure</li>",
            location: {
                center: [30.26006812430779, -2.2711202095682324],
                zoom: 17,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide13',
            // title: 'Rwanda Institute of Conservation Agriculture',
            image: 'images/Slide_12_Image_2.jpg',
            imageCredit: '<a href="https://massdesigngroup.org/work/design/rwanda-institute-conservation-agriculture">Iwan Baan</a>',
            // description: "<li>First carbon positive university.</li><li>Low-carbon natural materials</li><li>Passive design principles</li><li>Off-grid infrastructure</li>",
            location: {
                center: [30.26006812430779, -2.2711202095682324],
                zoom: 17,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide14',
            // title: 'Rwanda Institute of Conservation Agriculture',
            image: 'images/Slide_12_Image_3.jpg',
            imageCredit: '<a href="https://massdesigngroup.org/work/design/rwanda-institute-conservation-agriculture">Iwan Baan</a>',
            // description: "<li>First carbon positive university.</li><li>Low-carbon natural materials</li><li>Passive design principles</li><li>Off-grid infrastructure</li>",
            location: {
                center: [30.26006812430779, -2.2711202095682324],
                zoom: 17,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide15',
            title: 'Village School in Nyae Nyae Conservancy',
            image: 'images/Slide_15_Image_1.jpg',
            imageCredit: '<a href="https://www.facebook.com/villagesschoolsnamibia">Namibia Village Schools</a>',
            description: "<li>Community led-design of village schools</li><li>Europe-based construction panel building system</li><li>Low-carbon natural materials</li><li>Passive design principles</li><li>Off-grid infrastructure</li>",
            location: {
                center: [20.36948680001328, -19.73953963064322],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide16',
            // title: 'Village School in Nyae Nyae Conservancy',
            image: 'images/Slide_15_Image_2.jpg',
            imageCredit: '<a href="https://www.facebook.com/villagesschoolsnamibia">Namibia Village Schools</a>',
            // description: "<li>Community led-design of village schools</li><li>Europe-based construction panel building system</li><li>Low-carbon natural materials</li><li>Passive design principles</li><li>Off-grid infrastructure</li>",
            location: {
                center: [20.36948680001328, -19.73953963064322],
                zoom: 18,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide17',
            title: "The Children's Village",
            image: 'images/Slide_17_Image_1.jpg',
            imageCredit: '<a href="https://archello.com/project/children-village-of-canuana">Archello</a>',
            description: "<li>Blend of local vernacular and contemporary technology.</li><li>Sustainable design.</li><li>Social impact (free school and board).</li>",
            location: {
                center: [-49.9069085141929, -11.974004497949942],
                zoom: 17.2,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide18',
            // title: 'The Children&apos;s Village',
            image: 'images/Slide_17_Image_2.jpg',
            imageCredit: '<a href="https://archello.com/project/children-village-of-canuana">Archello</a>',
            // description: "<li>Blend of local vernacular and contemporary technology.</li><li>Sustainable design.</li><li>Social impact (free school and board).</li>",
            location: {
                center: [-49.9069085141929, -11.974004497949942],
                zoom: 17.2,
                pitch: 45,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide19',
            title: 'Solar Energy (Variations in the use and value of solar energy technology)',
            // image: 'images/Slide_19_Image.jpg',
            // imageCredit: '<a href="https://gruene-buergerenergie.org/en/projects/electrifying-san-communities-with-solar-energy/">Green People&apos;s Energy for Africa</a>',
            description: "<p>Solar energy is commonly seen as a strategy to improve energy security in vulnerable communities. Causes of energy insecurity vary across communities and solutions therefore vary too.</p>",
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                },
                {
                    layer: 'solar',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                },
                {
                    layer: 'solar',
                    opacity: 0
                }
            ]
        },



        {
            id: 'slide20',
            title: 'San Communities Electrification Progamme',
            image: 'images/Slide_20_Image.jpg',
            imageCredit: '<a href="https://gruene-buergerenergie.org/en/projects/electrifying-san-communities-with-solar-energy/">Green People&apos;s Energy for Africa</a>',
            description: "<li>Solar home systems for 90 households in the San community as well as flu and mobile clinic.</li><li>Also supports localised irrigation systems to improve food security.</li><li>Training for local women to maintain the system.</li>",
            location: {
                center: [20.47812156829133, -21.60212870194181],
                zoom: 17,
                pitch: 34.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide21',
            title: 'The Marlinja Community Solar Project',
            image: 'images/Slide_21_Image.jpg',
            imageCredit: '<a href="https://www.firstnationscleanenergy.org.au/marlinja">First Nations Clean Energy Network</a>',
            description: "<li>Solar array for 60 households, school, and community centre.</li><li>Also supports local economy by resisting large-scale ‘external’ projects.</li>",
            location: {
                center: [134.98819362235832,-19.074785976614265],
                zoom: 12,
                pitch: 34.50,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide22',
            title: 'Australia Remote Communities (The conflation of multiple wellbeing stressors)',
            image: 'images/Slide_22_Image.jpg',
            imageCredit: '<a href="https://streetsmartaustralia.org/wp-content/uploads/Indigenous-housing_stringer.jpg">Street Smart Australia</a>',
            description: "<p>Keywords: Energy Insecurity, Housing Insecurity, Mobile Technology</p><p>In remote indigenous communities energy instability is common, and issues manifest in a variety of ways. Health hardware, thermal comfort in dwellings, mental wellbeing, mobility required as cultural norm. Issues are complex, overlapping and conflated.</p>",
            location: {
                center: [125.12224, -31.29427],
                zoom: 4.5,
                pitch: 35,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        {
            id: 'slide23',
            title: 'Mobile Phone Use',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "<p>Infrastructures and systems are used in novel ways. There are comparatively high rates of ‘off-line’ utilisation of mobile phone functions, for example, saving and sharing movies on devices for later enjoyment. <small><small>Mobile phone use in Australian indigenous communities: future pathways for HCI4D. Shaw, G. et al.</small></small></p>",
            location: {
                center: [125.12224, -31.29427],
                zoom: 4.5,
                pitch: 35,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        },
        // {
        //     id: 'slide22',
        //     title: 'Australia Remote Communities (The conflation of multiple wellbeing stressors)',
        //     // image: 'images/Chapter_4_Image.jpg',
        //     // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
        //     description: "<p>Keywords: Energy Insecurity, Housing Insecurity, Mobile Technology</p><p>In remote indigenous communities energy instability is common, and issues manifest in a variety of ways. Health hardware, thermal comfort in dwellings, mental wellbeing, mobility required as cultural norm. Issues are complex, overlapping and conflated.</p>",
        //     location: {
        //         center: [125.12224, -31.29427],
        //         zoom: 4.5,
        //         pitch: 35,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [

        //         {
        //             layer: 'capricorn',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'cancer',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'markers',
        //             opacity: 1
        //         }
        //     ]
        // },
        
        {
            id: 'slide99',
            title: 'Join Us!',
            // image: 'images/Chapter_4_Image.jpg',
            // imageCredit: '<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a>',
            description: "From here we are:<li>looking to expand our team</li><li>Apply for funding (DCT and EU)</li><li>Design solutions</li><li>Disseminate information</li>",
            location: {
                center: [174.09094, 0],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ],
            onChapterExit: [

                {
                    layer: 'capricorn',
                    opacity: 1
                },
                {
                    layer: 'cancer',
                    opacity: 0
                },
                {
                    layer: 'markers',
                    opacity: 1
                }
            ]
        }
    ]
};
