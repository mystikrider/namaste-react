import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - logo
 *  - nav items
 * Body
 *  - Serach bar
 *  - Restaurant Container
 *      - Restaurant cards
 * Footer
 *  - Copyriht
 *  - contact links
 * 
 */

const restaurantList = [
    {
      "info": {
        "id": "693337",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/90e3c323-90db-48be-8ab9-9b1dea282068_693337.jpg",
        "locality": "Pattom John's Tower",
        "areaName": "Kesavadasapuram",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "6.0K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 9.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "9.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 01:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/mcdonalds-pattom-johns-tower-kesavadasapuram-rest693337",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "730795",
        "name": "Barbecue Space Restaurant",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/23/b0032361-467a-4e52-9286-dce7a7658249_730795.jpg",
        "locality": "Kulathoor",
        "areaName": "Kulathoor",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Arabian",
          "Mediterranean",
          "Middle Eastern",
          "Rolls & Wraps",
          "shawarma"
        ],
        "avgRating": 4.5,
        "parentId": "434219",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.5K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Mandi.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Mandi.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹500",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/barbecue-space-restaurant-kulathoor-rest730795",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "77098",
        "name": "Al Baike Fried Chicken",
        "cloudinaryImageId": "ifhluqi7gxua7z11abna",
        "locality": "Mukkolakkal",
        "areaName": "Kulathoor",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "American",
          "Snacks",
          "Burgers",
          "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "19977",
        "avgRatingString": "4.4",
        "totalRatingsString": "22K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/al-baike-fried-chicken-mukkolakkal-kulathoor-rest77098",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78026",
        "name": "Arabian Tasty Cafe",
        "cloudinaryImageId": "hzqarvifjcvglaid4nqt",
        "locality": "Service Road",
        "areaName": "Opposite Techno park Phase 1",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Arabian",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "6221",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 10.8,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "10.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹175 OFF",
          "subHeader": "ABOVE ₹449",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/arabian-tasty-cafe-service-road-opposite-techno-park-phase-1-rest78026",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "702226",
        "name": "Saranyaa Mess",
        "cloudinaryImageId": "0d65f659dc059ff114f18357c3bceefd",
        "locality": "SARANYAA MESS PALLITHURA",
        "areaName": "Kazhakoottam Circle",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "South Indian",
          "Chinese",
          "Chettinad"
        ],
        "avgRating": 4.2,
        "parentId": "419403",
        "avgRatingString": "4.2",
        "totalRatingsString": "8.3K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/saranyaa-mess-saranyaa-mess-pallithura-kazhakoottam-circle-rest702226",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "242011",
        "name": "Kottayam Kitchen",
        "cloudinaryImageId": "73f1698748c48e020effa114b60a5dbb",
        "locality": "3rd Phase Technopark",
        "areaName": "Kulathoor",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Biryani",
          "Kerala",
          "Tandoor"
        ],
        "avgRating": 4.2,
        "parentId": "20335",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.2K+",
        "sla": {
          "deliveryTime": 17,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 06:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/kottayam-kitchen-3rd-phase-technopark-kulathoor-rest242011",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "357877",
        "name": "Trivandrum Chicken Shack",
        "cloudinaryImageId": "w0t2cyyvdomj8fac2sys",
        "locality": "Mukkolakkal\n",
        "areaName": "Kulathoor",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Burgers",
          "Juices"
        ],
        "avgRating": 4.5,
        "parentId": "217900",
        "avgRatingString": "4.5",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/trivandrum-chicken-shack-mukkolakkal-kulathoor-rest357877",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "343703",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/e4ce813e-02d0-4ca3-8517-e0af84117df7_343703.JPG",
        "locality": "Attipra",
        "areaName": "Kulathoor",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "4.7K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 00:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Pizza.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/dominos-pizza-attipra-kulathoor-rest343703",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "78859",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/bb0a0d83-02c0-46b4-86f0-28a8fd2b28b4_78859.JPG",
        "locality": "Technopark Campus",
        "areaName": "Kulathoor",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.5,
        "parentId": "2",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.5K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/subway-technopark-campus-kulathoor-rest78859",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "575231",
        "name": "Veg Daawat by Behrouz",
        "cloudinaryImageId": "2b579171cefc545ce6479e21c0016798",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹700 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Kebabs",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "344904",
        "avgRatingString": "4.6",
        "totalRatingsString": "57",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹229"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/veg-daawat-by-behrouz-medical-college-ulloor-rest575231",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "801444",
        "name": "Makhani Darbar",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/0fe1e34d-a45a-4924-9d71-3948d5c8cee5_801444.JPG",
        "locality": "Pongummoodu Medical College",
        "areaName": "Medical College",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Kebabs",
          "Mughlai",
          "Beverages",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "478595",
        "avgRatingString": "4.4",
        "totalRatingsString": "117",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/makhani-darbar-pongummoodu-medical-college-rest801444",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365850",
        "name": "Veg Meals by Lunchbox",
        "cloudinaryImageId": "thoiwtpgj3wxjy9tggdg",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "21938",
        "avgRatingString": "4.4",
        "totalRatingsString": "866",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/veg-meals-by-lunchbox-medical-college-ulloor-rest365850",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "861652",
        "name": "Pastas By Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/e6705d31-3941-4fb8-a198-fc6e24cdcc36_861652.JPG",
        "locality": "Attinkuzhy Road",
        "areaName": "Kazhakkoottam",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pastas"
        ],
        "avgRating": 3.7,
        "parentId": "306806",
        "avgRatingString": "3.7",
        "totalRatingsString": "105",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/pastas-by-pizza-hut-attinkuzhy-road-kazhakkoottam-rest861652",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365842",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/132ec80c-dc21-459a-aaf1-60a05a7a45c8_365842.JPG",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "21809",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.4K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Rolls.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/faasos-wraps-rolls-and-shawarma-medical-college-ulloor-rest365842",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "299497",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/135a21db-7b35-4701-afec-4b1072e0c23c_299497.JPG",
        "locality": "Kulathoor",
        "areaName": "Kazhakkoottam",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.7",
        "totalRatingsString": "2.0K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/the-belgian-waffle-co-kulathoor-kazhakkoottam-rest299497",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "605795",
        "name": "Wow! China",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/b40cae27-aa2c-46ac-ae83-3e8a2e5d2052_605795.JPG",
        "locality": "Mall of Travancore",
        "areaName": "Kannanthura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Tibetan",
          "Healthy Food",
          "Asian",
          "Chinese",
          "Snacks",
          "Continental",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "226836",
        "avgRatingString": "4.3",
        "totalRatingsString": "2.9K+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 9.7,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "9.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/wow-china-mall-of-travancore-kannanthura-rest605795",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365846",
        "name": "Sweet Truth - Cake and Desserts",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/cb0dea32-2806-4b10-8012-411fad9c4bce_365846.jpg",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Snacks",
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "4444",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.7K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/sweet-truth-cake-and-desserts-medical-college-ulloor-rest365846",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "735133",
        "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/89eea169-dd84-4126-bf38-67a0afa904d5_735133.jpg",
        "locality": "MUKKOLACKAL",
        "areaName": "Kazhakkoottam",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "5655",
        "avgRatingString": "4.4",
        "totalRatingsString": "516",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "ABOVE ₹1199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/frozen-bottle-milkshakes-desserts-and-ice-cream-mukkolackal-kazhakkoottam-rest735133",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365849",
        "name": "The Biryani Life",
        "cloudinaryImageId": "nozzumpzpadenun3dbub",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "8496",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.9K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹159"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/the-biryani-life-medical-college-ulloor-rest365849",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "365848",
        "name": "The Good Bowl",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/c0666ad9-3aa4-4e35-a3b5-97a69b6a90ad_365848.jpg",
        "locality": "Medical College",
        "areaName": "Ulloor",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas",
          "Punjabi",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "7918",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.8K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 7.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-25 03:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹149"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-8391529e-339f-42dc-85ec-73adf5c29559"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/thiruvananthapuram/the-good-bowl-medical-college-ulloor-rest365848",
        "type": "WEBLINK"
      }
    }
  ]

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const {name, cuisines, costForTwo, avgRating} = restaurantData?.info;
    return (
        <div className="restaurant-card">
                    <img src="https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/10/4/ec4fff64-26d9-47e7-91c9-7aeb371be4a3_20241004T130026845.jpg" />
                    <h4>{name}</h4>
                    <h4>{cuisines.join(", ")}</h4>
                    <h4>{costForTwo}</h4>
                    <h5>{avgRating} stars</h5>
                </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => <RestaurantCard key={restaurant?.info?.id} restaurantData={restaurant} />)}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

//render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);