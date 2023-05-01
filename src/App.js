import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar.js'
import BrandName from './BrandName.js'
import BrandView from './BrandView.js'
import Category from './Category.js'
import Ranking from './Ranking.js'
import ComparisonView from './ComparisonView.js'
import myImage from './code-compare-solid.svg'
import myImage2 from './ranking-star-solid.svg'
import Card from '@mui/material/Card';

const JSON_DATA = [
  {
    "brand": "microsoft",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.2670489892067806,
        "popular_words": [
          "great",
          "keyboard",
          "mouse"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.23218155410292401,
        "popular_words": [
          "keyboard",
          "mouse",
          "microsoft"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.20844120588415416,
        "popular_words": [
          "mouse",
          "keyboard",
          "use"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.29584428935098195,
        "popular_words": [
          "keyboard",
          "great",
          "windows"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.26687675146386847,
        "popular_words": [
          "keyboard",
          "windows",
          "mouse"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.20719933973775706,
        "popular_words": [
          "mouse",
          "windows",
          "use"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.21360148958340938,
        "popular_words": [
          "windows",
          "mouse",
          "use"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.27872481232089685,
        "popular_words": [
          "great",
          "keyboard",
          "mouse"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.21739282078094957,
        "popular_words": [
          "mouse",
          "use",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.25944374945178456,
    "total_reviews": 164315,
    "negative_reviews": 6377,
    "neutral_reviews": 72155,
    "positive_reviews": 85783,
    "positive_percent": 52.20643276633295,
    "neutral_percent": 43.91260688312084,
    "negative_percent": 3.880960350546207
  },
  {
    "brand": "canon",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.32725537987207204,
        "popular_words": [
          "camera",
          "printer",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.26465154063245483,
        "popular_words": [
          "camera",
          "lens",
          "canon"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2523325596464617,
        "popular_words": [
          "camera",
          "lens",
          "canon"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2564060196712146,
        "popular_words": [
          "camera",
          "lens",
          "canon"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.31367191271226563,
        "popular_words": [
          "printer",
          "camera",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.34684918537005466,
        "popular_words": [
          "great",
          "printer",
          "camera"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3583502028074214,
        "popular_words": [
          "printer",
          "great",
          "camera"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.27971657780498577,
        "popular_words": [
          "camera",
          "canon",
          "lens"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.33571813887038565,
        "popular_words": [
          "printer",
          "great",
          "camera"
        ]
      }
    ],
    "avg_sentiment_score": 0.3195742709809924,
    "total_reviews": 280926,
    "negative_reviews": 7361,
    "neutral_reviews": 96335,
    "positive_reviews": 177230,
    "positive_percent": 63.08778824316724,
    "neutral_percent": 34.291948769426824,
    "negative_percent": 2.620262987405936
  },
  {
    "brand": "sony",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.3231679349867035,
        "popular_words": [
          "great",
          "sony",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3422646874363081,
        "popular_words": [
          "great",
          "good",
          "sony"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.31712510718841236,
        "popular_words": [
          "great",
          "sony",
          "good"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.27291764575102484,
        "popular_words": [
          "sony",
          "great",
          "good"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2522811684701711,
        "popular_words": [
          "sony",
          "great",
          "camera"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.24255221880170919,
        "popular_words": [
          "sony",
          "sound",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.24296732317240055,
        "popular_words": [
          "sony",
          "sound",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.287373888346135,
        "popular_words": [
          "great",
          "good",
          "sound"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.30981130401768003,
        "popular_words": [
          "great",
          "sony",
          "good"
        ]
      }
    ],
    "avg_sentiment_score": 0.3034785599772542,
    "total_reviews": 419015,
    "negative_reviews": 11460,
    "neutral_reviews": 146999,
    "positive_reviews": 260556,
    "positive_percent": 62.182976743076026,
    "neutral_percent": 35.082037635884156,
    "negative_percent": 2.7349856210398196
  },
  {
    "brand": "dewalt",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.35657557493186914,
        "popular_words": [
          "great",
          "dewalt",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.37013692717713637,
        "popular_words": [
          "great",
          "dewalt",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3351851273838064,
        "popular_words": [
          "great",
          "dewalt",
          "saw"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2596632487925705,
        "popular_words": [
          "dewalt",
          "saw",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36158485147460023,
        "popular_words": [
          "great",
          "dewalt",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3415230189267606,
        "popular_words": [
          "great",
          "dewalt",
          "good"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.24509035065235965,
        "popular_words": [
          "dewalt",
          "drill",
          "saw"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2266314340560134,
        "popular_words": [
          "drill",
          "dewalt",
          "saw"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.22730332924966634,
        "popular_words": [
          "dewalt",
          "drill",
          "saw"
        ]
      }
    ],
    "avg_sentiment_score": 0.3409515308447129,
    "total_reviews": 143843,
    "negative_reviews": 3195,
    "neutral_reviews": 50780,
    "positive_reviews": 89868,
    "positive_percent": 62.47645001842287,
    "neutral_percent": 35.30237828743839,
    "negative_percent": 2.2211716941387483
  },
  {
    "brand": "garmin",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.2998954557758898,
        "popular_words": [
          "garmin",
          "gps",
          "one"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.22357117030762466,
        "popular_words": [
          "garmin",
          "gps",
          "unit"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.21720730852005757,
        "popular_words": [
          "garmin",
          "gps",
          "one"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.21918467327787272,
        "popular_words": [
          "garmin",
          "gps",
          "unit"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3019198705759628,
        "popular_words": [
          "garmin",
          "great",
          "watch"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3217228992563692,
        "popular_words": [
          "garmin",
          "great",
          "gps"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.24113055215562196,
        "popular_words": [
          "garmin",
          "gps",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3060348318583171,
        "popular_words": [
          "garmin",
          "watch",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2870642164213562,
        "popular_words": [
          "garmin",
          "watch",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.2847846662262061,
    "total_reviews": 185420,
    "negative_reviews": 5626,
    "neutral_reviews": 73542,
    "positive_reviews": 106252,
    "positive_percent": 57.30341926437278,
    "neutral_percent": 39.66238809189947,
    "negative_percent": 3.0341926437277533
  },
  {
    "brand": "hp",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.2895962376406717,
        "popular_words": [
          "printer",
          "hp",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.19877559512053966,
        "popular_words": [
          "printer",
          "hp",
          "one"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.30364016045439773,
        "popular_words": [
          "printer",
          "hp",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3151886788471031,
        "popular_words": [
          "printer",
          "hp",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.22287753364314772,
        "popular_words": [
          "printer",
          "hp",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.2983512934584653,
        "popular_words": [
          "printer",
          "hp",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2692051499977284,
        "popular_words": [
          "printer",
          "hp",
          "ink"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.19045598495734498,
        "popular_words": [
          "printer",
          "hp",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.19974519130954424,
        "popular_words": [
          "hp",
          "printer",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.28497155827831366,
    "total_reviews": 261004,
    "negative_reviews": 11426,
    "neutral_reviews": 105819,
    "positive_reviews": 143759,
    "positive_percent": 55.07923250218387,
    "neutral_percent": 40.54305681138987,
    "negative_percent": 4.377710686426262
  },
  {
    "brand": "nikon",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.3488079692853089,
        "popular_words": [
          "camera",
          "lens",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.25982304221692204,
        "popular_words": [
          "camera",
          "lens",
          "nikon"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2509400689120368,
        "popular_words": [
          "camera",
          "lens",
          "nikon"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.25262467442360326,
        "popular_words": [
          "camera",
          "lens",
          "nikon"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.37102901022013307,
        "popular_words": [
          "camera",
          "great",
          "lens"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.38395803971928677,
        "popular_words": [
          "camera",
          "great",
          "lens"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2912868698638099,
        "popular_words": [
          "camera",
          "lens",
          "nikon"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3730755034844643,
        "popular_words": [
          "camera",
          "great",
          "lens"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3620568004995522,
        "popular_words": [
          "camera",
          "lens",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3386516117478824,
    "total_reviews": 123973,
    "negative_reviews": 2534,
    "neutral_reviews": 38592,
    "positive_reviews": 82847,
    "positive_percent": 66.82664773781389,
    "neutral_percent": 31.129358811999385,
    "negative_percent": 2.043993450186734
  },
  {
    "brand": "apple",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.32438031875971013,
        "popular_words": [
          "apple",
          "great",
          "one"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2659970885806926,
        "popular_words": [
          "apple",
          "great",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.30535344628554917,
        "popular_words": [
          "phone",
          "great",
          "works"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3291844778866918,
        "popular_words": [
          "great",
          "phone",
          "apple"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.35384693601637407,
        "popular_words": [
          "great",
          "apple",
          "phone"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.23222845732014766,
        "popular_words": [
          "ipod",
          "apple",
          "use"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.22746106255393317,
        "popular_words": [
          "apple",
          "ipad",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.24817665519325696,
        "popular_words": [
          "apple",
          "one",
          "ipod"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.27472541962903224,
        "popular_words": [
          "phone",
          "great",
          "works"
        ]
      }
    ],
    "avg_sentiment_score": 0.30813079297765716,
    "total_reviews": 245755,
    "negative_reviews": 9850,
    "neutral_reviews": 89306,
    "positive_reviews": 146599,
    "positive_percent": 59.65249944049968,
    "neutral_percent": 36.339443754959206,
    "negative_percent": 4.008056804541108
  },
  {
    "brand": "logitech",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2010,
        "avg_sentiment_score": 0.22448273440418573,
        "popular_words": [
          "mouse",
          "one",
          "use"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.32235679959896935,
        "popular_words": [
          "mouse",
          "great",
          "keyboard"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3135991119502832,
        "popular_words": [
          "mouse",
          "great",
          "keyboard"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.29129183889044385,
        "popular_words": [
          "mouse",
          "keyboard",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.25450691547318677,
        "popular_words": [
          "mouse",
          "keyboard",
          "use"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23689986333971982,
        "popular_words": [
          "mouse",
          "use",
          "one"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2232150666531983,
        "popular_words": [
          "mouse",
          "use",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3008070258335301,
        "popular_words": [
          "mouse",
          "great",
          "keyboard"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.28746948902340186,
        "popular_words": [
          "mouse",
          "great",
          "keyboard"
        ]
      }
    ],
    "avg_sentiment_score": 0.2910961748591764,
    "total_reviews": 350125,
    "negative_reviews": 8798,
    "neutral_reviews": 135630,
    "positive_reviews": 205697,
    "positive_percent": 58.749589432345594,
    "neutral_percent": 38.73759371652981,
    "negative_percent": 2.5128168511245983
  },
  {
    "brand": "samsung",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2011,
        "avg_sentiment_score": 0.2245847335276561,
        "popular_words": [
          "phone",
          "samsung",
          "tv"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2340098447620959,
        "popular_words": [
          "phone",
          "samsung",
          "tv"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3114432214297172,
        "popular_words": [
          "phone",
          "great",
          "samsung"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.314296206021135,
        "popular_words": [
          "phone",
          "great",
          "samsung"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2486922558724226,
        "popular_words": [
          "phone",
          "samsung",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.21750213686126227,
        "popular_words": [
          "tv",
          "samsung",
          "phone"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.29694768349778916,
        "popular_words": [
          "phone",
          "great",
          "samsung"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3408402198570002,
        "popular_words": [
          "phone",
          "great",
          "samsung"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.27745469030205416,
        "popular_words": [
          "phone",
          "great",
          "samsung"
        ]
      }
    ],
    "avg_sentiment_score": 0.3034003424341966,
    "total_reviews": 739490,
    "negative_reviews": 26961,
    "neutral_reviews": 280218,
    "positive_reviews": 432311,
    "positive_percent": 58.460695885001826,
    "neutral_percent": 37.8934130278976,
    "negative_percent": 3.6458910871005696
  },
  {
    "brand": "stanley",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2013,
        "avg_sentiment_score": 0.24394582829560538,
        "popular_words": [
          "one",
          "great",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.31944625828427015,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.32123702855607034,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3017716348702047,
        "popular_words": [
          "great",
          "one",
          "good"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.20273103808184642,
        "popular_words": [
          "one",
          "use",
          "stanley"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3111453949869999,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.22323426901502114,
        "popular_words": [
          "one",
          "use",
          "stanley"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3322006025921613,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.21265099672884902,
        "popular_words": [
          "one",
          "stanley",
          "use"
        ]
      }
    ],
    "avg_sentiment_score": 0.308725776997899,
    "total_reviews": 104043,
    "negative_reviews": 3046,
    "neutral_reviews": 39257,
    "positive_reviews": 61740,
    "positive_percent": 59.34084945647473,
    "neutral_percent": 37.73151485443518,
    "negative_percent": 2.9276356890900876
  },
  {
    "brand": "bosch",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2010,
        "avg_sentiment_score": 0.2115369599016815,
        "popular_words": [
          "bosch",
          "one",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.35261091069193096,
        "popular_words": [
          "great",
          "bosch",
          "good"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.35988713131451416,
        "popular_words": [
          "great",
          "bosch",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.361717557176496,
        "popular_words": [
          "great",
          "bosch",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3153402750558328,
        "popular_words": [
          "bosch",
          "great",
          "one"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2487631358123313,
        "popular_words": [
          "bosch",
          "one",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23244382843748335,
        "popular_words": [
          "bosch",
          "one",
          "use"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.22503779613714028,
        "popular_words": [
          "bosch",
          "one",
          "use"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3396057552280911,
        "popular_words": [
          "great",
          "bosch",
          "fit"
        ]
      }
    ],
    "avg_sentiment_score": 0.32976588302062193,
    "total_reviews": 101871,
    "negative_reviews": 2583,
    "neutral_reviews": 36304,
    "positive_reviews": 62984,
    "positive_percent": 61.82721284762101,
    "neutral_percent": 35.63722747396217,
    "negative_percent": 2.5355596784168215
  },
  {
    "brand": "dell",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2010,
        "avg_sentiment_score": 0.20478934890856126,
        "popular_words": [
          "dell",
          "one",
          "laptop"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.2960373902234657,
        "popular_words": [
          "dell",
          "laptop",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.30478408901719367,
        "popular_words": [
          "dell",
          "laptop",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2429945507592482,
        "popular_words": [
          "dell",
          "computer",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2243844186145162,
        "popular_words": [
          "dell",
          "laptop",
          "computer"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.21106846741467708,
        "popular_words": [
          "dell",
          "computer",
          "laptop"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.2775363498645468,
        "popular_words": [
          "dell",
          "computer",
          "laptop"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.28362726070181504,
        "popular_words": [
          "dell",
          "great",
          "laptop"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2667549540127059,
        "popular_words": [
          "great",
          "dell",
          "monitor"
        ]
      }
    ],
    "avg_sentiment_score": 0.28150018538651567,
    "total_reviews": 134095,
    "negative_reviews": 5686,
    "neutral_reviews": 53511,
    "positive_reviews": 74898,
    "positive_percent": 55.854431559715124,
    "neutral_percent": 39.90529102501957,
    "negative_percent": 4.240277415265297
  },
  {
    "brand": "swarovski",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.45411886528231443,
        "popular_words": [
          "beautiful",
          "swarovski",
          "love"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.37881045582024897,
        "popular_words": [
          "swarovski",
          "beautiful",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.36874041246739137,
        "popular_words": [
          "swarovski",
          "beautiful",
          "crystal"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.3795285761653284,
        "popular_words": [
          "swarovski",
          "one",
          "ornament"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.4605322497474461,
        "popular_words": [
          "beautiful",
          "love",
          "swarovski"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.4705171561115993,
        "popular_words": [
          "beautiful",
          "love",
          "swarovski"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.47124092986161875,
        "popular_words": [
          "beautiful",
          "love",
          "swarovski"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.4742439093985207,
        "popular_words": [
          "beautiful",
          "love",
          "swarovski"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.3796932473139754,
        "popular_words": [
          "swarovski",
          "ornament",
          "beautiful"
        ]
      }
    ],
    "avg_sentiment_score": 0.45266380572994114,
    "total_reviews": 12382,
    "negative_reviews": 235,
    "neutral_reviews": 2322,
    "positive_reviews": 9825,
    "positive_percent": 79.34905507995478,
    "neutral_percent": 18.753028589888547,
    "negative_percent": 1.8979163301566788
  },
  {
    "brand": "craftsman",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.34830036668560754,
        "popular_words": [
          "great",
          "good",
          "craftsman"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3565646007344355,
        "popular_words": [
          "great",
          "good",
          "craftsman"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.36428703366498855,
        "popular_words": [
          "great",
          "good",
          "craftsman"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.32068177533996567,
        "popular_words": [
          "great",
          "craftsman",
          "one"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3290656708286832,
        "popular_words": [
          "great",
          "craftsman",
          "good"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.25408466119603934,
        "popular_words": [
          "one",
          "craftsman",
          "great"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.21460548189333334,
        "popular_words": [
          "one",
          "craftsman",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.18472614654042552,
        "popular_words": [
          "battery",
          "one",
          "get"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2308663515485952,
        "popular_words": [
          "one",
          "craftsman",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.33918679377000227,
    "total_reviews": 36569,
    "negative_reviews": 988,
    "neutral_reviews": 12955,
    "positive_reviews": 22626,
    "positive_percent": 61.87207744264267,
    "neutral_percent": 35.42618064480845,
    "negative_percent": 2.70174191254888
  },
  {
    "brand": "makita",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2012,
        "avg_sentiment_score": 0.2249168757947602,
        "popular_words": [
          "makita",
          "saw",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3425193976750703,
        "popular_words": [
          "great",
          "makita",
          "use"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.35425463591729345,
        "popular_words": [
          "great",
          "makita",
          "use"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3562103301179609,
        "popular_words": [
          "great",
          "makita",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3261409849592731,
        "popular_words": [
          "makita",
          "great",
          "use"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2552947513648155,
        "popular_words": [
          "makita",
          "saw",
          "use"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.22401431144046277,
        "popular_words": [
          "makita",
          "drill",
          "one"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3191686906345295,
        "popular_words": [
          "makita",
          "great",
          "use"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2089816484012942,
        "popular_words": [
          "makita",
          "drill",
          "use"
        ]
      }
    ],
    "avg_sentiment_score": 0.3224647498129001,
    "total_reviews": 45361,
    "negative_reviews": 945,
    "neutral_reviews": 16508,
    "positive_reviews": 27908,
    "positive_percent": 61.52421683825312,
    "neutral_percent": 36.3924957562664,
    "negative_percent": 2.083287405480479
  },
  {
    "brand": "calvin klein",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.3183462735597989,
        "popular_words": [
          "suitcase",
          "nice",
          "like"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.34246980945085453,
        "popular_words": [
          "quality",
          "great",
          "love"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.21904337552767,
        "popular_words": [
          "like",
          "sheets",
          "soft"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.31133013866676906,
        "popular_words": [
          "love",
          "blanket",
          "color"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.29746208326488094,
        "popular_words": [
          "love",
          "like",
          "quality"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.22018069719124994,
        "popular_words": [
          "love",
          "bag",
          "suitcase"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.35891189422222225,
        "popular_words": [
          "set",
          "look",
          "nice"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.3608901515,
        "popular_words": [
          "kindle",
          "fire",
          "set"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.24768437331428572,
        "popular_words": [
          "cotton",
          "towels",
          "blanket"
        ]
      }
    ],
    "avg_sentiment_score": 0.3013456354747896,
    "total_reviews": 1662,
    "negative_reviews": 60,
    "neutral_reviews": 580,
    "positive_reviews": 1022,
    "positive_percent": 61.4921780986763,
    "neutral_percent": 34.89771359807461,
    "negative_percent": 3.6101083032490973
  },
  {
    "brand": "lg",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2011,
        "avg_sentiment_score": 0.23631578974243428,
        "popular_words": [
          "tv",
          "phone",
          "lg"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.23848644797701535,
        "popular_words": [
          "tv",
          "phone",
          "lg"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.34078748908021483,
        "popular_words": [
          "phone",
          "great",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.31811359024453306,
        "popular_words": [
          "phone",
          "great",
          "tv"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3084306001873704,
        "popular_words": [
          "phone",
          "great",
          "lg"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.2918142270325968,
        "popular_words": [
          "phone",
          "great",
          "lg"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.26583647947677885,
        "popular_words": [
          "phone",
          "great",
          "lg"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2409136713687598,
        "popular_words": [
          "phone",
          "tv",
          "lg"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2601382783329978,
        "popular_words": [
          "phone",
          "tv",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3023573847109465,
    "total_reviews": 226802,
    "negative_reviews": 7785,
    "neutral_reviews": 83165,
    "positive_reviews": 135852,
    "positive_percent": 59.89894269009973,
    "neutral_percent": 36.668547896403034,
    "negative_percent": 3.432509413497235
  },
  {
    "brand": "black+decker",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.28510528263773394,
        "popular_words": [
          "great",
          "use",
          "one"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.29916217524280486,
        "popular_words": [
          "great",
          "use",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.27812727634907225,
        "popular_words": [
          "great",
          "use",
          "one"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.21469494882946413,
        "popular_words": [
          "one",
          "use",
          "battery"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.18377326480464676,
        "popular_words": [
          "one",
          "use",
          "battery"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.17683985041611294,
        "popular_words": [
          "one",
          "battery",
          "use"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.17456138758972092,
        "popular_words": [
          "one",
          "battery",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.27759929180276005,
        "popular_words": [
          "great",
          "use",
          "one"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2702363807830524,
        "popular_words": [
          "great",
          "use",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.27157254580614804,
    "total_reviews": 209769,
    "negative_reviews": 7107,
    "neutral_reviews": 86354,
    "positive_reviews": 116308,
    "positive_percent": 55.44575223221735,
    "neutral_percent": 41.16623523971607,
    "negative_percent": 3.3880125280665876
  },
  {
    "brand": "adidas",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.37016921572095784,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3506710857769495,
        "popular_words": [
          "great",
          "good",
          "fit"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.36761394884864995,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36908224205379264,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3497373153555192,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.26925806183399653,
        "popular_words": [
          "great",
          "like",
          "good"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.26111935827331434,
        "popular_words": [
          "ball",
          "great",
          "good"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.278252167753677,
        "popular_words": [
          "great",
          "good",
          "like"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2936106730310922,
        "popular_words": [
          "great",
          "good",
          "fit"
        ]
      }
    ],
    "avg_sentiment_score": 0.3565753942410847,
    "total_reviews": 145133,
    "negative_reviews": 4094,
    "neutral_reviews": 42593,
    "positive_reviews": 98446,
    "positive_percent": 67.83157517587316,
    "neutral_percent": 29.34756395857593,
    "negative_percent": 2.8208608655509084
  },
  {
    "brand": "nike",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.3586122212832889,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3724248730040159,
        "popular_words": [
          "great",
          "good",
          "fit"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36258794661160976,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.34114712505405137,
        "popular_words": [
          "great",
          "nike",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3403575207182223,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2637781114343833,
        "popular_words": [
          "nike",
          "watch",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2599604728065203,
        "popular_words": [
          "watch",
          "nike",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2680889868382671,
        "popular_words": [
          "nike",
          "great",
          "one"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2791717446871473,
        "popular_words": [
          "nike",
          "watch",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3495714420607621,
    "total_reviews": 72592,
    "negative_reviews": 2610,
    "neutral_reviews": 22138,
    "positive_reviews": 47844,
    "positive_percent": 65.90808904562486,
    "neutral_percent": 30.496473440599516,
    "negative_percent": 3.5954375137756225
  },
  {
    "brand": "the north face",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.3793497623122203,
        "popular_words": [
          "great",
          "jacket",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.35561040817126643,
        "popular_words": [
          "great",
          "jacket",
          "warm"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3741064894116494,
        "popular_words": [
          "great",
          "jacket",
          "love"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3680452609826771,
        "popular_words": [
          "great",
          "jacket",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3506080562136391,
        "popular_words": [
          "great",
          "love",
          "jacket"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.27663167233097347,
        "popular_words": [
          "great",
          "boots",
          "like"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.29229609646559923,
        "popular_words": [
          "great",
          "jacket",
          "warm"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2936764829787293,
        "popular_words": [
          "jacket",
          "great",
          "warm"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.30541887511999993,
        "popular_words": [
          "great",
          "shoes",
          "well"
        ]
      }
    ],
    "avg_sentiment_score": 0.3657164800862475,
    "total_reviews": 44767,
    "negative_reviews": 1118,
    "neutral_reviews": 12113,
    "positive_reviews": 31536,
    "positive_percent": 70.44474724685594,
    "neutral_percent": 27.057877454374875,
    "negative_percent": 2.4973752987691826
  },
  {
    "brand": "ralph lauren",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.331450533140271,
        "popular_words": [
          "great",
          "love",
          "fit"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.34662459728809236,
        "popular_words": [
          "fit",
          "great",
          "love"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.35755084234103907,
        "popular_words": [
          "fit",
          "great",
          "love"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.36840366185897,
        "popular_words": [
          "great",
          "fit",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.33611212874733504,
        "popular_words": [
          "fit",
          "great",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2561942704081633,
        "popular_words": [
          "boots",
          "size",
          "like"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2928075022449357,
        "popular_words": [
          "great",
          "love",
          "fit"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.23033590906666665,
        "popular_words": [
          "great",
          "bought",
          "size"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.30501651923287665,
        "popular_words": [
          "look",
          "great",
          "shoes"
        ]
      }
    ],
    "avg_sentiment_score": 0.3478758124163216,
    "total_reviews": 15045,
    "negative_reviews": 548,
    "neutral_reviews": 4451,
    "positive_reviews": 10046,
    "positive_percent": 66.77301429046196,
    "neutral_percent": 29.584579594549687,
    "negative_percent": 3.6424061149883684
  },
  {
    "brand": "milwaukee",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.3377613687895901,
        "popular_words": [
          "great",
          "tool",
          "milwaukee"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2523306284216797,
        "popular_words": [
          "use",
          "milwaukee",
          "one"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36878818152435017,
        "popular_words": [
          "great",
          "tool",
          "milwaukee"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.36875371058708395,
        "popular_words": [
          "great",
          "tool",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.35383822972223733,
        "popular_words": [
          "great",
          "milwaukee",
          "tool"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2261983510759477,
        "popular_words": [
          "milwaukee",
          "drill",
          "tool"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3733961138096623,
        "popular_words": [
          "great",
          "milwaukee",
          "tool"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.21241251029951586,
        "popular_words": [
          "drill",
          "milwaukee",
          "one"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.21299433709590493,
        "popular_words": [
          "drill",
          "milwaukee",
          "tool"
        ]
      }
    ],
    "avg_sentiment_score": 0.3376470214723105,
    "total_reviews": 33341,
    "negative_reviews": 714,
    "neutral_reviews": 11937,
    "positive_reviews": 20690,
    "positive_percent": 62.055727182747965,
    "neutral_percent": 35.80276536396629,
    "negative_percent": 2.1415074532857443
  },
  {
    "brand": "coach",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.3621875759935689,
        "popular_words": [
          "love",
          "bag",
          "coach"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3838716874227707,
        "popular_words": [
          "love",
          "bag",
          "coach"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3741632205378,
        "popular_words": [
          "love",
          "coach",
          "bag"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3604007070814701,
        "popular_words": [
          "love",
          "shoes",
          "coach"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3505772414028642,
        "popular_words": [
          "love",
          "coach",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.3134562522279977,
        "popular_words": [
          "coach",
          "bag",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.3181896799425689,
        "popular_words": [
          "coach",
          "bag",
          "purse"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2939497010940539,
        "popular_words": [
          "bag",
          "coach",
          "love"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.3392169201090908,
        "popular_words": [
          "purse",
          "coach",
          "love"
        ]
      }
    ],
    "avg_sentiment_score": 0.3644417824285156,
    "total_reviews": 27721,
    "negative_reviews": 920,
    "neutral_reviews": 6960,
    "positive_reviews": 19841,
    "positive_percent": 71.57389704556113,
    "neutral_percent": 25.107319360773424,
    "negative_percent": 3.318783593665452
  },
  {
    "brand": "vizio",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.3083322066399974,
        "popular_words": [
          "tv",
          "sound",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3394295165429042,
        "popular_words": [
          "tv",
          "sound",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3342673165542115,
        "popular_words": [
          "tv",
          "sound",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2681742602930768,
        "popular_words": [
          "sound",
          "tv",
          "remote"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.30166733946932756,
        "popular_words": [
          "tv",
          "sound",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.22254549124187373,
        "popular_words": [
          "tv",
          "vizio",
          "sound"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.24094692674488358,
        "popular_words": [
          "tv",
          "vizio",
          "sound"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.24204575956414895,
        "popular_words": [
          "tv",
          "vizio",
          "sound"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2545185604432398,
        "popular_words": [
          "tv",
          "vizio",
          "sound"
        ]
      }
    ],
    "avg_sentiment_score": 0.30749313806637535,
    "total_reviews": 66815,
    "negative_reviews": 1522,
    "neutral_reviews": 23444,
    "positive_reviews": 41849,
    "positive_percent": 62.63413904063459,
    "neutral_percent": 35.08792935718027,
    "negative_percent": 2.277931602185138
  },
  {
    "brand": "michael kors",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.42178123648167504,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.4106840437237855,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.4017940810247162,
        "popular_words": [
          "love",
          "watch",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.383310284994066,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.4091709779311629,
        "popular_words": [
          "love",
          "watch",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.33873890781578325,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.32672571961949165,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.315430988428913,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.3052384772011494,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.40271963064752664,
    "total_reviews": 60580,
    "negative_reviews": 1455,
    "neutral_reviews": 13178,
    "positive_reviews": 45947,
    "positive_percent": 75.84516342027071,
    "neutral_percent": 21.75305381313965,
    "negative_percent": 2.401782766589634
  },
  {
    "brand": "under armour",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.3641682276701424,
        "popular_words": [
          "great",
          "fit",
          "love"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3695648649724803,
        "popular_words": [
          "great",
          "fit",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3362800289877605,
        "popular_words": [
          "great",
          "fit",
          "good"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3621325987631721,
        "popular_words": [
          "great",
          "fit",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3443418537467321,
        "popular_words": [
          "great",
          "fit",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2564923987376027,
        "popular_words": [
          "great",
          "like",
          "fit"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.24347067101613926,
        "popular_words": [
          "great",
          "wear",
          "fit"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2845630056985622,
        "popular_words": [
          "great",
          "fit",
          "like"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.224452719944843,
        "popular_words": [
          "great",
          "wear",
          "well"
        ]
      }
    ],
    "avg_sentiment_score": 0.35588184955584123,
    "total_reviews": 158925,
    "negative_reviews": 4500,
    "neutral_reviews": 45797,
    "positive_reviews": 108628,
    "positive_percent": 68.3517382413088,
    "neutral_percent": 28.816737454774266,
    "negative_percent": 2.8315243039169418
  },
  {
    "brand": "lenovo",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.25451297979698967,
        "popular_words": [
          "laptop",
          "lenovo",
          "computer"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.26725245075106135,
        "popular_words": [
          "laptop",
          "lenovo",
          "computer"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.2502783676460795,
        "popular_words": [
          "laptop",
          "lenovo",
          "computer"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.2612069866351298,
        "popular_words": [
          "laptop",
          "great",
          "lenovo"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.218077019327442,
        "popular_words": [
          "laptop",
          "lenovo",
          "screen"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.23843627152467886,
        "popular_words": [
          "laptop",
          "lenovo",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.20443937695193048,
        "popular_words": [
          "lenovo",
          "laptop",
          "tablet"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.19237518105315501,
        "popular_words": [
          "lenovo",
          "laptop",
          "one"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.17703660775997335,
        "popular_words": [
          "lenovo",
          "laptop",
          "computer"
        ]
      }
    ],
    "avg_sentiment_score": 0.2512419293582277,
    "total_reviews": 54883,
    "negative_reviews": 2634,
    "neutral_reviews": 23830,
    "positive_reviews": 28419,
    "positive_percent": 51.78106153089299,
    "neutral_percent": 43.41963813931454,
    "negative_percent": 4.799300329792468
  },
  {
    "brand": "husky",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.3462768909757799,
        "popular_words": [
          "great",
          "one",
          "good"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3400147171520004,
        "popular_words": [
          "great",
          "one",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.28159171578780495,
        "popular_words": [
          "great",
          "one",
          "use"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.31148514459858906,
        "popular_words": [
          "great",
          "one",
          "trailer"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3476121716435131,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2705966478182049,
        "popular_words": [
          "one",
          "use",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23148081729166664,
        "popular_words": [
          "bags",
          "one",
          "compactor"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.11638116667647061,
        "popular_words": [
          "one",
          "bags",
          "use"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.11223653420000002,
        "popular_words": [
          "blade",
          "use",
          "home"
        ]
      }
    ],
    "avg_sentiment_score": 0.32108487720142825,
    "total_reviews": 4826,
    "negative_reviews": 113,
    "neutral_reviews": 1802,
    "positive_reviews": 2911,
    "positive_percent": 60.31910484873602,
    "neutral_percent": 37.33941152092831,
    "negative_percent": 2.3414836303356816
  },
  {
    "brand": "prada",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.4189769127192986,
        "popular_words": [
          "love",
          "glasses",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.3278065589787585,
        "popular_words": [
          "prada",
          "sunglasses",
          "glasses"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.3139137053825243,
        "popular_words": [
          "glasses",
          "sunglasses",
          "prada"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.35037852688372106,
        "popular_words": [
          "sunglasses",
          "great",
          "prada"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.41249696261040814,
        "popular_words": [
          "love",
          "glasses",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3640814250957643,
        "popular_words": [
          "glasses",
          "love",
          "sunglasses"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3830377383952097,
        "popular_words": [
          "love",
          "glasses",
          "sunglasses"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3969039030424466,
        "popular_words": [
          "love",
          "glasses",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.3630358088235294,
        "popular_words": [
          "sunglasses",
          "prada",
          "amazon"
        ]
      }
    ],
    "avg_sentiment_score": 0.3902346484478581,
    "total_reviews": 3713,
    "negative_reviews": 114,
    "neutral_reviews": 853,
    "positive_reviews": 2746,
    "positive_percent": 73.95636951252357,
    "neutral_percent": 22.973336924319955,
    "negative_percent": 3.0702935631564774
  },
  {
    "brand": "gucci",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.3947746869629291,
        "popular_words": [
          "love",
          "great",
          "gucci"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.41098435118575183,
        "popular_words": [
          "love",
          "glasses",
          "gucci"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.402977934969365,
        "popular_words": [
          "love",
          "great",
          "gucci"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.3253238150711427,
        "popular_words": [
          "glasses",
          "gucci",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.37355222918381104,
        "popular_words": [
          "love",
          "glasses",
          "gucci"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.30333161423684213,
        "popular_words": [
          "watch",
          "gucci",
          "great"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.30732256916666667,
        "popular_words": [
          "watch",
          "gucci",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.38625345540845085,
        "popular_words": [
          "love",
          "nice",
          "gucci"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.3126754522132352,
        "popular_words": [
          "watch",
          "amazon",
          "gucci"
        ]
      }
    ],
    "avg_sentiment_score": 0.38376593851891533,
    "total_reviews": 5556,
    "negative_reviews": 208,
    "neutral_reviews": 1290,
    "positive_reviews": 4058,
    "positive_percent": 73.0381569474442,
    "neutral_percent": 23.218142548596113,
    "negative_percent": 3.7437005039596833
  },
  {
    "brand": "bose",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.34575963280332445,
        "popular_words": [
          "sound",
          "bose",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.364513632938682,
        "popular_words": [
          "sound",
          "bose",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3762328410976935,
        "popular_words": [
          "sound",
          "bose",
          "great"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.24635073311436784,
        "popular_words": [
          "bose",
          "sound",
          "headphones"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.34530143325310103,
        "popular_words": [
          "sound",
          "bose",
          "headphones"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.29210334055130593,
        "popular_words": [
          "sound",
          "bose",
          "headphones"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2753005487978332,
        "popular_words": [
          "sound",
          "bose",
          "headphones"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2552136019701923,
        "popular_words": [
          "sound",
          "bose",
          "speakers"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3284839300011757,
        "popular_words": [
          "sound",
          "bose",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.34444441515752383,
    "total_reviews": 89989,
    "negative_reviews": 1613,
    "neutral_reviews": 25955,
    "positive_reviews": 62421,
    "positive_percent": 69.36514462878797,
    "neutral_percent": 28.842414072831126,
    "negative_percent": 1.7924412983809133
  },
  {
    "brand": "ridgid",
    "category": "Home Tools Brands",
    "trend": [
      {
        "year": 2018,
        "avg_sentiment_score": 0.3236653339883295,
        "popular_words": [
          "great",
          "good",
          "works"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3471982022550315,
        "popular_words": [
          "great",
          "tool",
          "works"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3357766715622685,
        "popular_words": [
          "great",
          "one",
          "good"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.20546573712362604,
        "popular_words": [
          "tool",
          "one",
          "use"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.33014548036400987,
        "popular_words": [
          "great",
          "one",
          "good"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.30413602641618487,
        "popular_words": [
          "great",
          "tool",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.1886263277294375,
        "popular_words": [
          "one",
          "tool",
          "use"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.17537986955187032,
        "popular_words": [
          "one",
          "ridgid",
          "saw"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.1621907727235868,
        "popular_words": [
          "one",
          "tool",
          "ridgid"
        ]
      }
    ],
    "avg_sentiment_score": 0.30503474174983003,
    "total_reviews": 15928,
    "negative_reviews": 435,
    "neutral_reviews": 6428,
    "positive_reviews": 9065,
    "positive_percent": 56.912355600200904,
    "neutral_percent": 40.3566047212456,
    "negative_percent": 2.7310396785534907
  },
  {
    "brand": "kobalt",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.35417709329163566,
        "popular_words": [
          "great",
          "one",
          "set"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.26890062871435166,
        "popular_words": [
          "set",
          "use",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.18272223233333326,
        "popular_words": [
          "lowes",
          "set",
          "use"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3020344336562914,
        "popular_words": [
          "great",
          "one",
          "light"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3332446360599454,
        "popular_words": [
          "great",
          "good",
          "set"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3592102098289185,
        "popular_words": [
          "great",
          "good",
          "set"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.23867829750000003,
        "popular_words": [
          "one",
          "way",
          "well"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.040625,
        "popular_words": [
          "impact",
          "gun",
          "sold"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.2953579861838708,
        "popular_words": [
          "great",
          "good",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.32238113501432397,
    "total_reviews": 2391,
    "negative_reviews": 66,
    "neutral_reviews": 887,
    "positive_reviews": 1438,
    "positive_percent": 60.14219991635299,
    "neutral_percent": 37.09744876620661,
    "negative_percent": 2.7603513174404015
  },
  {
    "brand": "tory burch",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.35502253301393155,
        "popular_words": [
          "love",
          "great",
          "sunglasses"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3709937573385419,
        "popular_words": [
          "love",
          "great",
          "bag"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.38040140662950095,
        "popular_words": [
          "love",
          "great",
          "bag"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.30536839062931037,
        "popular_words": [
          "sunglasses",
          "tory",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3771538264718663,
        "popular_words": [
          "love",
          "great",
          "sunglasses"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3369597372825924,
        "popular_words": [
          "love",
          "fit",
          "sunglasses"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.319473408,
        "popular_words": [
          "love",
          "good",
          "tory"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.302150414,
        "popular_words": [
          "love",
          "glasses",
          "sunglasses"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.18541667,
        "popular_words": [
          "buyer",
          "personally",
          "contacted"
        ]
      }
    ],
    "avg_sentiment_score": 0.3659080672215134,
    "total_reviews": 3384,
    "negative_reviews": 121,
    "neutral_reviews": 842,
    "positive_reviews": 2421,
    "positive_percent": 71.54255319148936,
    "neutral_percent": 24.88179669030733,
    "negative_percent": 3.57565011820331
  },
  {
    "brand": "pandora",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.4375039524796187,
        "popular_words": [
          "love",
          "pandora",
          "charm"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.31628318609955014,
        "popular_words": [
          "pandora",
          "charm",
          "bracelet"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.4082269750100944,
        "popular_words": [
          "pandora",
          "charm",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3665221956589526,
        "popular_words": [
          "pandora",
          "bracelet",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.39585185356198327,
        "popular_words": [
          "pandora",
          "bracelet",
          "charm"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.29320284244761907,
        "popular_words": [
          "pandora",
          "bracelet",
          "gift"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.3849422783333334,
        "popular_words": [
          "bead",
          "great",
          "pandora"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.06666667,
        "popular_words": [
          "bracelet",
          "ordered",
          "company"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2962962942857143,
        "popular_words": [
          "de",
          "pandora",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3879930631053048,
    "total_reviews": 9021,
    "negative_reviews": 436,
    "neutral_reviews": 2191,
    "positive_reviews": 6394,
    "positive_percent": 70.87905997117836,
    "neutral_percent": 24.28777297417138,
    "negative_percent": 4.833167054650261
  },
  {
    "brand": "sonos",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2018,
        "avg_sentiment_score": 0.3340742082216603,
        "popular_words": [
          "sonos",
          "sound",
          "speaker"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36983289374595646,
        "popular_words": [
          "sonos",
          "sound",
          "music"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.32841550038698714,
        "popular_words": [
          "sonos",
          "sound",
          "music"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2749726610902778,
        "popular_words": [
          "sonos",
          "music",
          "system"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.35747244089442803,
        "popular_words": [
          "sonos",
          "sound",
          "music"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2921580694499551,
        "popular_words": [
          "sonos",
          "music",
          "sound"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3406960076710906,
        "popular_words": [
          "sonos",
          "sound",
          "speakers"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2626775024950497,
        "popular_words": [
          "sonos",
          "music",
          "system"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2651158964826982,
        "popular_words": [
          "sonos",
          "music",
          "system"
        ]
      }
    ],
    "avg_sentiment_score": 0.33695657401312745,
    "total_reviews": 11586,
    "negative_reviews": 176,
    "neutral_reviews": 3205,
    "positive_reviews": 8205,
    "positive_percent": 70.81822889694459,
    "neutral_percent": 27.662696357673056,
    "negative_percent": 1.519074745382358
  },
  {
    "brand": "jbl",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.36231980762391713,
        "popular_words": [
          "sound",
          "great",
          "speaker"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3378333381044961,
        "popular_words": [
          "sound",
          "great",
          "speaker"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.27822519854372463,
        "popular_words": [
          "sound",
          "speaker",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2753200581034406,
        "popular_words": [
          "sound",
          "speakers",
          "jbl"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.24294633035493546,
        "popular_words": [
          "sound",
          "speakers",
          "jbl"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2612340411321617,
        "popular_words": [
          "sound",
          "speakers",
          "jbl"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3602789055374164,
        "popular_words": [
          "sound",
          "speaker",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3624214123030945,
        "popular_words": [
          "sound",
          "speaker",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.33948905918500394,
        "popular_words": [
          "sound",
          "speaker",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3463010719148362,
    "total_reviews": 47300,
    "negative_reviews": 911,
    "neutral_reviews": 12950,
    "positive_reviews": 33439,
    "positive_percent": 70.69556025369978,
    "neutral_percent": 27.378435517970402,
    "negative_percent": 1.9260042283298098
  },
  {
    "brand": "neutrogena",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.30627834570522355,
        "popular_words": [
          "skin",
          "product",
          "use"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.315070460009461,
        "popular_words": [
          "skin",
          "product",
          "face"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.30503492354110545,
        "popular_words": [
          "skin",
          "product",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3233484332830828,
        "popular_words": [
          "skin",
          "product",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3197279654493669,
        "popular_words": [
          "skin",
          "like",
          "product"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.16539947333999996,
        "popular_words": [
          "product",
          "skin",
          "scalp"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2449409783636364,
        "popular_words": [
          "skin",
          "product",
          "neutrogena"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.17376424177692304,
        "popular_words": [
          "product",
          "skin",
          "neutrogena"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.19289704245454542,
        "popular_words": [
          "like",
          "product",
          "good"
        ]
      }
    ],
    "avg_sentiment_score": 0.3107440666778463,
    "total_reviews": 5119,
    "negative_reviews": 127,
    "neutral_reviews": 1958,
    "positive_reviews": 3034,
    "positive_percent": 59.26938855245165,
    "neutral_percent": 38.24965813635476,
    "negative_percent": 2.480953311193592
  },
  {
    "brand": "estee lauder",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2018,
        "avg_sentiment_score": 0.3988775104117647,
        "popular_words": [
          "product",
          "love",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.355647081516129,
        "popular_words": [
          "love",
          "good",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2923989895555556,
        "popular_words": [
          "years",
          "use",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.33363300958333336,
        "popular_words": [
          "love",
          "product",
          "great"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.4582077425581395,
        "popular_words": [
          "product",
          "great",
          "use"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.30560665352941174,
        "popular_words": [
          "product",
          "great",
          "one"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.36061739275510213,
        "popular_words": [
          "product",
          "estee",
          "lauder"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.36863635714285714,
        "popular_words": [
          "product",
          "like",
          "estee"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.47303768,
        "popular_words": [
          "book",
          "great",
          "makeup"
        ]
      }
    ],
    "avg_sentiment_score": 0.3586791058397788,
    "total_reviews": 362,
    "negative_reviews": 14,
    "neutral_reviews": 98,
    "positive_reviews": 250,
    "positive_percent": 69.06077348066299,
    "neutral_percent": 27.071823204419886,
    "negative_percent": 3.867403314917127
  },
  {
    "brand": "fossil",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.4033629949612067,
        "popular_words": [
          "watch",
          "love",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.33976068036878615,
        "popular_words": [
          "watch",
          "great",
          "fossil"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.3160131794,
        "popular_words": [
          "watch",
          "little",
          "band"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.38990153090116286,
        "popular_words": [
          "watch",
          "fossil",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.44044298726639386,
        "popular_words": [
          "watch",
          "good",
          "great"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.3059266892884616,
        "popular_words": [
          "watch",
          "band",
          "like"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.4094082476434785,
        "popular_words": [
          "watch",
          "great",
          "love"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2858770046,
        "popular_words": [
          "watch",
          "great",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3779641820662252,
        "popular_words": [
          "watch",
          "great",
          "good"
        ]
      }
    ],
    "avg_sentiment_score": 0.39040022671457036,
    "total_reviews": 1304,
    "negative_reviews": 22,
    "neutral_reviews": 318,
    "positive_reviews": 964,
    "positive_percent": 73.92638036809815,
    "neutral_percent": 24.386503067484664,
    "negative_percent": 1.687116564417178
  },
  {
    "brand": "amazon",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2012,
        "avg_sentiment_score": 0.2642024399640175,
        "popular_words": [
          "kindle",
          "one",
          "books"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3265902569773949,
        "popular_words": [
          "kindle",
          "great",
          "love"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3296004227560752,
        "popular_words": [
          "kindle",
          "love",
          "fire"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.30790768365576215,
        "popular_words": [
          "kindle",
          "love",
          "fire"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.26516903114640167,
        "popular_words": [
          "kindle",
          "fire",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3380853782268796,
        "popular_words": [
          "love",
          "great",
          "kindle"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.23756677906560564,
        "popular_words": [
          "kindle",
          "books",
          "one"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3274416222025129,
        "popular_words": [
          "love",
          "great",
          "use"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2625521282908461,
        "popular_words": [
          "kindle",
          "books",
          "read"
        ]
      }
    ],
    "avg_sentiment_score": 0.3144044235124743,
    "total_reviews": 416886,
    "negative_reviews": 12166,
    "neutral_reviews": 137752,
    "positive_reviews": 266968,
    "positive_percent": 64.03861007565618,
    "neutral_percent": 33.043086119466714,
    "negative_percent": 2.918303804877113
  },
  {
    "brand": "timberland",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2013,
        "avg_sentiment_score": 0.3224874979718312,
        "popular_words": [
          "bag",
          "well",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3328708197771087,
        "popular_words": [
          "bag",
          "good",
          "luggage"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.32437065132846715,
        "popular_words": [
          "bag",
          "great",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.32993767626530623,
        "popular_words": [
          "bag",
          "good",
          "great"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.33960299096969715,
        "popular_words": [
          "great",
          "good",
          "warm"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.4234136293333333,
        "popular_words": [
          "great",
          "set",
          "two"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.25949619865,
        "popular_words": [
          "bag",
          "laptop",
          "good"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.34332186243749996,
        "popular_words": [
          "works",
          "good",
          "nice"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.3245314291666667,
        "popular_words": [
          "backpack",
          "laptop",
          "great"
        ]
      }
    ],
    "avg_sentiment_score": 0.3299190364965418,
    "total_reviews": 723,
    "negative_reviews": 25,
    "neutral_reviews": 216,
    "positive_reviews": 482,
    "positive_percent": 66.66666666666666,
    "neutral_percent": 29.87551867219917,
    "negative_percent": 3.4578146611341634
  },
  {
    "brand": "rolex",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2014,
        "avg_sentiment_score": 0.18658223646788993,
        "popular_words": [
          "watch",
          "time",
          "rolex"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.22615561673809526,
        "popular_words": [
          "watch",
          "rolex",
          "time"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.14158622500000004,
        "popular_words": [
          "watch",
          "rolex",
          "one"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.22040890972222224,
        "popular_words": [
          "watch",
          "rolex",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.45271249130434776,
        "popular_words": [
          "watch",
          "good",
          "great"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.17347392473684212,
        "popular_words": [
          "watch",
          "time",
          "rolex"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.2346108671814285,
        "popular_words": [
          "watch",
          "rolex",
          "time"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.19705454053333332,
        "popular_words": [
          "watch",
          "rolex",
          "time"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.26448506953125006,
        "popular_words": [
          "watch",
          "rolex",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.22278889528188808,
    "total_reviews": 609,
    "negative_reviews": 27,
    "neutral_reviews": 285,
    "positive_reviews": 297,
    "positive_percent": 48.76847290640394,
    "neutral_percent": 46.79802955665024,
    "negative_percent": 4.433497536945813
  },
  {
    "brand": "olay",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2010,
        "avg_sentiment_score": 0.20711919874999998,
        "popular_words": [
          "skin",
          "body",
          "use"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3519211815518374,
        "popular_words": [
          "skin",
          "product",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3668464012466666,
        "popular_words": [
          "love",
          "skin",
          "face"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.31842782797120617,
        "popular_words": [
          "product",
          "skin",
          "love"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3300168597715594,
        "popular_words": [
          "skin",
          "product",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.344588085308642,
        "popular_words": [
          "skin",
          "lotion",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2674738301428571,
        "popular_words": [
          "skin",
          "lotion",
          "body"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.20568960577777776,
        "popular_words": [
          "skin",
          "product",
          "body"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2815724319964286,
        "popular_words": [
          "lotion",
          "skin",
          "product"
        ]
      }
    ],
    "avg_sentiment_score": 0.3351630112184838,
    "total_reviews": 1807,
    "negative_reviews": 46,
    "neutral_reviews": 596,
    "positive_reviews": 1165,
    "positive_percent": 64.47149972329828,
    "neutral_percent": 32.98284449363586,
    "negative_percent": 2.545655783065855
  },
  {
    "brand": "chanel",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2013,
        "avg_sentiment_score": 0.19654280275000002,
        "popular_words": [
          "great",
          "would",
          "well"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.18775217425000007,
        "popular_words": [
          "like",
          "size",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.24738118878571438,
        "popular_words": [
          "chanel",
          "watch",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.4183533867741935,
        "popular_words": [
          "chanel",
          "love",
          "price"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.30627553921875,
        "popular_words": [
          "love",
          "chanel",
          "glasses"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.23985340454545456,
        "popular_words": [
          "love",
          "chanel",
          "case"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.18281314870000004,
        "popular_words": [
          "dvd",
          "one",
          "movie"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.20273999269333334,
        "popular_words": [
          "watch",
          "chanel",
          "product"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.4166666666666667,
        "popular_words": [
          "awesome",
          "small",
          "love"
        ]
      }
    ],
    "avg_sentiment_score": 0.25126597337809525,
    "total_reviews": 210,
    "negative_reviews": 20,
    "neutral_reviews": 72,
    "positive_reviews": 118,
    "positive_percent": 56.19047619047619,
    "neutral_percent": 34.285714285714285,
    "negative_percent": 9.523809523809524
  },
  {
    "brand": "mac",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2018,
        "avg_sentiment_score": 0.35133119330434787,
        "popular_words": [
          "works",
          "great",
          "knife"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3853167092499999,
        "popular_words": [
          "excellent",
          "knife",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.17518453964285713,
        "popular_words": [
          "mac",
          "palette",
          "one"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.27014550200000004,
        "popular_words": [
          "great",
          "mac",
          "palette"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.38055555750000003,
        "popular_words": [
          "good",
          "2",
          "received"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.246046902,
        "popular_words": [
          "heads",
          "one",
          "get"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.39027778,
        "popular_words": [
          "15",
          "mac",
          "year"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.2803174566666667,
        "popular_words": [
          "boards",
          "back",
          "product"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3891801023703704,
        "popular_words": [
          "good",
          "great",
          "works"
        ]
      }
    ],
    "avg_sentiment_score": 0.32856842369924805,
    "total_reviews": 133,
    "negative_reviews": 3,
    "neutral_reviews": 42,
    "positive_reviews": 88,
    "positive_percent": 66.16541353383458,
    "neutral_percent": 31.57894736842105,
    "negative_percent": 2.2556390977443606
  },
  {
    "brand": "revlon",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.3332367595084748,
        "popular_words": [
          "foundation",
          "great",
          "skin"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.1789693126875,
        "popular_words": [
          "color",
          "foundation",
          "product"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.23495882,
        "popular_words": [
          "pot",
          "use",
          "lid"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.21579100599999998,
        "popular_words": [
          "first",
          "foundation",
          "noticed"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.26867538481481484,
        "popular_words": [
          "one",
          "love",
          "skin"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3200492614164949,
        "popular_words": [
          "foundation",
          "skin",
          "good"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.31630036208572526,
        "popular_words": [
          "skin",
          "foundation",
          "product"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.20464586357529418,
        "popular_words": [
          "hair",
          "dryer",
          "one"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.27363194801367524,
        "popular_words": [
          "skin",
          "foundation",
          "like"
        ]
      }
    ],
    "avg_sentiment_score": 0.29372375079845314,
    "total_reviews": 821,
    "negative_reviews": 26,
    "neutral_reviews": 294,
    "positive_reviews": 501,
    "positive_percent": 61.0231425091352,
    "neutral_percent": 35.80998781973204,
    "negative_percent": 3.1668696711327646
  },
  {
    "brand": "roku",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2011,
        "avg_sentiment_score": 0.2021008116288977,
        "popular_words": [
          "roku",
          "tv",
          "netflix"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.28762006261925843,
        "popular_words": [
          "roku",
          "tv",
          "remote"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.30344519716199386,
        "popular_words": [
          "roku",
          "tv",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.30350603141202503,
        "popular_words": [
          "roku",
          "tv",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.3108622177395846,
        "popular_words": [
          "roku",
          "tv",
          "remote"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.29459077434425224,
        "popular_words": [
          "roku",
          "tv",
          "great"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2517581510164274,
        "popular_words": [
          "roku",
          "tv",
          "netflix"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23340642723325222,
        "popular_words": [
          "roku",
          "tv",
          "netflix"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.23962342709152323,
        "popular_words": [
          "roku",
          "netflix",
          "tv"
        ]
      }
    ],
    "avg_sentiment_score": 0.29101840992632416,
    "total_reviews": 51653,
    "negative_reviews": 1357,
    "neutral_reviews": 19840,
    "positive_reviews": 30456,
    "positive_percent": 58.962693357597814,
    "neutral_percent": 38.410160106866975,
    "negative_percent": 2.627146535535206
  },
  {
    "brand": "google",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.23946184524166667,
        "popular_words": [
          "tablet",
          "nexus",
          "google"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.2839157722653226,
        "popular_words": [
          "phone",
          "nexus",
          "case"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.27035038011350127,
        "popular_words": [
          "phone",
          "nexus",
          "charger"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.26944731685017426,
        "popular_words": [
          "one",
          "google",
          "laptop"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.14520109642487813,
        "popular_words": [
          "phone",
          "charger",
          "nexus"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.22316262786666669,
        "popular_words": [
          "phone",
          "one",
          "google"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.15180283626829263,
        "popular_words": [
          "phone",
          "warranty",
          "htc"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2541447884462366,
        "popular_words": [
          "phone",
          "one",
          "nexus"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.19041110075342463,
        "popular_words": [
          "google",
          "tablet",
          "charger"
        ]
      }
    ],
    "avg_sentiment_score": 0.2527161864987559,
    "total_reviews": 2814,
    "negative_reviews": 110,
    "neutral_reviews": 1231,
    "positive_reviews": 1473,
    "positive_percent": 52.345415778251606,
    "neutral_percent": 43.74555792466241,
    "negative_percent": 3.9090262970859984
  },
  {
    "brand": "louis vuitton",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.13844806310884356,
        "popular_words": [
          "fake",
          "bag",
          "authentic"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.20753179162500002,
        "popular_words": [
          "one",
          "bag",
          "lv"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.23302931320000006,
        "popular_words": [
          "ipad",
          "cover",
          "case"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.24000000000000005,
        "popular_words": [
          "product",
          "lv",
          "zipper"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.39102564269230766,
        "popular_words": [
          "bag",
          "excellent",
          "item"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2772338603999999,
        "popular_words": [
          "case",
          "ipad",
          "product"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.10530388368421054,
        "popular_words": [
          "louis",
          "vuitton",
          "authentic"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.25138888,
        "popular_words": [
          "bought",
          "louis",
          "vuitton"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.31000000000000005,
        "popular_words": [
          "cd",
          "money",
          "2"
        ]
      }
    ],
    "avg_sentiment_score": 0.19055707013157908,
    "total_reviews": 304,
    "negative_reviews": 44,
    "neutral_reviews": 110,
    "positive_reviews": 150,
    "positive_percent": 49.34210526315789,
    "neutral_percent": 36.18421052631579,
    "negative_percent": 14.473684210526317
  },
  {
    "brand": "fitbit",
    "category": "Electronics Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.2701237850342524,
        "popular_words": [
          "fitbit",
          "one",
          "scale"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.23429034374398366,
        "popular_words": [
          "fitbit",
          "scale",
          "one"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.2193606971953058,
        "popular_words": [
          "fitbit",
          "one",
          "watch"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.2586713379882825,
        "popular_words": [
          "fitbit",
          "one",
          "love"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.20898389040510967,
        "popular_words": [
          "fitbit",
          "watch",
          "one"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.24101386239918793,
        "popular_words": [
          "fitbit",
          "one",
          "love"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.24406601918934925,
        "popular_words": [
          "fitbit",
          "one",
          "day"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.21460725613467185,
        "popular_words": [
          "fitbit",
          "scale",
          "one"
        ]
      }
    ],
    "avg_sentiment_score": 0.2414134772221919,
    "total_reviews": 25783,
    "negative_reviews": 1114,
    "neutral_reviews": 11166,
    "positive_reviews": 13503,
    "positive_percent": 52.37171779854943,
    "neutral_percent": 43.30760578675872,
    "negative_percent": 4.320676414691851
  },
  {
    "brand": "levi's",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.281323196787234,
        "popular_words": [
          "bag",
          "like",
          "great"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3953250924166667,
        "popular_words": [
          "bag",
          "laptop",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.32874529512500006,
        "popular_words": [
          "bag",
          "good",
          "laptop"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.4527940175,
        "popular_words": [
          "bag",
          "one",
          "made"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23335273266666665,
        "popular_words": [
          "laptop",
          "backpack",
          "padded"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.44,
        "popular_words": [
          "100",
          "worth",
          "money"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": -0.06666667,
        "popular_words": [
          "bag",
          "years",
          "year"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": -0.04849537125,
        "popular_words": [
          "use",
          "style",
          "bag"
        ]
      }
    ],
    "avg_sentiment_score": 0.3093369332966101,
    "total_reviews": 118,
    "negative_reviews": 6,
    "neutral_reviews": 33,
    "positive_reviews": 79,
    "positive_percent": 66.94915254237289,
    "neutral_percent": 27.966101694915253,
    "negative_percent": 5.084745762711865
  },
  {
    "brand": "nars",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2016,
        "avg_sentiment_score": 0.41430407808681624,
        "popular_words": [
          "color",
          "blush",
          "love"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.40241693855454497,
        "popular_words": [
          "color",
          "blush",
          "love"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.2946353613417721,
        "popular_words": [
          "blush",
          "color",
          "skin"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.29656784487500004,
        "popular_words": [
          "color",
          "blush",
          "skin"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.31030291836496365,
        "popular_words": [
          "blush",
          "color",
          "skin"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.4781607378181818,
        "popular_words": [
          "color",
          "blush",
          "product"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.3485782445189873,
        "popular_words": [
          "color",
          "blush",
          "love"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3351429059515722,
        "popular_words": [
          "blush",
          "color",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.2718815557685952,
        "popular_words": [
          "blush",
          "skin",
          "color"
        ]
      }
    ],
    "avg_sentiment_score": 0.35803011677700675,
    "total_reviews": 1670,
    "negative_reviews": 21,
    "neutral_reviews": 436,
    "positive_reviews": 1213,
    "positive_percent": 72.63473053892216,
    "neutral_percent": 26.107784431137727,
    "negative_percent": 1.2574850299401197
  },
  {
    "brand": "kate spade",
    "category": "Clothing Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.3582245896538462,
        "popular_words": [
          "case",
          "great",
          "like"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.2442031160289855,
        "popular_words": [
          "case",
          "phone",
          "love"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.23443106509999997,
        "popular_words": [
          "case",
          "love",
          "kate"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": -0.08779761900000001,
        "popular_words": [
          "kate",
          "spade",
          "product"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.40174522274999996,
        "popular_words": [
          "case",
          "phone",
          "kate"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.25947005097619047,
        "popular_words": [
          "case",
          "love",
          "phone"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.38333333,
        "popular_words": [
          "good",
          "case",
          "made"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.2901913238421053,
        "popular_words": [
          "case",
          "phone",
          "love"
        ]
      }
    ],
    "avg_sentiment_score": 0.2789271129648242,
    "total_reviews": 199,
    "negative_reviews": 9,
    "neutral_reviews": 72,
    "positive_reviews": 118,
    "positive_percent": 59.2964824120603,
    "neutral_percent": 36.18090452261307,
    "negative_percent": 4.522613065326634
  },
  {
    "brand": "l'oreal",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2015,
        "avg_sentiment_score": 0.22194444333333338,
        "popular_words": [
          "day",
          "eyeliner",
          "goes"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.44265265578947366,
        "popular_words": [
          "pads",
          "product",
          "face"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.34547253,
        "popular_words": [
          "self",
          "use",
          "apply"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.275,
        "popular_words": [
          "need",
          "use",
          "less"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.41000000000000003,
        "popular_words": [
          "got",
          "legs",
          "tanning"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.016666664999999997,
        "popular_words": [
          "product",
          "999",
          "item"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.32647727345454547,
        "popular_words": [
          "great",
          "product",
          "lip"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": -0.058333332499999994,
        "popular_words": [
          "lips",
          "product",
          "hurting"
        ]
      }
    ],
    "avg_sentiment_score": 0.30547084525490203,
    "total_reviews": 51,
    "negative_reviews": 3,
    "neutral_reviews": 15,
    "positive_reviews": 33,
    "positive_percent": 64.70588235294117,
    "neutral_percent": 29.411764705882355,
    "negative_percent": 5.88235294117647
  },
  {
    "brand": "maybelline",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2017,
        "avg_sentiment_score": 0.41712121181818185,
        "popular_words": [
          "love",
          "color",
          "day"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.410029719047619,
        "popular_words": [
          "love",
          "product",
          "color"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.5,
        "popular_words": [
          "ive",
          "used",
          "product"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.2708333333333333,
        "popular_words": [
          "years",
          "place",
          "find"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.403125,
        "popular_words": [
          "little",
          "darker",
          "picture"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.150892855,
        "popular_words": [
          "lashes",
          "disapointment",
          "hoping"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.24128968,
        "popular_words": [
          "lashes",
          "really",
          "good"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.6666667,
        "popular_words": [
          "great",
          "makeup",
          "offers"
        ]
      }
    ],
    "avg_sentiment_score": 0.3822008521739132,
    "total_reviews": 46,
    "negative_reviews": 0,
    "neutral_reviews": 14,
    "positive_reviews": 32,
    "positive_percent": 69.56521739130434,
    "neutral_percent": 30.434782608695656,
    "negative_percent": 0.0
  },
  {
    "brand": "clinique",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2011,
        "avg_sentiment_score": 0.07338420080000001,
        "popular_words": [
          "product",
          "dark",
          "spot"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.30251340148765427,
        "popular_words": [
          "product",
          "skin",
          "use"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.22187352392086335,
        "popular_words": [
          "product",
          "skin",
          "great"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.353789212548515,
        "popular_words": [
          "product",
          "good",
          "great"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.39791419884210516,
        "popular_words": [
          "product",
          "spots",
          "excellent"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.24331871294736845,
        "popular_words": [
          "product",
          "skin",
          "using"
        ]
      },
      {
        "year": 2012,
        "avg_sentiment_score": 0.16243253187499998,
        "popular_words": [
          "product",
          "skin",
          "con"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3195866353076923,
        "popular_words": [
          "product",
          "skin",
          "face"
        ]
      },
      {
        "year": 2010,
        "avg_sentiment_score": 0.279027778,
        "popular_words": [
          "cream",
          "clinique",
          "product"
        ]
      }
    ],
    "avg_sentiment_score": 0.2990575273700497,
    "total_reviews": 601,
    "negative_reviews": 22,
    "neutral_reviews": 257,
    "positive_reviews": 322,
    "positive_percent": 53.57737104825291,
    "neutral_percent": 42.76206322795341,
    "negative_percent": 3.6605657237936775
  },
  {
    "brand": "too faced",
    "category": "Beauty Brands",
    "trend": [
      {
        "year": 2012,
        "avg_sentiment_score": 0.27590199125,
        "popular_words": [
          "colors",
          "love",
          "palette"
        ]
      },
      {
        "year": 2016,
        "avg_sentiment_score": 0.3939964079032258,
        "popular_words": [
          "great",
          "love",
          "colors"
        ]
      },
      {
        "year": 2015,
        "avg_sentiment_score": 0.34787344557352945,
        "popular_words": [
          "colors",
          "love",
          "palette"
        ]
      },
      {
        "year": 2014,
        "avg_sentiment_score": 0.3197524312291667,
        "popular_words": [
          "colors",
          "product",
          "love"
        ]
      },
      {
        "year": 2013,
        "avg_sentiment_score": 0.31525843083396227,
        "popular_words": [
          "colors",
          "love",
          "use"
        ]
      },
      {
        "year": 2017,
        "avg_sentiment_score": 0.29253477019047625,
        "popular_words": [
          "really",
          "great",
          "mascara"
        ]
      },
      {
        "year": 2018,
        "avg_sentiment_score": 0.3508035714285714,
        "popular_words": [
          "stuff",
          "love",
          "lips"
        ]
      },
      {
        "year": 2011,
        "avg_sentiment_score": 0.4673611,
        "popular_words": [
          "love",
          "wear",
          "colours"
        ]
      }
    ],
    "avg_sentiment_score": 0.3378779308287717,
    "total_reviews": 285,
    "negative_reviews": 7,
    "neutral_reviews": 67,
    "positive_reviews": 211,
    "positive_percent": 74.03508771929825,
    "neutral_percent": 23.50877192982456,
    "negative_percent": 2.456140350877193
  }
]

function App() {

  const [jsonData, setJsonData] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("")
  const [brandDetail, setBrandDetail] = useState({})
  const [selectedComparisonBrand, setSelectedComparisonBrand] = useState("")
  const [brandComparisonDetail, setBrandComparisonDetail] = useState({})
  const [category, setCategory] = useState("")

  useEffect(() => {
    
    setJsonData(JSON_DATA);
  }, []);

  useEffect(() => {
    const brands = jsonData.map((item) => item.brand);
    setBrandList(brands);
  }, [jsonData])

  function searchBrand(brand) {
    if ((brand != null) && (brand != "")) {
      setSelectedBrand(brand)
      const brandFound = jsonData.find((item) => item.brand === brand);
      setBrandDetail(brandFound)
      setCategory("")
    }
  }

  function searchComparisonBrand(brand) {
    if ((brand != null) && (brand != "")) {
      setSelectedComparisonBrand(brand)
      const brandFound = jsonData.find((item) => item.brand === brand);
      setBrandComparisonDetail(brandFound)
      setCategory("")
    }
  }

  function categoryChanged(data) {
    setCategory(data)
    setSelectedBrand("")
    setBrandDetail({})
    setSelectedComparisonBrand("")
    setBrandComparisonDetail({})
  }

  return (
    <div className="app"> 
      <Card style={{padding: "1rem", backgroundColor: "cornsilk"}}>
        <div className="header">
          <div style={{display: "flex"}}>
            <SearchBar 
              brandList={brandList} 
              searchBrand={searchBrand} 
              selectedBrand={selectedBrand}/>
            {selectedBrand &&
            <img style={{width: "1.5rem", margin: "0 1rem"}} src={myImage} alt="My Image"></img>}
            {selectedBrand &&
              <SearchBar 
                brandList={brandList} 
                searchBrand={searchComparisonBrand} 
                selectedBrand={selectedComparisonBrand}/>
            }
          </div>
          <BrandName name={brandDetail.brand} nameTwo={brandComparisonDetail.brand}/>
          <Category category={category} categoryChanged={categoryChanged}/>
        </div>
      </Card>
      <div className="content">
        {(!selectedComparisonBrand && !selectedBrand && !category) &&
          <div class="empty-logo">
            <img style={{width: "30%"}} src={myImage2} alt="My Image"></img>
          </div>
        }
        {(selectedComparisonBrand && selectedBrand) &&
          <ComparisonView brandDetail={brandDetail} brandComparisonDetail={brandComparisonDetail} />
        }
        {category &&
          <Ranking category={category} jsonData={jsonData}/>
        }
        {(selectedBrand && !selectedComparisonBrand) &&
          <BrandView brandDetail={brandDetail}/>
        }
      </div>
    </div>
  );
}

export default App;
